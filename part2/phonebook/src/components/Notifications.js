  
import React from 'react'

const Notifications = (props) => {
    if (props.notification === null) {
      return null
    }
    return (
      <div className={props.notification.type}>
        {props.notification.message}
      </div>
    )
  }

  export default Notifications