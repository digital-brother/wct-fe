import ContainerCard1 from "./container-card1";

const FormContainer1 = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "7592px",
        left: "calc(50% - 666px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "50px",
        textAlign: "center",
        fontSize: "55px",
        color: "#121211",
        fontFamily: "Lora",
      }}
    >
      <b
        style={{
          position: "relative",
          lineHeight: "125%",
          display: "inline-block",
          width: "822px",
        }}
      >
        Satisfied Supplement By Nutra Nourish Clients
      </b>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "30px",
          fontSize: "16px",
        }}
      >
        <ContainerCard1
          doctorReviewText="Dr Menka Gupta completely fixed all my gut issues I went to see her as I was suffering"
          gutIssueReviewText="Dr Menka Gupta completely fixed all my gut issues.  I went to see her as I was suffering from anxiety and chronic tiredness for a long time. Rather than trying to find a quick fix for my symptoms, she patiently tried to understand the root cause of my health"
          doctorReviewDescription="/mask-group1@2x.png"
          patientReviewText="Monika Marques"
          treatmentReviewText="Microblading"
          reviewText="/vector1.svg"
        />
        <img
          style={{
            position: "relative",
            width: "100px",
            height: "100px",
            overflow: "hidden",
            flexShrink: "0",
          }}
          alt=""
          src="/starratingblank-11.svg"
        />
        <ContainerCard1
          doctorReviewText="Big thanks to both Dr Menka and Dr Dipika for helping me 😊"
          gutIssueReviewText="I have worked very successfully with Dr Menka in lowering my cholesterol and understanding more about the best foods for me. I appreciate her dept of knowledge from both a medical and functional stance."
          doctorReviewDescription="/mask-group2@2x.png"
          patientReviewText="Veronica Rosetta"
          treatmentReviewText="Ombré"
          reviewText="/vector2.svg"
          propBackgroundColor="#f6dab4"
        />
      </div>
      <img
        style={{ position: "relative", width: "108px", height: "32px" }}
        alt=""
        src="/group-237835.svg"
      />
      <div
        style={{
          borderRadius: "50px",
          backgroundColor: "#fff",
          border: "1px solid #1f4934",
          boxSizing: "border-box",
          height: "70px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px 50px",
          fontSize: "15px",
        }}
      >
        <b style={{ position: "relative", textTransform: "uppercase" }}>
          Read all reviews
        </b>
      </div>
    </div>
  );
};

export default FormContainer1;
