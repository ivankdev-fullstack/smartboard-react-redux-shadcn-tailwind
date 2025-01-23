import { v4 as uuidv4 } from "uuid";
import { LOGOUT, REGISTER, UPDATE_USER, } from "../actions/user";
const initialState = {};
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            const id = uuidv4();
            return {
                ...action.payload,
                id,
            };
        case UPDATE_USER:
            if (!(state.id === action.payload.id)) {
                return state;
            }
            return { ...state, ...action.payload };
        case LOGOUT:
            return {};
        default:
            return state;
    }
};
