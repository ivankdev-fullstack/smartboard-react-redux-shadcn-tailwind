// TYPES
export const ADD_BOARD = "ADD_BOARD";
export const UPDATE_BOARD = "UPDATE_BOARD";
export const DELETE_BOARD = "DELETE_BOARD";
// FUNCS
export const addBoard = (userId) => ({
    type: ADD_BOARD,
    payload: { userId },
});
export const updateBoard = (id, data) => ({
    type: UPDATE_BOARD,
    payload: { ...data, id },
});
export const deleteBoard = (id) => ({
    type: DELETE_BOARD,
    payload: { id },
});
