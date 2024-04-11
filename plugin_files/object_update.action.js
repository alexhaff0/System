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
    
    logTransactionQueues();

    updateObjectMap(newTransaction);

    instance.publishState("transactions_queue", JSON.stringify(window.systemSyncEngine.transactions.queue));
    instance.publishState("transactions_sent", JSON.stringify(window.systemSyncEngine.transactions.sent));

}