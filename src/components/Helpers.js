export const PriceForItems = (items, quantKey="num", priceKey="price") => {
	return items.reduce((total, currentItem) => {
		return total + currentItem[priceKey] * currentItem[quantKey]
	}, 0)
}

export const isObjectEmpty = (obj) => {
	if (obj === undefined ) return true
	return Object.keys(obj).length === 0
}