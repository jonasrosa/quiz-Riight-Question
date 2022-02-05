import React from 'react'
import axios from 'axios'

const apiBooks=axios.create(({
    baseURL:('http://127.0.0.1:3333/api')
}))
export {apiBooks}
