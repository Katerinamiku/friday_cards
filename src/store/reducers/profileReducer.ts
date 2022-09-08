
//draft
export type AuthActionsTypes = ReturnType<typeof SomeAC>
export type AuthMeType = {

}
export let initialState = {

}

export const profileReducer = (state: AuthMeType = initialState, action: AuthActionsTypes): AuthMeType => {
    switch (action.type) {
        case 'SOME_ACTION': {
            return state;
        }
        default:
            return state;
    }
    return state;
}

//--------------AC-------------------
export const SomeAC = () => {
    return {
        type: "SOME_ACTION",
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
