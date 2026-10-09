import "./About.css";

function About() {
  return (
    <section className="about-page">

      <div className="about-header">
        <span className="page-badge">ABOUT</span>

        <h1>About React Campus</h1>

        <p>
          This page demonstrates navigation to a
          separate route using React Router.
        </p>
      </div>

      <div className="about-card">

        <h2>What is React Router?</h2>

        <p>
          React Router is a library used to implement
          routing and navigation in React applications.
          It allows different components to be displayed
          based on the current URL.
        </p>

        <div className="concept-grid">

          <div>
            <strong>BrowserRouter</strong>
            <span>Provides routing functionality.</span>
          </div>

          <div>
            <strong>Routes</strong>
            <span>Contains application routes.</span>
          </div>

          <div>
            <strong>Route</strong>
            <span>Maps a URL to a component.</span>
          </div>

          <div>
            <strong>Link</strong>
            <span>Provides client-side navigation.</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
