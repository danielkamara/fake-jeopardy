const Question = (props) => {
  const { question } = props;
  return (
    <div className="question" key={question}>
      <h2>Question: {question.question}</h2>
    </div>
  );
};

export default Question;
