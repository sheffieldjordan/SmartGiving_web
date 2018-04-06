import C from './reduxConstants'

export const showDonationDrawer = (state = {}, action) => {
	switch (action.type) {
		case C.TOGGLE_DONATION_DRAWER:
			return {
				...state,
				donationDrawerOpen: action.donationDrawerOpen
			}
		default:
			return state
	}
}