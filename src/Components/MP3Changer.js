import React, { Component, useState } from "react"

function ExState() {
    const [mp,LinkId] = useState("");
    const change = () => {
        var link = document.getElementById("link");
        var linkInput = link.value;
        var getid = linkInput.substr(linkInput.length - 11); // => "Tabs1";
        LinkId(getid);
    }
    
    return (
      <div style={{textAlign: "center"}} className="App">
          <br/><br/>
          <input id="link"/>
          <button onClick={change}>Dönüştür</button><br/><br/>
          <iframe src={`https://www.yt-download.org/api/button/mp3/${mp}`} scrolling= "no" style={{width: "150px" ,height: "110px"}}></iframe>
      </div>
    )};
  
export default ExState
//var lastFive = id.substr(id.length - 5); // => "Tabs1"
//<iframe src="https://api.youtube-mp3.org.in/widget/button/video/mgz1wdlkzcs" frameborder="0" style="width: 160px; height: 50px;"></iframe>
//https://www.youtube.com/watch?v=mgz1wdlkzcs