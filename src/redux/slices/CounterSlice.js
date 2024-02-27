/*
 * Hem reducer'lari
 * Hem aksiyonlari
 * farkli bir dosyada olusturm,ak yerine
 * createSlice method yardimiyla tek bir
 * noktada tanimlayacagiz
 * 
 * 
 * 
 ? Slice olusturma
 * import {createSlice}
 * gerekli parametreleri tanimlama
 - - name : slice ismi > string
 - - initialState : baslangic state'i > object
 - - reducers: aksiyonlarin gorevlerini tanimladigimiz fonksiyonlari


 */

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0, isDarkTheme: true },
  reducers: {
    increase: (state) => {
      state.count++;
    },
    decrease: (state) => {
      state.count--;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

// counter slice'in olusturdugu reducer'i store'da kullanmak icin export ediyoruz
export default counterSlice.reducer;
// conter slice'in olusturdugu
export const { decrease, increase, setCount, toggleTheme } =
  counterSlice.actions;
