import { Request, Response } from 'express'
import User from '../schemas/User' 

class UserController {
    public async list (req: Request, res: Response): Promise<Response> {
        const users = await User.find()
        console.log(users)
        return res.status(200).json(users)
    } 

    public async create (req: Request, res: Response): Promise<Response> {
        try{

            const user = await User.create(req.body)
            
            return res.status(200).json(user)
        } catch (erro) {
            throw new Error('error to create new user')
        }
    }

    public async delete (req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id
            const user = await User.findByIdAndDelete(id)

            if(!user) {
                return res.status(401).json({msg: 'user not found'})
            }
            
            return res.status(200).json({msg: 'Delete user sucessfully', user})
        } catch(erro) {
            throw new Error('Error when delete the user')
        }
    }

    
}

export default new UserController()