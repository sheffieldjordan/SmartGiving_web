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