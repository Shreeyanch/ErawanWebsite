import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./m-m-a.module.css";

export type MMAType = {
  className?: string;
  onClose?: () => void;
};

const MMA: NextPage<MMAType> = ({ className = "", onClose }) => {
  const onGroupContainerClick = useCallback(() => {
    window.location.href = "https://www.instagram.com/samparka.nep/";
  }, []);

  const onENROLLNOWClick = useCallback(() => {
    window.open("https://www.instagram.com/erawanmuaythaifightgym/");
  }, []);

  return (
    <div className={[styles.mma, className].join(" ")}>
      <img className={styles.icon} alt="" src="/53@2x.png" />
      <div className={styles.menuParent} onClick={onGroupContainerClick}>
        <div className={styles.menu} />
        <button className={styles.enrollNow} onClick={onENROLLNOWClick}>
          ENROLL NOW
        </button>
      </div>
    </div>
  );
};

export default MMA;
