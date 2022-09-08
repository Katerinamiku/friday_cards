
//draft
export type AuthActionsTypes = ReturnType<typeof setAuthUserData>
export type AuthMeType = {
    id: string,
    login: string,
    email: string,
    isAuth: boolean
}
export let initialState = {
    id: '',
    login: '',
    email: '',
    isAuth: false
}

export const authReducer = (state: AuthMeType = initialState, action: AuthActionsTypes): AuthMeType => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            return state;
        }
        default:
            return state;
    }
    return state;
}

export default authReducer

//--------------AC-------------------
export const setAuthUserData = (id: string, email: string, login: string, isAuth: boolean) => {
    return {
        type: "SET_USER_DATA",
        payload: {id, email, login, isAuth}
    } as const
}
//---------------THUNK-----------------
// export const getAuthUserData = (): AppThunkType => {
//     return (dispatch) => {
//         authAPI.setAuthUserData()
//             .then(response => {
//                 if (response.data.resultCode === 0) {
//                     const {id, email, login} = response.data.data
//                     dispatch(setAuthUserData(id, email, login, true))
//                 }
//             });
//     }
// }

