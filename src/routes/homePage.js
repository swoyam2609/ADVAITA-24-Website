import classes from "./homePage.module.css";
import iconIg from "../assets/instagram.svg";
import iconTw from "../assets/twitter.svg";
import iconYt from "../assets/youtube.svg";
import dateImg from "../assets/date.webp";
import sponsorsImg from "../assets/sponsors.webp";


// import bb from "../assets/bb.jpg";
import bsnl from "../assets/webp sponsor/bsnl.webp";
import dalmia from "../assets/webp sponsor/dalmia.webp";
// import eodisha from "../assets/eodisha.jpg";
import honda from "../assets/webp sponsor/honda.webp";
import info from "../assets/webp sponsor/info.webp";
import jbs from "../assets/webp sponsor/jbs.webp";
import jindal from "../assets/webp sponsor/jindal.webp";
import kfc from "../assets/webp sponsor/kfc.webp";
import lok from "../assets/webp sponsor/lok.webp";
import madman from "../assets/webp sponsor/madmen.webp";
import mcd from "../assets/webp sponsor/mcd.webp";
import ino from "../assets/webp sponsor/ino.webp";
import pcc from "../assets/webp sponsor/pcc.webp";
import ppl from "../assets/webp sponsor/PPL.webp";
import secu from "../assets/webp sponsor/SECU.webp";
// import esp from "../assets/esplanade.jpg";



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
import s_innovaare from "../assets/s-innovaare.png";


import e0thumb from "../assets/e0thumb.webp";
import e1thumb from "../assets/e1thumb.webp";
import e2thumb from "../assets/5.png";
import e3thumb from "../assets/e3thumb.webp";
import e4thumb from "../assets/e4thumb.webp";
import e5thumb from "../assets/e5thumb.webp";
import e7thumb from "../assets/e7thumb.webp";

import pn from "../assets/pn.webp";
import pnDj from "../assets/pn_dj.webp";
import lk from "../assets/Laqshay Kapoor.png";
import pnRockathon from "../assets/pn_rockathon.webp";
import pnBand from "../assets/pn_band.webp";

import { useLottie } from "lottie-react";
import logoAnim from "../assets/logoanimBright.json";

import AngleButton from "../components/angleButton";
import PopBox from "../components/popbox";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
} from "swiper/core";
import "swiper/swiper-bundle.css";
import "./swiperCustom.css";
import { useMediaQuery } from "react-responsive";
import { HashLink } from "react-router-hash-link";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

let swiperCardCount = 0;
function swiperCard(img, linkto, title, subtitle) {
  return (
    <SwiperSlide key={`slide-${swiperCardCount}`} style={{ listStyle: "none" }}>
      <HashLink
        style={{ textDecoration: "inherit", color: "inherit" }}
        to={linkto}
      >
        <div className={classes.sliderCard}>
          <img src={img} alt="slider" />
          <div className={classes.sliderCardOverlay} />
          <div className={classes.sliderCardText}>
            <div>{subtitle}</div>
            <div>
              <span className={classes.sliderTextLine} />
              {title}
            </div>
          </div>
        </div>
      </HashLink>
    </SwiperSlide>
  );
}

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

function sponsorCard(img, link) {
  return (
    <div className={classes.sponsorCardWrap}>
      <a rel="noreferrer" target="_blank" href={link}>
        <div className={classes.sponsorCard}>
          <img src={img} alt="sponsor" />
          <div className={classes.sponsorCardOverlay} />
        </div>
      </a>
    </div>
  );
}

let sponsorData1 = [{ img: secu }];
let sponsorData2 = [{ img: bsnl }];
let sponsorData3 = [

  { img: jbs},
  
  { img: honda },
  { img: info },
  
  { img: kfc },
  { img: jindal},
  { img: lok },
  { img: madman },
  { img: mcd},
  
  { img: pcc },
  { img: ppl },
  { img: ino },

  { img: s_biswas, link: "http://www.bssindia.in" },
  { img: s_csm, link: "https://www.csm.tech" },
  { img: s_edevlop, link: "https://edevlop.com" },
  { img: s_innovaare, link: "https://www.inovaare.com/" },
  { img: s_jyotemotors, link: "https://jyote.com" },
  { img: s_navbharat, link: "https://navbharattimes.indiatimes.com" },
  { img: s_pantaloons, link: "https://www.pantaloons.com" },
  { img: s_printlink, link: "https://www.printlinkindia.com" },
  { img: s_rungta, link: "" },
  { img: s_wizertech, link: "https://wizertech.com" },
  { img: s_hp, link: "https://www.hp.com" },
  { img: s_dell, link: "https://www.dell.com" },

];
let sponsorData4 = [{ img: dalmia }];

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

export default function HomePage() {
  const options = {
    animationData: logoAnim,
    loop: true,
  };
  const { View } = useLottie(options);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const slides1 = useMediaQuery({ query: "(max-width:1050px)" });

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
            href="https://www.youtube.com/@AdvaitaIIITBhubaneswar"
          >
            <img src={iconYt} alt="social" />
          </a>
        </div>

        <div className={classes.rightVertical}>IIIT BHUBANESWAR, ODISHA</div>

        <div className={classes.lottieAnim}>{View}</div>
        <motion.div
          viewport={{ once: true }}
          initial={{ transform: "translateY(-10rem) scale(0)", opacity: 0 }}
          whileInView={{ transform: "translateY(0rem) scale(1)", opacity: 1 }}
          transition={{ duration: 2, type: "spring" }}
          className={classes.dateHero}
        >
          <img src={dateImg} alt="3 to 5 March" />
        </motion.div>
      </section>

      <section className={classes.aboutSection}>
        <div className={classes.aboutText}>
          <div>
            <div>2K24</div>
            <motion.div
              viewport={{ once: true }}
              initial={{ transform: "translateX(-10rem)", opacity: 0 }}
              whileInView={{ transform: "translateX(-3rem)", opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              <div>ADVAITA</div>
              <div> A STELLER REVERIE</div>
            </motion.div>
          </div>
          <div>
            Advaita, the annual techno-cultural fest of IIIT Bhubaneswar, is
            organized in the first week of March spanning over four days and
            four nights. Commenced with a motto of providing technocrats all
            over the country, a platform to showcase their technical skills and
            talent, Advaita has come a long way over the years since its
            inception.It is one of the eminent fests in the eastern region of
            the Indian subcontinent today which has made an impact on several
            college students across the country.
          </div>
          <div className={classes.headerBtns}>
            <motion.div
              viewport={{ once: true }}
              initial={{ transform: "translateX(-6rem)", opacity: 0 }}
              whileInView={{ transform: "translateX(-0.5rem)", opacity: 1 }}
              transition={{ duration: 2, type: "spring", delay: 0.15 }}
            >
              <HashLink to="/events#">
                <AngleButton text="EVENTS SCHEDULE" />
              </HashLink>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{ transform: "translateX(-6rem)", opacity: 0 }}
              whileInView={{ transform: "translateX(-0.5rem)", opacity: 1 }}
              transition={{ duration: 2, type: "spring", delay: 0.15 }}
            >
              <HashLink to="/register#">
                <AngleButton text="REGISTER" />
              </HashLink>
            </motion.div>
          </div>
          <div className={classes.headerBtns} style={{ marginTop: "1rem" }}>
            <motion.div
              viewport={{ once: true }}
              initial={{ transform: "translateX(-6rem)", opacity: 0 }}
              whileInView={{ transform: "translateX(-0.5rem)", opacity: 1 }}
              transition={{ duration: 2, type: "spring", delay: 0.15 }}
            >
              <HashLink to="/merch#">
                <AngleButton text="MERCHANDISE" />
              </HashLink>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={classes.countSection} ref={ref}>
        <div className={classes.countWrap}>
          <div>{isInView ? <CountUp end={15} duration={1} /> : null}</div>
          <div>
            FUN
            <br />
            EVENTS
          </div>
        </div>
        <div className={classes.countWrap}>
          <div>
            {isInView ? <CountUp end={3} duration={0.3} delay={0.2} /> : null}
          </div>
          <div>
            PRO
            <br />
            SHOWS
          </div>
        </div>
        <div className={classes.countWrap}>
          <div>
            {isInView ? <CountUp end={10} duration={1} delay={0.4} /> : null}
          </div>
          <div>
            TECHNICAL
            <br />
            EVENTS
          </div>
        </div>
        <div className={classes.countWrap}>
          <div>
            {isInView ? <CountUp end={10} duration={1} delay={0.6} /> : null}
          </div>
          <div>
            CULTURAL
            <br />
            EVENTS
          </div>
        </div>
      </section>

      <section className={classes.videosection}>
        <motion.div
          viewport={{ once: true }}
          initial={{ transform: "translateX(6rem)", opacity: 0 }}
          whileInView={{ transform: "translateX(0rem)", opacity: 1 }}
          transition={{ duration: 1.5, type: "spring" }}
          className={classes.videosecTitle}
        >
          <div>
            A GLIMPSE INTO
            <br /> A STELLER REVERIE
          </div>
          <div>#ADVAITA</div>
        </motion.div>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.youtube.com/watch?v=FFiK2wsTXVs"
        >
          <div className={classes.ytvideo}>
            <div />
            <div>
              <img src={iconYt} alt="youtube" />
            </div>
          </div>
        </a>
        <div className={classes.swiperWrap}>
          <Swiper
            className={classes.swiper}
            id="swiper"
            slidesPerView={slides1 ? 1 : 2}
            spaceBetween={0}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop
          >
            {swiperCard(
              e0thumb,
              "/#pronights",
              "PRONIGHTS",
              "Experience the thrill at concerts featuring some of India's finest musicians, comedians, and DJs"
            )}
            {swiperCard(
              e1thumb,
              "/events#technical_events",
              "TECHNICAL EVENTS",
              "Explore your tech prowess in a series of challenging and innovative events"
            )}
            {swiperCard(
              e2thumb,
              "/events#cultural_events",
              "CULTURAL, FILM AND THEATRE",
              "Showcase your talent with a captivating voice or ignite the stage with your mesmerizing dance moves"
            )}
            {swiperCard(
              e3thumb,
              "/events#cultural_events",
              "MANAGEMENT AND ART",
              "Combine charm and skill—whether it's through your voice or dance—to leave a lasting impression on the stage"
            )}
            {swiperCard(
              e4thumb,
              "/events#art_events",
              "FOOD AND SPORTS",
              "Discover art in unexpected places, and gamers, get ready to compete for victory with a spirited 'GG'"
            )}
            {swiperCard(
              e5thumb,
              "/events#photography_events",
              "PHOTOGRAPHY AND CSR",
              "Capture the boundless possibilities of the world through the lens and contribute to meaningful causes"
            )}
            {swiperCard(
              e7thumb,
              "/events#social_connect",
              "SOCIAL CONNECT",
              "Support important causes and make a positive impact in the community through social initiatives"
            )}
          </Swiper>
        </div>
      </section>

      <section className={classes.sponsorsSection} id="sponsors">
        <motion.div
          viewport={{ once: true }}
          initial={{ transform: "translateY(6rem)", opacity: 0 }}
          whileInView={{ transform: "translateY(0rem)", opacity: 1 }}
          transition={{ duration: 1.5, type: "spring" }}
        >
          <img src={sponsorsImg} alt="Sponsors" />
        </motion.div>
        <div className={classes.sponsorTitle}>
          <span style={{ color: "white" }}>EVENT</span>
          <br /> PARTNER
        </div>
        <div className={classes.sponsorsWrap + " " + classes.fullWidth}>
          {sponsorData1.map((e) => sponsorCard(e.img, e.link))}
        </div>
        <div className={classes.sponsorTitle}>
          <span style={{ color: "white" }}>NETWORKING</span>
          <br /> PARTNER
        </div>
        <div className={classes.sponsorsWrap + " " + classes.fullWidth}>
          {sponsorData2.map((e) => sponsorCard(e.img, e.link))}
        </div>
        <div className={classes.sponsorTitle}>
          <span style={{ color: "white" }}>OTHER</span>
          <br /> SPONSORS
        </div>
        <div className={classes.sponsorsWrap}>
          {sponsorData3.map((e) => sponsorCard(e.img, e.link))}
        </div>
        {/* <div className={classes.sponsorTitle}>
          <span style={{ color: "white" }}>DRONE</span>
          <br /> PARTNER
        </div> */}
        <div className={classes.sponsorsWrap}>
          {sponsorData4.map((e) => sponsorCard(e.img, e.link))}
        </div>
        <motion.div
          viewport={{ once: true }}
          initial={{ transform: "translateY(6rem)", opacity: 0 }}
          whileInView={{ transform: "translateY(0rem)", opacity: 1 }}
          transition={{ duration: 1.5, type: "spring" }}
        >
          <HashLink to="/sponsors#">
            <AngleButton text="SPONSOR US" />
          </HashLink>
        </motion.div>
      </section>

      <section className={classes.proNights} id="pronights">
        <div className={classes.proNightsTitle}>
          <motion.div
            viewport={{ once: true }}
            initial={{ transform: "translateX(6rem)", opacity: 0 }}
            whileInView={{ transform: "translateX(0rem)", opacity: 1 }}
            transition={{ duration: 1.5, type: "spring" }}
          >
            PRO-NIGHTS
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
            pnRockathon,
            "28TH FEB - 7:00 PM",
            "ROCKATHON",
            "BAND BATTLE",
            "Amplify the energy and strike a chord at ROCKATHON, where bands collide in a symphony of fierce competition! Unleash the power of your music, own the stage, and let your sound echo through the halls of ROCKATHON."
          )}
          {proNightsCard(
            pnDj,
            "29TH FEB - 8:00 PM",
            "EDM NIGHT",
            "EDM",
            "Get into the rhythm at EDM Night! Dance the night away to the hottest beats as our DJ Swattrex create an infectious atmosphere, blending the latest tracks and timeless favorites."
          )}
          {proNightsCard(
            lk,
            "29TH FEB - 8:00 PM",
            "BAND NIGHT",
            "CONCERT",
            "Groove to the beat at Band Night! Join us for an electrifying showcase of live music, featuring talented bands across genres. Get ready to tap your feet and let the music take over."
          )}
          {proNightsCard(
            pn,
            "1ST MARCH - 7:00 PM",
            "FINAL SHOWDOWN",
            "MUSIC",
            "Immerse yourself in a live musical experience at our Artist Concert. From chart-toppers to emotional ballads, join us for a night of soulful performances that resonate with the heart and leave a lasting impression."
          )}
          {proNightsCard(
            pnBand,
            "2ND MARCH - 7:00 PM",
            "BAND NIGHT",
            "CONCERT",
            "Groove to the beat at Band Night! Join us for an electrifying showcase of live music, featuring talented bands across genres. Get ready to tap your feet and let the music take over."
          )}
        </div>
      </section>

      <form className={classes.contact} id="contacts" onSubmit={sendMessage}>
        <div className={classes.contactBar} />
        <motion.div
          viewport={{ once: true }}
          initial={{ transform: "translateX(6rem)", opacity: 0 }}
          whileInView={{ transform: "translateX(0rem)", opacity: 1 }}
          transition={{ duration: 1.5, type: "spring" }}
          className={classes.contactHeader}
        >
          CONTACT US
        </motion.div>
        <div className={classes.textArea}>
          <input
            name="subject"
            type="text"
            size="40"
            maxLength="200"
            required
            placeholder="Subject"
          />
        </div>
        <div className={classes.textArea}>
          <textarea
            name="message"
            cols="40"
            rows="5"
            required
            placeholder="Write your message"
          />
        </div>
        <div className={classes.nameemail}>
          <div className={classes.textArea}>
            <input
              name="name"
              type="text"
              size="40"
              maxLength="150"
              required
              placeholder="Your name"
            />
          </div>
          <div className={classes.textArea}>
            <input
              name="email"
              type="email"
              size="40"
              maxLength="150"
              required
              placeholder="Your email"
            />
          </div>
        </div>
        {contactBtnText === "SEND MESSAGE" ||
        contactBtnText === "SENDING..." ? null : (
          <div
            className={classes.contactAlert}
            style={{
              borderLeft:
                contactBtnText === "MESSAGE SENT ✅"
                  ? "0.4rem solid #00d26a"
                  : "0.4rem solid #f3223a",
            }}
          >
            {contactBtnText === "MESSAGE SENT ✅"
              ? "Your message has been sent. The Advaita Mail Man is on the way :)"
              : "Something went wrong! Please send us an email instead to advaita@iiit-bh.ac.in"}
          </div>
        )}
        <motion.div
          viewport={{ once: true }}
          initial={{ transform: "translateX(-6rem)", opacity: 0 }}
          whileInView={{ transform: "translateX(0rem)", opacity: 1 }}
          transition={{ duration: 1.5, type: "spring" }}
        >
          <button type="submit">
            <AngleButton text={contactBtnText} />
          </button>
        </motion.div>
      </form>
    </div>
  );
}
