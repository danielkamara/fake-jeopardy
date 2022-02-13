const Points = (props) => {
  const { question } = props;
  return (
    <div className="points" key={question.id}>
      <h2>Score: {question.value}</h2>
    </div>
  );
};

export default Points;
