type ChildComponentProps = {
  data: string;
};

const ChildComponent = ({ data }: ChildComponentProps) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>{data}</p>
    </div>
  );
};

export default ChildComponent;
