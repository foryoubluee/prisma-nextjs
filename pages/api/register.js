import { registerUser } from "../../prisma/utils"
import { genSalt, hash } from "bcrypt"

const saltRounds = 10

const handler = async (req, res) => {
  const { data } = req.body
  genSalt(saltRounds, (err, salt) => {
    const password = data.password
    hash(password, salt, async (err, hash) => {
      delete data.password
      const dataToBeStored = { ...data, password: hash }
      const user = await registerUser(dataToBeStored)
      return res.status(200).json(user)
    })
  })
}

export default handler
