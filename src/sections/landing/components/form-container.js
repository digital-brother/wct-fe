import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const FormContainer = ({
  inputValue,
  nameInputValue,
  propTop,
  propLeft,
  propBorder,
}) => {
  const groupDiv2Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const rectangleDiv2Style = useMemo(() => {
    return {
      ...getStyleValue("border", propBorder),
    };
  }, [propBorder]);

  return (
    <div
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "651px",
        height: "118px",
        textAlign: "left",
        fontSize: "22px",
        color: "#1c1f35",
        fontFamily: "Lora",
        ...groupDiv2Style,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          lineHeight: "23.54px",
          fontWeight: "600",
        }}
      >
        {inputValue}
      </div>
      <div
        style={{
          position: "absolute",
          top: "38px",
          left: "0px",
          width: "651px",
          height: "80px",
          fontSize: "16px",
          color: "rgba(28, 31, 53, 0.5)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "5px",
            backgroundColor: "#fff",
            border: "1px solid rgba(18, 18, 17, 0.3)",
            boxSizing: "border-box",
            width: "651px",
            height: "80px",
            ...rectangleDiv2Style,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "28px",
            left: "20px",
            lineHeight: "23.54px",
            fontWeight: "600",
          }}
        >
          {nameInputValue}
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
