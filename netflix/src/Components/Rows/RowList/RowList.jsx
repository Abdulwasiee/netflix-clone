import React from "react";
import "./RowList.css";
import Row from "../Row/Row";
import movieUrls from "../../../utils/requist";

function RowList() {
  return (
    <div>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={movieUrls.urls.action} 
        isLargeRow={true}
      />
    </div>
  );
}

export default RowList;
