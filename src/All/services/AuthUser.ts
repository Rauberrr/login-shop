import jwt from 'jsonwebtoken'
import config from '../../config'
import User from '../schemas/User'

export default class AuthService {
    public async signIn (email2: string, password2: string): Promise<{ user, token }> {
        const UserValidade = await User.findOne({ email2: email2, password2: password2 })
        
        if (!UserValidade) {
            throw new Error('Credenciais Invalidas')
        }
        
        try {
            
            const token = jwt.sign({ email2: UserValidade.email2, id: UserValidade._id, isAdmin: UserValidade.isAdmin}, config.auth.secret, {
                expiresIn: config.auth.ExpiresIn
            })

            return {
                user: {
                    id: UserValidade._id,
                    email2,
                    isAdmin: UserValidade.isAdmin
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
            const decodedToken = jwt.verify(token, config.auth.secret)
            // const userId = decodedToken.id
            // const isAdmin = decodedToken.isAdmin
            // console.log(isAdmin, userId)
            return decodedToken
        } catch (erro) {
            throw new Error('Token Invalido')
        }
    }
}