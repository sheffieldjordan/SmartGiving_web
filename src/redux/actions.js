import C from './reduxConstants'

export const selectRequest = selectedRequest => {
	return {
		type: C.SELECT_REQUEST,
		selectedRequest
	}
}
export const toggleDrawer = donationDrawerOpen => {
	return {
		type: C.TOGGLE_DONATION_DRAWER,
		donationDrawerOpen
	}
}