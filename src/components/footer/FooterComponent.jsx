import { assetsPath } from "../../helpers/utils";
import { footerSections } from "../../helpers/dummyData";
import LogoFooterSVG from "../../svg/LogoFooterSVG";
import StarSVG from "../../svg/StarSVG";
import FooterSectionComponent from "../footerSection/FooterSectionComponent";
import "./FooterComponent.css";
import MenuItemComponent from "../accordionMenu/menuItemCompoment/MenuItemComponent";

/*============================================================
  FooterComponent: Footer rendering component
==============================================================*/

export default function FooterComponent() {
  return (
    <footer>
      <div className="container-payment-methods">
        <div className="payment-methods">
          <img
            className="payment-method"
            src={assetsPath("./payment-methods/visa.png")}
            alt="visa"
          />
          <img
            className="payment-method"
            src={assetsPath("./payment-methods/mastercard.png")}
            alt="mastercard"
          />
          <img
            className="payment-method"
            src={assetsPath("./payment-methods/american-express.png")}
            alt="american express"
          />
          <img
            className="payment-method"
            src={assetsPath("./payment-methods/skrill.png")}
            alt="skrill"
          />
          <div className="cryptocurrencies">
            <img
              className="cryptocurrency"
              src={assetsPath(
                "./payment-methods/cryptocurrencies/bitcoin-cash.png"
              )}
              alt="visa"
            />
            <img
              className="cryptocurrency"
              src={assetsPath(
                "./payment-methods/cryptocurrencies/ethereum.png"
              )}
              alt="visa"
            />
            <img
              className="cryptocurrency"
              src={assetsPath("./payment-methods/cryptocurrencies/bitcoin.png")}
              alt="visa"
            />
            <img
              className="cryptocurrency"
              src={assetsPath(
                "./payment-methods/cryptocurrencies/litecoin.png"
              )}
              alt="visa"
            />
          </div>
          <p className="more-cryptocurrencies">and 50+ more</p>
        </div>
      </div>
      <div className="container-info">
        <div className="container-about-us">
          <div className="social-networks">
            <a href="#facebook">
              <img
                className="social-network"
                src={assetsPath("./social-networks/facebook.png")}
                alt="facebook"
              />
            </a>
            <a href="#instagram">
              <img
                className="social-network"
                src={assetsPath("./social-networks/instagram.png")}
                alt="instagram"
              />
            </a>
            <a href="#twitter">
              <img
                className="social-network"
                src={assetsPath("./social-networks/twitter.png")}
                alt="twitter"
              />
            </a>
            <a href="#discord">
              <img
                className="social-network"
                src={assetsPath("./social-networks/discord.png")}
                alt="discord"
              />
            </a>
          </div>
          <div className="sections-about">
            <div className="section-contact-us">
              <a href="#https://www.chicksgold.com" className="logo-footer">
                <LogoFooterSVG className="logo-footer-image" />
              </a>
              <a className="email" href="#email">
                support@chicksgold.com
              </a>
            </div>
            <div className="section-links">
              {footerSections.map((footerSection) => (
                <FooterSectionComponent
                  key={footerSection.id}
                  title={footerSection.title}
                  sections={footerSection.items}
                />
              ))}
            </div>
            <div className="section-links-small-screens">
              {footerSections.map((footerSection) => (
                <MenuItemComponent key={footerSection.id} section={footerSection} />
              ))}
            </div>
            <div className="section-container-trustpilot">
              <div className="trustpilot">
                <div className="stars">
                  <div className="star">
                    <StarSVG />
                  </div>
                  <div className="star">
                    <StarSVG />
                  </div>
                  <div className="star">
                    <StarSVG />
                  </div>
                  <div className="star">
                    <StarSVG />
                  </div>
                  <div className="star">
                    <StarSVG />
                  </div>
                </div>
                <a className="reviews" href="#https://es.trustpilot.com">
                  Trustpilot Reviews
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-copyright">
          <p className="copyright">
            © 2017 - 2020 Chicksgold.com. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
