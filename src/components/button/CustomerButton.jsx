import React from 'react'

const CustomerButton = (props) => {
  return (
    <div className={'customButton '+props.classNameButtom}>
        <button>{props.text} <img src="./images/next.png" alt="" /></button>
    </div>
  )
}

export default CustomerButton