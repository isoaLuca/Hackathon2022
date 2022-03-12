import { Reducer } from "react";
import { UserAction, UserActionType } from "./action";
import { UserState, initialState } from "./type";

export const userStateReducer: Reducer<UserState, UserAction> = (state = initialState, action) => {
    switch (action.type) {
        case UserActionType.GET_USERS_LIST:
            return {
                ...state,
                isloading: true
            }
        case UserActionType.GET_USERS_LIST_SUCCESS:
            return {
                ...state,
                isloading: false,
                usersList: Array.isArray(action.payload) ? action.payload : []
            }
        case UserActionType.GET_USERS_LIST_FAILURE:
            return {
                ...state,
                isloading: false
            }
        case UserActionType.CREATE_USERS:
            return {
                ...state,
                isloading: true
            }
        case UserActionType.CREATE_USERS_SUCCESS:
            return {
                ...state,
                isloading: false,
                needRefresh: true
            }
        case UserActionType.CREATE_USERS_FAILURE:
            return {
                ...state,
                isloading: false
            }
        default:
            return state;
    }
}