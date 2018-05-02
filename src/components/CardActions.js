import {ItemSent} from '../ethereum/components/ItemSent'
import {ConfirmShippedRequest} from '../backend/EthereumRequestManager'

export const SelectDonate = component => charity => () => {
  component.props.showCharity(true, charity)
}

export const LearnMore = component => charity => () => {
  component.props.history.push({
    pathname: `/charity/${charity.ethRecipientAddr}/${component.props.userType}`,
    state: { charity }
  })
}

export const ConfirmShipment = component => charity => () => {
	ItemSent(ConfirmShippedRequest(charity), (err) => {
		if (err !== undefined) alert(err)
		else console.log(`Wow I love ${charity.title}`)
	})
  
}

export const PrimaryButtonFunction = (charity, address) => {
	try {
		return (address !== undefined && charity.gifts[0].ethMerchantAddr === address) ? ConfirmShipment : SelectDonate
	} catch(err) {
		return SelectDonate
	}
}