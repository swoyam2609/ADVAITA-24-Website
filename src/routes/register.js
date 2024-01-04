import classes from "./registerPage.module.css";
import iconIg from "../assets/instagram.svg";
import iconTw from "../assets/twitter.svg";
import iconYt from "../assets/youtube.svg";

import PopBox from "../components/popbox";

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

export default function RegisterPage() {

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

        <iframe className={classes.iframe} src="https://konfhub.com/widget/advaita-24" id="konfhub-widget" title="Register for Advaita-2024"  scrolling="no"></iframe>
      </section>
    </div>
  );
}
