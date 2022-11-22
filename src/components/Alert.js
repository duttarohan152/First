import React from 'react'

function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.msg[0]}</strong>{props.alert.msg[1]}
    </div>
  )
}

export default Alert