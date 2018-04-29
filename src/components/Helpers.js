export const PriceForItems = (items, newGift=false) => {
	if (items === undefined) return 0
	const quantKey = newGift ? "num" : "quantity"
	const priceKey = newGift ? "price" : "pricePerUnit"
	return items.reduce((total, currentItem) => {
		return total + currentItem[priceKey] * currentItem[quantKey]
	}, 0)
}

export const isObjectEmpty = (obj) => {
	if (obj === undefined ) return true
	return Object.keys(obj).length === 0
}