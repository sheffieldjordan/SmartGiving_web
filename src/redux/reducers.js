import C from './reduxConstants'

export const updateDrawer = (state = {}, action) => {
	switch (action.type) {
		case C.TOGGLE_DONATION_DRAWER:
			return {
				...state,
				donationDrawerOpen: action.donationDrawerOpen
			}
		case C.SELECT_CHARITY:
			return {
				...state,
				selectedCharity:action.charity
			}
		default:
			return state
	}
}