function(instance, properties, context) {
    
    console.group("Object Update Action");
    console.log("properties.id ", properties.id);
    console.log("properties.type ", properties.type);
    console.log("properties.action ", properties.action);
    console.log("properties.field ", properties.field);
    console.log("properties.value ", properties.value);
    console.groupEnd();

    let tempItem = getItemFromMap(properties.id, properties.type);

    let newTransaction = new Transaction('update', tempItem, data = {
        action: properties.action,
        field: properties.field,
        value: properties.value
    });
    
    console.group("Transactions");
    console.log('Queue', window.systemSyncEngine.transactions.queue);
    console.log('Sent', window.systemSyncEngine.transactions.sent);
    console.groupEnd();

    updateObjectMap(newTransaction);

}