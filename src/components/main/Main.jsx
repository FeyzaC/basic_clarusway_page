import "./Main.css";

const Main = (props) => {
  const { img, title, desc } = props;

  return (
    <div className="main">
      <div className="card">
        <h4>{title}</h4>
        <img className="cardImg" src={img} alt="cardImg" />
        <p>{desc}</p>
        <button className="btn">More Detail</button>
      </div>
    </div>
  );
};

export default Main;
