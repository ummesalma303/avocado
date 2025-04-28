// import React from 'react'
import {TrophySpin} from "react-loading-indicators"
const loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <TrophySpin color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]} text="loading..." textColor="#6c4141" />
        {/* <Atom color="#0b124a" size="small"  /> */}
    </div>
  )
}

export default loading