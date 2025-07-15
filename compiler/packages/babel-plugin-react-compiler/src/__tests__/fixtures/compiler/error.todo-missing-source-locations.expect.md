
## Input

```javascript
// @validateSourceLocations
import {useEffect} from 'react';

function Component({prop1, prop2}) {
  const x = prop1 + prop2;
  const y = x * 2;
  const arr = [x, y];
  const [a, b] = arr;

  useEffect(() => {
    if (a > 10) {
      console.log(a);
    }
  }, [a]);

  return y;
}

```


## Error

```
Todo: AST node is missing source location. Node at path "ast.id" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.params[0]" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body" (type: BlockStatement) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[0]" (type: VariableDeclaration) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[0].declarations[0]" (type: VariableDeclarator) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[0].declarations[0].id" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[0].declarations[0].init" (type: CallExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[0].declarations[0].init.callee" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[0].declarations[0].init.arguments[0]" (type: NumericLiteral) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[1].declarations[0]" (type: VariableDeclarator) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[1].declarations[0].id" (type: ObjectPattern) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[1].declarations[0].id.properties[0]" (type: ObjectProperty) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[1].declarations[0].id.properties[0].key" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[1].declarations[0].id.properties[0].value" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[1].declarations[0].id.properties[1]" (type: ObjectProperty) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[1].declarations[0].id.properties[1].key" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[1].declarations[0].id.properties[1].value" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[2].declarations[0]" (type: VariableDeclarator) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[2].declarations[0].id" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[3].declarations[0]" (type: VariableDeclarator) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[3].declarations[0].id" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[3].declarations[0].init.right" (type: NumericLiteral) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[4]" (type: VariableDeclaration) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[4].declarations[0]" (type: VariableDeclarator) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[4].declarations[0].id" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5]" (type: IfStatement) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].test" (type: LogicalExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].test.left" (type: BinaryExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].test.left.left" (type: MemberExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].test.left.left.object" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].test.left.left.property" (type: NumericLiteral) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].test.left.right" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].test.right" (type: BinaryExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].test.right.left" (type: MemberExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].test.right.left.object" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].test.right.left.property" (type: NumericLiteral) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].test.right.right" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].consequent" (type: BlockStatement) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].consequent.body[0].expression" (type: AssignmentExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].consequent.body[0].expression.left" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].consequent.body[0].expression.right" (type: ArrayExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].consequent.body[1]" (type: ExpressionStatement) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].consequent.body[1].expression" (type: AssignmentExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].consequent.body[1].expression.left" (type: MemberExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].consequent.body[1].expression.left.object" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].consequent.body[1].expression.left.property" (type: NumericLiteral) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].consequent.body[1].expression.right" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].consequent.body[2]" (type: ExpressionStatement) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].consequent.body[2].expression" (type: AssignmentExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].consequent.body[2].expression.left" (type: MemberExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].consequent.body[2].expression.left.object" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].consequent.body[2].expression.left.property" (type: NumericLiteral) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].consequent.body[2].expression.right" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].consequent.body[3]" (type: ExpressionStatement) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].consequent.body[3].expression" (type: AssignmentExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].consequent.body[3].expression.left" (type: MemberExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].consequent.body[3].expression.left.object" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].consequent.body[3].expression.left.property" (type: NumericLiteral) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].consequent.body[3].expression.right" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].alternate" (type: BlockStatement) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].alternate.body[0]" (type: ExpressionStatement) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].alternate.body[0].expression" (type: AssignmentExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].alternate.body[0].expression.left" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].alternate.body[0].expression.right" (type: MemberExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].alternate.body[0].expression.right.object" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[5].alternate.body[0].expression.right.property" (type: NumericLiteral) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[6].declarations[0]" (type: VariableDeclarator) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[6].declarations[0].id" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[7].declarations[0]" (type: VariableDeclarator) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[7].declarations[0].id" (type: ArrayPattern) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[7].declarations[0].id.elements[0]" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[8]" (type: VariableDeclaration) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[8].declarations[0]" (type: VariableDeclarator) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[8].declarations[0].id" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[9]" (type: VariableDeclaration) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[9].declarations[0]" (type: VariableDeclarator) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[9].declarations[0].id" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10]" (type: IfStatement) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].test" (type: BinaryExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].test.left" (type: MemberExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].test.left.object" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].test.left.property" (type: NumericLiteral) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].test.right" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent" (type: BlockStatement) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[0].expression" (type: AssignmentExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[0].expression.left" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[0].expression.right" (type: ArrowFunctionExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[0].expression.right.body" (type: BlockStatement) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[0].expression.right.body.body[0]" (type: IfStatement) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[0].expression.right.body.body[0].test.right" (type: NumericLiteral) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[0].expression.right.body.body[0].consequent" (type: BlockStatement) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[0].expression.right.body.body[0].consequent.body[0]" (type: ExpressionStatement) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[0].expression.right.body.body[0].consequent.body[0].expression.callee" (type: MemberExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[0].expression.right.body.body[0].consequent.body[0].expression.callee.object" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[0].expression.right.body.body[0].consequent.body[0].expression.callee.property" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[1].expression" (type: AssignmentExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[1].expression.left" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[1].expression.right" (type: ArrayExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[2]" (type: ExpressionStatement) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[2].expression" (type: AssignmentExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[2].expression.left" (type: MemberExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[2].expression.left.object" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[2].expression.left.property" (type: NumericLiteral) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[2].expression.right" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[3]" (type: ExpressionStatement) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[3].expression" (type: AssignmentExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[3].expression.left" (type: MemberExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[3].expression.left.object" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[3].expression.left.property" (type: NumericLiteral) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[3].expression.right" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[4]" (type: ExpressionStatement) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[4].expression" (type: AssignmentExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[4].expression.left" (type: MemberExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[4].expression.left.object" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[4].expression.left.property" (type: NumericLiteral) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].consequent.body[4].expression.right" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].alternate" (type: BlockStatement) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].alternate.body[0]" (type: ExpressionStatement) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].alternate.body[0].expression" (type: AssignmentExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].alternate.body[0].expression.left" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].alternate.body[0].expression.right" (type: MemberExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].alternate.body[0].expression.right.object" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].alternate.body[0].expression.right.property" (type: NumericLiteral) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].alternate.body[1]" (type: ExpressionStatement) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].alternate.body[1].expression" (type: AssignmentExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].alternate.body[1].expression.left" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].alternate.body[1].expression.right" (type: MemberExpression) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].alternate.body[1].expression.right.object" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[10].alternate.body[1].expression.right.property" (type: NumericLiteral) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[11]" (type: ExpressionStatement) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[11].expression.callee" (type: Identifier) is missing a location. This can cause issues with source maps and coverage tools.

Todo: AST node is missing source location. Node at path "ast.body.body[12]" (type: ReturnStatement) is missing a location. This can cause issues with source maps and coverage tools.
```
          
      