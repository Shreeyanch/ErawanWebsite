import type { NextPage } from "next";
import styles from "./icon-pack.module.css";

export type IconPackType = {
  className?: string;
  onClose?: () => void;
};

const IconPack: NextPage<IconPackType> = ({ className = "", onClose }) => {
  return (
    <div className={[styles.iconPack, className].join(" ")}>
      <img
        className={styles.vectorIcon}
        alt=""
        src="/vector1.svg"
        onClick={onClose}
      />
    </div>
  );
};

export default IconPack;
