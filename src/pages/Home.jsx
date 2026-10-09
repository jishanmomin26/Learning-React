import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <section className="home-page">

      <div className="home-content">
        <span className="page-badge">
          REACT ROUTER • EXPERIMENT 9
        </span>

        <h1>
          Welcome to <span>React Campus</span>
        </h1>

        <p>
          A single-page React application demonstrating
          routing, navigation and dynamic URLs using
          React Router.
        </p>

        <div className="home-buttons">
          <Link to="/students" className="primary-button">
            Explore Students ?
          </Link>

          <Link to="/about" className="secondary-button">
            Learn More
          </Link>
        </div>
      </div>

      <div className="home-features">

        <div className="feature-card">
          <div className="feature-icon">?</div>
          <h3>Client-Side Routing</h3>
          <p>
            Navigate between pages without reloading
            the entire application.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">#</div>
          <h3>Dynamic Routes</h3>
          <p>
            Display specific student information using
            dynamic URL parameters.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">?</div>
          <h3>Easy Navigation</h3>
          <p>
            Use React Router Link components for smooth
            application navigation.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Home;
