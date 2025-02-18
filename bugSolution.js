The solution involves removing the conditional check from within the `setCount` call. This ensures the state is updated properly regardless of the current count value. We can handle the scenario where the counter needs to not go below zero with a simple `Math.max` to keep it from going negative. 

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => Math.max(0, prevCount -1));
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
```