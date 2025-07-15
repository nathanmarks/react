/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as t from '@babel/types';
import {CompilerError, ErrorSeverity} from '..';
import {CodegenFunction} from '../ReactiveScopes';
import {Result} from '../Utils/Result';

/**
 * Validates that all AST nodes have proper source locations.
 * This is useful for debugging issues with source maps and Istanbul coverage.
 */
export function validateSourceLocations(
  ast: CodegenFunction,
): Result<void, CompilerError> {
  const errors = new CompilerError();
  const missingLocations: Array<{node: t.Node; path: string}> = [];

  function checkNode(node: t.Node, path: string): void {
    if (node.loc == null) {
      missingLocations.push({node, path});
    }

    // Recursively check all child nodes
    for (const [key, value] of Object.entries(node)) {
      if (value && typeof value === 'object') {
        if (Array.isArray(value)) {
          // Handle arrays of nodes
          for (let i = 0; i < value.length; i++) {
            const item = value[i];
            if (item && typeof item === 'object' && 'type' in item) {
              checkNode(item as t.Node, `${path}.${key}[${i}]`);
            }
          }
        } else if ('type' in value) {
          // Handle single node
          checkNode(value as t.Node, `${path}.${key}`);
        }
      }
    }
  }

  // Check the main function's AST components
  if (ast.id) {
    checkNode(ast.id, 'ast.id');
  }

  // Check parameters
  for (let i = 0; i < ast.params.length; i++) {
    checkNode(ast.params[i], `ast.params[${i}]`);
  }

  // Check body
  checkNode(ast.body, 'ast.body');

  // Check outlined functions
  for (let i = 0; i < ast.outlined.length; i++) {
    const outlined = ast.outlined[i];
    if (outlined.fn.id) {
      checkNode(outlined.fn.id, `ast.outlined[${i}].fn.id`);
    }
    for (let j = 0; j < outlined.fn.params.length; j++) {
      checkNode(outlined.fn.params[j], `ast.outlined[${i}].fn.params[${j}]`);
    }
    checkNode(outlined.fn.body, `ast.outlined[${i}].fn.body`);
  }

  // Report errors for missing locations
  for (const {node, path} of missingLocations) {
    errors.push({
      severity: ErrorSeverity.Todo,
      reason: 'AST node is missing source location',
      description: `Node at path "${path}" (type: ${node.type}) is missing a location. This can cause issues with source maps and coverage tools.`,
      loc: null,
      suggestions: null,
    });
  }

  return errors.asResult();
}
