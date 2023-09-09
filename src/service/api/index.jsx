import axios from "axios";
const apiURL = import.meta.env.VITE_APP_API_URL;


async function postDataFile(data){
    
    return await axios.post(`${apiURL}/validate`, data);
}

const api ={
    postDataFile
}
export default api;