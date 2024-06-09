import type { NextPage } from "next";
import { useState, useCallback } from "react";
import MUAY from "../components/m-u-a-y";
import PortalPopup from "../components/portal-popup";
import MMA from "../components/m-m-a";
import WEIGHTLOSS from "../components/w-e-i-g-h-t-l-o-s-s";
import { useRouter } from "next/router";
import Header from "../components/header";
import HeroSection from "../components/hero-section";
import FeedbackDemo from "../components/feedback-demo";
import TutorialImageGroup from "../components/tutorial-image-group";
import Footer from "../components/footer";
import styles from "./index.module.css";

const FitnessLandingPage: NextPage = () => {
  const [isMUAYPopupOpen, setMUAYPopupOpen] = useState(false);
  const [isMMAPopupOpen, setMMAPopupOpen] = useState(false);
  const [isWEIGHTLOSSPopupOpen, setWEIGHTLOSSPopupOpen] = useState(false);
  const router = useRouter();

  const onHOMEClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='heroSectionContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onFIGHTERSClick = useCallback(() => {
    router.push("/page");
  }, [router]);

  const onACTIVITIESClick = useCallback(() => {
    router.push("/page1");
  }, [router]);

  const onCONTACTUSClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='footer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPhoneNumber977Click = useCallback(() => {
    window.location.href = "tel:+9779843594183";
  }, []);

  const onWhatsapp977Click = useCallback(() => {
    window.open("https://wa.me/9779843594183");
  }, []);

  const onErawanmuaythaifightgymgmailcTextClick = useCallback(() => {
    window.location.href = "mailto:erawanmuaythaifightgym@gmail.com";
  }, []);

  const onItemClick = useCallback(() => {
    window.open(
      "https://www.instagram.com/erawanmuaythaifightgym?igsh=Mm55MXZuYmVxdjBw&utm_source=qr"
    );
  }, []);

  const onItem1Click = useCallback(() => {
    window.open("https://wa.me/9779843594183");
  }, []);

  const onItem2Click = useCallback(() => {
    window.open(
      "https://www.facebook.com/profile.php?id=100076293594552&mibextid=PlNXYD"
    );
  }, []);

  const onOurFightersClick = useCallback(() => {
    router.push("/page");
  }, [router]);

  const openMUAYPopup = useCallback(() => {
    setMUAYPopupOpen(true);
  }, []);

  const closeMUAYPopup = useCallback(() => {
    setMUAYPopupOpen(false);
  }, []);

  const openMMAPopup = useCallback(() => {
    setMMAPopupOpen(true);
  }, []);

  const closeMMAPopup = useCallback(() => {
    setMMAPopupOpen(false);
  }, []);

  const openWEIGHTLOSSPopup = useCallback(() => {
    setWEIGHTLOSSPopupOpen(true);
  }, []);

  const closeWEIGHTLOSSPopup = useCallback(() => {
    setWEIGHTLOSSPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.fitnesslandingpage}>
        <Header
          onHOMEClick={onHOMEClick}
          onFIGHTERSClick={onFIGHTERSClick}
          onACTIVITIESClick={onACTIVITIESClick}
          onCONTACTUSClick={onCONTACTUSClick}
        />
        <HeroSection />
        <div className={styles.ourfighters}>
          <div className={styles.aimToMake}>
            “Aim To make World Champion from Nepal.”
          </div>
          <img
            className={styles.a24074941Icon}
            alt=""
            src="/a2407494-1@2x.png"
          />
          <div
            className={styles.ourFighters}
            onClick={onOurFightersClick}
          >{`Our Fighters >>>`}</div>
        </div>
        <div className={styles.products}>
          <div className={styles.productframe}>
            <div className={styles.productdetails}>
              <div className={styles.producttitle}>
                <div className={styles.ourOfferings}>Our Offerings</div>
              </div>
              <div className={styles.productsubtitle}>
                <div className={styles.heresWhatWere}>
                  Here’s what we’re Offering to help deliver amazing
                  experiences.
                </div>
              </div>
            </div>
            <div className={styles.productscards}>
              <div className={styles.column1}>
                <div className={styles.productcard1}>
                  <img
                    className={styles.cardimageIcon}
                    alt=""
                    src="/cardimage@2x.png"
                  />
                  <div className={styles.text}>
                    <div className={styles.titles}>
                      <div className={styles.muayThai}>Muay Thai</div>
                      <button
                        className={styles.viewMore1}
                        onClick={openMUAYPopup}
                      >
                        View More
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.productcard1}>
                  <img
                    className={styles.cardimageIcon}
                    alt=""
                    src="/cardimage1@2x.png"
                  />
                  <div className={styles.text}>
                    <div className={styles.titles}>
                      <div className={styles.mma}>Mma</div>
                      <button
                        className={styles.viewMore1}
                        onClick={openMMAPopup}
                      >
                        View More
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.productcard1}>
                  <img
                    className={styles.cardimageIcon}
                    alt=""
                    src="/cardimage2@2x.png"
                  />
                  <div className={styles.text}>
                    <div className={styles.titles}>
                      <div className={styles.mma}>Weightloss Training</div>
                      <button
                        className={styles.viewMore1}
                        onClick={openWEIGHTLOSSPopup}
                      >
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FeedbackDemo />
          </div>
        </div>
        <div className={styles.trainers}>
          <div className={styles.trainerscta}>
            <div className={styles.ctaframe}>
              <div className={styles.title}>
                <h2 className={styles.ourQualifiedTrainers}>
                  Our Qualified Trainers
                </h2>
                <div className={styles.ourHighlyQualified}>
                  Our highly qualified trainers diligently attend to every
                  aspect of training, demonstrating exceptional skill and
                  expertise to ensure Aoptimal learning outcomes for all
                  participants.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tutorialimages}>
            <TutorialImageGroup />
            <div className={styles.tutorialtablet}>
              <div className={styles.tutorial3}>
                <img
                  className={styles.tutorial3Child}
                  alt=""
                  src="/group-142@2x.png"
                />
                <div className={styles.kosangRaiProfessionalContainer}>
                  <p className={styles.kosangRai}>
                    <span className={styles.kosangRai1}>
                      <span className={styles.kosangRai2}>Kosang Rai</span>
                    </span>
                  </p>
                  <p className={styles.blankLine}>
                    <span className={styles.kosangRai1}>
                      <span className={styles.blankLine2}>&nbsp;</span>
                    </span>
                  </p>
                  <p
                    className={styles.professionalMuayThai}
                  >{`Professional Muay Thai Athelete `}</p>
                  <p className={styles.professionalMuayThai}>
                    4 years on experience in Muay Thai
                  </p>
                </div>
              </div>
              <div className={styles.tutorial2}>
                <img
                  className={styles.tutorial2Child}
                  alt=""
                  src="/group-147@2x.png"
                />
                <div className={styles.kanchanRaiProfessionalMuayWrapper}>
                  <div className={styles.kanchanRaiProfessionalContainer}>
                    <p className={styles.kosangRai}>
                      <span className={styles.kosangRai1}>
                        <span className={styles.kosangRai2}>Kanchan Rai</span>
                      </span>
                    </p>
                    <p className={styles.blankLine}>
                      <span className={styles.kosangRai1}>
                        <span className={styles.blankLine2}>&nbsp;</span>
                      </span>
                    </p>
                    <p
                      className={styles.professionalMuayThai}
                    >{`Professional Muay Thai Athelete `}</p>
                    <p className={styles.professionalMuayThai}>
                      4 years on experience in Muay Thai
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.tutorial1}>
                <img
                  className={styles.tutorial1Child}
                  alt=""
                  src="/group-146@2x.png"
                />
                <div className={styles.rajuRaiWbcMuayThaiNationaWrapper}>
                  <div className={styles.kanchanRaiProfessionalContainer}>
                    <p className={styles.kosangRai}>
                      <span className={styles.kosangRai1}>
                        <span className={styles.kosangRai2}>Raju Rai</span>
                      </span>
                    </p>
                    <p className={styles.blankLine}>
                      <span className={styles.kosangRai1}>
                        <span className={styles.blankLine2}>&nbsp;</span>
                      </span>
                    </p>
                    <p className={styles.professionalMuayThai}>
                      WBC Muay Thai national champion
                    </p>
                    <p className={styles.professionalMuayThai}>
                      3 times national champion
                    </p>
                    <p
                      className={styles.professionalMuayThai}
                    >{`14 years of experience in Muay Thai `}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div  className={styles.mapContainer}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.1240904665597!2d85.3381430762592!3d27.744318323858508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ddb88be245%3A0xbbd93e37fb5d0924!2sErawan%20Muay%20Thai%20Fight%20Gym!5e0!3m2!1sen!2snp!4v1717942616476!5m2!1sen!2snp" 
        className={styles.mapIframe}
        style={{ border: 0 }} 
        allowFullScreen={true}
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
        <Footer
          trainingImage="/trainingimage@2x.png"
          propHeight="unset"
          onPhoneNumber977Click={onPhoneNumber977Click}
          onWhatsapp977Click={onWhatsapp977Click}
          onErawanmuaythaifightgymgmailcTextClick={
            onErawanmuaythaifightgymgmailcTextClick
          }
          onItemClick={onItemClick}
          onItem1Click={onItem1Click}
          onItem2Click={onItem2Click}
        />
      </div>
      {isMUAYPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMUAYPopup}
        >
          <MUAY onClose={closeMUAYPopup} />
        </PortalPopup>
      )}
      {isMMAPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMMAPopup}
        >
          <MMA onClose={closeMMAPopup} />
        </PortalPopup>
      )}
      {isWEIGHTLOSSPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeWEIGHTLOSSPopup}
        >
          <WEIGHTLOSS onClose={closeWEIGHTLOSSPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default FitnessLandingPage;
