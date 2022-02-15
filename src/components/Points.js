{
  /* This component is for the points given in a specific question. */
}
const Points = (props) => {
  const { question } = props;
  return (
    <div className="points" key={question.id}>
      <h2 style={{ color: "yellow", marginRight: "15px" }}>Points:</h2>
      <h2 style={{ color: "white" }}>{question.value}</h2>
    </div>
  );
};

export default Points;
