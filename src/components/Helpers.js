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

// Shout out to StackOverflow
// https://stackoverflow.com/a/4587130/1031615
export const containsObject = (obj, list) => {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }
    return false;
}

export const objectContainsKeys = (obj, requiredKeys) => {
	const missingKey = requiredKeys.reduce((final, currentVal) => {
		if (final === undefined) return final
		return Object.keys(obj).indexOf(currentVal) === -1 ? currentVal : undefined
	}, undefined)
	if (missingKey !== undefined) {
		return new Error(`Bad formatted input data. Missing key ${missingKey}`)
	}
}