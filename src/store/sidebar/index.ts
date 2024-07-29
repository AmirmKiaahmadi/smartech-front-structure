import { createSlice } from '@reduxjs/toolkit'

export interface ISideBar {
    isOpen: boolean
    isOpenSupportModal: boolean
    isOpenLogoutModal: boolean
}
const initialState: ISideBar = {
    isOpen: false,
    isOpenSupportModal: false,
    isOpenLogoutModal: false,
}
export const sideBarController = createSlice({
    name: 'sideBarControler',
    initialState,
    reducers: {
        toggleSideBar: (state, action: { payload: { isOpen: boolean } }) => {
            state.isOpen = action.payload.isOpen
        },
        toggleSupportModal: (
            state,
            action: { payload: { isOpenSupportModal: boolean } }
        ) => {
            state.isOpenSupportModal = action.payload.isOpenSupportModal
        },
        toggleLogoutModal: (
            state,
            action: { payload: { isOpenLogoutModal: boolean } }
        ) => {
            state.isOpenLogoutModal = action.payload.isOpenLogoutModal
        },
    },
})

export const { toggleSideBar, toggleSupportModal, toggleLogoutModal } =
    sideBarController.actions

export default sideBarController.reducer
