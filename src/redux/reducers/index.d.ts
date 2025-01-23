export declare const rootReducer: import("redux").Reducer<{
    boards: import("../../types").IBoard[];
    cards: import("../../types").ICard[];
    currentUser: import("../../types").IUser;
}, import("../actions/boards").BoardActionTypes | import("../actions/cards").CardActionTypes | import("../actions/user").UserActionTypes, Partial<{
    boards: never;
    cards: never;
    currentUser: never;
}>>;
export type RootState = ReturnType<typeof rootReducer>;
