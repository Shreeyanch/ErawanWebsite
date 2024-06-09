import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../components/header";
import PopularExercises from "../components/popular-exercises";
import Footer from "../components/footer";
import styles from "./page.module.css";

const Page: NextPage = () => {
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
    <div className={styles.page3}>
      <Header
        onHOMEClick={onHOMEClick}
        onFIGHTERSClick={onFIGHTERSClick}
        onACTIVITIESClick={onACTIVITIESClick}
        onCONTACTUSClick={onCONTACTUSClick}
      />
      <div className={styles.ourFightersParent}>
        <div className={styles.ourFighters}>Our Fighters</div>
        <div className={styles.popularexercisessection}>
          <PopularExercises />
        </div>
      </div>
      <Footer
        trainingImage="/trainingimage@2x.png"
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

export default Page;
