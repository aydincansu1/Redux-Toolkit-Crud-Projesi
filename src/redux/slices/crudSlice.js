import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
  tasks: [],
};
const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addTask: (state, action) => {
      // a) todo'ya id ekle
      action.payload.id = v4();
      // b) veriyi tasklarin arasina ekle
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      // idsin payload ile gelen elamani diziden kaldir

      // 1. yontem > filter
      //   const filtred = state.tasks.filter((task) => task.id !== action.payload);
      //   state.tasks = filtred;
      // 2. yontem > splice

      // a) silinecek elemanin sirasini bul
      const index = state.tasks.findIndex((i) => i.id === action.payload);
      //b) diziden elamani kaldir
      state.tasks.splice({ index }, 1);
    },
    editTask: (state, action) => {
      // guncel verilerine sahip oldugumuz elemanin dizideki halini guncelleme
      // a) guncellenecek elemanin sirasini bul
      const index = state.tasks.findIndex((i) => i.id === action.payload.id);
      //b) elemanin gunceller
      state.tasks.splice(index, 1, action.payload);
    },
  },
});
// reducer'i store'a tanitmak icin export
export default crudSlice.reducer;

// aksiyonlari kullanmak
export const { addTask, deleteTask, editTask } = crudSlice.actions;
