import QuizForm from "./quiz-form";

const PersonalizedPlansCard = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "8414px",
        left: "-1px",
        width: "1921px",
        height: "763px",
        textAlign: "left",
        fontSize: "24px",
        color: "#121211",
        fontFamily: "Lora",
      }}
    >
      <img
        style={{
          position: "absolute",
          top: "0px",
          left: "1px",
          width: "1921px",
          height: "763px",
          objectFit: "cover",
        }}
        alt=""
        src="/highanglewoodenspoonwithpills-1@2x.png"
      />
      <div
        style={{
          position: "absolute",
          top: "95px",
          left: "172px",
          backgroundColor: "#faf5ef",
          width: "1580px",
          height: "574px",
        }}
      >
        <img
          style={{
            position: "absolute",
            top: "13.5px",
            left: "0px",
            width: "615px",
            height: "547px",
            overflow: "hidden",
            objectFit: "cover",
          }}
          alt=""
          src="/gfx@2x.png"
        />
        <div
          style={{
            position: "absolute",
            top: "99.5px",
            left: "715px",
            width: "712px",
            height: "375px",
          }}
        >
          <b
            style={{
              position: "absolute",
              top: "-12px",
              left: "0px",
              fontSize: "50px",
              textTransform: "capitalize",
              textAlign: "center",
            }}
          >
            Personalized plans,best Value
          </b>
          <div
            style={{
              position: "absolute",
              top: "92px",
              left: "0px",
              lineHeight: "150%",
              fontWeight: "600",
              display: "inline-block",
              width: "712px",
            }}
          >{`We have worked hard to eliminate middlemen and overheads, so you get premium supplements at lowest prices. `}</div>
          <div
            style={{
              position: "absolute",
              top: "192.5px",
              left: "0px",
              lineHeight: "150%",
              fontWeight: "600",
              display: "inline-block",
              width: "790px",
            }}
          >
            Get 10% off your first order + free shipping.  You can cancel or
            change up your subscription any time.
          </div>
          <QuizForm
            vectorIconName="/vector3.svg"
            propTop="313px"
            propLeft="0px"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "181px",
            left: "549px",
            width: "234px",
            height: "313px",
          }}
        >
          <img
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "234px",
              height: "313px",
              objectFit: "cover",
              opacity: "0.8",
            }}
            alt=""
            src="/1201759061053000supertanbrothers1748x2335amm1011647003834168-2@2x.png"
          />
        </div>
        <img
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "1580px",
            height: "574px",
            objectFit: "cover",
          }}
          alt=""
          src="/bg1@2x.png"
        />
      </div>
    </div>
  );
};

export default PersonalizedPlansCard;
