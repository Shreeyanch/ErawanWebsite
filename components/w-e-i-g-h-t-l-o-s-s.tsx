import type { NextPage } from "next";
import styles from "./w-e-i-g-h-t-l-o-s-s.module.css";

export type WEIGHTLOSSType = {
  className?: string;
  onClose?: () => void;
};

const WEIGHTLOSS: NextPage<WEIGHTLOSSType> = ({ className = "", onClose }) => {
  return <div className={[styles.weightloss, className].join(" ")} />;
};

export default WEIGHTLOSS;
