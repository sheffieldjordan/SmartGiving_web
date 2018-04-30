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