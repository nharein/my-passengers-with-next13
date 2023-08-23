import { PrismaAdapter } from '@auth/prisma-adapter'
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from '@/app/db'
import bcrypt from 'bcrypt'


export const options = {
  // Using database with prisma 
  adapter: PrismaAdapter(prisma),
  // Simple auth with login ad password
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: 'text', placeholder: 'user'},
        password: { label: 'Password', type: 'password'}
      },
      async authorize(credentials) {
        // Check if login and password exist
        if (!credentials.name || !credentials.password) {
          console.log('invalid login or password')
          return null
        }

        // Check if user exist
        const user = await prisma.user.findUnique({
          where: {
            name: credentials.name
          }
        })
        if(!user){
          console.log('User not found')

          return null
        }

        // Check if password match
        const passwordMatch = await bcrypt.compare(credentials.password, user.password)

        if(!passwordMatch) {
          console.log('invalid password')

          return null
        }
        console.log(user)

        return user
      }
    })
  ],
  session: {
    strategy: 'jwt',  
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development'
}
