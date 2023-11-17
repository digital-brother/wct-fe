const MediaCard = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "65px",
        left: "calc(50% - 832px)",
        width: "100vw",
        height: "244px",
        textAlign: "center",
        fontSize: "55px",
        color: "#000",
        fontFamily: "Lora",
      }}
    >
      <b
        style={{
          position: "absolute",
          top: "0px",
          left: "calc(50% - 84.5px)",
          lineHeight: "100%",
          display: "inline-block",
          width: "162px",
          height: "66px",
        }}
      >
        <p style={{ margin: "" }}>Media</p>
      </b>
      <div
        style={{
          position: "absolute",
          top: "105px",
          left: "95px",
          width: "100vw",
          height: "139px",
        }}
      >
        <img
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "356px",
            height: "138px",
            objectFit: "cover",
          }}
          alt=""
          src="/logo-thepeak1@2x.png"
        />
        <img
          style={{
            position: "absolute",
            top: "0px",
            left: "404px",
            width: "344px",
            height: "139px",
            objectFit: "cover",
          }}
          alt=""
          src="/cnbclogo1@2x.png"
        />
        <img
          style={{
            position: "absolute",
            top: "6px",
            left: "796px",
            width: "326px",
            height: "126px",
            objectFit: "cover",
          }}
          alt=""
          src="/logo-tatlerasia@2x.png"
        />
        <img
          style={{
            position: "absolute",
            top: "10px",
            left: "1170px",
            width: "308px",
            height: "119px",
            objectFit: "cover",
          }}
          alt=""
          src="/logo-thestraitstimes@2x.png"
        />
      </div>
      <img
        style={{
          position: "absolute",
          top: "143px",
          left: "1619px",
          width: "56px",
          height: "56px",
        }}
        alt=""
        src="/group-1000006079.svg"
      />
      <img
        style={{
          position: "absolute",
          top: "143px",
          left: "0px",
          width: "56px",
          height: "56px",
          overflow: "hidden",
        }}
        alt=""
        src="/frame.svg"
      />
    </div>
  );
};

export default MediaCard;
