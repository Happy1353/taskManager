import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TasksState } from './types';
import { Task } from '../../../types';

const initialState: TasksState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    toggleTaskCompletion: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, toggleTaskCompletion } = taskSlice.actions;
export default taskSlice.reducer;
