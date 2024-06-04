import "./Achievements.css";
import { achievementData } from "./AchievementData";

const Achievements = () => {
  return (
    <div className="importantInfotopContainer">
      <div className="importantInfoLeftside">
        <div>
          <div>Helping a local</div>
          <p>business reinvent itself</p>
        </div>
        <p>We reached here with our hard work and dedication</p>
      </div>
      <div className="achievements">
        {achievementData.map((achievement, i) => {
          return (
            <div className="mappedAchievement" key={i}>
              <div className="achievementIcon">
                <img src={achievement.icon} />
              </div>
              <div>
                <div className="achievementNumber">{achievement.amount}</div>
                <div className="achievementDescription">
                  {achievement.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
