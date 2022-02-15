const Score = (props) => {
  const { question } = props;
  return (
    <div className="score" key={question.id}>
      <h2 style={{ color: "yellow", marginRight: "15px" }}>Score:</h2>
      <h2 style={{ color: "white" }}>{question.value}</h2>
    </div>
  );
};

export default Score;
