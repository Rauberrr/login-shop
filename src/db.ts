import { model, Schema } from 'mongoose'

interface UserInterface extends Document {
    id: number
    email?: string
    password?: string
}

const UserSchema = new Schema({
    id: Number,
    email: String,
    password: String
},
{
    timestamps: true
})

export default model<UserInterface>('User', UserSchema)