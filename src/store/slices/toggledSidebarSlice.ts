import { createSlice } from "@reduxjs/toolkit"

interface initialState  {
    isToggled: boolean
  }
  
  const initialState: initialState = {
    isToggled: false,
  }
  
export const toggledSidebarSlice = createSlice({
    name: "toggledSidebar",
    initialState,
    reducers: {
      toggleSidebar: (state) => {
        state.isToggled = !state.isToggled
      }
    }
  })