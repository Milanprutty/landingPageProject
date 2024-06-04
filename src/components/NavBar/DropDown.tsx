import Button from "../ReusableButton/Button";
import "./Dropdown.css";
import rightArrow from "../../assets/rightArrow.svg";
interface Props {
  classname: "open dropDown__main" | "closed dropDown__main";
}

const DropDown = ({ classname }: Props) => {
  return (
    <div className={classname}>
      <ul className="dropDown__list">
        <li>Home</li>
        <li>Features</li>
        <li>Community</li>
        <li>Blog</li>
        <li>Pricing</li>
        <li>
          <Button variant="primary">
            Register Now <img src={rightArrow} />
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
