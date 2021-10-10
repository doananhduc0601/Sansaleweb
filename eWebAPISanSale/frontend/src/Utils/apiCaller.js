import axios from "axios";
import * as Config from '../constants/config';

export default function callApi(endpoint,method ='GET',body){
    return
    axios({
        method :method,
        url:`${Config.API_URL}/${endpoint}`,
        data :body
    }).then(res =>{
        console.log(err)
    });
};