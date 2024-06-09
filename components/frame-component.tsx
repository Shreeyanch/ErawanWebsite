import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
  onClose?: () => void;
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  onClose,
}) => {
  return (
    <div
      className={[styles.whatsappImage20240527At1Parent, className].join(" ")}
    >
      <img
        className={styles.whatsappImage20240527At1}
        alt=""
        src="/whatsapp-image-20240527-at-1434-1@2x.png"
      />
    </div>
  );
};

export default FrameComponent;
