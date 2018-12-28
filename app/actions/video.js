import axios from 'axios'
import ip from '../config'
import deviceStorage from '../deviceStorage'

export function ALL_VIDEOS(limit) {
    return {
        type: "ALL_VIDEOS",
        payload: axios.get(`${ip}/videos/0/${limit}`)
    }
}

export function DETAIL_VIDEO(slug) {
    return {
        type: "DETAIL_VIDEO",
        payload: axios.get(`${ip}/video/${slug}`)
    }
}

export function POPULAR(limit) {
    return {
        type: "POPULAR",
        payload: axios.get(`${ip}/video/series/popular/${limit}`)
    }
}

export function USER(data) {
    return {
        type: "USER",
        payload: data
    }
}

export function CATEGORY(category, limit) {
    return {
        type: "CATEGORY",
        payload: axios.get(`${ip}/video/${category}/${limit}`)
    }
}

export function EPISODE(series) {
    return {
        type: "EPISODE",
        payload: axios.get(`${ip}/video/series/${series}/null`)
    }
}

export function SEARCH(text) {
    return {
        type: "CATEGORY",
        payload: axios.get(`${ip}/series/search?q=${text}&o=0`)
    }
}

export function GET_FAVORIT(token) {
    return {
        type: "FAVORITE",
        payload: axios.get(`${ip}/user/favorites`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
        )
    }
}