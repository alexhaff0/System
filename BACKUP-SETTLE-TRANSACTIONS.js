function updateSentTransactions(sentTransactions, settledTransactions) {
    settledTransactions.forEach(settled => {
        const index = sentTransactions.findIndex(trans => trans.transaction_id === settled.transaction_id);

        if (index > -1) {
            if (settled.error) {
                bubble_fn_syncError(settled.message || "Sync error");
            }
            sentTransactions.splice(index, 1);
        }
    });

    var updatedSentTransactionsString = JSON.stringify(sentTransactions);
    bubble_fn_settleTransactions(updatedSentTransactionsString);
}

var sentTransactions = [];

var settledTransactions = [];

updateSentTransactions(sentTransactions, settledTransactions);

