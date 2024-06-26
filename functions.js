// ---------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------- THE SYSTEM SYNC ENGINE --------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------------- //



// ---------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------- 🟢 PRINT LOADED VERSION -------------------------------------------- //
//
//
//
//
const versionFunctions = '1.2.23';
console.info("SYSTEM: Functions installed, version ", versionFunctions);
//
//
//
//
// ---------------------------------------------------------------------------------------------------------------- //
// --------------------------------------------- 🟢 INITIALIZE VARS ----------------------------------------------- //

function initSystemSyncEngine() {
  // INIT WINDOW IF UNDEFINED
  if (typeof window !== "undefined") {
    window.systemSyncEngine = window.systemSyncEngine || {};
  } else {
    console.error("Window is not defined");
    let window = {};
    window.systemSyncEngine = window.systemSyncEngine || {};
  }

  // INIT VARS BY LOOP
  function initVars(varNames) {
    varNames.forEach((varName) => {
      if (typeof window[varName] === "undefined") {
        window[varName] = null;
      }
    });
  }

  // ARRAY OF VARS TO INIT
  const varNames = [
    "window.systemSyncEngine.objectMap",
    "window.systemSyncEngine.objectPool",
    "window.systemSyncEngine.objects",
    "window.systemSyncEngine.bubbleObjects"
  ];
  initVars(varNames);

  // INIT ARRAY VARS
  window.systemSyncEngine.settings = {};
  window.systemSyncEngine.transactions = {};
  window.systemSyncEngine.transactions.queue = [];
  window.systemSyncEngine.transactions.sent = [];

  // TEMPORARY DEBUG MODE
  window.systemSyncEngine.settings.debug = {};
  window.systemSyncEngine.settings.debug.functionTriggers = true;

}

initSystemSyncEngine();


//
//
//
//
//
//
//
// ---------------------------------------------------------------------------------------------------------------- //
// --------------------------------------------- 🟢 BUBBLE HELPERS ------------------------------------------------ //

// For a SINGLE object
function jsonToBubbleItem(jsonObject) {
    let newItem = {};

    // Iterate over each key in the object
    Object.keys(jsonObject).forEach(key => {
        // Prepend "_p_" to the key and assign the value
        newItem["_p_" + key] = jsonObject[key];
    });

    return newItem;
}

// For LISTS of objects
function jsonToBubbleList(jsonArray) {

    // Map over each object in the array
    let newArray = jsonArray.map(item => {
        let newItem = {};
        
        // Iterate over each key in the object
        Object.keys(item).forEach(key => {
            // Prepend "_p_" to the key and assign the value
            newItem["_p_" + key] = item[key];
        });
        
        return newItem;
    });
        
    return newArray;
}

function loadBubbleList(list) {
    if (!list) return [];
    if (typeof list.get !== "function") return [];
    if (typeof list.length !== "function") return [];
    return list.get(0, list.length());
}

// ---------------------------------------------------------------------------------------------------------------- //
//
//
//
//
//
//
//
//
//
// -------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------- 🟢 LOG TRIGGER OF FNS -------------------------------------------- //

function logFn(name) {
    if (window?.systemSyncEngine?.settings?.debug?.functionTriggers) {
        console.log("🟢 FUNCTION TRIGGERED: ", name);
    };
}

// ---------------------------------------------------------------------------------------------------------------- //
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
// -------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------ 🟢 LOG TRANSACTION QUEUES ----------------------------------------- //

function logTransactionQueues() {
    console.group("Transactions");
    console.log('Queue', window.systemSyncEngine.transactions.queue);
    console.log('Sent', window.systemSyncEngine.transactions.sent);
    console.groupEnd();
}

// ---------------------------------------------------------------------------------------------------------------- //
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
// -------------------------------------------------------------------------------------------------------------- //
// --------------------------------------------- 🟢 CREATE OBJECT MAP -------------------------------------------- //

function createMap(sourceArray) {
    logFn('createMap()');

    window.systemSyncEngine.objectMap = new Map();

    sourceArray.forEach(item => {
        let object;
        switch (item.type) {
            case "company":
                object = new Company(item.id, item.name, item.created_at, item.last_modified);
                break;
            case "role":
                object = new Role(item.id, item.name, item.color, item.icon, item.sort_order, item.created_at, item.last_modified);
                break;
            case "label":
                object = new Label(item.id, item.name, item.color, item.icon, item.sort_order, item.created_at, item.last_modified);
                break;
            case "stage":
                object = new Stage(item.id, item.name, item.color, item.icon, item.sort_order, item.created_at, item.last_modified, item.parent_id, item.group, item.locked, item.slug);
                break;
            case "application":
                object = new Application(item.id, item.created_at, item.first_name, item.last_name, item.email, item.phone, item.description, item.read, item.starred, item.role_id, item.stage_id, item.rating_avg, item.tag_id, item.resume_id, item.archived_date, item.company_id, item.last_modified, item.ratings, item.type);
                break;
            case "activity":
                object = new Activity(item.id, item.application_id, item.user_id, item.created_at, item.metadata_type, item.company_id, item.activity_type, item.preview, item.type);
                break;
            default:
                object = null;
        }
        if (object !== null) {
            let key = `${object.type}_${object.id}`;
            window.systemSyncEngine.objectMap.set(key, object);
        }
    });
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
// -------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------ 🟠 FORMAT OBJECT MAP TO JSON --------------------------------------- //

function mapToJSON() {

    // LOG FUNCTION TRIGGER
    logFn('mapToJSON()');

    let map = window.systemSyncEngine.objectMap;

    // CREATE OBJECTS VAR IF EMPTY
    if (!window.systemSyncEngine.objects) {
        window.systemSyncEngine.objects = {};
    }

    const json = [];
    for (let [key, value] of map) {
        json.push(value);
    }

    // SAVE RESULT
    window.systemSyncEngine.objectPool = json;

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
//
// -------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------ 🟠 FILTER OBJECTS BY TYPE ----------------------------------------- //

function separateObjectsByType() {

    logFn('separateObjectsByType()');

    const objectTypes = ['application', 'activity', 'company', 'label', 'role', 'stage'];
    
     // CREATE OBJECTS VAR IF EMPTY
     if (!window.systemSyncEngine.objects) {
        window.systemSyncEngine.objects = {};
    }

    for (let i = 0; i < objectTypes.length; i++) {
        let results = filterObjectsByType(window.systemSyncEngine.objectMap, objectTypes[i]);
        window.systemSyncEngine.objects[objectTypes[i]] = results;
    }
}


function filterObjectsByType(map, objectType) {

    // LOG FUNCTION TRIGGER
    logFn('filterObjectsByType('+ objectType +')');

    // FILTER & RETURN OBJECTS
    const filteredItems = Array.from(map.values()).filter(item => item.type.toLowerCase() === objectType.toLowerCase());
    return filteredItems
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
// -------------------------------------------------------------------------------------------------------------- //
// --------------------------------------------- 🟠 FORMAT FOR BUBBLE ------------------------------------------- //

function objectsToBubble() {

    // LOG FUNCTION TRIGGER
    logFn('objectsToBubble()');

    // CREATE BUBBLE OBJECTS VAR IF EMPTY
    if (!window.systemSyncEngine.bubbleObjects) {
        window.systemSyncEngine.bubbleObjects = {};
    }

    for (let key in window.systemSyncEngine.objects) {

        if (window.systemSyncEngine.objects.hasOwnProperty(key)) {
            window.systemSyncEngine.bubbleObjects[key] = jsonToBubbleList(window.systemSyncEngine.objects[key]);

        }
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
//
// -------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------------- 🟠 GET ITEM FROM MAP ------------------------------------------ //

function getItemFromMap(id, objectType) {

    // LOG FUNCTION TRIGGER
    logFn('getItemFromMap(' + id + ', ' + objectType + ')');

    const key = `${objectType.toLowerCase()}_${id}`;

    try {
        let result = window.systemSyncEngine.objectMap.get(key);
        
        if (!result) {
            console.log("Item not found in the map.");
            return null;
        }
        return result;
    } catch (error) {
        console.log("Error retrieving item from map:", error);
        return null;
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
// -------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------ 🟢 SORT OBJECTS --------------------------------------------- //

function sortObjects(property, order = 'asc') {
    
    // LOG FUNCTION TRIGGER
    logFn('sortObjects('+ property +', '+ order +')');
    
    let sortOrder = 1;
    if (order === 'desc') {
        sortOrder = -1;
    }

    return function (a, b) {
        let result = 0;
        if (a[property] < b[property]) {
            result = -1;
        } else if (a[property] > b[property]) {
            result = 1;
        }
        return result * sortOrder;
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
// -------------------------------------------------------------------------------------------------------------- //
// ----------------------------------------------- 🟢 FILTER APPLICANTS ----------------------------------------- //

function filterApplicants(allApplicants, filters, sortingCriteria) {

    // LOG FUNCTION TRIGGER
    if (typeof logFn === 'function') { logFn('filterApplicants()');}

    let filteredData = allApplicants.filter(item => {
        return filters.every(filter => {
            let field = filter.field;
            switch (filter.operator) {
                case 'equals':
                    return item[field] === filter.value;
                case 'notEquals':
                    return item[field] !== filter.value;
                case 'contains':
                    if (typeof item[field] === 'string') {
                        return item[field].includes(filter.value);
                    }
                    return false;
                case 'doesNotContain':
                    if (typeof item[field] === 'string') {
                        return !item[field].includes(filter.value);
                    }
                    return false;
                case 'greaterThan':
                    return item[field] > filter.value;
                case 'lessThan':
                    return item[field] < filter.value;
                case 'greaterThanOrEquals':
                    return item[field] >= filter.value;
                case 'lessThanOrEquals':
                    return item[field] <= filter.value;
                case 'inArray':
                    if (Array.isArray(filter.value)) {
                        return filter.value.includes(item[field]);
                    }
                    return false;
                case 'notInArray':
                    if (Array.isArray(filter.value)) {
                        return !filter.value.includes(item[field]);
                    }
                    return false;
                case 'before':
                    if (Date.parse(item[field])) {
                        return new Date(item[field]) < new Date(filter.value);
                    }
                    return false;
                case 'after':
                    if (Date.parse(item[field])) {
                        return new Date(item[field]) > new Date(filter.value);
                    }
                    return false;
                default:
                    return true;
            }
        });
    });


    // Call Sort Function
    if (sortingCriteria) {
        sortingCriteria.forEach(criteria => {
            filteredData.sort(sortObjects(criteria.field, criteria.order));
        });
    }


    // Returning the result as a JSON string
    return filteredData;
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
//
//
//
//
// -------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------ 🟢 COUNT APPLICANTS BY STAGE -------------------------------------- //

// NOTE TO REMOVE THE EXTRA MAP STAGE HERE AND JUST USE THE EXISTING MAP

function countApplicantsByStage(filteredStages, allApplicants) {

    // LOG FUNCTION TRIGGER
    logFn('countApplicantsByStage()');

    const countPerStage = filteredStages.map(stage => {
        const count = allApplicants.filter(applicant => applicant.stage_id === stage.id).length;
        return count;
    });
    return countPerStage;
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
//
// -------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------- 🟢 GET ADJACENT APPLICANTS --------------------------------------- //

function getAdjacentApplicants(objects, activeIndex) {

    // LOG FUNCTION TRIGGER
    logFn('getAdjacentApplicantIds(' + activeIndex + ')');

    const totalApplicants = objects.length;
    const nextIndex = (activeIndex + 1) % totalApplicants;
    const previousIndex = (activeIndex - 1 + totalApplicants) % totalApplicants;
    const nextApplicant = objects[nextIndex];
    const previousApplicant = objects[previousIndex];
    return {previousApplicant, nextApplicant};
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
//
// -------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------ 🟢 GET ACTIVE ROLE ------------------------------------------ //

function getActiveRole(id) {

    // LOG FUNCTION TRIGGER
    logFn('getActiveRole(' + id + ')');

    if (id) {
        let activeRole = getItemFromMap(id, 'role');
        return activeRole;
        // PUBLISH ROLE
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
//
// ---------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------ 🟢 GET ACTIVE STAGES ------------------------------------------ //

function getActiveStages(role_id) {

    // LOG FUNCTION TRIGGER
    logFn('getActiveStages(' + role_id + ')');
    
    // ACTIVE STAGES
    if (role_id) {

        // FILTER STAGES
        let filteredStages = Array.from(window.systemSyncEngine.objectMap.values()).filter(stage => stage.type === 'stage' && stage.parent_id === role_id);

        filteredStages = filteredStages.sort((a, b) => a.sort_order - b.sort_order);

        return filteredStages;
        // PUBLISH ACTIVE STAGES
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
//
//
//
//
//
// ---------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------ 🟢 UPDATE OBJECT FROM TRANSACTION ----------------------------------- //


function updateObjectMap(transaction) {
    logFn('updateObjectFromTransaction');

    if (transaction.action === 'update') {
        logFn('updateObjectMap: update');
        const item = getItemFromMap(transaction.item_id, transaction.item_type);
        
        if (item) {
            item[transaction.data.field] = transaction.data.value;
            return true;
        }

    }

    else if (transaction.action === 'delete') {
        logFn('updateObjectMap: delete');
        const item = getItemFromMap(transaction.item_id, transaction.item_type);

        if (item) { 
            const map = window.systemSyncEngine.objectMap; // Define the map
            const item_id = item.type + "_" + item.id;
            console.log("MAP HAS ITEM?", map.has(item_id));
            const success = map.delete(item_id); // Delete the item from the map by its id
            return success; // The delete method returns true if an item was deleted, and false otherwise

        }
    }

    return false;
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
//
//
//
//
//
// ---------------------------------------------------------------------------------------------------------------- //
// ----------------------------------------------- 🟠 PROCESS TRANSACTIONS ---------------------------------------- //



function sendTransactions(transactionIds) {
    if (!window.systemSyncEngine || !window.systemSyncEngine.transactions || !window.systemSyncEngine.transactions.queue) {
        console.error('Transactions Queue Var not found or undefined.');
        return;
    }

    if (window.systemSyncEngine.transactions.queue.length === 0) {
        console.log('Queue is empty');
        return;
    }
    
    transactionIds.forEach((transactionId) => {
        const transaction = window.systemSyncEngine.transactions.queue.find(
            (transaction) => transaction.transaction_id === transactionId
        );
        if (transaction) {
            if (transaction.action === 'create') {
                transaction.queue();
            } else {
                console.error('Invalid action type:', transaction.action);
            }
        } else {
            console.error('Transaction not found:', transactionId);
        }
    });
}

function succeedTransactions(transactionIds) {
    if (!window.systemSyncEngine || !window.systemSyncEngine.transactions || !window.systemSyncEngine.transactions.sent) {
        console.log('Transactions Sent Var not found or undefined.');
        return;
    }

    if (window.systemSyncEngine.transactions.sent.length === 0) {
        console.log('No transactions found in the sent array.');
        return;
    }

    transactionIds.forEach((transactionId) => {
        const transaction = window.systemSyncEngine.transactions.sent.find(
            (transaction) => transaction.transaction_id === transactionId
        );
        if (transaction) {
            if (transaction.action === 'create') {
                transaction.succeed();
            } else {
                console.error('Invalid action type:', transaction.action);
            }
        } else {
            console.error('Transaction not found:', transactionId);
        }
    });
}

// -------------------------------------------------------------------------------------------------------------- //