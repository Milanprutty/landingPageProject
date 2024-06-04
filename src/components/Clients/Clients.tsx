import "./Clients.css";
import { logoData } from "./LogoData";

const Clients = () => {
  return (
    <div className="clientTopContainer">
      <div>Our Clients</div>
      <div>We have been working with some Fortune 500+ clients</div>

      <div className="slider">
        <div className="slide-track ">
          {logoData.map((data, i) => {
            return (
              <div className="slide" key={i}>
                <img src={data.img} />
              </div>
            );
          })}
          {logoData.map((data, i) => {
            return (
              <div className="slide" key={i}>
                <img src={data.img} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Clients;
