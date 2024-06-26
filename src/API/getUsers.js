import $api, {api_url} from "../http";
import axios from "axios";

export const getUsers = async (email) => {
    try {
        console.log(email)
        const user = await axios.put(`${api_url}/auth/user-login`, {email}, {withCredentials: true})
        if (!user) {
            throw new Error('Такого пользователя не существует!')
        }
        return user.data
    } catch(e) {
        console.log(e.message)
        return false
    }

}

export const putUsersIcon = async (id, picture) => {
    try {
        await $api.put('/user/user-icon', {user_id: id, picture})
    } catch(e) {
        console.log(e.message)
    }
}

export const getAdminAuth = async (email, password) => {
    try {
        const auth = await axios.put(`${api_url}/auth/admin-login`, {email, password}, {withCredentials: true})
        if (!auth) {
            throw new Error('Неверный логин/пароль')
        }
        return auth.data
    } catch(e) {
        console.log(e.message)
        return false
    }
}

export const logoutUser = async (email) => {
    try {
        return await $api.put(`/auth/logout`, {email})
    } catch (e) {
        return false
    }


}