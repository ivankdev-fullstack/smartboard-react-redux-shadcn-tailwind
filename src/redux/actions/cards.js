// TYPES
export const ADD_CARD = "ADD_CARD";
export const UPDATE_CARD = "UPDATE_CARD";
export const DELETE_CARD = "DELETE_CARD";
// FUNCS
export const addCard = (data) => ({
    type: ADD_CARD,
    payload: data,
});
export const updateCard = (id, data) => ({
    type: UPDATE_CARD,
    payload: { ...data, id },
});
export const deleteCard = (id) => ({
    type: DELETE_CARD,
    payload: { id },
});
