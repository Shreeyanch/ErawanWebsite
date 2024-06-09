import type { NextPage } from "next";
import { useState, useCallback } from "react";
import FrameComponent from "./frame-component";
import PortalPopup from "./portal-popup";
import { useRouter } from "next/router";
import styles from "./hero-section.module.css";

export type HeroSectionType = {
  className?: string;
};

const HeroSection: NextPage<HeroSectionType> = ({ className = "" }) => {
  const [isFramePopupOpen, setFramePopupOpen] = useState(false);
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/enroll-form");
  }, [router]);

  const openFramePopup = useCallback(() => {
    setFramePopupOpen(true);
  }, []);

  const closeFramePopup = useCallback(() => {
    setFramePopupOpen(false);
  }, []);

  return (
    <>
      <div
        className={[styles.herosection, className].join(" ")}
        data-scroll-to="heroSectionContainer"
      >
        <div className={styles.herotext}>
          <div className={styles.newcallout}>
            <div className={styles.newcalloutChild} />
            <div className={styles.newcalloutItem} />
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <div className={styles.authenticMuayThai}>
              Authentic Muay Thai training
            </div>
          </div>
          <div className={styles.herocta}>
            <div className={styles.title}>
              <p className={styles.erawan}>Erawan</p>
              <p className={styles.erawan}>{`Muay Thai `}</p>
              <p className={styles.erawan}>Fight Gym</p>
            </div>
            <div className={styles.subtitle}>
              Our vision is to bring quality and authentic Muay Thai training
              classes to people of all levels. Erawan offers affordable Muay
              Thai training classes and secure online transactions and payments.
            </div>
            <div className={styles.buttonrow}>
              <button className={styles.button} onClick={onButtonClick}>
                <div className={styles.enrollNow}>Enroll Now</div>
              </button>
              <button className={styles.button1} onClick={openFramePopup}>
                <div className={styles.enrollNow}>Schedule</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.heroimageWrapper}>
          <img
            className={styles.heroimageIcon}
            alt=""
            src="/heroimage@2x.png"
          />
        </div>
      </div>
      {isFramePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFramePopup}
        >
          <FrameComponent onClose={closeFramePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default HeroSection;
