function(instance, properties, context) {

const ids = loadBubbleList(properties.ids);
console.log(ids);

sendTransactions(ids);

}