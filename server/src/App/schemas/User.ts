import { model, Schema } from 'mongoose'

interface UserInterface extends Document {
    name: string
    email?: string
    password?: string
    isAdmin: {
        type: boolean,
        default: false,
    }
}

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    isAdmin: {
        type: Boolean,
        default: false,
    }
},
{
    timestamps: true
})

export default model<UserInterface>('User', UserSchema)