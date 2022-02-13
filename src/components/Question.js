const Question = (props) => {
  const { question } = props;
  return (
    <div className="question" key={question.id}>
      <h2>Answer: {question.question}</h2>
    </div>
  );
};

export default Question;
