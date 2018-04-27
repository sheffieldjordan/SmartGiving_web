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
	return textFactory("Your Donation", "Donate")
}

const merchantText = (charity) => {
	return textFactory("Your Bid", "Bid", charity.location)
}

const textFactory = (moneyDescription, donateButton, location) => {
	return {
		moneyDescription,
		donateButton,
		location
	}
}

export default GiftTextFactory