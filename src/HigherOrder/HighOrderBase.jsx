import React from 'react'
import Button from './Button'
import WithClickTracking from './WithClickTracking'

function HighOrderBase() {
    const ButtonHigherOrder = WithClickTracking(Button)

  return (
    <div>
      <ButtonHigherOrder lable={"hey add"} tarckinginfo={{"amt":2000 , "name" :"maonj"}} />
      <Button lable={"hi button"}/>
    </div>
  )
}

export default HighOrderBase
