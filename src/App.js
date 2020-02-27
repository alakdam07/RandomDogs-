import React from "react";
import Loader from "react-loader-spinner";
import "./App.css";

function App() {
  const [state, setstate] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random/5");
      const data = await response.json();

      setstate(data.message);
    } catch (error) {
      console.log(error, "FAILED TO FETCH");
    }
    setLoading(false);
  };

  return (
    <div className="App">
      {state.map((pics, index) => {
        return (
          <div
            style={{ display: "inline-flex", textAlign: "center" }}
            key={index}
          >
            <div className="row">
              <div className="col s12">
                <div className="col s12 m6">
                  <div
                    className="card"
                    style={{ width: "350px", background: "black" }}
                  >
                    <div className="card-image">
                      <img
                        src={pics}
                        alt="img"
                        style={{ width: "350px", height: "200px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div style={{ paddingLeft: "500px" }}>
        {!loading && (
          <button
            className="waves-effect waves-light btn"
            onClick={() => fetchData()}
          >
            Click for more dog
          </button>
        )}
        {loading && (
          <Loader
            type="Hearts"
            color="#7d408c"
            height={100}
            width={100}
            timeout={10000}
          />
        )}
      </div>
    </div>
  );
}

export default App;
