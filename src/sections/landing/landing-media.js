import Image from "next/image";

import peak from "src/sections/landing/images/peak.png"

import istraits from "src/sections/landing/images/istraits.png"

import cnbc from "src/sections/landing/images/cnbc.png"

import tatler from "src/sections/landing/images/tatler.png"
import right from "src/sections/landing/images/right.png"
import left from "src/sections/landing/images/left.png"

export default function LandingMedia() {
  return (
    <div style={{backgroundColor: "#FAF5EF", padding: "100px 100px",}}>
      <div style={{display: "flex",
        justifyContent: "center",}}>
        <span style={{fontFamily: "Lora",
          fontSize: "45px",
          fontWeight: 700,
          lineHeight: "55px",
          letterSpacing: "0px",
          textAlign: "center",
          marginBottom: "40px",
        }}>Media</span>
      </div>
      <div style={{display: "flex",
        justifyContent: "center",}}>
        <div>
          <Image
            src={left}
            alt=""
            style={{
              width: "35px",
              height: "35px",
              marginBottom: "45px",
              marginRight: "15px",
            }}
          />
          <Image
          src={peak}
          alt=""
          style={{
            width: "250px",
            height: "125px",
          }}
        />
        </div>
        <div>
          <Image
            src={istraits}
            alt=""
            style={{
              width: "250px",
              height: "125px",
            }}
          />
        </div>
        <div>
          <Image
            src={cnbc}
            alt=""
            style={{
              width: "250px",
              height: "130px",
            }}
          />
        </div>
        <div>
          <Image
            src={tatler}
            alt=""
            style={{
              width: "250px",
              height: "125px",
            }}
          />
          <Image
            src={right}
            alt=""
            style={{
              width: "35px",
              height: "35px",
              marginBottom: "45px",
              marginLeft: "15px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
