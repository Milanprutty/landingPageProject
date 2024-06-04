import hands from "../../assets/hands.png";
import man from "../../assets/importantInfoMan.svg";
import pointy from "../../assets/importantInfoPointy.svg";
import wallet from "../../assets/importantInfoWallet.svg";

interface achievements {
  icon: string;
  amount: string;
  description: string;
}

export const achievementData: achievements[] = [
  {
    icon: man,
    amount: "2,245,341",
    description: "Members",
  },
  {
    icon: hands,
    amount: "46,328",
    description: "Clubs",
  },
  {
    icon: pointy,

    amount: "828,867",
    description: "Event Bookings",
  },
  {
    icon: wallet,
    amount: "1,926,436",
    description: "Payments",
  },
];
