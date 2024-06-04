import Button from "../ReusableButton/Button";
import "./NavBar.css";
import rightArrow from "../../assets/rightArrow.svg";
import NexCent from "../../assets/nexcent.svg";
import { useEffect, useRef, useState } from "react";
import DropDown from "./DropDown";

const NavBar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      const targetElement = e.target as HTMLElement;
      if (!targetElement.closest(".hamburger")) {
        setIsOpened(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div>
      <div className="navbarContainer">
        <div>
          <img src={NexCent} />
        </div>

        <ul className="navbarUl">
          <li>Home</li>
          <li>Features</li>
          <li>Community</li>
          <li>Blog</li>
          <li>Pricing</li>
          <li
            onClick={handleClick}
            className={isOpened ? "openmenu hamburger" : "hamburger"}
          >
            <div>
              <span className="line-1"></span>
              <span className="line-2"></span>
              <span className="line-3"></span>
            </div>
          </li>
          <li>
            <Button variant="primary">
              Register Now <img src={rightArrow} />
            </Button>
          </li>
        </ul>
      </div>
      <div ref={menuRef} style={{ position: "relative" }}>
        <DropDown
          classname={isOpened ? "open dropDown__main" : "closed dropDown__main"}
        />
      </div>
    </div>
  );
};

export default NavBar;
