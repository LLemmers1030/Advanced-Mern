import "./contact.css";
import hello from "../../images/hello.svg";

{/* just a copy of main dashboard landing for now */}

const Contact = () => {
  return (
    <main>
      <div className="main__container">

        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Contact Us!</h1>
            <p>Contact page testing</p>
            <h1>Email</h1>
            <p>tsaikevin94@yahoo.com</p>
            <h1>Phone</h1>
            <p>352-390-7495</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;