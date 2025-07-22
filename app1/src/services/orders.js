import { config } from "./config"
import axios from 'axios'

export async function makePayment(products){
    try{
        //create url
       const url = `${config.serverBaseUrlOrder}/payment/make-payment`
       const body = {products}
      //read the token 
const token = sessionStorage.getItem('token')
// console.log(`token = ${token}`)
// if (!token) {
//   return { status: 'error', error: 'User not logged in. Token missing.' };
// }
//add the token to the heders the parameters
const headers = {
    headers : {

        authorization: `Bearer ${token}`,
    },
    
}
//send the request and get the response
       const response = await axios.post(url,body,headers)
       return response.data
    }catch(error){
        console.error('error making payment:',error)
        throw error
    }
    
}