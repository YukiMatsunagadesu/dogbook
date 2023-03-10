import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header.js/Header";
import { getAllDog } from "./utils/dog";

function App() {
  const initialURL = "https://api.thedogapi.com/v1/breeds";
  const [loading, setLoading] = useState(true);
  const [dogData, setDogdata] = useState([]);

  useEffect(() => {
    const fetchDogdata = async () => {
      let res = await getAllDog(initialURL);
      setDogdata(res);
      console.log(res);
      setLoading(false);
    };
    fetchDogdata();
  }, []);

  return (
    <>
      <Header />
      <div className="App">
        {loading ? (
          <h1>Loading now...</h1>
        ) : (
          
            <div className="dogCardContainer">
              {dogData.map((dog, i) => {
                return <Card key={i} dog={dog} />;
              })}
            </div>
          
        )}
      </div>
    </>
  );
}

export default App;
