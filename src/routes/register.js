import classes from "./registerPage.module.css";
import iconIg from "../assets/instagram.svg";
import iconTw from "../assets/twitter.svg";
import iconYt from "../assets/youtube.svg";

import s_biswas from "../assets/s-biswas.webp";
import s_csm from "../assets/s-csm.webp";
import s_edevlop from "../assets/s-edevlop.webp";
import s_jyotemotors from "../assets/s-jyotemotors.webp";
import s_navbharat from "../assets/s-navbharat.webp";
import s_ocac from "../assets/s-ocac.webp";
import s_omc from "../assets/s-omc.webp";
import s_pantaloons from "../assets/s-pantaloons.webp";
import s_printlink from "../assets/s-printlink.webp";
import s_rungta from "../assets/s-rungta.webp";
import s_wizertech from "../assets/s-wizertech.webp";
import s_dell from "../assets/s-dell.webp";
import s_hp from "../assets/s-hp.webp";
import s_insidefpv from "../assets/s-insidefpv.webp";
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

let sponsorData1 = [{ img: s_ocac, link: "https://www.ocac.in" }];
let sponsorData2 = [{ img: s_omc, link: "https://omcltd.in" }];
let sponsorData3 = [
  { img: s_biswas, link: "http://www.bssindia.in" },
  { img: s_csm, link: "https://www.csm.tech" },
  { img: s_edevlop, link: "https://edevlop.com" },
  { img: s_jyotemotors, link: "https://jyote.com" },
  { img: s_navbharat, link: "https://navbharattimes.indiatimes.com" },
  { img: s_pantaloons, link: "https://www.pantaloons.com" },
  { img: s_printlink, link: "https://www.printlinkindia.com" },
  { img: s_rungta, link: "" },
  { img: s_wizertech, link: "https://wizertech.com" },
  { img: s_hp, link: "https://www.hp.com" },
  { img: s_dell, link: "https://www.dell.com" },
];
let sponsorData4 = [{ img: s_insidefpv, link: "https://insidefpv.com" }];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(sponsorData1);
shuffleArray(sponsorData2);
shuffleArray(sponsorData3);
shuffleArray(sponsorData4);

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

        <iframe src="https://konfhub.com/widget/advaita-24" id="konfhub-widget" title="Register for Advaita-2024" width="99%" height="1000" style={{ marginTop: '160px', marginBottom: '90px' }}></iframe>
      </section>
    </div>
  );
}
