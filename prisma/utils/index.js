import prisma from "../prisma"

export const addUser = async (data) => {
  return await prisma.user.create({
    data,
  })
}

export const getUsers = async () => {
  return await prisma.user.findMany()
}

export const getUser = async (username) => {
  return await prisma.user.findUnique({
    where: {
      username,
    },
  })
}

export const registerUser = async (data) => {
  return await prisma.user.create({
    data
  })
}

