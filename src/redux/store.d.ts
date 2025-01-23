export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    boards: import("../types").IBoard[];
    cards: import("../types").ICard[];
    currentUser: import("../types").IUser;
}, import("./actions/boards").BoardActionTypes | import("./actions/cards").CardActionTypes | import("./actions/user").UserActionTypes, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        boards: import("../types").IBoard[];
        cards: import("../types").ICard[];
        currentUser: import("../types").IUser;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
