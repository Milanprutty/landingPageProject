import Carousel from "./components/Carousel/Carousel";
import Clients from "./components/Clients/Clients";
import Community from "./components/Community/Community";
import InfoSection from "./components/InfoSection/InfoSection";
import NavBar from "./components/NavBar/NavBar";

import { infoData } from "./components/InfoSection/InfoData";
import Achievements from "./components/ImportantInfo/Achievements";
import Customers from "./components/Customers/Customers";
import CommunityUpdates from "./components/CommunityUpdates/CommunityUpdates";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Carousel />
      <Clients />
      <Community />
      <InfoSection data={infoData[0]} />
      <Achievements />
      <InfoSection data={infoData[1]} />
      <Customers />
      <CommunityUpdates />
      <Footer />
    </div>
  );
};

export default App;
