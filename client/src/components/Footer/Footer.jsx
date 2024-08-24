import "./Footer.css";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { MdFacebook } from "react-icons/md";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <footer>
      <h1>CONNECT WITH US</h1>
      <h2>
        <Typewriter
          options={{
            strings: [
              "#facebook",
              "#twitter",
              "#instagram",
              "#youtube",
              "#github",
              "#linkdin",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <p>Copyright &copy; {new Date().getFullYear()}, Rahul&Sadaf</p>
      <NavLink
        target="_blank"
        to="https://www.facebook.com/profile.php?id=61550354745517&mibextid=ZbWKwL"
      >
        {" "}
        <MdFacebook size={25} />{" "}
      </NavLink>
      <NavLink target="_blank" to="https://twitter.com/KumarRk5696608">
        {" "}
        <AiFillTwitterCircle size={25} />{" "}
      </NavLink>
      <NavLink target="_blank" to="https://www.instagram.com/codewithrk7/">
        {" "}
        <AiFillInstagram size={25} />{" "}
      </NavLink>
      <NavLink
        target="_blank"
        to="https://www.youtube.com/channel/UCwJoFLmJWEk62IWEnjP4vBA"
      >
        {" "}
        <AiFillYoutube size={25} />{" "}
      </NavLink>
      <NavLink target="_blank" to="https://github.com/codewithrk7">
        {" "}
        <AiFillGithub size={25} />{" "}
      </NavLink>
      <NavLink
        target="_blank"
        to="https://www.linkedin.com/in/codewithrk7-rahul-76b66a279/"
      >
        {" "}
        <AiFillLinkedin size={25} />{" "}
      </NavLink>
    </footer>
  );
};
