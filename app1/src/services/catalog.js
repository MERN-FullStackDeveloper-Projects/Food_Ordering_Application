import axios from "axios"
import { config } from "./config"

export async function loadCatalog() {
try {
           //create url
// const url = "http://localhost:4001/user/catalog"
const url = `${config.serverBaseUrlCatalog}/food-item/`
// const url = `${config.serverBaseUrlCatalog}/category/`

//read the token 
const token = sessionStorage.getItem('token')
console.log(`token = ${token}`)
if (!token) {
  return { status: 'error', error: 'User not logged in. Token missing.' };
}


//create load the token to the heders the parameters
const headers = {
    headers : {

        Authorization: `Bearer ${token}`
    },
    
}

    //send the request and get the response
const response = await axios.get(url,headers)

//return the response body
return response.data
    } catch (ex) {
        console.log(`exception : `,ex)
         return { status: 'error', error: ex.message };
    }
 
}