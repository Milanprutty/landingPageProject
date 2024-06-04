import "./Footer.css";

import nexcent from "../../assets/whiteNexcent.svg";
import submit from "../../assets/submit.svg";
import FooterFrame from "./FooterFrame";

interface footer {
  columnTitle: string;
  items: string[];
}

const footerData: footer[] = [
  {
    columnTitle: "Company",
    items: ["About us", "Blog", "Contact us", "Pricing", "Testimonials"],
  },
  {
    columnTitle: "Support",
    items: [
      "Help center",
      "Terms of service",
      "Legal",
      "Privacy policy",
      "Status",
    ],
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <FooterFrame />
      <div className="footer__items">
        <div className="company__info">
          <div className="company__img">
            <img src={nexcent} />
          </div>
          <div className="copyright">
            <div>Copyright © 2020 Landify UI Kit.</div>
            <div>All rights reserved</div>
          </div>
          <div className="social-links">ig ba x yt</div>
        </div>
        <div className="links">
          {footerData.map((column, i) => {
            return (
              <div key={i} className="link__item">
                <div className="column-title">{column.columnTitle}</div>
                <div className="column__item">
                  {column.items.map((item, i) => {
                    return <div key={i}>{item}</div>;
                  })}
                </div>
              </div>
            );
          })}
          <div className="link__item">
            <div className="column-title">Stay up to date</div>
            <div className="input-container">
              <input
                id="emailForm"
                type="text"
                placeholder="Your email address"
              />
              <img src={submit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
