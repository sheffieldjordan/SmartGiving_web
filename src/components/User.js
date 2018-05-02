import userData from '../data/user'
import web3 from '../ethereum/web3'

export const UserType = {
	DONOR : "donor",
	MERCHANT: "merchant",
	RECIPIENT: "recipient"
}

export const UserInfo = type => {
	return userData[type]
}


// Always be polling for an update in Ethereum address



// TODO: @Gabe be good about checking to see if this is undefined.
// We may need some kind of MetaMask error page
let currentTimer = undefined
let currentAccount = undefined

export const PollUserAddress = (completion = () => {}) => {
	currentTimer = setInterval(function() {
	  	web3.eth.getAccounts((error, result) => {
	  		const newAccount = result[0]
		  	if (newAccount !== currentAccount) {
	  			console.log(`Detected a new Ethereum account: ${newAccount}`)
	  			currentAccount = newAccount
	  			completion(currentAccount)
	  		}
	  	})
	}, 150);
}

export const CancelPollUserAddress = () => {
	if (currentTimer !== undefined) currentTimer.clearTimeout()
}