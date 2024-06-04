import img1 from "../../assets/infoPic1.png";
import img2 from "../../assets/infoPic2.png";

export interface dataInterface {
  img: string;
  header: string;
  description: string;
}

export const infoData: dataInterface[] = [
  {
    img: img1,
    header: "The unseen of spending three years at Pixelgrade",
    description:
      "When joining the JustGo Community, your success becomes our success. In other words, our Customer Success team will be on hand from day one to ensure we understand your requirements, share your goals and work with you for a smooth adoption of our software.",
  },
  {
    img: img2,

    header: "How to design your site footer like we did",
    description:
      "One event calendar shared across National, Regional and Club events to simplify your event experience. Allowing you to create waiting lists, share data capture, issue credential for course completion, apply smart purchasing rules and much more.",
  },
];
