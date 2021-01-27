import tokenService from './tokenService'

const BASE_URL = '/api'

export function create(id) {
    return fetch(`${BASE_URL}/posts/${id}/comments`, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json())
}

export function deleteComment(id) {
    return fetch(`${BASE_URL}/comments/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json())
}