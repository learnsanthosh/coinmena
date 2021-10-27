import * as actionTypes from './types'

export const setRepo = (data) => {
    return{ 
        type: actionTypes.SET_REPO, 
        payload: data
    }
}

export const setDev = (data) => {
    return{ 
        type: actionTypes.SET_DEVELOPERS, 
        payload: data
    }
}