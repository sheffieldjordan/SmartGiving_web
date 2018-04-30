import { createStore, combineReducers } from 'redux'
import { updateDrawer, updateNewGift, globalData } from './redux/reducers'

import data from './data/user'


const initialState = {
	updateDrawer: {
		donationDrawerOpen: false,
		donationValue: undefined,
		selectedCharity: {},
	},
	updateNewGift: {
		giftData: {},
	},
	globalData: {
		...data,
	}
}

export const store = createStore(
	combineReducers({
		updateDrawer,
		updateNewGift,
		globalData
	}),
	initialState
)