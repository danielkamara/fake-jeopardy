const Score = (props) => {
  const { question } = props;
  return (
    <div className="answer" key={question.id}>
      <h2>Score: {question.value}</h2>
    </div>
  );
};

export default Score;
