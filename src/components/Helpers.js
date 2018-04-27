export const PriceForItems = (items) => {
	return items.reduce((total, currentItem) => {
		return total + currentItem.price * currentItem.num
	}, 0)
}

export const isObjectEmpty = (obj) => {
	if (obj === undefined ) return true
	return Object.keys(obj).length === 0
}