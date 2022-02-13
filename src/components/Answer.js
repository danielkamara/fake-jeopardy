const Answer = (props) => {
  const { question } = props;
  return (
    <div className="answer" key={question.id}>
      <h2>Answer: {question.answer}</h2>
    </div>
  );
};

export default Answer;
