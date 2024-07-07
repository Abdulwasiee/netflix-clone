import React from "react";
import "./RowList.css";
import Row from "../Row/Row";
import movieUrls from "../../../utils/requist";

function RowList() {
  return (
    <div className="rowList">
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={movieUrls.urls.action}
        isLargeRow={true}
      />
      <Row title="Popular Movies" fetchUrl={movieUrls.urls.popular} />
      <Row title="Top Rated" fetchUrl={movieUrls.urls.topRated} />
      <Row title="Upcoming Movies" fetchUrl={movieUrls.urls.upcoming} />
      <Row title="Now Playing" fetchUrl={movieUrls.urls.nowPlaying} />
      <Row title="Action Movies" fetchUrl={movieUrls.urls.action} />
      <Row title="Adventure Movies" fetchUrl={movieUrls.urls.adventure} />
      <Row title="Animation Movies" fetchUrl={movieUrls.urls.animation} />
      <Row title="Comedy Movies" fetchUrl={movieUrls.urls.comedy} />
      <Row title="Crime Movies" fetchUrl={movieUrls.urls.crime} />
      <Row title="Documentary Movies" fetchUrl={movieUrls.urls.documentary} />
      <Row title="Drama Movies" fetchUrl={movieUrls.urls.drama} />
      <Row title="Family Movies" fetchUrl={movieUrls.urls.family} />
      <Row title="Fantasy Movies" fetchUrl={movieUrls.urls.fantasy} />
      <Row title="History Movies" fetchUrl={movieUrls.urls.history} />
      <Row title="Horror Movies" fetchUrl={movieUrls.urls.horror} />
      <Row title="Music Movies" fetchUrl={movieUrls.urls.music} />
      <Row title="Mystery Movies" fetchUrl={movieUrls.urls.mystery} />
      <Row title="Romance Movies" fetchUrl={movieUrls.urls.romance} />
      <Row
        title="Science Fiction Movies"
        fetchUrl={movieUrls.urls.scienceFiction}
      />
      <Row title="TV Movies" fetchUrl={movieUrls.urls.tvMovie} />
      <Row title="Thriller Movies" fetchUrl={movieUrls.urls.thriller} />
      <Row title="War Movies" fetchUrl={movieUrls.urls.war} />
      <Row title="Western Movies" fetchUrl={movieUrls.urls.western} />
    </div>
  );
}

export default RowList;
