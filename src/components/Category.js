const Category = (props) => {
  const { question } = props;
  return (
    <div className="category" key={question.id}>
      <h2 style={{ color: "yellow", marginRight: "15px" }}>Category:</h2>
      <h2 style={{ color: "white" }}>{question.category.title}</h2>
    </div>
  );
};

export default Category;
