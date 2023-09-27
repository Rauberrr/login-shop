import { model, Schema } from 'mongoose'

interface UserInterface extends Document {
    email?: string
    password?: string
    isAdmin: {
        type: boolean,
        default: false,
    }
}

const UserSchema = new Schema({
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