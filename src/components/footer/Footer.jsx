import { assetsPath } from "../../utils/utils";
import "./Footer.css";
import AccordionMenuFooter from "../accordionMenuFooter/AccordionMenuFooter";

/**
 * Footer component, created to be a component shared by the web application.
 *
 * @returns {JSX.Element} returns the rendered footer component.
 */

export default function Footer() {
  return (
    <footer className="footer">
      <div className="payment-methods">
        <div className="payment-methods-contain">
          <img
            className="payment-method"
            height={32}
            src={assetsPath("./icons/visa-logo.png")}
            alt="visa.logo"
          />
          <img
            className="payment-method"
            height={42}
            src={assetsPath("./icons/mastercard-logo.png")}
            alt="visa.logo"
          />
          <img
            className="payment-method"
            height={62}
            src={assetsPath("./icons/american-express-logo.png")}
            alt="visa.logo"
          />
          <img
            className="payment-method"
            height={32}
            src={assetsPath("./icons/skrill-logo.png")}
            alt="visa.logo"
          />
          <div className="cryptos">
            <img
              className="payment-method"
              height={24}
              src={assetsPath("./icons/bitcoin-cash.png")}
              alt="visa.logo"
            />
            <img
              className="payment-method"
              height={24}
              src={assetsPath("./icons/ethereum.webp")}
              alt="visa.logo"
            />
            <img
              className="payment-method"
              height={24}
              src={assetsPath("./icons/bitcoin.png")}
              alt="visa.logo"
            />
            <img
              className="payment-method"
              height={24}
              src={assetsPath("./icons/litecoin.png")}
              alt="visa.logo"
            />
          </div>
          <span className="more-payment-methods">and 50+ more</span>
        </div>
      </div>
      <div className="content-footer">
        <div className="social-networks">
          <a href="#facebook" className="social-network-link">
            <img
              className="social-network-img"
              height={38}
              src={assetsPath("./icons/facebook-logo.png")}
              alt="facebook.logo"
            />
          </a>
          <a href="#instagram" className="social-network-link">
            <img
              className="social-network-img"
              height={38}
              src={assetsPath("./icons/instagram-logo.png")}
              alt="instagram.logo"
            />
          </a>
          <a href="#twitter" className="social-network-link">
            <img
              className="social-network-img"
              height={38}
              src={assetsPath("./icons/twitter-logo.webp")}
              alt="twitter.logo"
            />
          </a>
          <a href="#discord" className="social-network-link">
            <img
              className="social-network-img"
              height={38}
              src={assetsPath("./icons/discord-logo.png")}
              alt="discord.logo"
            />
          </a>
        </div>
        <div className="about">
          <div className="email">
            <img
              className="logo-chicksgold"
              height={38}
              src={assetsPath("./chicks-logo-large.svg")}
              alt="visa.logo"
            />
            <span className="email-chicksgold">support@chicksgold.com</span>
          </div>

          <div className="info-section">
            <span className="info-title">Chicks Gold</span>
            <div className="info-list">
              <a href="#games" className="link">
                Games
              </a>
              <a href="#about-us" className="link">
                About Us
              </a>
              <a href="blog" className="link">
                Blog
              </a>
              <a href="sitemap" className="link">
                Sitemap
              </a>
            </div>
          </div>
          <div className="info-section">
            <span className="info-title">Support</span>
            <div className="info-list">
              <a href="#games" className="link">
                Contact Us
              </a>
              <a href="#about-us" className="link">
                FAQ
              </a>
            </div>
          </div>
          <div className="info-section">
            <span className="info-title">Legal</span>
            <div className="info-list">
              <a href="#games" className="link">
                Privacy Policy
              </a>
              <a href="#about-us" className="link">
                Terms of Service
              </a>
              <a href="blog" className="link">
                Copyright Policy
              </a>
            </div>
          </div>
          <div className="info-mobile">
            <AccordionMenuFooter />
          </div>
          <div className="reviews">
            <a href="#truspilot" className="truspilot-name">
              Trustpilot Reviews
            </a>
            <div className="stars">
              <div className="star">
                <img
                  className="star-img"
                  height={14}
                  src={assetsPath("./icons/star-full.svg")}
                  alt="star"
                />
              </div>
              <div className="star">
                <img
                  className="star-img"
                  height={14}
                  src={assetsPath("./icons/star-full.svg")}
                  alt="star"
                />
              </div>
              <div className="star">
                <img
                  className="star-img"
                  height={14}
                  src={assetsPath("./icons/star-full.svg")}
                  alt="star"
                />
              </div>
              <div className="star">
                <img
                  className="star-img"
                  height={14}
                  src={assetsPath("./icons/star-full.svg")}
                  alt="star"
                />
              </div>
              <div className="star">
                <img
                  className="star-img"
                  height={14}
                  src={assetsPath("./icons/star-full.svg")}
                  alt="star"
                />
              </div>
            </div>
          </div>
        </div>
        <span className="copyright">
          © 2017 - 2020 Chicksgold.com. All Rights Reserved
        </span>
      </div>
    </footer>
  );
}
