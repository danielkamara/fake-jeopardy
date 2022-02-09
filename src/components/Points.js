const Points = (props) => {
  const { points } = props;
  return (
    <div className="points" key={points}>
      <h2>Score:{points}</h2>
    </div>
  );
};

export default Points;
