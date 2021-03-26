import axios from 'axios'
import { baseUrl } from '../constants/urls'
import { goToFeed } from '../router/coordinator'

export const login = (body, history, setLoading) => {
  setLoading(true)
  axios.post(`${baseUrl}/login`, body).then((res) => {
    setLoading(false)
    localStorage.setItem("token", res.data.token)
    localStorage.setItem("username", res.data.user.username)
    goToFeed(history)
  }).catch((err) => {
    setLoading(false)
    window.alert("Incorrect email or password!")
  })
}

export const signUp = (body, history, setLoading) => {
  setLoading(true)
  axios.post(`${baseUrl}/signup`, body).then((res) => {
    setLoading(false)
    localStorage.setItem("token", res.data.token)
    localStorage.setItem("username", res.data.user.username)
    goToFeed(history)
  }).catch((err) => {
    setLoading(false)
    window.alert("Whops! I think there's already an user with some of this information!")
  })
}