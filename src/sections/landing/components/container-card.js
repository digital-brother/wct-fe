import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const ContainerCard = ({ descriptionText, percentageText, propLeft }) => {
  const groupDivStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <div
      style={{
        position: "absolute",
        top: "1px",
        left: "552px",
        width: "397px",
        height: "114px",
        textAlign: "center",
        fontSize: "26px",
        color: "#121211",
        fontFamily: "Lora",
        ...groupDivStyle,
      }}
    >
      <b
        style={{
          position: "absolute",
          top: "5px",
          left: "114px",
          lineHeight: "130%",
          textTransform: "capitalize",
          display: "inline-block",
          width: "219px",
          height: "37px",
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
          width: "397px",
          height: "60px",
        }}
      >
        {descriptionText}
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
        <p style={{ margin: "" }}>{percentageText}</p>
      </b>
    </div>
  );
};

export default ContainerCard;
