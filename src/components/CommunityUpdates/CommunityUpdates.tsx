import "./Communityupdates.css";
import { communityData } from "./CommunityUpdateData";
import Button from "../ReusableButton/Button";
import greenArrow from "../../assets/greenRightArrow.svg";

const CommunityUpdates = () => {
  return (
    <div className="community">
      <div className="community__header">Caring is the new marketing</div>
      <div className="community__description">
        The Nextcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's more.
      </div>
      <div className="community__mapped">
        {communityData.map((item, i) => {
          return (
            <div key={i} className="community-item__container">
              <img src={item.img} />
              <div className="community-item-container__description">
                <div>{item.title} </div>
                <Button
                  variant="tertiary"
                  style={{ backgroundColor: "#f5f7fa" }}
                >
                  Readmore <img src={greenArrow} />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommunityUpdates;
