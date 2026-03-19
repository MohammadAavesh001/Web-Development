import { useState } from "react";

export default function App() {
  const [hovered, setHovered] = useState(null);

  const skills = [
    "Java", "Basic Python", "Basic C++",
    "HTML", "CSS", "MS Excel", "MS Word", "ChatGPT"
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto", padding: "20px" }}>

      {/* Header */}
      <div style={{ background: "#3498db", color: "white", textAlign: "center", padding: "40px", borderRadius: "10px" }}>
        <h1>Mohammad Aavesh</h1>
        <p>BCA Student - 1st Year | SSISM, Sandalpur</p>
      </div>

      {/* About */}
      <div style={{ marginTop: "30px" }}>
        <h2 style={{ color: "#2c3e50", borderBottom: "2px solid #3498db", paddingBottom: "5px" }}>About Me</h2>
        <p style={{ lineHeight: "1.8", fontSize: "1rem" }}>
          My name is Mohammad Aavesh. I am from Harda, Madhya Pradesh and currently pursuing
          my Bachelor's degree in Computer Application (BCA) from Sant Singaji Institute of
          Science and Management, Sandalpur.
        </p>
        <p style={{ lineHeight: "1.8", fontSize: "1rem", marginTop: "10px" }}>
          I completed my secondary education from Sunray's Higher Secondary School, Harda (M.P.)
        </p>
      </div>

      {/* Skills */}
      <div style={{ marginTop: "30px" }}>
        <h2 style={{ color: "#2c3e50", borderBottom: "2px solid #3498db", paddingBottom: "5px" }}>Skills</h2>
        <p style={{ marginBottom: "15px" }}>As a 1st Year BCA Student, I have learned the following skills:</p>
        {skills.map((skill, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === i ? "#d5e8f5" : "#ecf0f1",
              padding: "12px 16px",
              marginBottom: "8px",
              borderRadius: "8px",
              borderLeft: "4px solid #3498db",
              cursor: "default",
              transition: "background 0.2s",
              fontWeight: "bold"
            }}
          >
            {skill}
          </div>
        ))}
      </div>

      {/* Contact */}
      <div style={{ marginTop: "30px" }}>
        <h2 style={{ color: "#2c3e50", borderBottom: "2px solid #3498db", paddingBottom: "5px" }}>Contact</h2>
        <p style={{ marginTop: "10px" }}>
          <strong>Email:</strong> Mohd.a.bca2025@ssism.org
        </p>
        <p style={{ marginTop: "10px" }}>
          <strong>LinkedIn: </strong>
          <a href="http://www.linkedin.com/in/mohammad-aavesh-12a453380" target="_blank" rel="noreferrer" style={{ color: "#3498db" }}>
            View Profile
          </a>
        </p>
        <p style={{ marginTop: "10px" }}>
          <strong>GitHub: </strong>
          <a href="https://github.com/MohammadAavesh001/Web-Development" target="_blank" rel="noreferrer" style={{ color: "#3498db" }}>
            Web Development Repo
          </a>
        </p>
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", marginTop: "40px", color: "#999", fontSize: "0.85rem" }}>
        © 2025 Mohammad Aavesh · Built with React
      </div>

    </div>
  );
}