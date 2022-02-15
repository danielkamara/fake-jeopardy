const Question = (props) => {
  const { question } = props;
  return (
    <div className="question" key={question.id}>
      <h2>Question: {question.answer}</h2>
    </div>
  );
};

export default Question;
