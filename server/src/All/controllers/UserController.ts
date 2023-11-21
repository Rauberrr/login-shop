import { Request, Response } from 'express'
import User from '../schemas/User'
import AuthService from '../services/AuthUser'

class UserController {

    public async list(req: Request, res: Response): Promise<Response> {
        const users = await User.find()
        return res.status(200).json(users)
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const { email2, password2 } = req.body

        try {
            console.log(email2, password2)
            const user = await User.create(req.body)

            return res.status(200).json({ msg: 'create user sucesfully', user })
        } catch (error) {
            return res.status(401).json({ erro: 'Falha ao criar o user' })
        }



    }

    public async login(req: Request, res: Response): Promise<Response> {

        const { email, password } = req.body
        // console.log(email, password)
        try {
            const authService = new AuthService()
            const { user, token } = await authService.signIn(email, password)

            return res.status(200).json({ user, token })
        } catch (error) {
            return res.status(401).json({ erro: 'Credenciais Invalidas' })
        }


        // try{

        //     const user = await User.create(req.body)

        //     return res.status(200).json(user)
        // } catch (erro) {
        //     throw new Error('error to create new user')
        // }
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const userId = req.params.id
        const dataUser = req.body

        try {

            const user = await User.findByIdAndUpdate(
                userId,
                dataUser,
                { new: true },
            )

            if (!user) {
                return res.status(404).json({ msg: 'Usuário não encontrado' })
            }

            return res.status(200).json({ msg: 'update user sucessfully', user })
        } catch (error) {
            return res.status(401).json({ erro: 'Falha ao atualizar o user' })
        }



    }

    public async delete(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id
            const user = await User.findByIdAndDelete(id)

            if (!user) {
                return res.status(401).json({ msg: 'user not found' })
            }

            return res.status(200).json({ msg: 'Delete user sucessfully', user })
        } catch (erro) {
            throw new Error('Error when delete the user')
        }

    }


}

export default new UserController()