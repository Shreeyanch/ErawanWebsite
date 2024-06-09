import type { NextPage } from "next";
import { useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./enroll-form.module.css";

const EnrollForm: NextPage = () => {
  const router = useRouter();

  const onHOMEClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onFIGHTERSClick = useCallback(() => {
    router.push("/page");
  }, [router]);

  const onACTIVITIESClick = useCallback(() => {
    // Please sync "Page 2" to the project
  }, []);

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
    <div className={styles.enrollform}>
      <Header
        onHOMEClick={onHOMEClick}
        onFIGHTERSClick={onFIGHTERSClick}
        onACTIVITIESClick={onACTIVITIESClick}
        onCONTACTUSClick={onCONTACTUSClick}
      />
      <div className={styles.shareYourTravelsForm}>
        <div className={styles.formHeader}>
          <div className={styles.formTitle}>Get in Touch</div>
        </div>
        <form className={styles.form}>
          <div className={styles.formFields}>
            <div className={styles.nameInput}>
              <TextField
                className={styles.input}
                color="primary"
                name="Name"
                label="Name"
                required={true}
                variant="outlined"
                sx={{ "& .MuiInputBase-root": { height: "56px" } }}
              />
            </div>
            <div className={styles.nameInput}>
              <TextField
                className={styles.input}
                color="primary"
                name="PhoneNumber"
                label="Phone Number"
                size="medium"
                required={true}
                variant="outlined"
                type="text"
                sx={{ "& .MuiInputBase-root": { height: "56px" } }}
              />
            </div>
            <div className={styles.nameInput}>
              <TextField
                className={styles.input2}
                color="primary"
                name="Description"
                rows={4}
                label="Description"
                required={true}
                variant="outlined"
                multiline
              />
            </div>
          </div>
          <button className={styles.formSubmitButton}>
            <div className={styles.submit}>Submit</div>
          </button>
        </form>
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
  );
};

export default EnrollForm;
