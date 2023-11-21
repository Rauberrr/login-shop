import jwt from 'jsonwebtoken'
import config from '../../config'
import User from '../schemas/User'

export default class AuthService {

    public async signIn(email: string, password: string): Promise<{ user, token }> {

        interface tokenProps {
            token: string
        }


        const UserValidade = await User.findOne({ email: email, password: password })

        if (!UserValidade) {
            throw new Error('Credenciais Invalidas')
        }

        try {

            const token: tokenProps = jwt.sign({ email: UserValidade.email, id: UserValidade._id, isAdmin: UserValidade.isAdmin }, config.auth.secret, {
                expiresIn: config.auth.ExpiresIn
            })

            return {
                user: {
                    id: UserValidade._id,
                    name: UserValidade.name,
                    email,
                    isAdmin: UserValidade.isAdmin
                },
                token
            }

        } catch (error) {
            console.log('erro ao gerar o token')
            throw new Error('Erro ao gerar o token')
        }
    }

    public async tokenValidate(token: string): Promise<void> {
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