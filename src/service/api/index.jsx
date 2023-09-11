import axios from "axios";
const apiURL = import.meta.env.VITE_APP_API_URL;


async function postDataFile(data){
    
    return await axios.post(`${apiURL}/validate`, data);
}

async function postUpdateProducts(data){
    return await axios.post(`${apiURL}/update`, data);
}

const api ={
    postDataFile,
    postUpdateProducts
}
export default api;