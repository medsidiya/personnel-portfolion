
import { useState } from "react";
import "./header.css";
import Lottie from "lottie-react";
import logoAnimation from "../../animation/logo.json";

function Header() {
    const [showModel , setShowModel] = useState(false);

    return (
      <header>
        <div className="header flex ">
          <div className="logo">
            <Lottie
              className="contact-animation"
              style={{ height: 30 }}
             
              animationData={logoAnimation}
            />
          </div>
          <nav className="links flex">
            {/* <button className="icon-menu"></button> */}
            <ul className="flex">
              <li>
                <a className="active" href="">
                  Home
                </a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Project</a>
              </li>
              <li>
                <a href="">Skills</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
            <button
              className="icon-menu menu"
              onClick={() => {
                setShowModel(true);
              }}
            ></button>
          </nav>
        </div>
        {showModel && (
          <div className="popup">
            <ul className="modal">
              <li>
                <button
                  className="icon-close"
                  onClick={() => {
                    setShowModel(false);
                  }}
                />
              </li>

              <li>
                <a className="active" href="">
                  Home
                </a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Project</a>
              </li>
              <li>
                <a href="">Skills</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </header>
    );
}

export default Header;