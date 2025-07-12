import React from 'react'
import { config } from './config'
import axios from 'axios'

export async function login(email,password) {
    try {
           //create url
// const url = "http://localhost:4000/user/login"
const url = `${config.serverBaseUrlUser}/user/login`
    //create body
const body = {email, password}
    //send the request and get the response
const response = await axios.post(url, body)

//return the response body
return response.data
    } catch (ex) {
        console.log(`exception : `,ex)
    }
 
}

export async function registerUser(firstName, lastName, email, password) {
    try {
           //create url
// const url = "http://localhost:4000/user/login"
const url = `${config.serverBaseUrlUser}/user/register`
    //create body
const body = {firstName, lastName, email, password}
    //send the request and get the response
const response = await axios.post(url, body)

//return the response body
return response.data
    } catch (ex) {
        console.log(`exception : `,ex)
    }
 
}

export async function getProfile() {
    try {
           //create url
// const url = "http://localhost:4000/user/login"
const url = `${config.serverBaseUrlUser}/user/profile`
    //create header with token
    const headers = {
        headers:{
            Authorization : `Bearer $(sessionStorage.getItem('token'))`
        },
    }

    //send the request and get the response
const response = await axios.get(url, headers)

//return the response body
return response.data
    } catch (ex) {
        console.log(`exception : `,ex)
    }
 
}
