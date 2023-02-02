const handleStartClick = () => {
    requestItems()
        .then(items => items.forEach(renderItem))
        .catch(alertError)
}
