import React from 'react'
import axios from 'axios'

const AxiosbaseUrl = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com/"
})

export default AxiosbaseUrl