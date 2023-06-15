import useCounter from '../hooks/use-counter';

import Card from './Card';

const ForwardCounter = () => {
  // if it (useCounter) was a normal function it would have been executed on every re-evaluation of the component, causing infinite loop as we are updating state inside it. infact react wont allow to use hooks inside regular functions // we can only use hooks inside other custom hooks and components.
  const counter = useCounter(true);
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
