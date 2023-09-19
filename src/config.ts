import dotenv from 'dotenv'

dotenv.config()

export default {
    port: process.env.PORT,
    mongodb: {
        user: process.env.USER_DB,
        pass: process.env.PASS_DB
    }
}