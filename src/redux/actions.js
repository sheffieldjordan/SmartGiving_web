import C from './reduxConstants'

export const selectCharity = charity => {
	return {
		type: C.SELECT_CHARITY,
		charity
	}
}
export const toggleDrawer = donationDrawerOpen => {
	return {
		type: C.TOGGLE_DONATION_DRAWER,
		donationDrawerOpen
	}
}