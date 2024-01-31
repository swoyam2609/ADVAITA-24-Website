import AngleButton from "../angleButton";
import classes from "./index.module.css";
import { HashLink } from "react-router-hash-link";
import iconClose from "../../assets/close.svg";
import { useState } from "react";


export default function MerchPopup(props) {
    const [menuOpen, setMenuOpen] = useState(true);
    return (
        <>
        {menuOpen?
        <div className={classes.popup}>
            <div className={classes.popupText}>Buy our great merch!! Buy our great merch!!Buy our great merch!! Buy our great merch!! Buy our great merch!!</div>
            <HashLink to="/merch#" onClick={()=>setMenuOpen(false)}>
                <AngleButton text="MERCHANDISE" />
            </HashLink>
            <img onClick={()=>setMenuOpen(false)} src={iconClose} alt="close" />
        </div>:null}
        </>
  );
}
