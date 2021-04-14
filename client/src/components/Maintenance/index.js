import "./maintenance.css";
import hello from "../../images/hello.svg";

{/* just a copy of main dashboard landing for now */}

const Maintenance = () => {
  return (
    <main>
      <div className="main__container">

        <div className="main__title">
          <div className="main__greeting">
            {/* <h1>Maintenance Request</h1>
            <p>Maintenance page testing</p> */}
            {/* Todo Later: Switch Accounts */}
            <iframe className="google-form" src="https://docs.google.com/forms/d/e/1FAIpQLSerCrjsGJSErAl2g3WfUtA-U_e3zt-zv6V4MbzsDlWNJx88-g/viewform?embedded=true">Google Forms</iframe>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Maintenance;