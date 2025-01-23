import { IUser } from "@/types";
export declare const useUser: () => {
    user: IUser;
    registerUser: (data: Omit<IUser, "id">) => void;
    updateUser: (id: string, data: Partial<IUser>) => void;
    logoutUser: () => void;
};
