import axios from "axios";
const api=axios.create({
    baseURL:"/",
});

export const getUsers= ()=>{
    return api.get("/users");
}
