import "./main.css";
import hello from "../../images/hello.svg";

function Main(props) {
  return (
    <main>
      <div className="main__container">

        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello *NAME HERE*</h1>
            <p>*Display house # here*</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;