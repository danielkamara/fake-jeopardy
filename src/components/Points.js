{
  /* This component is for the points given in a specific question. */
}
const Points = (props) => {
  const { question } = props;
  return (
    <div className="points" key={question.id}>
      <h2>Points: {question.value}</h2>
    </div>
  );
};

export default Points;
