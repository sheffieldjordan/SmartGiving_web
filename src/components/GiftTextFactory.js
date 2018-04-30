import {UserType} from '../components/User'

const GiftTextFactory = (type, charity) => {
	if (charity === undefined) return {}
	switch (type) {
		case UserType.DONOR:
			return donorText(charity)
		case UserType.MERCHANT:
			return merchantText(charity)
		default:
			return {}
	}
}

const donorText = (charity) => {
	return textFactory("Your Donation", "How much you want to donate?", "Donate")
}

const merchantText = (charity) => {
	return textFactory("Your Bid", "How much you want to bid?", "Bid", charity.location)
}

const textFactory = (moneyDescription, moneySubDescription, donateButton, location) => {
	return {
		moneyDescription,
		moneySubDescription,
		donateButton,
		location
	}
}

export default GiftTextFactory