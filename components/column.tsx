import type { NextPage } from "next";
import styles from "./column.module.css";

export type ColumnType = {
  className?: string;
  cardImage?: string;
  title?: string;
  weightDivisionFlyWeight?: string;
  wBCMuayThaiNationalChampi?: string;
  fightRecord20?: string;
};

const Column: NextPage<ColumnType> = ({
  className = "",
  cardImage,
  title,
  weightDivisionFlyWeight,
  wBCMuayThaiNationalChampi,
  fightRecord20,
}) => {
  return (
    <div className={[styles.column1, className].join(" ")}>
      <div className={styles.exercisecard}>
        <img className={styles.cardimageIcon} alt="" src={cardImage} />
        <div className={styles.text}>
          <div className={styles.titles}>
            <div className={styles.title}>{title}</div>
            <div className={styles.subtitle}>
              <p className={styles.weightDivision}>{weightDivisionFlyWeight}</p>
              <p className={styles.weightDivision}>
                {wBCMuayThaiNationalChampi}
              </p>
              <p className={styles.fightRecord}>{fightRecord20}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Column;
