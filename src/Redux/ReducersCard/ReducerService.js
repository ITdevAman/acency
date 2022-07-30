import { instance } from "../../Utils/axios.instance"
const getUrl = `/`

export const ReducerService = {
    getCards : async () => {
        return await instance.get(`${getUrl}`)
    },
    getItem : async (id)=>{
        return await instance.get(`${getUrl}${id}`)
    }
}