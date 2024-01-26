import classes from "./homePage.module.css";
import iconIg from "../assets/instagram.svg";
import iconTw from "../assets/twitter.svg";
import iconYt from "../assets/youtube.svg";


import pn from "../assets/pn.webp";

import { useLottie } from "lottie-react";
import logoAnim from "../assets/logoanimBright.json";

import AngleButton from "../components/angleButton";
import PopBox from "../components/popbox";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { useState } from "react";


import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
} from "swiper/core";
import "swiper/swiper-bundle.css";
import "./swiperCustom.css";
import { useMediaQuery } from "react-responsive";


SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);


function proNightsCard(img, details, title, subtitle, desc) {
  return (
    <div className={classes.sliderCard + " " + classes.proCard}>
      <img src={img} alt="slider" />
      <div className={classes.sliderCardOverlay} />
      <div
        className={classes.sliderCardOverlay + " " + classes.proCardOverlay}
      />
      <div className={classes.sliderCardText}>
        <div>
          <span>{subtitle}</span>
          <br />
          <b style={{ color: "white" }}>{details}</b>
        </div>
        <div>
          <span className={classes.sliderTextLine} />
          {title}
        </div>
      </div>
      <div className={classes.proCardDesc}>{desc}</div>
    </div>
  );
}






export default function HomePage() {


  const [contactBtnText, setcontactBtnText] = useState("SEND MESSAGE");
  const [popUp, setPopUp] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    setcontactBtnText("SENDING...");
    const data = {
      subject: e.target[0].value,
      message: e.target[1].value,
      name: e.target[2].value,
      email: e.target[3].value,
    };
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    console.log(settings);
    try {
      const res = await fetch(
        "https://advaita24.swoyam.engineer/send-email/contact-us",
        settings
      );
      setcontactBtnText(res.status === 200 ? "MESSAGE SENT ✅" : "ERROR ⛔");
    } catch (e) {
      setcontactBtnText("ERROR ⛔");
    }
  };

  return (
    <div className={classes.homePage}>
      <PopBox setPopUp={setPopUp} popUp={popUp} />
     
        <div className={classes.leftVertical}>
          <div>FOLLOW US ON: </div>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://instagram.com/advaita_iiitbh"
          >
            <img src={iconIg} alt="social" />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://facebook.com/advaita.iiit"
          >
            <img src={iconTw} alt="social" />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.youtube.com/@AdvaitaIIITBhubaneswar"
          >
            <img src={iconYt} alt="social" />
          </a>
        </div>

        <div className={classes.rightVertical}>IIIT BHUBANESWAR, ODISHA</div>

       
     
   

     


    

      

      <section className={classes.proNights} id="pronights">
        <div className={classes.proNightsTitle}>
          <motion.div
            viewport={{ once: true }}
            initial={{ transform: "translateX(6rem)", opacity: 0 }}
            whileInView={{ transform: "translateX(0rem)", opacity: 1 }}
            transition={{ duration: 1.5, type: "spring" }}
          >
            Advaita'24 Official Merchandise
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ transform: "translateY(3rem)", opacity: 0 }}
            whileInView={{ transform: "translateY(0rem)", opacity: 1 }}
            transition={{ duration: 1.2, type: "spring", delay: 0.2 }}
          >
            <span style={{ color: "white" }}>#</span> UNLEASH THE FUN
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ transform: "translateX(-6rem)", opacity: 0 }}
            whileInView={{ transform: "translateX(0rem)", opacity: 1 }}
            transition={{ duration: 1.5, type: "spring" }}
          >
            Vibe to the concerts of some of India's finest musicians, comedians,
            and DJs! Get ready to groove and make memories that'll last a
            lifetime. Not only will you breathe fun-filled flavours of air, and
            meet new people; but you'll also become a part of an ever-blossoming
            community of IIIT Bhubaneswar. So, buckle up and grab your squad and
            let the good vibes roll, adding an extra perfection to the hymn of
            your steps.
          </motion.div>
        </div>
        <div className={classes.proCardsWrap}>
          {proNightsCard(
            pn,
            "28TH FEB - 7:00 PM",
            "SURPRISE EVENT",
            "SURPRISE!",
            "Dive into the unknown with our Surprise Event! Brace yourself for an evening of mystery and joy as we unveil unexpected delights and unforgettable moments."
          )}
          {proNightsCard(
            pn,
            "29TH FEB - 7:00 PM",
            "BAND NIGHT",
            "CONCERT",
            "Groove to the beat at Band Night! Join us for an electrifying showcase of live music, featuring talented bands across genres. Get ready to tap your feet and let the music take over."
          )}
          {proNightsCard(
            pn,
            "1ST MARCH - 7:00 PM",
            "DJ NIGHT",
            "EDM",
            "Get into the rhythm at DJ Night! Dance the night away to the hottest beats as our skilled DJs create an infectious atmosphere, blending the latest tracks and timeless favorites."
          )}
          {proNightsCard(
            pn,
            "2ND MARCH - 7:00 PM",
            "FINAL SHOWDOWN",
            "MUSIC",
            "Immerse yourself in a live musical experience at our Artist Concert. From chart-toppers to emotional ballads, join us for a night of soulful performances that resonate with the heart and leave a lasting impression."
          )}
        </div>
      </section>

    
       
      
    </div>
  );
}
