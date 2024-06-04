import "./Community.css";
import { data } from "./CommunityData";

const Community = () => {
  return (
    <div className="communityContainer">
      <div className="communityText">
        <div>Manage your entire community in a single system</div>
        <div>Who is Nextcent suitable for?</div>
      </div>
      <div>
        {data.map((items, i) => {
          return (
            <div key={i} className="communityItemContainer">
              <div>
                <img src={items.icon} />
              </div>
              <div>
                <div>
                  <div>{items.headerText}</div>
                  <p className="communityP">{items.nextLine}</p>
                </div>
              </div>
              <div>{items.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Community;
