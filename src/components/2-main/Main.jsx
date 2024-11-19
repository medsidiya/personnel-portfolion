import Lottie from 'lottie-react';
import './main.css';
import landingAnimation from "../../animation/landing2.json";
import { GradualSpacing } from './GradualSpacing';
import { StaggeredFade } from '../StaggeredFade';

function Main() {
    return (
      <main className="flex ">
        <section className="left-section">
          <StaggeredFade text="Hello it's me" className="title" />
          <StaggeredFade text="Mohamed sidiya" className="l" />

          <h2>
            And i'm <span>full-stack developer</span>
          </h2>
          <GradualSpacing text="passionate about creating engaging digital experiences." />
          <div
            className="icons flex"
            style={{ alignItems: "flex-start", justifyContent: "start" }}
          >
            <div className="icon-linkedin"></div>
            <div className="icon-github"></div>
            <div className="icon-instagram"></div>
            <div className="icon-twitter"></div>
          </div>
          <div className="cv">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button>My Resume</button>
            </a>
          </div>
        </section>
        <section className="rigth-section">
          {/* <img className='avatar'  src="./public/me.png" alt="profile" /> */}
          <Lottie
            className="main-animation"
            style={{ height: 400 }}
            animationData={landingAnimation}
          />
        </section>
      </main>
    );
}

export default Main;