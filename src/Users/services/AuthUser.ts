import jwt from 'jsonwebtoken'
import config from '../../config'
import User from '../schemas/User'


export default class AuthService {
    public async signIn (email: string, password: string): Promise<{ user, token }> {
        const users = await User.find({email: email})

        

        if (email !== users.email || senha !== users.password) {
            throw new Error('Credenciais Invalidas')
        }

        try {
            const { id } = users.id

            const token = jwt.sign({ id }, config.auth.secret, {
                expiresIn: config.auth.ExpiresIn
            })

            return {
                user: {
                    email,
                    password
                },
                token
            }
        } catch (error) {
            throw new Error('Erro ao gerar o token')
        }
    }

    public async tokenValidate (token: string): Promise<void> {
        try {
            const equals = jwt.verify(token, config.auth.secret)

            return equals
        } catch (erro) {
            throw new Error('Token Invalido')
        }
    }
}