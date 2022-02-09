const Answer = (props) => {
  const { answer } = props;
  return (
    <div className="answer" key={answer}>
      <h2>Answer{answer}</h2>
    </div>
  );
};

export default Answer;
