import type { NextPage } from "next";
import Column1 from "./column1";
import Column from "./column";
import styles from "./popular-exercises.module.css";

export type PopularExercisesType = {
  className?: string;
};

const PopularExercises: NextPage<PopularExercisesType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.popularexercises, className].join(" ")}>
      <div className={styles.title} />
      <div className={styles.exercisecards}>
        <Column1
          cardImage="/cardimage3@2x.png"
          title="Raju Rai "
          threeTimesNationalChampio="Three times national champion "
          wBCMuayThaiNationalChampi="WBC Muay Thai national champion "
          yearsOfExperienceInMuayTh="14 years of experience in Muay Thai "
          fightRecords62="Fight records 6 - 2"
        />
        <Column1
          cardImage="/image@2x.png"
          title="Barun Ghale Gurung"
          threeTimesNationalChampio="Bantam weight division "
          wBCMuayThaiNationalChampi="National champion "
          yearsOfExperienceInMuayTh="Multiple time win over Thai fighters "
          fightRecords62="Fight records  21 - 5 "
          propWidth="unset"
          propAlignSelf="stretch"
          propOverflow="hidden"
        />
        <Column
          cardImage="/cardimage4@2x.png"
          title="Karishma karki"
          weightDivisionFlyWeight="Weight division - fly weight "
          wBCMuayThaiNationalChampi="WBC Muay Thai national champion "
          fightRecord20="Fight record  2 - 0 "
        />
        <Column
          cardImage="/cardimage5@2x.png"
          title="Rajina Bista "
          weightDivisionFlyWeight="Super fly weight division "
          wBCMuayThaiNationalChampi="WBC Muay Thai gold medalist"
          fightRecord20="Fight records  3 - 1 "
        />
      </div>
    </div>
  );
};

export default PopularExercises;
