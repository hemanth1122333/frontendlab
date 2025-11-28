import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upcoming Events</h2>

      <div onClick={() => setShow(true)} style={{ cursor: "pointer", border: "1px solid gray", padding: "10px", width: "200px" }}>
        Tech Talk on AI
      </div>

      {show && (
        <div style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div style={{ background: "#fff", padding: "20px" }}>
            <h3>Tech Talk on AI</h3>
            <p>AI trends session</p>
            <button onClick={() => setShow(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
