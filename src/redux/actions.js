import C from './reduxConstants'

export const selectRequest = selectedRequest => {
	return {
		type: C.SELECT_REQUEST,
		selectedRequest
	}
}
export const toggleDrawer = (donationDrawerOpen, donationValue) => {
	return {
		type: C.TOGGLE_DONATION_DRAWER,
		donationDrawerOpen,
		donationValue
	}
}

export const updateGift = (giftData) => {
	return {
		type: C.UPDATE_GIFT,
		giftData
	}
}