import { requests } from "./api/request";
import "./App.css";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { Row } from "./components/Row";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NEXFLIX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row
        title="Action Movies"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row title="Comedy Movie" id="CM" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movie" id="HM" fetchUrl={requests.fetchHorroryMovies} />
      <Row title="Romance Movie" id="RM" fetchUrl={requests.fetchRomanceMovies} />
      <Footer />
    </div>
  );
}

export default App;
