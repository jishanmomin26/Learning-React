import "./Loading.css";

function Loading() {
  return (
    <div className="loading-container">

      <div className="loading-spinner"></div>

      <h2>
        Loading Students
      </h2>

      <p>
        Fetching student data from the API...
      </p>

    </div>
  );
}

export default Loading;     