
// ---------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------- 💾 START NON-BUBBLE ITEMS ------------------------------------------ //

// FILE SYSTEM - READING & SAVING
const { create } = require('domain');
const fs = require('fs');
const path = require('path');

// GET PATHS
const propertiesPath = path.join(__dirname, 'properties.json');
const instancePath = path.join(__dirname, 'instance.json');
const settingsPath = path.join(__dirname, 'settings.json');

// MAKE SURE FILES EXIST
let properties = require(propertiesPath);
let instance = require(instancePath);
let settings = require(settingsPath);
instance.settings = settings;


instance.data = {};

// FUNCTION TO SAVE DATA TO FILE
function saveData (){
fs.writeFileSync(instancePath, JSON.stringify(instance, null, 2));
}

// IMPORT FUNCTIONS
const {
    jsonToBubbleItem,
    jsonToBubbleList,
    logFn,
    Company,
    Role,
    Label,
    Stage,
    Application,
    Activity,
    createMap,
    mapToJSON,
    readyObjects,
    objectsToBubble,
    getItemFromMap,
    sortObjects,
    filterApplicants,
    refreshApplicants,
    countApplicantsByStage,
    getAdjacentApplicantIds,
    getActiveRole,
    getActiveStages,
    Transaction,
    updateObjectMap
} = require('./functions.js');
Object.assign(global, {
    jsonToBubbleItem,
    jsonToBubbleList,
    logFn,
    Company,
    Role,
    Label,
    Stage,
    Application,
    Activity,
    createMap,
    mapToJSON,
    readyObjects,
    objectsToBubble,
    getItemFromMap,
    sortObjects,
    filterApplicants,
    refreshApplicants,
    countApplicantsByStage,
    getAdjacentApplicantIds,
    getActiveRole,
    getActiveStages,
    Transaction,
    updateObjectMap
});



// ---------------------------------------------------------------------------------------------------------------- //
//
//
// -------------------------------------------------------------------------------------------------------------- //


// -------------------------------🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧--------------------------- //
// -------------------------------🚧🚧🚧🚧🚧🚧🚧🚧    USAGE TESTING    🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧--------------------------- //
// -------------------------------🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧--------------------------- //
// -------------------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------------------- //



// Combine all input types into one long JSON.
instance.data.combinedObjects = [...properties.metadata, ...properties.applications, ...properties.activity];



if (!instance.data.transactions) {
    instance.data.transactions = {};
}
if (!instance.data.transactions.queue) {
    instance.data.transactions.queue = [];
}
if (!instance.data.transactions.sent) {
    instance.data.transactions.sent = [];
}




createMap(instance.data.combinedObjects);
mapToJSON();
readyObjects();
refreshApplicants(instance.data.objects.application, properties.filterCriteria, properties.sortingCriteria);

objectsToBubble(); // move to very end

saveData();




// // DEBUG LOGGING
// if (instance.settings.debug.transactions.queue) {console.log("Transactions -- Queue: ", instance.data.transactions.queue);}
// if (instance.settings.debug.transactions.sent) {console.log("Transactions -- Sent: ", instance.data.transactions.sent);}


let tempItem = getItemFromMap(7609, 'Application');
console.log(tempItem);


// let myNewTC = new Transaction('create', null, data = {
//     type: 'stage',
//     name: 'My new stage',
//     color: '#000000',
//     icon: 'fas fa-circle'
// });

// TEST UPDATE ITEM
let myNewTU = new Transaction('update', tempItem, data = {
    action: 'set',
    field: 'first_name',
    value: 'UPDATED'
});

console.log(myNewTU);
updateObjectMap(myNewTU);

let tempItem2 = getItemFromMap(7609, 'Application');

// TEST DELETE ITEM
let myNewTD = new Transaction('delete', tempItem);

console.log(myNewTD);
updateObjectMap(myNewTD);

// GET AFTER DELETE

mapToJSON();
readyObjects();
refreshApplicants(instance.data.objects.application, properties.filterCriteria, properties.sortingCriteria);

objectsToBubble(); // move to very end

saveData();




// myNewTC.queue();
// myNewTU.queue();
// myNewTD.queue();

// myNewTC.send();
// myNewTU.send();

// myNewTU.succeed();


saveData();



// ----------------------------------------------------------------- //
// ----------------------------------------------------------------- //
// ----------------------------------------------------------------- //

return;

// ----------------------------------------------------------------- //
// ----------------------------------------------------------------- //
// ----------------------------------------------------------------- //