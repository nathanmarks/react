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
