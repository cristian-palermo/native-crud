import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export type TList = {
  id: number;
  title: string;
  description: string;
};

const listSlice = createSlice({
  name: 'list',
  initialState: [] as TList[],
  reducers: {
    addElement(state, action: PayloadAction<TList>) {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
      });
    },

    removeElement(state, action) {
      return (state = state.filter(el => el.id !== action.payload));
    },
    updateElement(state, action) {
      const newState = {
        title: action.payload.title,
        description: action.payload.description,
      };

      return state.map(obj => {
        if (obj.id === action.payload.id) {
          return {
            ...obj,
            ...newState,
          };
        }
        return obj;
      });
    },
  },
});

export const {addElement, removeElement, updateElement} = listSlice.actions;
export default listSlice.reducer;
