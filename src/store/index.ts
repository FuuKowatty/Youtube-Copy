import { configureStore } from "@reduxjs/toolkit";
import { YoutubeSlice } from "./slices/YoutubeSlice";
import { toggledSidebarSlice } from "./slices/toggledSidebarSlice";




export const store = configureStore({
  reducer: {
    youtubeApp: YoutubeSlice.reducer,
    toggleSidebar: toggledSidebarSlice.reducer,
  },
});

export const {clearVideos, changeSearchTerm, clearSearchTerm} = YoutubeSlice.actions
export const {toggleSidebar} = toggledSidebarSlice.actions
export const {toggleMobileSearchbar} = toggledSidebarSlice.actions

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
