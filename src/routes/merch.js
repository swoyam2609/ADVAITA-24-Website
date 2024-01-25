import classes from "./merchPage.module.css";
import iconIg from "../assets/instagram.svg";
import iconTw from "../assets/twitter.svg";
import iconYt from "../assets/youtube.svg";

import { HashLink } from "react-router-hash-link";

import sweatshirt from "../assets/Sweatshirt.png";
import tshirt from "../assets/tshirt-I.png";
import tshirt2 from "../assets/tshirt-II.png";

import AngleButton from "../components/angleButton";

import PopBox from "../components/popbox";

import { motion } from "framer-motion";

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

export default function MerchPage() {
  const [popUp, setPopUp] = useState(false);

  return (
    <div className={classes.homePage}>
      <PopBox setPopUp={setPopUp} popUp={popUp} />
      <section className={classes.hero}>
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
            href="https://youtube.com/channel/UCkULTsUj0_Ukm9DWOtin5yw"
          >
            <img src={iconYt} alt="social" />
          </a>
        </div>

        <div className={classes.rightVertical}>IIIT BHUBANESWAR, ODISHA</div>

        <motion.div className={classes.merchandise}>
          <p>Advaita'24 Official Merchandise</p>
          <p>Lost in Nebulae SWEATSHIRT</p>
          <img src={sweatshirt} alt="merch" />
          <p>AstroRide T-SHIRT</p>
          <img src={tshirt} alt="merch" />
          <p>Chilling on Saturn T-SHIRT</p>
          <img src={tshirt2} alt="merch" />
          <motion.div className={classes.buyNow}>
            <HashLink
              style={{ textDecoration: "inherit", color: "inherit" }}
              to="/events#"
            >
              <AngleButton text="BUY NOW" />
            </HashLink>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
