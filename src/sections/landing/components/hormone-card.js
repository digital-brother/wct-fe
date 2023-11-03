import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const HormoneCard = ({
  articleTitle,
  eventDate,
  cardImageName,
  propLeft,
  propBackgroundColor,
  propWidth,
  propBackgroundColor1,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  const rectangleDivStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const october52023Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor1),
    };
  }, [propBackgroundColor1]);

  return (
    <div
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "422.8px",
        height: "472px",
        textAlign: "left",
        fontSize: "16.68px",
        color: "#121211",
        fontFamily: "Lora",
        ...groupDiv1Style,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          backgroundColor: "#f1e4db",
          width: "422.8px",
          height: "472px",
          ...rectangleDivStyle,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "323px",
          left: "25.85px",
          width: "333.57px",
          height: "124.13px",
        }}
      >
        <b
          style={{
            position: "absolute",
            top: "33.92px",
            left: "0px",
            fontSize: "18.35px",
            lineHeight: "26.69px",
            textTransform: "capitalize",
            display: "inline-block",
            width: "333.57px",
          }}
        >
          {articleTitle}
        </b>
        <div
          style={{
            position: "absolute",
            top: "103.13px",
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
            left: "0.25px",
            textTransform: "capitalize",
            fontWeight: "600",
            display: "inline-block",
            width: "298px",
            ...october52023Style,
          }}
        >
          {eventDate}
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
          ...rectangleDiv1Style,
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
        src={cardImageName}
      />
    </div>
  );
};

export default HormoneCard;
