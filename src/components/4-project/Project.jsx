import { useState } from "react";
import "./project.css";
import {myProjects} from "./myProjects.js";
import { AnimatePresence, motion } from "framer-motion";

function Project() {
    const [arr , setArr] = useState(myProjects);
    const [currentActive , setCurrentActive] = useState("all");

    function handleActive(current){

        setCurrentActive(current);


            const newArr = myProjects.filter((item)=>{
                return item.category.find((i)=>{
                    return i === current;
                });
            });
    
            setArr(newArr);

    }
    return (
      <section className="project">
        <div className="flex">
          <h1 className="main-title">myProjects</h1>
        </div>
        <section className="flex">
          <section className="left-section">
            <button
              onClick={() => {
                handleActive("all"), setArr(myProjects);
              }}
              className={currentActive == "all" ? "active" : null}
            >
              All Project
            </button>
            <button
              onClick={() => {
                handleActive("css");
              }}
              className={currentActive == "css" ? "active" : null}
            >
              Html & Css
            </button>
            <button
              onClick={() => {
                handleActive("js");
              }}
              className={currentActive == "js" ? "active" : null}
            >
              Java script
            </button>
            <button
              onClick={() => {
                handleActive("react");
              }}
              className={currentActive == "react" ? "active" : null}
            >
              React
            </button>
            <button
              onClick={() => {
                handleActive("laravel");
              }}
              className={currentActive == "laravel" ? "active" : null}
            >
              Laravel
            </button>
            <button
              onClick={() => {
                handleActive("bootstrap");
              }}
              className={currentActive == "bootstrap" ? "active" : null}
            >
              Bootstrap
            </button>
            <button
              onClick={() => {
                handleActive("flutter");
              }}
              className={currentActive == "flutter" ? "active" : null}
            >
              Flutter
            </button>
          </section>
          <section className="right-section">
            <AnimatePresence>
              {arr.map((item) => {
                return (
                  <motion.article
                    layout
                    initial={{ transform: "scale(0.4)" }}
                    animate={{ transform: "scale(1)" }}
                    rotate={1}
                    transition={{ type: "spring", damping: 8, stiffness: 50 }}
                    key={item.category}
                  >
                    <div className="card">
                      <img src={item.imgPath} className="card-image" alt="" />
                      <div className="box">
                        <h1 className="title">{item.projectTitle}</h1>
                        <p className="subtitle">
                          this is the first project that i made using html and
                          css it's about a hotale rservation just front end
                        </p>
                        <div className="icons flex">
                          <a href="http://">
                            <span className="icon-link see"></span>
                          </a>
                          <a href="http://">
                            <span className="icon-github"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </section>
        </section>
      </section>
    );
}

export default Project;