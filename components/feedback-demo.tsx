import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./feedback-demo.module.css";

export type FeedbackDemoType = {
  className?: string;
};

const FeedbackDemo: NextPage<FeedbackDemoType> = ({ className = "" }) => {
  const router = useRouter();

  const onEnrollNowClick = useCallback(() => {
    router.push("/enroll-form");
  }, [router]);

  return (
    <div className={[styles.feedbackdemo, className].join(" ")}>
      <div className={styles.section1}>
        <img className={styles.images2Icon} alt="" src="/images-2@2x.png" />
        <div className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src="/rectangle-15.svg" />
          <div className={styles.groupItem} />
          <img
            className={styles.runningStickFigureSvgrepoCIcon}
            alt=""
            src="/runningstickfiguresvgrepocom-1.svg"
          />
          <div className={styles.runningWrapper}>
            <div className={styles.running}>Running</div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupInner} />
          <div className={styles.ellipseParent}>
            <div className={styles.frameChild} />
            <img
              className={styles.icons8Exercise521}
              alt=""
              src="/icons8exercise52-1@2x.png"
            />
          </div>
          <div className={styles.functionalTrainingWrapper}>
            <div className={styles.functionalTraining}>
              <p className={styles.functional}>Functional</p>
              <p className={styles.functional}>Training</p>
            </div>
          </div>
        </div>
        <div className={styles.section1Inner}>
          <div className={styles.groupWrapper}>
            <div className={styles.groupParent}>
              <div className={styles.strengthTrainingWrapper}>
                <div className={styles.strengthTraining}>
                  <p className={styles.functional}>{`Strength `}</p>
                  <p className={styles.functional}>Training</p>
                </div>
              </div>
              <div className={styles.icons8Workout961Parent}>
                <img
                  className={styles.icons8Workout961}
                  alt=""
                  src="/icons8workout96-1@2x.png"
                />
                <div className={styles.frameItem} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.vouchers}>
        <div className={styles.downloadapp}>
          <div className={styles.muayThaiTrainingParent}>
            <div className={styles.muayThaiTraining}>Muay Thai Training</div>
            <div className={styles.atErawanWeContainer}>
              <p
                className={styles.functional}
              >{`At Erawan, we offer comprehensive Muay Thai training designed for practitioners of all levels, from beginners to advanced fighters. `}</p>
            </div>
          </div>
          <div className={styles.downloadappInner}>
            <button className={styles.enrollNowWrapper}>
              <div className={styles.enrollNow} onClick={onEnrollNowClick}>
                Enroll Now
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDemo;
