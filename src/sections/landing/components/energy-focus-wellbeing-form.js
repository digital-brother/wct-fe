const EnergyFocusWellbeingForm = () => {
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "38px",
        color: "#08202f",
        fontFamily: "Lora",
      }}
    >
      <div
        style={{
          borderRadius: "25px",
          backgroundColor: "#f1e4db",
          boxShadow: "0px 20px 50px rgba(209, 178, 114, 0.25)",
          border: "2px dashed #fff",
          boxSizing: "border-box",
        }}
      />
      <span
      >
        Do you want to elevate your energy, focus, and well-being?
      </span>
      <div
        style={{
          fontSize: "32.59px",
          color: "#121211",
          fontFamily: "Fahkwang",
        }}
      >
        <div
          style={{
            borderRadius: "54.32px",
            backgroundColor: "#fff",
            border: "1.1px solid #b0835f",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "relative", fontWeight: "500" }}>
            Explore More
          </div>
        </div>
        <div
          style={{
            borderRadius: "54.32px",
            backgroundColor: "#1f4934",
            border: "1.1px solid #b0835f",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          <div style={{ position: "relative", fontWeight: "500" }}>Yes</div>
        </div>
      </div>
    </div>
  );
};

export default EnergyFocusWellbeingForm;
