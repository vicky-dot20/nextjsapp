import { useState } from 'react';
import ChildComponent from '../components/childcomponent';

const ParentComponent = () => {
  const [data, setData] = useState('Hello from Parent');

  return (
    <div>
      <h1>Pat</h1>
      <ChildComponent data={data} />
    </div>
  );
};

export default ParentComponent;
