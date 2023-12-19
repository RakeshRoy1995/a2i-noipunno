import { jsPDF } from "jspdf";
import React, { useRef } from "react";
import ContentTemplate from "./ContentTemplate";
import "./fonts/Nikosh.ttf";

const GeneratePdf: React.FC = () => {
  const certificateTemplateRef = useRef<any>(null);


  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px"
    });

   
    // Register the font
    doc.addFont("Nikosh.ttf", "Nikosh", "normal");

    doc.html(certificateTemplateRef.current, {
      async callback(doc) {
        doc.setFont("Nikosh");
        doc.save("jspdf");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <button
        style={{
          margin: "50px",
          padding: "10px",
          backgroundColor: "black",
          color: "white",
          fontFamily: "Nikosh",
          fontSize: "1.2rem",
          textTransform: "uppercase",
          letterSpacing: "0.1rem",
          cursor: "pointer",
          width: "200px"
        }}
        onClick={handleGeneratePdf}
      >
        Generate Pdf
      </button>
      <div ref={certificateTemplateRef}>
        <ContentTemplate />
      </div>
    </div>
  );
};

export default GeneratePdf;
