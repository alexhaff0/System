function(instance, properties, context) {
    
    if (properties.transactions) {
        let transactions = properties.transactions;

        console.group("Transactions");
        console.log("Input Raw", transactions);

        transactions = JSON.parse(transactions);
        console.log("Input Parsed", transactions);

    };

}



//     const ids = loadBubbleList(properties.ids);
//     console.log(ids);
    
//     sendTransactions(ids);
    
//     logTransactionQueues();

//     updateObjectMap(newTransaction);

//     instance.publishState("transactions_queue", JSON.stringify(window.systemSyncEngine.transactions.queue));
//     instance.publishState("transactions_sent", JSON.stringify(window.systemSyncEngine.transactions.sent));

// }