import { GetAllOpenGifts, GetAllMerchants } from "../backend/APIManager"

export const FetchGift = (charityID, completion) => {
    const dbCompletion = (data, err) => {
      if (err) {
        alert(`${err}`)
        return
      }
      const charity = data.reduce((finalChar, currentChar) => {
        return currentChar.ethRecipientAddr === charityID ? currentChar : finalChar
      }, undefined)
      if (charity === undefined) {
        console.warn(`Cannot find charity for id ${charityID}`)
        return completion()
      } else if (charity.gifts === undefined || charity.gifts.length === 0) {
          console.warn(`Cannot find gifts for charity with id ${charityID}`)
          return completion()
        }
      else {
        const gift = charity.gifts[0]
        return completion(charity, gift)
      }
    }
    GetAllOpenGifts(dbCompletion)
}

export const FetchMerchants = (gift, completion) => {
	const merchantIDs = gift.bids.map((b) => b.ethMerchantAddr)
	const dbCompletion = (data, err) => {
      if (err) return console.log(`${err}`)
      const merchantData = data.reduce((finalVal, currentVal) => {
      	if (merchantIDs.indexOf(currentVal.ethMerchantAddr) !== -1)
      		return [...finalVal, currentVal]
      	return finalVal
      }, [])
      completion(merchantData)
	}
	GetAllMerchants(dbCompletion)

}