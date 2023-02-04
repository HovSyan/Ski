const handleStartClick = () => {
    requestItems()
        .then(items => items.forEach(renderItem))
        .catch(alertError)
}

const handleBuyClick = (itemDivElement, itemId) => {
    buy(itemId)
        .then(() => {
            updateItemStatus(itemDivElement)
        })
        .catch(alertError)
}
