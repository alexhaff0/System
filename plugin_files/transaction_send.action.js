function(instance, properties, context) {
    
    const ids = loadBubbleList(properties.ids);
    console.log(ids);
    
    sendTransactions(ids);
    
    console.group("Transactions");
    console.log(window.systemSyncEngine.transactions.queue);
    console.log(window.systemSyncEngine.transactions.sent);
    console.groupEnd();

}