import axios from "axios"
import { config } from "./config"

export async function loadCatalog() {
try {
           //create url
// const url = "http://localhost:4001/user/catalog"
const url = `${config.serverBaseUrlCatalog}/food-item/`


    //send the request and get the response
const response = await axios.get(url)

//return the response body
return response.data
    } catch (ex) {
        console.log(`exception : `,ex)
    }
 
}