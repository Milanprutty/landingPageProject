import Button from "../ReusableButton/Button";
import whiteArrow from "../../assets/rightArrow.svg";
const FooterFrame = () => {
  return (
    <div className="footer__frame">
      <div className="footer-frame__text">
        Let Nextcent do the work so you don't have to!
      </div>
      <Button variant="primary">
        Get a Demo <img src={whiteArrow} />
      </Button>
    </div>
  );
};

export default FooterFrame;
