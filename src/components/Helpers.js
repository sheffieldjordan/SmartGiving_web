export const PriceForItems = (items) => {
	return items.reduce((total, currentItem) => {
		return total + currentItem.price * currentItem.num
	}, 0)
}