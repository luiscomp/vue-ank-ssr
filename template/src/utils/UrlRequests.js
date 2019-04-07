import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const URL_BASE = 'http://localhost:3000/'

export const axiosRequest = axios.create({
    baseURL: URL_BASE,
    timeout: 30000,
    maxContentLength: 5242880,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})
