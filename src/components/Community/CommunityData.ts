import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";

interface dataTypes {
  icon: string;
  headerText: string;
  description: string;
  nextLine: string;
}

export const data: dataTypes[] = [
  {
    icon: icon1,
    headerText: "Membership",
    nextLine: "Organisations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: icon2,
    headerText: "National",
    nextLine: "Associations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: icon3,
    headerText: "Clubs And",
    nextLine: "Groups",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];
