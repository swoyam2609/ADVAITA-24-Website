import classes from "./merchPage.module.css";
import iconIg from "../assets/instagram.svg";
import iconTw from "../assets/twitter.svg";
import iconYt from "../assets/youtube.svg";
import sweatshirt from "../assets/Sweatshirt.png";
import tshirt from "../assets/tshirt-I.png";
import tshirt2 from "../assets/tshirt-II.png";
import { HashLink } from "react-router-hash-link";

import AngleButton from "../components/angleButton";
import PopBox from "../components/popbox";

import { motion} from "framer-motion";

import { useState } from "react";

import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
} from "swiper/core";
import "swiper/swiper-bundle.css";
import "./swiperCustom.css";

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
  const [popUp, setPopUp] = useState(false);



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
            sweatshirt,
            "",
            "Lost in Nebulae SWEATSHIRT",
            "",
            "PRICE: ₹600/-"
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
          {proNightsCard(tshirt, "", "AstroRide T-SHIRT", "", "PRICE: ₹350/-")}
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
            tshirt2,
            "",
            "Chilling on Saturn T-SHIRT",
            "",
            "PRICE: ₹350/-"
          )}
        </div>
        <HashLink className={classes.angleButton} to="https://forms.gle/bpuhLopSVhDq67kL8" target="_blank">
          <AngleButton text="BUY NOW !" />
        </HashLink>
      </section>
    </div>
  );
}
