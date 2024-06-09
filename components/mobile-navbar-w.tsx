import type { NextPage } from "next";
import { useState, useCallback } from "react";
import PortalPopup from "./portal-popup";
import IconPack from "./icon-pack";
import { useRouter } from "next/router";
import styles from "./mobile-navbar-w.module.css";

export type MobileNavbarWType = {
  className?: string;
  onClose?: () => void;
};

const MobileNavbarW: NextPage<MobileNavbarWType> = ({
  className = "",
  onClose,
}) => {
  const [isMobileNavbarWPopup1Open, setMobileNavbarWPopup1Open] =
    useState(false);
  const router = useRouter();

  const openMobileNavbarWPopup1 = useCallback(() => {
    setMobileNavbarWPopup1Open(true);
  }, []);

  const closeMobileNavbarWPopup1 = useCallback(() => {
    setMobileNavbarWPopup1Open(false);
  }, []);

  const onProductClick = useCallback(() => {
    router.push("/page");
  }, [router]);

  const onAboutUsTextClick = useCallback(() => {
    router.push("/page1");
  }, [router]);

  const onAboutUsText1Click = useCallback(() => {
    router.push("/enroll-form");
  }, [router]);

  return (
    <>
      <div
        className={[styles.mobilenavbarw, className].join(" ")}
        onClick={openMobileNavbarWPopup1}
      >
        <IconPack />
        {/* <div className={styles.mobilenavbarlogo}>
          <div className={styles.logo}>
            <img
              className={styles.screenshot20240513At1639}
              alt=""
              src="/screenshot-20240513-at-1639-1@2x.png"
            />
          </div>
        </div> */}
        <div className={styles.menu}>
          <div className={styles.homeParent}>
            <div className={styles.home}>Home</div>
            <button className={styles.product} onClick={onProductClick}>
              Fighters
            </button>
            <div className={styles.aboutUs} onClick={onAboutUsTextClick}>
              Activities
            </div>
            <div className={styles.aboutUs} onClick={onAboutUsText1Click}>
              Enroll Now
            </div>
            <div className={styles.home}>Contact us</div>
          </div>
        </div>
      </div>
      {isMobileNavbarWPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMobileNavbarWPopup1}
        >
          <MobileNavbarW onClose={closeMobileNavbarWPopup1} />
        </PortalPopup>
      )}
    </>
  );
};

export default MobileNavbarW;
