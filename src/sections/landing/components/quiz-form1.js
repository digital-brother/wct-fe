import QuizForm from "./quiz-form";

const Header = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "32px",
        left: "27px",
        width: "1920px",
        height: "92px",
        textAlign: "left",
        fontSize: "18px",
        color: "#fff",
        fontFamily: "Lora",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "1496px",
          width: "257px",
          height: "65px",
        }}
      >
        <img
          style={{
            position: "absolute",
            top: "6px",
            left: "74px",
            width: "55px",
            height: "55px",
          }}
          alt=""
          src="/group-4208.svg"
        />
        <img
          style={{
            position: "absolute",
            top: "-24px",
            left: "114px",
            width: "135px",
            height: "135px",
          }}
          alt=""
          src="/group-4209.svg"
        />
        <QuizForm vectorIconName="/vector.svg" />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1px",
          left: "170px",
          width: "321px",
          height: "64px",
        }}
      >
        <img
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "321px",
            height: "64px",
            objectFit: "cover",
          }}
          alt=""
          src="/nutranourishlogo-1@2x.png"
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "91.5px",
          left: "-0.5px",
          borderTop: "1px solid #f0d3d3",
          boxSizing: "border-box",
          width: "1921px",
          height: "1px",
        }}
      />
    </div>
  );
};

export default Header;
