const GiftTextFactory = (type, charity) => {
	if (charity === undefined) return {}
	if (type === "donor") {
		return donorText(charity)
	} else if (type === "merchant") {
		return merchantText(charity)
	}
	return {}
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