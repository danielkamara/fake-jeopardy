const Score = (props) => {
  const { question } = props;
  return (
    <div className="answer" key={question.id}>
      <h2 style={{ color: "yellow" }}>Score:</h2>
      <h2 style={{ color: "white" }}>{question.value}</h2>
    </div>
  );
};

export default Score;
