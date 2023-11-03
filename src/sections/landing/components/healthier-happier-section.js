import ContainerCard from "./container-card";

const HealthierHappierSection = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "409px",
        left: "0px",
        width: "100vw",
        height: "476px",
        textAlign: "center",
        fontSize: "58px",
        color: "#000",
        fontFamily: "Lora",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          backgroundColor: "#f1e4db",
          width: "100vw",
          height: "476px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "107px",
          left: "calc(50% - 738px)",
          width: "100vw",
          height: "263px",
        }}
      >
        <b
          style={{
            position: "absolute",
            top: "0px",
            left: "calc(50% - 344px)",
            lineHeight: "100%",
          }}
        >
          A Healthier, Happier You
        </b>
        <div
          style={{
            position: "absolute",
            top: "148px",
            left: "0px",
            width: "100vw",
            height: "115px",
            fontSize: "26px",
            color: "#121211",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "9px",
              left: "0px",
              width: "435px",
              height: "104px",
            }}
          >
            <b
              style={{
                position: "absolute",
                top: "6px",
                left: "121px",
                lineHeight: "130%",
                textTransform: "capitalize",
                display: "inline-block",
                width: "206px",
                height: "44px",
              }}
            >
              <p style={{ margin: "" }}>OF CUSTOMERS</p>
            </b>
            <div
              style={{
                position: "absolute",
                top: "54px",
                left: "0px",
                lineHeight: "130%",
                textTransform: "capitalize",
                fontWeight: "600",
                color: "rgba(18, 18, 17, 0.8)",
                display: "inline-block",
                width: "435px",
                height: "50px",
              }}
            >
              <p style={{ margin: "" }}>Feel Improvement in their health </p>
            </div>
            <b
              style={{
                position: "absolute",
                top: "0px",
                left: "44px",
                fontSize: "32px",
                lineHeight: "130%",
                textTransform: "capitalize",
                display: "inline-block",
                width: "70px",
                height: "50px",
              }}
            >
              <p style={{ margin: "" }}>98%</p>
            </b>
          </div>
          <ContainerCard
            descriptionText="Appreciate the highest quality ingredients"
            percentageText="99%"
          />
          <ContainerCard
            descriptionText="Use our App to build healthier habits"
            percentageText="95%"
            propLeft="1079px"
          />
        </div>
      </div>
    </div>
  );
};

export default HealthierHappierSection;
