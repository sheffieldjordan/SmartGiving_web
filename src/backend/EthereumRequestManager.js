import {UnixFromString, DollarsToEther} from '../style/Formatter'

export const DonationRequest = (charity, money) => {
	const gift = charity.gifts[0]
	return {
		recipientAddress : charity.ethRecipientAddr,
		expiry: UnixFromString(gift.expiry),
		databaseID: gift._id,
		ether: DollarsToEther(money).toString()
	}
}

export const BidRequest = (charity, money) => {
	const gift = charity.gifts[0]
	return {
		giftAddress : gift.ethGiftAddr,
		ether: money.toString()
	}
}

export const ChooseMerchantRequest = (gift, merchantAddress) => {
	return {
		giftAddress: gift.ethGiftAddr,
		merchantAddress
	}
}

export const ConfirmRequest = (charity) => {
	const gift = charity.gifts[0]
	return {
		giftAddress: gift.ethGiftAddr
	}
}