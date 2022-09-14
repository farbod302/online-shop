import axios from "axios"

export const server_request =async (path, method, params) => {
    let server = "http://192.168.43.161:4565"
    if (method === "get") {
        let { data } =await axios.get(`${server}/${path}`, { headers: { token: localStorage.getItem("token") || null } })
        return data
    }
    else {
        let { data } =await axios.post(`server/${path}`, params, { headers: { token: localStorage.getItem("token") || null } })
        return data
    }

}