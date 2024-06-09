import type { NextPage } from "next";
import { useState, useCallback } from "react";
import MobileNavbarW from "./mobile-navbar-w";
import PortalPopup from "./portal-popup";
import styles from "./header.module.css";

export type HeaderType = {
  className?: string;

  /** Action props */
  onHOMEClick?: () => void;
  onFIGHTERSClick?: () => void;
  onACTIVITIESClick?: () => void;
  onCONTACTUSClick?: () => void;
};

const Header: NextPage<HeaderType> = ({
  className = "",
  onHOMEClick,
  onFIGHTERSClick,
  onACTIVITIESClick,
  onCONTACTUSClick,
}) => {
  const [isMobileNavbarWPopupOpen, setMobileNavbarWPopupOpen] = useState(false);

  const openMobileNavbarWPopup = useCallback(() => {
    setMobileNavbarWPopupOpen(true);
  }, []);

  const closeMobileNavbarWPopup = useCallback(() => {
    setMobileNavbarWPopupOpen(false);
  }, []);

  return (
    <>
      <div className={[styles.navbar, className].join(" ")}>
        <div className={styles.nav}>
          <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
          <div className={styles.menuright}>
            <div className={styles.menulinks}>
              <button className={styles.home} onClick={onHOMEClick}>
                HOME
              </button>
              <button className={styles.home} onClick={onFIGHTERSClick}>
                FIGHTERS
              </button>
              <button className={styles.home} onClick={onACTIVITIESClick}>
                ACTIVITIES
              </button>
              <button className={styles.contactUs} onClick={onCONTACTUSClick}>
                CONTACT US
              </button>
            </div>
            <button
              className={styles.hamburgerIcon}
              onClick={openMobileNavbarWPopup}
            >
              <img className={styles.group2Icon} alt="" src="/group2.svg" />
            </button>
          </div>
        </div>
      </div>
      {isMobileNavbarWPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMobileNavbarWPopup}
        >
          <MobileNavbarW onClose={closeMobileNavbarWPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Header;
