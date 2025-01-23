export declare const useBoards: () => {
    boards: import("../types").IBoard[];
    handleAddBoard: (userId: string) => void;
    handleUpdateBoard: (id: string, name: string) => void;
    handleDeleteBoard: (id: string) => void;
};
