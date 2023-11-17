import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const QuizForm = ({ vectorIconName, propTop, propLeft }) => {
  const buttonStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <div
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "257px",
        height: "65px",
        textAlign: "left",
        fontSize: "18px",
        color: "#fff",
        fontFamily: "Lora",
        ...buttonStyle,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          borderRadius: "32.5px",
          backgroundColor: "#1f4934",
          width: "257px",
          height: "65px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "41px",
          width: "183px",
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
          Take The Quiz
        </b>
        <img
          style={{
            position: "absolute",
            height: "100%",
            width: "14.21%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "85.79%",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
          }}
          alt=""
          src={vectorIconName}
        />
      </div>
    </div>
  );
};

export default QuizForm;
