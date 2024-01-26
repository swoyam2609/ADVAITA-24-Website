import classes from "./merchPage.module.css";
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
        </div>
        <div className={classes.proNightsTitle1}>
          <motion.div
            viewport={{ once: true }}
            initial={{ transform: "translateX(6rem)", opacity: 0 }}
            whileInView={{ transform: "translateX(0rem)", opacity: 1 }}
            transition={{ duration: 1.5, type: "spring" }}
          >
            Lost in Nebulae SWEATSHIRT
          </motion.div>        
        </div>
       
        <div className={classes.proCardsWrap}>
          {proNightsCard(
            pn,
            "",
            "Lost in Nebulae SWEATSHIRT",
        "",
            "PRICE: ₹ XXX/-"
          )}
           <div className={classes.proNightsTitle2}>
          <motion.div
            viewport={{ once: true }}
            initial={{ transform: "translateX(6rem)", opacity: 0 }}
            whileInView={{ transform: "translateX(0rem)", opacity: 1 }}
            transition={{ duration: 1.5, type: "spring" }}
          >
           AstroRide T-SHIRT
          </motion.div>        
        </div>
          {proNightsCard(
            pn,
            "",
            "AstroRide T-SHIRT",
            "",
            "PRICE: ₹ XXX/-"
          )}
           <div className={classes.proNightsTitle2}>
          <motion.div
            viewport={{ once: true }}
            initial={{ transform: "translateX(6rem)", opacity: 0 }}
            whileInView={{ transform: "translateX(0rem)", opacity: 1 }}
            transition={{ duration: 1.5, type: "spring" }}
          >
            Chilling on Saturn T-SHIRT
          </motion.div>        
        </div>
          {proNightsCard(
            pn,
            "",
            "Chilling on Saturn T-SHIRT",
            "",
            "PRICE: ₹ XXX/-"
          )}
         
        </div>
      </section>

    
       
      
    </div>
  );
}
