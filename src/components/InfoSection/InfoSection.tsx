import Button from "../ReusableButton/Button";
import { dataInterface } from "./InfoData";
import "./InfoSection.css";

interface Props {
  data: dataInterface;
}

const InfoSection = ({ data }: Props) => {
  return (
    <div className="infoSectionContainer">
      <div className="infoSectionImg">
        <img src={data.img} />
      </div>
      <div className="infoRightSide">
        <div>{data.header}</div>

        <div>{data.description}</div>
        <div>
          <Button variant="primary">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
