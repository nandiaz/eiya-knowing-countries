import "./App.css";
import Countries from "./Components/Countries/Countries";
import Header from "./Components/NavBar/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <dt className="col-sm-6">
        Please, select the countries you wish to compare
      </dt>
      <div className="row justify-content-center">
      <div className="col-sm-6">
        <Countries/>
        </div>
        <div className="col-sm-6">
        <Countries/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
