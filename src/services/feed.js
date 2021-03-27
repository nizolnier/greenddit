import axios from 'axios'
import {baseUrl} from '../constants/urls'

export const createPost = (body, update) => {
    axios.post(`${baseUrl}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        update()
        window.alert("Post created with success!")
    }).catch((err) => {
      window.alert("Whops, there's an error!")
    })
}

export const createComment = (body, postId, update) => {
    axios.post(`${baseUrl}/posts/${postId}/comment`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        update()
        window.alert("Comment created with success!")
    }).catch((err) => {
      window.alert("Whops, there's an error!")
      console.log(err)
    })
}

export const votePost = (body, postId, update) => {
    axios.put(`${baseUrl}/posts/${postId}/vote`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        update()
    }).catch((err) => {
      window.alert("That didn't work, could you click again?")
      console.log(err)
    })

}

export const voteComment = (body, postId, commentId, update) => {
    axios.put(`${baseUrl}/posts/${postId}/comment/${commentId}/vote`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        update()
    }).catch((err) => {
      window.alert("That didn't work, could you click again?")
      console.log(err)
    })

}