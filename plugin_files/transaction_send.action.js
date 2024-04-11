function(instance, properties, context) {
    
    if (properties.transactions) {
        let transactions = properties.transactions;

        // console.group("Transactions");
        // console.log("Input Raw", transactions);

        transactions = JSON.parse(transactions);
        // console.log("Input Parsed", transactions);

        let transaction_ids = [];
        transactions.forEach(transaction => {
            transaction_ids.push(transaction.transaction_id);
        });
        // console.log("Transaction IDs", transaction_ids);

        // MARK TRANSACTIONS AS SENT
        sendTransactions(transaction_ids);  

        // LOG THE NEW QUEUES
        logTransactionQueues();

        // UPDATE THE OBJECT MAP
        instance.publishState("transactions_queue", JSON.stringify(window.systemSyncEngine.transactions.queue));
        instance.publishState("transactions_sent", JSON.stringify(window.systemSyncEngine.transactions.sent));

    };
}