export interface ITodo {
    id: number;
    title: string;
    description: string;
    date:Date
    status: boolean;
  }

  export type TodoContextType = {
    todos: ITodo[];
    saveTodo: (todo: ITodo) => void;
    updateTodo?: (id: string) => void;
  };

  