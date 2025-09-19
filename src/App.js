import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";


// function Home() {
//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h1>🏠 Home Page</h1>
//       <div style={{ marginTop: "20px" }}>
//         <Link to="/about">
//           <button style={{ margin: "10px", padding: "10px 20px" }}>
//             Go to About
//           </button>
//         </Link>
//         <Link to="/contact">
//           <button style={{ margin: "10px", padding: "10px 20px" }}>
//             Go to Contact
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

function About() {
  return <h1 style={{ padding: "20px" }}>ℹ️ About Page</h1>;
}

function Contact() {
  return <h1 style={{ padding: "20px" }}>📞 Contact Page</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

