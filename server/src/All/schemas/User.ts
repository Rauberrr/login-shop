import { model, Schema } from 'mongoose'

interface UserInterface extends Document {
    email2?: string
    password2?: string
    isAdmin: {
        type: boolean,
        default: false,
    }
}

const UserSchema = new Schema({
    email2: String,
    password2: String,
    isAdmin: {
        type: Boolean,
        default: false,
    }
},
{
    timestamps: true
})

export default model<UserInterface>('User', UserSchema)