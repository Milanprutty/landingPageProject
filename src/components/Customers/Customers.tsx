import tesla from "../../assets/tesla.png";
import "./Customers.css";
import img1 from "../../assets/logo1.svg";
import img2 from "../../assets/logo2.svg";
import img3 from "../../assets/logo3.svg";
import img4 from "../../assets/logo4.svg";
import img5 from "../../assets/logo5.svg";
import img6 from "../../assets/logo6.svg";
import Button from "../ReusableButton/Button";
import greenRightArrow from "../../assets/greenRightArrow.svg";

const Customers = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="customers">
      <div className="teslaImg">
        <img src={tesla} />
      </div>
      <div className="customerRightSide">
        <div>
          “We have enjoyed working with the JustGo system to setup and go live
          with our new membership platform. The initial effort to organise it
          along the lines of how our sport currently works was quick and
          relatively easy. The new system has already massively improved the
          time and effort it takes to setup and process member and club
          applications. It will help us to communicate with people in our sport
          in a much more effective way, and collect data to help us improve how
          our sport is governed.”
        </div>
        <div>Tim Smith</div>
        <div>British Dragon Boat Racing Association</div>
        <div className="customerImages">
          {images.map((img, i) => {
            return <img src={img} key={i} />;
          })}

          <Button
            style={{ backgroundColor: "#f5f7fa", color: "#4CAF4F" }}
            variant="tertiary"
          >
            Meet All Customers
            <img src={greenRightArrow} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Customers;
