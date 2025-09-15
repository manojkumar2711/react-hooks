import React from 'react'
import ApiFetch from '../ApiCall/ApiFetch'
import ApiAxios from '../ApiCall/ApiAxios'

function Account() {
  return (
    <div>
    <h1>Account</h1>
      <ApiFetch/>
      <ApiAxios/>
    </div>
  )
}

export default Account
