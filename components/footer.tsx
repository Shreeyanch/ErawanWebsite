import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./footer.module.css";

export type FooterType = {
  className?: string;
  trainingImage?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];

  /** Action props */
  onPhoneNumber977Click?: () => void;
  onWhatsapp977Click?: () => void;
  onErawanmuaythaifightgymgmailcTextClick?: () => void;
  onItemClick?: () => void;
  onItem1Click?: () => void;
  onItem2Click?: () => void;
};

const Footer: NextPage<FooterType> = ({
  className = "",
  trainingImage,
  propHeight,
  onPhoneNumber977Click,
  onWhatsapp977Click,
  onErawanmuaythaifightgymgmailcTextClick,
  onItemClick,
  onItem1Click,
  onItem2Click,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <footer
      className={[styles.footer, className].join(" ")}
      data-scroll-to="footer"
      style={footerStyle}
    >
      <div className={styles.footermain}>
        <img className={styles.trainingimageIcon} alt="" src={trainingImage} />
        <div className={styles.fitnessDisciplineConsistencyContainer}>
          <p className={styles.fitness}>FITNESS</p>
          <p className={styles.fitness}>DISCIPLINE</p>
          <p className={styles.fitness}>CONSISTENCY</p>
        </div>
        <div className={styles.copyright}>© 2024 — Copyright</div>
      </div>
      <div className={styles.footerdescription}>
        <div className={styles.contactsParent}>
          <div className={styles.contacts}>
            <div className={styles.contactUs}>Contact us</div>
            <div className={styles.list}>
              <div
                className={styles.erawanmuaythaifightgymgmailc}
                onClick={onPhoneNumber977Click}
              >
                Phone Number: +977 9843594183
              </div>
              <div
                className={styles.erawanmuaythaifightgymgmailc}
                onClick={onWhatsapp977Click}
              >
                Whatsapp : +977 984-3594183
              </div>
              <div
                className={styles.erawanmuaythaifightgymgmailc}
                onClick={onErawanmuaythaifightgymgmailcTextClick}
              >
                erawanmuaythaifightgym@gmail.com
              </div>
              <div className={styles.bansbariKathmanduNepal}>
                Bansbari, Kathmandu, Nepal
              </div>
            </div>
          </div>
          <div className={styles.socialMedia}>
            <button className={styles.item} onClick={onItemClick}>
              <div className={styles.instagram}>Instagram</div>
            </button>
            <button className={styles.item} onClick={onItem1Click}>
              <div className={styles.whatsapp}>Whatsapp</div>
            </button>
            <button className={styles.item} onClick={onItem2Click}>
              <div className={styles.whatsapp}>Facebook</div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
