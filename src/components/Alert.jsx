import React from 'react'

const Alert = ({alert}) => {

  if(!alert) {
    return null
  }

  return(
    <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
      <strong>Atantion!!!</strong>
       {alert.text}
      <button type="button" class="btn-close" aria-label="Close"></button>
    </div>
  )
}

export default Alert