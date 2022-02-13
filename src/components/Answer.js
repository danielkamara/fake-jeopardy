const Answer = (props) => {
  const { question } = props;
  return (
    <div className="answer" key={question.id}>
      <h2>Question: {question.answer}</h2>
    </div>
  );
};

export default Answer;
