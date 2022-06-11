import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import React from "react";

function Particle() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 1,
        },
        detectRetina: true,
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onDiv: {
              elementId: "repulse-div",
              enable: false,
              mode: "repulse",
            },
            onHover: {
              enable: false,
              mode: "bubble",
              parallax: {
                enable: false,
                force: 60,
                smooth: 10,
              },
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
              speed: 3,
            },
            connect: {
              distance: 80,
              lineLinked: {
                opacity: 0.5,
              },
              radius: 60,
            },
            grab: {
              distance: 1000,
              lineLinked: {
                opacity: 1,
              },
            },
            push: {
              quantity: 4,
            },
            remove: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          lineLinked: {
            blink: false,
            color: "#000",
            consent: false,
            distance: 150,
            enable: false,
            opacity: 0.4,
            width: 1,
          },
          move: {
            attract: {
              enable: false,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            bounce: false,
            direction: "none",
            enable: true,
            outMode: "out",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            limit: 0,
            value: 80,
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.1,
              speed: 0.5,
              sync: false,
            },
            random: true,
            value: 0.5,
          },
          rotate: {
            animation: {
              enable: true,
              speed: 2,
              sync: false,
            },
            direction: "random",
            random: true,
            value: 0,
          },
          shape: {
            character: {
              fill: false,
              font: "Verdana",
              style: "",
              value: "*",
              weight: "400",
            },
            image: [
              {
                src: "/mainpokeball.png",
                width: 32,
                height: 32,
              },
            ],
            polygon: {
              sides: 5,
            },
            stroke: {
              color: "#000000",
              width: 0,
            },
            type: "image",
          },
          size: {
            animation: {
              enable: false,
              minimumValue: 0.1,
              speed: 40,
              sync: false,
            },
            random: false,
            value: 16,
          },
        },
        polygon: {
          draw: {
            enable: false,
            lineColor: "#ffffff",
            lineWidth: 0.5,
          },
          move: {
            radius: 10,
          },
          scale: 1,
          type: "none",
          url: "",
        },
        background: {
          color: "#0f172a",
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
      }}
    />
  );
}

export default Particle;
