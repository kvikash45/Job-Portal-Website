import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className=" w-full text-center bg-blue-950 flex p-3 pt-1 flex-col">
      <div className="font-bold text-slate-50 text-lg m-5">&copy; All Rights Reserved By <span className="text-orange-400">Vikash Kumar</span>.</div>
      <div className="flex justify-around pb-6 ">
        <Link className="animate-bounce text-slate-50" to={"https://www.facebook.com/kvikash45/"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link className="animate-bounce text-slate-50" to={"https://www.linkedin.com/in/vikash-kumar-89b378226//"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link className="animate-bounce text-slate-50" to={"https://www.instagram.com/kvikash45/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
