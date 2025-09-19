import { Link } from "react-router-dom";




function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🏠 Home Page</h1>
      <div style={{ marginTop: "20px" }}>
        <Link to="/about">
          <button style={{ margin: "10px", padding: "10px 20px" }}>
            Go to About
          </button>
        </Link>
        <Link to="/contact">
          <button style={{ margin: "10px", padding: "10px 20px" }}>
            Go to Contact
          </button>
        </Link>
      </div>
    </div>
  );
}


export default Home;