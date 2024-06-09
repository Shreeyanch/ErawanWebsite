import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./feedback-demo1.module.css";

export type FeedbackDemo1Type = {
  className?: string;
  screenshot20240606At14081?: string;
  nepalsRajinaErawanIsPoise?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
};

const FeedbackDemo1: NextPage<FeedbackDemo1Type> = ({
  className = "",
  screenshot20240606At14081,
  nepalsRajinaErawanIsPoise,
  propWidth,
  propHeight,
  propDisplay,
}) => {
  const screenshot20240606At1408Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  const nepalsRajinaErawanStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className={[styles.feedbackdemo, className].join(" ")}>
      <img
        className={styles.screenshot20240606At1408}
        alt=""
        src={screenshot20240606At14081}
        style={screenshot20240606At1408Style}
      />
      <div className={styles.vouchers}>
        <div className={styles.downloadapp}>
          <div className={styles.vouchers}>
            <div
              className={styles.nepalsRajinaErawan}
              style={nepalsRajinaErawanStyle}
            >
              {nepalsRajinaErawanIsPoise}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDemo1;
