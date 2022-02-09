const Category = (props) => {
  const { category } = props;
  return (
    <div className="category" key={category}>
      <h2>Category :{category}</h2>
    </div>
  );
};

export default Category;
