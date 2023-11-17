import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const ContainerCard1 = ({
  doctorReviewText,
  gutIssueReviewText,
  doctorReviewDescription,
  patientReviewText,
  treatmentReviewText,
  reviewText,
  propBackgroundColor,
}) => {
  const divStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  return (
    <div
      style={{
        backgroundColor: "#cdd1e3",
        width: "586px",
        height: "383px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
        textAlign: "center",
        fontSize: "16px",
        color: "#121211",
        fontFamily: "Lora",
        ...divStyle,
      }}
    >
      <div
        style={{
          position: "relative",
          fontSize: "22px",
          lineHeight: "125%",
          fontWeight: "600",
          display: "inline-block",
          width: "500px",
        }}
      >
        {doctorReviewText}
      </div>
      <div
        style={{
          position: "relative",
          lineHeight: "150%",
          color: "#59524b",
          display: "inline-block",
          width: "500px",
        }}
      >
        {gutIssueReviewText}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "20px",
        }}
      >
        <img
          style={{
            position: "relative",
            width: "79px",
            height: "69px",
            overflow: "hidden",
            flexShrink: "0",
            objectFit: "cover",
          }}
          alt=""
          src={doctorReviewDescription}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "2px",
          }}
        >
          <div style={{ position: "relative", lineHeight: "150%" }}>
            {patientReviewText}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "10px",
              textAlign: "left",
              fontSize: "13px",
            }}
          >
            <div style={{ position: "relative", lineHeight: "100%" }}>
              {treatmentReviewText}
            </div>
            <img
              style={{ position: "relative", width: "11px", height: "6px" }}
              alt=""
              src={reviewText}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerCard1;
