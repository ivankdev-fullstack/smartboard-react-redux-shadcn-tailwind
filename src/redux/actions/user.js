// TYPES
export const REGISTER = "REGISTER";
export const UPDATE_USER = "UPDATE_USER";
export const LOGOUT = "LOGOUT";
// FUNCS
export const register = (data) => ({
    type: REGISTER,
    payload: data,
});
export const update = (id, data) => ({
    type: UPDATE_USER,
    payload: { id, data },
});
export const logout = () => ({
    type: LOGOUT,
});
