import { addUser, getUser, getUsers } from "../../prisma/utils"

const handler = async (req, res) => {
  try {
    switch (req.method) {
      case "GET": {
        if (req.query.id) {
          const user = await getUser(req.query.id)
          return res.status(200).json(user)
        } else {
          const users = await getUsers()
          return res.status(200).json(users)
        }
      }
      case "POST": {
        const { data } = req.body
        const user = await addUser(data)
        return res.status(200).json(user)
      }
    }
  } catch (err) {
    return res.status(500).json({ ...err, msg: err.message })
  }
}

export default handler
