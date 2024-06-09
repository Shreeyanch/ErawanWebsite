import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./m-u-a-y.module.css";

export type MUAYType = {
  className?: string;
  onClose?: () => void;
};

const MUAY: NextPage<MUAYType> = ({ className = "", onClose }) => {
  const onGroupContainerClick = useCallback(() => {
    window.location.href = "https://www.instagram.com/samparka.nep/";
  }, []);

  const onENROLLNOWClick = useCallback(() => {
    window.open("https://www.instagram.com/erawanmuaythaifightgym/");
  }, []);

  return (
    <div className={[styles.muay, className].join(" ")}>
      <img className={styles.icon} alt="" src="/52@2x.png" />
      <div className={styles.menuParent} onClick={onGroupContainerClick}>
        <div className={styles.menu} />
        <button className={styles.enrollNow} onClick={onENROLLNOWClick}>
          ENROLL NOW
        </button>
      </div>
    </div>
  );
};

export default MUAY;
