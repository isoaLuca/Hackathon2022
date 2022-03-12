import { UserState } from "./type";

export const UserActionType = {
    GET_USERS_LIST: 'GET_USERS_LIST',
    GET_USERS_LIST_SUCCESS: 'GET_USERS_LIST_SUCCESS',
    GET_USERS_LIST_FAILURE: 'GET_USERS_LIST_FAILURE',
    CREATE_USERS: 'CREATE_USERS',
    CREATE_USERS_SUCCESS: 'CREATE_USERS_SUCCESS',
    CREATE_USERS_FAILURE: 'CREATE_USERS_FAILURE',
    UPDATE_USERS: 'UPDATE_USERS',
    UPDATE_USERS_SUCCESS: 'UPDATE_USERS_SUCCESS',
    UPDATE_USERS_FAILURE: 'UPDATE_USERS_FAILURE',
    DELETE_USERS: 'DELETE_USERS',
    DELETE_USERS_SUCCESS: 'DELETE_USERS_SUCCESS',
    DELETE_USERS_FAILURE: 'DELETE_USERS_FAILURE',
}

interface GetUsersListType {
    type: typeof UserActionType.GET_USERS_LIST;
    payload?: undefined;
}

interface GetUsersListSuccessType {
    type: typeof UserActionType.GET_USERS_LIST_SUCCESS;
    payload: UserState[];
}

interface GetUsersListFailureType {
    type: typeof UserActionType.GET_USERS_LIST_FAILURE;
    payload: undefined;
}

interface CreateUsersType {
    type: typeof UserActionType.CREATE_USERS;
    payload: undefined;
}

interface CreateUsersSuccessType {
    type: typeof UserActionType.CREATE_USERS_SUCCESS;
    payload: undefined;
}

interface CreateUsersFailureType {
    type: typeof UserActionType.CREATE_USERS_FAILURE;
    payload: undefined;
}

interface UpdateUsersType {
    type: typeof UserActionType.UPDATE_USERS;
    payload: undefined;
}

interface UpdateUsersSuccessType {
    type: typeof UserActionType.UPDATE_USERS_SUCCESS;
    payload: undefined;
}

interface UpdateUsersFailureType {
    type: typeof UserActionType.UPDATE_USERS_FAILURE;
    payload: undefined;
}

interface DeleteUsersType {
    type: typeof UserActionType.DELETE_USERS;
    payload: undefined;
}

interface DeleteUsersSuccessType {
    type: typeof UserActionType.DELETE_USERS_SUCCESS;
    payload: undefined;
}

interface DeleteUsersFailureType {
    type: typeof UserActionType.DELETE_USERS_FAILURE;
    payload: undefined;
}


export type UserAction = 
    GetUsersListType | GetUsersListSuccessType | GetUsersListFailureType |
    CreateUsersType | CreateUsersSuccessType | CreateUsersFailureType |
    UpdateUsersType | UpdateUsersSuccessType | UpdateUsersFailureType |
    DeleteUsersType | DeleteUsersSuccessType | DeleteUsersFailureType;
