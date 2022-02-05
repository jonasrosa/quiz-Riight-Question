import React from "react";
import axios from "axios";


const api=axios.create(({
    baseURL:'https://www.googleapis.com/books/v1/volumes?q=dq=holmes'
    
}))
export {api}