import userData from '../data/user'

export const UserType = {
	DONOR : "donor",
	MERCHANT: "merchant",
	RECIPIENT: "recipient"
}

export const UserInfo = type => {
	return userData[type]
}
