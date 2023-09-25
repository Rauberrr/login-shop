import jwt from 'jsonwebtoken'
import config from '../../config'
import User from '../schemas/User'

export default class AuthService {
    public async signIn (email2: string, password2: string): Promise<{ user, token }> {
        const UserValidade = await User.findOne({ email: email2, password: password2 })
        
        if (!UserValidade) {
            throw new Error('Credenciais Invalidas')
        }
        
        try {
            console.log('usuario validado '+ UserValidade)
            

            const token = jwt.sign({ id: UserValidade._id }, config.auth.secret, {
                expiresIn: config.auth.ExpiresIn
            })

            return {
                user: {
                    id: UserValidade._id,
                    email2: UserValidade.email
                },
                token
            }
        } catch (error) {
            console.log('erro ao gerar o token')
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