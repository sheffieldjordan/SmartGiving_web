export const HomepageFilter = (showFulfilled) => (charities) => {
    return charities.reduce((finalCharities, charity) => {
    if (charity.gifts === undefined ||
        charity.gifts[0] === undefined ||
        charity.gifts[0].donorDonationAmt === undefined ||
        (charity.gifts[0].donorDonationAmt === 0) === showFulfilled ){
      return finalCharities
    } 
    return [...finalCharities, charity]
  }, [])
}
