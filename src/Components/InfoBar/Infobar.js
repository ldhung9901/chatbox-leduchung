import React from 'react'
import './Infobar.css'
export default function Infobar({room}) {
    return (
        <div className="infoBar">
        <div className="leftInnerContainer">
          <img className="onlineIcon" src='https://raw.githubusercontent.com/adrianhajdin/project_chat_application/master/client/src/icons/onlineIcon.png' alt="online icon" />
    <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
          <a href="/"><img src='https://raw.githubusercontent.com/adrianhajdin/project_chat_application/master/client/src/icons/closeIcon.png' alt="close icon" /></a>
        </div>
      </div>
    )
}
