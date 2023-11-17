const CustomerCardForm = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "1294px",
        left: "0px",
        width: "100vw",
        height: "657px",
        textAlign: "center",
        fontSize: "55px",
        color: "#121211",
        fontFamily: "Lora",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          backgroundColor: "#e4e1ce",
          width: "100vw",
          height: "657px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "95px",
          left: "calc(50% - 686px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "60px",
        }}
      >
        <b
          style={{
            position: "relative",
            lineHeight: "120%",
            textTransform: "capitalize",
            display: "inline-block",
            width: "1032px",
          }}
        >
          Feel the difference, just like 10,000+ of our customers
        </b>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "60px",
            fontSize: "26px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "30px",
            }}
          >
            <img
              style={{
                position: "relative",
                width: "139px",
                height: "132px",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src="/mirror1-1.svg"
            />
            <div
              style={{
                position: "relative",
                lineHeight: "130%",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                width: "435px",
              }}
            >
              <p style={{ margin: "" }}>
                Enhance fitness, achieve vitality, improve performance, boost
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "30px",
              color: "#08202f",
            }}
          >
            <img
              style={{
                position: "relative",
                width: "127.5px",
                height: "127.5px",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src="/alarmstar-1.svg"
            />
            <div
              style={{
                position: "relative",
                lineHeight: "130%",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                width: "435px",
              }}
            >
              <p style={{ margin: "" }}>
                energy, improve anxiety, live free of aches and pains, improve
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "31px",
            }}
          >
            <img
              style={{
                position: "relative",
                width: "140.5px",
                height: "140.5px",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src="/starratingblank-1.svg"
            />
            <div
              style={{
                position: "relative",
                lineHeight: "100%",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                width: "435px",
              }}
            >
              sleep and immunity.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCardForm;
