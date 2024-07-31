import { users } from "../appwrite.config"

export const createUser = async (user: CreateUserParams) => {
    try {
      //A comment
    } catch (error) {
      if (error && error?.code === 409) {
        const existingUser = await users.list([
            Query.equal("email", [user.email])
        ])

        return existing?.users[0]
      }  
    }
}