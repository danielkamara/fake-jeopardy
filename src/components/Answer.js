const Answer = (props) => {
  const { question } = props;
  return (
    <div className="answer" key={question.id}>
      <h2 style={{ color: "yellow", marginRight: "15px" }}>Answer:</h2>
      <h2 style={{ color: "white" }}>{question.question}</h2>
    </div>
  );
};

export default Answer;
