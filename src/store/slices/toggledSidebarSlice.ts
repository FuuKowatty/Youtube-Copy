import { createSlice } from "@reduxjs/toolkit"

interface initialState  {
    isToggled: boolean,
    isActive: boolean
  }
  
  const initialState: initialState = {
    isToggled: false,
    isActive: false
  }
  
export const toggledSidebarSlice = createSlice({
    name: "toggledSidebar",
    initialState,
    reducers: {
      toggleSidebar: (state) => {
        state.isToggled = !state.isToggled
      },
      toggleMobileSearchbar: (state) => {
        state.isActive = !state.isActive
      }
    }
  })