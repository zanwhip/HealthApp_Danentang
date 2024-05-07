import axios from "axios";

const BASE_URL='http://172.20.10.5:3000/api/bardapi' //Replace with System PC IP address

const getBardApi=(userMsg)=>axios.get(BASE_URL+"?ques="+userMsg);

export default{
    getBardApi
}