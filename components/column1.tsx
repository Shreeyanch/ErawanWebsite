import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./column1.module.css";

export type Column1Type = {
  className?: string;
  cardImage?: string;
  title?: string;
  threeTimesNationalChampio?: string;
  wBCMuayThaiNationalChampi?: string;
  yearsOfExperienceInMuayTh?: string;
  fightRecords62?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propOverflow?: CSSProperties["overflow"];
};

const Column1: NextPage<Column1Type> = ({
  className = "",
  cardImage,
  title,
  threeTimesNationalChampio,
  wBCMuayThaiNationalChampi,
  yearsOfExperienceInMuayTh,
  fightRecords62,
  propWidth,
  propAlignSelf,
  propOverflow,
}) => {
  const cardImageIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
      overflow: propOverflow,
    };
  }, [propWidth, propAlignSelf, propOverflow]);

  return (
    <div className={[styles.column4, className].join(" ")}>
      <div className={styles.exercisecard}>
        <img
          className={styles.cardimageIcon}
          alt=""
          src={cardImage}
          style={cardImageIconStyle}
        />
        <div className={styles.text}>
          <div className={styles.titles}>
            <div className={styles.title}>{title}</div>
            <div className={styles.subtitle}>
              <p className={styles.threeTimesNational}>
                {threeTimesNationalChampio}
              </p>
              <p className={styles.threeTimesNational}>
                {wBCMuayThaiNationalChampi}
              </p>
              <p className={styles.threeTimesNational}>
                {yearsOfExperienceInMuayTh}
              </p>
              <p className={styles.threeTimesNational}>{fightRecords62}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Column1;
