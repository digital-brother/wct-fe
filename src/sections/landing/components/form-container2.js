import HormoneCard from "./hormone-card";

const FormContainer2 = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "9273px",
        left: "294px",
        width: "100vw",
        height: "663px",
        textAlign: "left",
        fontSize: "16.68px",
        color: "#121211",
        fontFamily: "Lora",
      }}
    >
      <img
        style={{
          position: "absolute",
          top: "643px",
          left: "612px",
          width: "108px",
          height: "32px",
        }}
        alt=""
        src="/arro.svg"
      />
      <div
        style={{
          position: "absolute",
          top: "120px",
          left: "5.9px",
          width: "100vw",
          height: "472px",
        }}
      >
        <HormoneCard
          articleTitle="Understanding Female Hormones: Types and Functions"
          eventDate="October 5, 2023  - Dr Menka Gupta"
          cardImageName="/mask-group3@2x.png"
        />
        <HormoneCard
          articleTitle="Benefits Of Yoga For Digestion"
          eventDate="September 30, 2023 - Dr Menka Gupta "
          cardImageName="/mask-group4@2x.png"
          propLeft="449.48px"
          propBackgroundColor="#cdd1e3"
          propWidth="unset"
          propBackgroundColor1="#c2c5d1"
        />
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "897.3px",
            width: "422.8px",
            height: "472px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              backgroundColor: "#e3e3e3",
              width: "422.8px",
              height: "472px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "322.73px",
              left: "25.85px",
              width: "333.57px",
              height: "124.41px",
            }}
          >
            <a
              style={{
                position: "absolute",
                top: "34.19px",
                left: "0px",
                fontSize: "18.35px",
                lineHeight: "26.69px",
                textTransform: "capitalize",
                fontWeight: "700",
                color: "inherit",
                display: "inline-block",
                width: "333.57px",
                textDecoration: "none",
              }}
              href="https://nutranourish.com/blog/how-to-flush-out-excess-estrogen"
              target="_blank"
            >
              How to Flush Out Excess Estrogen from the Body?
            </a>
            <div
              style={{
                position: "absolute",
                top: "103.41px",
                left: "0.83px",
                textDecoration: "underline",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                width: "110.91px",
              }}
            >
              Read More
            </div>
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                textTransform: "capitalize",
                fontWeight: "600",
              }}
            >
              October 5, 2023 - Dr Menka Gupta
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              backgroundColor: "#decfc3",
              width: "422.8px",
              height: "299.38px",
            }}
          />
          <img
            style={{
              position: "absolute",
              top: "23.35px",
              left: "23.35px",
              width: "375.27px",
              height: "251.01px",
              objectFit: "cover",
            }}
            alt=""
            src="/mask-group5@2x.png"
          />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "calc(50% - 663px)",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          textAlign: "center",
          fontSize: "55px",
        }}
      >
        <b
          style={{
            position: "relative",
            lineHeight: "125%",
            display: "inline-block",
            width: "822px",
          }}
        >
          Recent blog Posts
        </b>
      </div>
    </div>
  );
};

export default FormContainer2;
