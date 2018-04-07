import C from './reduxConstants'

export const toggleDrawer = donationDrawerOpen => {
	return {
		type: C.TOGGLE_DONATION_DRAWER,
		donationDrawerOpen
	}
}