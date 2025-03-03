import React from "react";
import gsap from "gsap";
import charliePic from "../assets/images/charlie-pic.png";
import { useGSAP } from "@gsap/react";

//<img src={charliePic} alt="me" className="h-150" />
const Hero = () => {
  useGSAP(() => {
    gsap.from("#name", {
      opacity: 0,
      duration: 1,
      delay: 0.25,
      y: 50,
      ease: "power3.out",
    });
    gsap.from("#major", {
      opacity: 0,
      duration: 1,
      delay: 0.5,
      y: 50,
      ease: "power3.out",
    });
    gsap.from("#school", {
      opacity: 0,
      duration: 1,
      delay: 0.75,
      y: 50,
      ease: "power3.out",
    });
    gsap.from("#img", {
      opacity: 0,
      duration: 1,
      delay: 0.25,
      y: 50,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="max-w-6xl py-30 flex justify-center items-center mx-auto">
      <div>
        <div className="rounded-2xl px-4 py-3 drop-shadow-2xl w-fit w-max-1/2 mb-5">
          <p
            id="name"
            style={{ fontFamily: "FuturaBold, sans-serif" }}
            className="text-7xl"
          >
            Charlie Edwards
          </p>

          <p
            id="major"
            style={{ fontFamily: "FuturaMedium, sans-serif" }}
            className="text-3xl"
          >
            Pursuing a B.S. in Computer Science
          </p>
          <p
            id="school"
            style={{ fontFamily: "FuturaMedium, sans-serif" }}
            className="text-3xl"
          >
            3rd year at UC Davis
          </p>
        </div>
      </div>
      <img
        id="img"
        src={charliePic}
        alt="charlie"
        className="w-1/2 max-h-150 object-contain"
      />
    </div>
  );
};

export default Hero;
