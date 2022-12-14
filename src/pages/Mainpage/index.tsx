import { requests } from "../../api/request";
import "../../App.css";
import { Banner } from "../../components/Banner";
import { Row } from "../../components/Row";

export const MainPage = () => {
  return (
    <div>
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
    </div>
  );
}
