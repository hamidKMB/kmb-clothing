import { userActionsType } from "./actions.types"

export const setCurrentUser = user => ({
    type: userActionsType.SET_CURRENT_USER ,
    payload: user
})