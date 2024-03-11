import axios from 'axios'
import { Message } from '../../types/type'

export const sendMessage = (data: Message): Promise<Message> => {
    return axios
        .post('http://localhost:8080/api/v1/new', data)
        .then((resolve) => resolve)
        .catch((e) => e.msg)
}
