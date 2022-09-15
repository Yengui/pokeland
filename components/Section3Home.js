import React from "react";
import myphoto from "../images/IMG_20220502_102134.jpg";
import Image from "next/image";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons/faEllipsisV";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";

const FontAwesomeSvgIcon = React.forwardRef((props, ref) => {
  const { icon } = props;

  const {
    icon: [width, height, , , svgPathData],
  } = icon;

  return (
    <SvgIcon ref={ref} viewBox={`0 0 ${width} ${height}`}>
      {typeof svgPathData === "string" ? (
        <path d={svgPathData} />
      ) : (
        /**
         * A multi-path Font Awesome icon seems to imply a duotune icon. The 0th path seems to
         * be the faded element (referred to as the "secondary" path in the Font Awesome docs)
         * of a duotone icon. 40% is the default opacity.
         *
         * @see https://fontawesome.com/how-to-use/on-the-web/styling/duotone-icons#changing-opacity
         */
        svgPathData.map((d, i) => (
          <path style={{ opacity: i === 0 ? 0.4 : 1 }} d={d} />
        ))
      )}
    </SvgIcon>
  );
});

function Section3Home() {
  return (
    <section className="bg-slate-100 py-12">
      <h1 className="pokehollow mx-auto text-red-600 text-5xl sm:text-7xl text-center break-all mb-20 mt-5 underline decoration-4 decoration-yellow-400 decoration-dotted">
        Developers
      </h1>
      <div className="w-80 pb-10 border border-slate-400 bg-slate-100 mx-auto rounded-xl shadow-lg relative scale-75 sm:scale-100">
        <div className="devcard1"></div>
        <div className="devcard2"></div>
        <div className="devcard3"></div>
        <div className="devcard4"></div>
        <div className="devcard5"></div>
        <div className="flex justify-center pt-10">
          <Image
            src={myphoto}
            className="rounded-full object-cover"
            height={"150px"}
            width={"150px"}
          />
        </div>
        <h3 className="font-bold text-center pt-10 text-2xl relative z-10 underline decoration-red-400">
          Ahmad Yengui
        </h3>
        <p className="text-center p-3 text-md text-slate-600 relative z-10 mb-2">
          computer science engineering student
        </p>
        <nav>
          <ul className="flex justify-center items-center">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100063143803059"
                target="blank"
              >
                <IconButton aria-label="Example" sx={{ color: "#dc2626" }}>
                  <FontAwesomeIcon icon={faFacebook} />
                </IconButton>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ahmad-yengui-0392b9241/"
                target="blank"
              >
                <IconButton aria-label="Example" sx={{ color: "#dc2626" }}>
                  <FontAwesomeSvgIcon icon={faLinkedin} />
                </IconButton>
              </a>
            </li>
            <li>
              <a href="https://github.com/Yengui" target="blank">
                <IconButton aria-label="Example" sx={{ color: "#dc2626" }}>
                  <FontAwesomeSvgIcon icon={faGithub} />
                </IconButton>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Section3Home;
