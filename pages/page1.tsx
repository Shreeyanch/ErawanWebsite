import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../components/header";
import FeedbackDemo1 from "../components/feedback-demo1";
import Footer from "../components/footer";
import styles from "./page1.module.css";

const Page1: NextPage = () => {
  const router = useRouter();

  const onHOMEClick = useCallback(() => {
    router.push("/");
  }, [router]);

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

  return (
    <div className={styles.page4}>
      <Header
        onHOMEClick={onHOMEClick}
        onFIGHTERSClick={onFIGHTERSClick}
        onACTIVITIESClick={onACTIVITIESClick}
        onCONTACTUSClick={onCONTACTUSClick}
      />
      <div className={styles.activities}>Activities</div>
      <FeedbackDemo1
        screenshot20240606At14081="/screenshot-20240606-at-1408-1@2x.png"
        nepalsRajinaErawanIsPoise="Nepal’s Rajina Erawan is poised to make combat sports history in Tokyo on December 17. She will participating ina kickboxing match: under Kross-Over promotion, competing at 52kg. Having trained at Erawn Muay Thai fight gym for a year. Both of them are heading towards to Tokyo on December 13 to present Nepal with pride."
      />
      <FeedbackDemo1
        screenshot20240606At14081="/screenshot-20240606-at-1551@2x.png"
        nepalsRajinaErawanIsPoise="In 2024 Feb 1- 5 we successfully participated in Amazing Muay Thai world festival in lumpinee boxing Stadium Bangkok where our four official took part in referee and judge seminar and got certified from wbc Muay Thai which is sensational for Nepali ring officials"
        propWidth="312px"
        propHeight="289px"
        propDisplay="flex"
      />
      <FeedbackDemo1
        screenshot20240606At14081="/screenshot-20240606-at-1550@2x.png"
        nepalsRajinaErawanIsPoise="Barun Ghale TKO’s Thai fighter at Max Muay Thai."
        propWidth="312px"
        propHeight="302px"
        propDisplay="inline-block"
      />
      <FeedbackDemo1
        screenshot20240606At14081="/screenshot-20240606-at-15501@2x.png"
        nepalsRajinaErawanIsPoise="Raju Rai participated at FairTex Fight Night at Lumpinee Boxing Stadium, Bangkok"
        propWidth="312px"
        propHeight="302px"
        propDisplay="inline-block"
      />
      <FeedbackDemo1
        screenshot20240606At14081="/screenshot-20240606-at-15511@2x.png"
        nepalsRajinaErawanIsPoise="Three WBC athletes secure 3 silver medal at Thailand Cup tournament. Hosted By WBC Muay Thai"
        propWidth="308px"
        propHeight="295px"
        propDisplay="inline-block"
      />
      <FeedbackDemo1
        screenshot20240606At14081="/screenshot-20240606-at-15512@2x.png"
        nepalsRajinaErawanIsPoise="Barun Ghale TKO’s Thai Boxer At Rajadamnern (RWS) stadium 2 times ."
        propWidth="329px"
        propHeight="302px"
        propDisplay="inline-block"
      />
      <Footer
        trainingImage="/screenshot-20240513-at-1639-1@2x.png"
        propHeight="604px"
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
  );
};

export default Page1;
