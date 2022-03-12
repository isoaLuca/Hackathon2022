
export interface UserState {
    isloading: boolean;
    usersList: UserState[];
    needRefresh: boolean;
}

export const initialState: UserState = {
    isloading: false,
    usersList: [],
    needRefresh: false
};