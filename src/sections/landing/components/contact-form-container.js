import FormContainer from "./form-container";

const ContactFormContainer = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "10749px",
        left: "-3px",
        width: "1925px",
        height: "771px",
        textAlign: "left",
        fontSize: "45px",
        color: "#121211",
        fontFamily: "Lora",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          backgroundColor: "#fbf5f0",
          width: "1925px",
          height: "771px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "100px",
          left: "413px",
          width: "1056px",
          height: "112px",
          textAlign: "center",
        }}
      >
        <b
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            lineHeight: "125%",
            textTransform: "capitalize",
            display: "inline-block",
            width: "1056px",
          }}
        >
          Instead of removing sensitive foods could prevent health issues
        </b>
      </div>
      <div
        style={{
          position: "absolute",
          top: "19px",
          left: "637px",
          width: "527px",
          height: "705px",
        }}
      >
        <img
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "527px",
            height: "705px",
            objectFit: "cover",
            opacity: "0.8",
          }}
          alt=""
          src="/1201759061053000supertanbrothers1748x2335amm1011647003834168-21@2x.png"
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "247px",
          left: "303px",
          width: "1320px",
          height: "255px",
          fontSize: "22px",
          color: "#1c1f35",
        }}
      >
        <FormContainer inputValue="Your Name" nameInputValue="Entar Name" />
        <FormContainer
          inputValue="Phone Numbar"
          nameInputValue="Entar Name"
          propTop="137px"
          propLeft="0px"
          propBorder="1px solid rgba(0, 0, 0, 0.3)"
        />
        <FormContainer
          inputValue="Your Email"
          nameInputValue="Entar Name"
          propTop="0px"
          propLeft="669px"
          propBorder="1px solid rgba(18, 18, 17, 0.3)"
        />
        <FormContainer
          inputValue="Question"
          nameInputValue="Food Sensitivity Test"
          propTop="137px"
          propLeft="669px"
          propBorder="1px solid rgba(18, 18, 17, 0.3)"
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "577.5px",
          left: "302.5px",
          borderTop: "1px solid #b0e9cd",
          boxSizing: "border-box",
          width: "1321px",
          height: "1px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "610px",
          left: "823px",
          width: "280px",
          height: "65px",
          fontSize: "18px",
          color: "#fff",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "32.5px",
            backgroundColor: "#1f4934",
            width: "280px",
            height: "65px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "36px",
            width: "208px",
            height: "26px",
          }}
        >
          <b
            style={{
              position: "absolute",
              top: "3px",
              left: "0px",
              letterSpacing: "0.01em",
              lineHeight: "20px",
              textTransform: "uppercase",
            }}
          >
            Send US Message
          </b>
          <img
            style={{
              position: "absolute",
              height: "100%",
              width: "12.5%",
              top: "0%",
              right: "0%",
              bottom: "0%",
              left: "87.5%",
              maxWidth: "100vw",
              overflow: "hidden",
              maxHeight: "100%",
            }}
            alt=""
            src="/vector.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactFormContainer;
