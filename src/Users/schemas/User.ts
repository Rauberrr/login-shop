import { model, Schema } from 'mongoose'

interface UserInterface extends Document {
    email: string
    password: string
}

const UserSchema = new Schema({
    email: String,
    password: String
},
{
    timestamps: true
})

export default model<UserInterface>('User', UserSchema)