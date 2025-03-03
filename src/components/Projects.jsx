import React, { useRef, useState } from "react";
import blackBasic from "../assets/images/black-basic.jpg";
import blackWild from "../assets/images/black-wild.jpg";
import whiteBasic from "../assets/images/white-basic.jpg";
import whiteWild from "../assets/images/white-wild.jpg";
import tanCrew from "../assets/images/tanCN.png";
import blueCrew from "../assets/images/blueCN.png";
import blackCrew from "../assets/images/blackCN.png";
//import day10 from "../assets/videos/day10.mp4";
import broad from "../assets/images/broad.jpg";
import day1 from "../assets/images/day1.jpg";
import day12 from "../assets/images/day12.jpg";
import day20 from "../assets/images/day20.jpg";
import DFT1 from "../assets/images/DFTBranding1.jpg";
import DFT2 from "../assets/images/DFTBranding2.jpg";

// Reusable Image & Video Slider Component
const ImageSlider = ({ media }) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = media.length;

  // Function to move to a specific slide
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.clientWidth * (slideIndex - 1),
        behavior: "smooth",
      });
    }
  };

  // Scroll Left
  const scrollLeft = () => {
    const newSlide = currentSlide > 1 ? currentSlide - 1 : totalSlides;
    goToSlide(newSlide);
  };

  // Scroll Right
  const scrollRight = () => {
    const newSlide = currentSlide < totalSlides ? currentSlide + 1 : 1;
    goToSlide(newSlide);
  };

  return (
    <section className="container">
      <div className="slider-wrapper">
        <button className="slider-arrow left" onClick={scrollLeft}>
          ❮
        </button>
        <div className="slider" ref={sliderRef}>
          {media.map((item, index) => (
            <div key={index} style={{ flexShrink: 0, width: "100%" }}>
              {/* Check if it's an image or video */}
              {typeof item !== "string" || item.includes(".mp4") ? (
                <video src={item} controls style={{ width: "100%" }} />
              ) : (
                <img
                  src={item}
                  alt={`Slide ${index + 1}`}
                  style={{ width: "100%" }}
                />
              )}
            </div>
          ))}
        </div>
        <button className="slider-arrow right" onClick={scrollRight}>
          ❯
        </button>
        <div className="slider-nav">
          {media.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index + 1)}
              className={currentSlide === index + 1 ? "active" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// <h3>A Creative Brand Rooted in Creativity and Craft</h3>
export const Projects = () => {
  return (
    <div>
      <section id="experience" />
      <h1>Experience</h1>

      <div className="max-w-6xl mx-auto py-10">
        <h2 className="text-left flex justify-between items-center">
          Wnderful Design <span className="text-3xl">(2022 - Present)</span>
        </h2>

        <h5 className="py-2">
          Wnderful Design is my creative brand, blending fashion, art, and
          visual storytelling. From clothing drops to digital art, every project
          reflects originality, craftsmanship, and bold design.
        </h5>
        <div className="px-5">
          <h3 className="mt-5">Clothing</h3>

          <h4 className="py-1">
            <svg
              className="inline w-6 h-6 text-white mr-2 relative top-[-3px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            2024 - 2 T-Shirts
          </h4>
          <ul className="text-3xl list-disc list-inside mx-10">
            <li>
              Led the <span className="font-bold">creative direction</span> for
              the collection, ensuring a cohesive aesthetic
            </li>
            <li>
              Focused on <span className="font-bold">storytelling</span> through
              visuals, making each piece feel part of a larger artistic concept{" "}
            </li>
            <li>
              Designed two t-shirts using{" "}
              <span className="font-bold">Adobe Illustrator</span> and{" "}
              <span className="font-bold">Blender</span>
            </li>
            <li>Screen printed every piece myself to ensure quality</li>

            <li>
              Built a <span className="font-bold">Shopify</span> website for
              sales and marketing
            </li>
          </ul>

          <ImageSlider media={[blackWild, whiteWild, blackBasic, whiteBasic]} />

          <h4 className="py-1 mt-5">
            <svg
              className="inline w-6 h-6 text-white mr-2 relative top-[-3px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            2022 - 3 Crewneck Sweatshirts
          </h4>
          <ul className="text-3xl list-disc list-inside mx-10">
            <li>
              Designed three crewneck sweatshirts using{" "}
              <span className="font-bold">Adobe Illustrator</span>
            </li>
            <li>Had designs embroidered for a high-quality look and feel</li>
            <li>
              Directed three distinct photoshoots, each tailored to the
              sweatshirt's theme
            </li>
          </ul>

          <ImageSlider media={[blueCrew, blackCrew, tanCrew]} />

          <h3 className="mt-5">Non-clothing</h3>
          <h4 className="py-1">
            <svg
              className="inline w-6 h-6 text-white mr-2 relative top-[-3px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            2025 - 31-Day Creative Challenge
          </h4>
          <ul className="text-3xl list-disc list-inside mx-10">
            <li>
              Posted original art every day of January, exploring multiple
              disciplines
            </li>
            <li>
              Used <span className="font-bold">Adobe Illustrator</span> and{" "}
              <span className="font-bold">Photoshop</span> to create typography,
              posters, and experiment with unique styles
            </li>
            <li>
              Designed immersive 3D scenes in{" "}
              <span className="font-bold">Blender</span>, focusing on
              composition and storytelling
            </li>
          </ul>

          <ImageSlider media={[day1, day12, broad, day20]} />

          <h4 className="py-1 mt-5">
            <svg
              className="inline w-6 h-6 text-white mr-2 relative top-[-3px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            2022 - CVHS Graduation Yard Signs
          </h4>

          <ul className="text-3xl list-disc list-inside mx-10">
            <li>
              Designed yard signs that balanced a universal yet visually
              appealing look
            </li>
            <li>
              200+ signs were printed and available for all graduating seniors
            </li>
          </ul>
        </div>
        <h2 className="text-left flex justify-between items-center mt-15">
          DUEN Marketing Director{" "}
          <span className="text-3xl">(June 2024 - December 2024)</span>
        </h2>
        <h3></h3>
        <h5 className="py-2">
          As Marketing Director for DUEN, I led a team of 7 in developing
          branding, promotional materials, and marketing strategies that
          enhanced the club’s visibility, drove engagement, and led to the
          highest recruitment event turnout in the club’s history.
        </h5>

        <div className="px-5">
          <h4 className="py-1 mt-5">
            <svg
              className="inline w-6 h-6 text-white mr-2 relative top-[-3px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            "Design For Tomorrow" Make-a-thon Branding
          </h4>

          <ul className="text-3xl list-disc list-inside mx-10">
            <li>
              Developed the brand identity for Design For Tomorrow, a newly
              launched engineering make-a-thon
            </li>
            <li>
              Pitched multiple logo concepts and color palettes, refining the
              final selection through feedback
            </li>
            <li>
              Designed the logo by 3D modeling in{" "}
              <span className="font-bold">Blender</span> and vectorizing the
              final design in{" "}
              <span className="font-bold">Adobe Illustrator</span>
            </li>
          </ul>
        </div>

        <ImageSlider media={[DFT1, DFT2]} />

        <h2 className="text-left flex justify-between items-center mt-15">
          AASP Service Technician{" "}
          <span className="text-3xl">(September 2024 - Present)</span>
        </h2>
        <h3></h3>
        <h5 className="py-2">
          As a Service Technician at an Apple Authorized Service Provider, I
          diagnose and repair a range of Apple devices while providing technical
          support to customers.
        </h5>
        <div className="px-5">
          <h3 className="mt-5">Certifications</h3>
          <ul className="text-3xl list-disc list-inside mx-10">
            <li>
              Apple Certified MacBook Air (2022, 2023, and 2024) Technician
            </li>
            <li>
              Apple Certified MacBook Pro (13-inch, M1, 2020; and 13-inch, M2,
              2022) Technician
            </li>
            <li>Certification for MacBook Pro (14-inch and 16-inch)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
