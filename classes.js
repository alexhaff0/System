// -------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------- 🟢 CREATE OBJECT CLASSES ------------------------------------------ //

// Identify classes for each object type.
class Company {
    constructor(id, name, createdAt, lastModified) {
        this.type = "company";
        this.id = id;
        this.name = name;
        this.created_at = createdAt;
        this.last_modified = lastModified;
    }
}

class Role {
    constructor(id, name, color, icon, sortOrder, createdAt, lastModified) {
        this.type = "role";
        this.id = id;
        this.name = name;
        this.color = color;
        this.icon = icon;
        this.sort_order = sortOrder;
        this.created_at = createdAt;
        this.last_modified = lastModified;
    }
}

class Label {
    constructor(id, name, color, icon, sortOrder, createdAt, lastModified) {
        this.type = "label";
        this.id = id;
        this.name = name;
        this.color = color;
        this.icon = icon;
        this.sort_order = sortOrder;
        this.created_at = createdAt;
        this.last_modified = lastModified;
    }
}

class Stage {
    constructor(id, name, color, icon, sortOrder, createdAt, lastModified, parentId, group, locked, slug) {
        this.type = "stage";
        this.id = id;
        this.name = name;
        this.color = color;
        this.icon = icon;
        this.sort_order = sortOrder;
        this.created_at = createdAt;
        this.last_modified = lastModified;
        this.parent_id = parentId;
        this.group = group;
        this.locked = locked;
        this.slug = slug;
    }
}

class Application {
    constructor(id, created_at, first_name, last_name, email, phone, description, read, starred, role_id, stage_id, rating_avg, tag_id, resume_id, archived_date, company_id, last_modified, ratings, type) {
        this.id = id;
        this.created_at = created_at;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone = phone;
        this.description = description;
        this.read = read;
        this.starred = starred;
        this.role_id = role_id;
        this.stage_id = stage_id;
        this.rating_avg = rating_avg;
        this.tag_id = tag_id;
        this.resume_id = resume_id;
        this.archived_date = archived_date;
        this.company_id = company_id;
        this.last_modified = last_modified;
        this.ratings = ratings;
        this.type = type;
    }
}

class Activity {
    constructor(id, application_id, user_id, created_at, metadata_type, company_id, activity_type, preview, type) {
        this.id = id;
        this.application_id = application_id;
        this.user_id = user_id;
        this.created_at = created_at;
        this.metadata_type = metadata_type;
        this.company_id = company_id;
        this.activity_type = activity_type;
        this.preview = preview;
        this.type = type;
    }
}

// -------------------------------------------------------------------------------------------------------------- //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// ---------------------------------------------------------------------------------------------------------------- //
// --------------------------------------------------- 🔴 TRANSACTIONS -------------------------------------------- //

// CREATE TRANSACTIONS
class Transaction {

    constructor(action, item, data) {

         // LOG FUNCTION TRIGGER
         logFn('Transaction.constructor()');

        // GENERAL PROPERTIES
        this.action = action;
        this.transaction_id = Date.now().toString() + Math.floor(Math.random() * 10000);

        // SPECIFIC PROPERTIES
        if (action === 'create') {
            this.item_type = data.type;
            this.data = data;
        } else if (action === 'update') {
            this.item_type = item.constructor.name.toLowerCase();
            this.item_id = item.id;
            this.data = data;
        } else if (action === 'delete') {
            this.item_type = item.constructor.name.toLowerCase();
            this.item_id = item.id;
        } else {
            // Handle invalid action
            console.error('createTransaction was sent an invalid action type. ', action);
            return;
        }
    }

    queue() {
        // LOG FUNCTION TRIGGER
        logFn('Transaction.queue(' + this.transaction_id + ')');
        // PUSH TO QUEUE ARRAY
        window.systemSyncEngine.transactions.queue.push(this);
    }

    send() {
        // LOG FUNCTION TRIGGER
        logFn('Transaction.send(' + this.transaction_id + ')');
        // PUSH TO SENT ARRAY
        const index = window.systemSyncEngine.transactions.queue.findIndex(transaction => transaction.transaction_id === this.transaction_id);
        if (index !== -1) {
            const transaction = window.systemSyncEngine.transactions.queue.splice(index, 1)[0];
            window.systemSyncEngine.transactions.sent.push(transaction);
        }
    }

    succeed() {
        // LOG FUNCTION TRIGGER
        logFn('Transaction.succeed(' + this.transaction_id + ')');
        //  REMOVE FROM QUEUE ARRAY
        const index = window.systemSyncEngine.transactions.sent.findIndex(transaction => transaction.transaction_id === this.transaction_id);
        if (index !== -1) {
            window.systemSyncEngine.transactions.sent.splice(index, 1);
        }
    }

    // fail() {
    //     // LOG FUNCTION TRIGGER
    //     logFn('Transaction.fail()');
    // }
}

// -------------------------------------------------------------------------------------------------------------- //


// module.exports = { Company, Role, Label, Stage, Application, Activity, Transaction };