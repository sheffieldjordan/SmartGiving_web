import C from './reduxConstants'

export const updateDrawer = (state = {}, action) => {
	switch (action.type) {
		case C.TOGGLE_DONATION_DRAWER:
			return {
				...state,
				donationDrawerOpen: action.donationDrawerOpen,
				donationValue: action.donationValue
			}
		case C.SELECT_REQUEST:
			return {
				...state,
				selectedRequest:action.selectedRequest
			}
		default:
			return state
	}
}

export const updateNewGift = (state = {}, action) => {
	switch (action.type) {
		case C.UPDATE_GIFT:
			return {
				...state,
				giftData: {
					...state.giftData,
					...action.giftData,
				}
			}
		default:
			return state
	}
}

export const globalData = (state = {}, action) => {
	return state
}
