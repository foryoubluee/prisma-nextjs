import React from "react"
import Sidebar from "../components/Sidebar"

const UserLayout = ({ children }) => {
  return (
    <div className="w-full max-w-[1440px]">
      <div className="flex">
        <div className="w-full max-w-[270px] h-screen">
          <Sidebar />
        </div>
        {children}
      </div>
    </div>
  )
}

export default UserLayout
