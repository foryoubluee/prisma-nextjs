import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import OptionButton from "./components/OptionButton"
import UserLayout from "./Layout/UserLayout"

const Feeds = () => {
  const router = useRouter()
  const [datanya, setData] = useState(null)

  const fetchData = async () => {
    try {
      if (router.query.id) {
        const userData = await axios.get(`/api/user?id=${router.query.id}`)
        const user = userData.data
        setData(user)
      } else {
        const userData = await axios.get("/api/user")
        const user = userData.data
        setData([user])
      }
    } catch (err) {
      return err.msg
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <UserLayout>
      {datanya === null ? (
        <button
          className="absolute px-4 right-5 top-5 py-1 rounded-full bg-yellow-300 text-red-500 font-bold"
          onClick={fetchData}
        >
          Load Post
        </button>
      ) : (
        <div className="p-6">
          <div className="bg-[#886F6F] p-6 w-max rounded-md space-y-5">
            <div className="flex space-x-10 [&>h2]:font-bold text-white">
              {typeof datanya === "object" ? (
                <span>
                  <h1>{datanya.username}</h1>
                  <h1>{datanya.email}</h1>s
                </span>
              ) : (
                datanya.map((e, i) => (
                  <span key={i}>
                    <h1>{e.username}</h1>
                    <h1>{e.email}</h1>
                  </span>
                ))
              )}
              <OptionButton />
            </div>
          </div>
        </div>
      )}
    </UserLayout>
  )
}

export default Feeds
