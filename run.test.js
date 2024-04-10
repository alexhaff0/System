
// ---------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------- 💾 START NON-BUBBLE ITEMS ------------------------------------------ //

// FILE SYSTEM - READING & SAVING
// const { create } = require('domain');
// const fs = require('fs');
// const path = require('path');

// // GET PATHS
// const propertiesPath = path.join(__dirname, 'properties.json');
// const windowPath = path.join(__dirname, 'window.json');
// const settingsPath = path.join(__dirname, 'settings.json');

// // MAKE SURE FILES EXIST
// let properties = require(propertiesPath);
// let window = require(windowPath);
// let settings = require(settingsPath);

// // window.settings = settings;
// // window.systemSyncEngine = {};

// // FUNCTION TO SAVE DATA TO FILE
// function saveData (){
// fs.writeFileSync(instancePath, JSON.stringify(instance, null, 2));
// }

// // IMPORT FUNCTIONS
// const {
//     jsonToBubbleItem,
//     jsonToBubbleList,
//     logFn,
//     Company,
//     Role,
//     Label,
//     Stage,
//     Application,
//     Activity,
//     createMap,
//     mapToJSON,
//     readyObjects,
//     objectsToBubble,
//     getItemFromMap,
//     sortObjects,
//     filterApplicants,
//     refreshApplicants,
//     countApplicantsByStage,
//     getAdjacentApplicantIds,
//     getActiveRole,
//     getActiveStages,
//     Transaction,
//     updateObjectMap
// } = require('./functions.js');

// Object.assign(global, {
//     jsonToBubbleItem,
//     jsonToBubbleList,
//     logFn,
//     Company,
//     Role,
//     Label,
//     Stage,
//     Application,
//     Activity,
//     createMap,
//     mapToJSON,
//     readyObjects,
//     objectsToBubble,
//     getItemFromMap,
//     sortObjects,
//     filterApplicants,
//     refreshApplicants,
//     countApplicantsByStage,
//     getAdjacentApplicantIds,
//     getActiveRole,
//     getActiveStages,
//     Transaction,
//     updateObjectMap
// });

// console.log(window.objectPool);





// -------------------------------🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧--------------------------- //
// -------------------------------🚧🚧🚧🚧🚧🚧🚧🚧    USAGE TESTING    🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧--------------------------- //
// -------------------------------🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧--------------------------- //
// -------------------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------------------- //




// const combinedRawData = [];
// if (properties.raw_applications) {
//     const rawApplications = JSON.parse(properties.raw_applications);
//     combinedRawData.push(...rawApplications);
// }
// if (properties.raw_metadata) {
//     const rawMetadata = JSON.parse(properties.raw_metadata);
//     combinedRawData.push(...rawMetadata);
// }
// if (properties.raw_activity) {
//     const rawActivity = JSON.parse(properties.raw_activity);
//     combinedRawData.push(...rawActivity);
// }


// console.log(combinedRawData);


// return;



// const combinedRawData = [
//       {
//         "type": "company",
//         "id": 61,
//         "name": "My Little Pony",
//         "created_at": 1711471909222,
//         "last_modified": 1711471909221
//       },
//       {
//         "type": "role",
//         "id": 298,
//         "name": "Senior Engineer",
//         "color": "",
//         "icon": "",
//         "sort_order": 1,
//         "created_at": 1711471909916,
//         "last_modified": 1711471909915
//       },
//       {
//         "type": "role",
//         "id": 299,
//         "name": "Product Manager",
//         "color": "",
//         "icon": "",
//         "sort_order": 2,
//         "created_at": 1711471910438,
//         "last_modified": 1711471910437
//       },
//       {
//         "type": "role",
//         "id": 300,
//         "name": "Developer",
//         "color": "",
//         "icon": "",
//         "sort_order": 3,
//         "created_at": 1711471910626,
//         "last_modified": 1711471910625
//       },
//       {
//         "type": "label",
//         "id": 817,
//         "name": "Junior",
//         "color": "blue2",
//         "icon": "",
//         "sort_order": 0,
//         "created_at": 1711471909720,
//         "last_modified": 1711471909719
//       },
//       {
//         "type": "label",
//         "id": 818,
//         "name": "Mid-level",
//         "color": "green3",
//         "icon": "",
//         "sort_order": 0,
//         "created_at": 1711471909725,
//         "last_modified": 1711471909725
//       },
//       {
//         "type": "label",
//         "id": 819,
//         "name": "Experienced",
//         "color": "yellow1",
//         "icon": "",
//         "sort_order": 0,
//         "created_at": 1711471909729,
//         "last_modified": 1711471909728
//       },
//       {
//         "type": "label",
//         "id": 820,
//         "name": "Leadership",
//         "color": "orange3",
//         "icon": "",
//         "sort_order": 0,
//         "created_at": 1711471909807,
//         "last_modified": 1711471909806
//       },
//       {
//         "type": "label",
//         "id": 821,
//         "name": "Culture Fit",
//         "color": "red3",
//         "icon": "",
//         "sort_order": 0,
//         "created_at": 1711471909811,
//         "last_modified": 1711471909810
//       },
//       {
//         "type": "label",
//         "id": 822,
//         "name": "Remote",
//         "color": "indigo3",
//         "icon": "",
//         "sort_order": 0,
//         "created_at": 1711471909815,
//         "last_modified": 1711471909814
//       },
//       {
//         "type": "label",
//         "id": 823,
//         "name": "Referral",
//         "color": "blue3",
//         "icon": "",
//         "sort_order": 0,
//         "created_at": 1711471909819,
//         "last_modified": 1711471909818
//       },
//       {
//         "type": "stage",
//         "id": 10995,
//         "name": "Interview",
//         "color": "",
//         "icon": "",
//         "sort_order": 2,
//         "created_at": 1711471910015,
//         "last_modified": 1711471910014,
//         "parent_id": 298,
//         "group": "interviewing",
//         "locked": false,
//         "slug": "interview"
//       },
//       {
//         "type": "stage",
//         "id": 10996,
//         "name": "Offer",
//         "color": "",
//         "icon": "",
//         "sort_order": 3,
//         "created_at": 1711471910110,
//         "last_modified": 1711471910110,
//         "parent_id": 298,
//         "group": "offer",
//         "locked": false,
//         "slug": "offer"
//       },
//       {
//         "type": "stage",
//         "id": 10997,
//         "name": "Hired",
//         "color": "",
//         "icon": "",
//         "sort_order": 4,
//         "created_at": 1711471910118,
//         "last_modified": 1711471910117,
//         "parent_id": 298,
//         "group": "hired",
//         "locked": true,
//         "slug": "hired"
//       },
//       {
//         "type": "stage",
//         "id": 10998,
//         "name": "Rejected",
//         "color": "",
//         "icon": "",
//         "sort_order": 5,
//         "created_at": 1711471910126,
//         "last_modified": 1711471910125,
//         "parent_id": 298,
//         "group": "rejected",
//         "locked": true,
//         "slug": "rejected"
//       },
//       {
//         "type": "stage",
//         "id": 10999,
//         "name": "Inbox",
//         "color": "",
//         "icon": "",
//         "sort_order": 1,
//         "created_at": 1711471910207,
//         "last_modified": 1711471910206,
//         "parent_id": 298,
//         "group": "screening",
//         "locked": true,
//         "slug": "inbox"
//       },
//       {
//         "type": "stage",
//         "id": 11000,
//         "name": "Offer",
//         "color": "",
//         "icon": "",
//         "sort_order": 4,
//         "created_at": 1711471910444,
//         "last_modified": 1711471910444,
//         "parent_id": 299,
//         "group": "offer",
//         "locked": false,
//         "slug": "offer"
//       },
//       {
//         "type": "stage",
//         "id": 11001,
//         "name": "Rejected",
//         "color": "",
//         "icon": "",
//         "sort_order": 6,
//         "created_at": 1711471910450,
//         "last_modified": 1711471910449,
//         "parent_id": 299,
//         "group": "rejected",
//         "locked": true,
//         "slug": "rejected"
//       },
//       {
//         "type": "stage",
//         "id": 11002,
//         "name": "Hired",
//         "color": "",
//         "icon": "",
//         "sort_order": 5,
//         "created_at": 1711471910455,
//         "last_modified": 1711471910455,
//         "parent_id": 299,
//         "group": "hired",
//         "locked": true,
//         "slug": "hired"
//       },
//       {
//         "type": "stage",
//         "id": 11003,
//         "name": "Inbox",
//         "color": "",
//         "icon": "",
//         "sort_order": 1,
//         "created_at": 1711471910460,
//         "last_modified": 1711471910460,
//         "parent_id": 299,
//         "group": "screening",
//         "locked": true,
//         "slug": "inbox"
//       },
//       {
//         "type": "stage",
//         "id": 11004,
//         "name": "Interview",
//         "color": "",
//         "icon": "",
//         "sort_order": 2,
//         "created_at": 1711471910613,
//         "last_modified": 1711471910613,
//         "parent_id": 299,
//         "group": "interviewing",
//         "locked": false,
//         "slug": "interview"
//       },
//       {
//         "type": "stage",
//         "id": 11005,
//         "name": "Assessment",
//         "color": "",
//         "icon": "",
//         "sort_order": 3,
//         "created_at": 1711471910619,
//         "last_modified": 1711471910619,
//         "parent_id": 299,
//         "group": "interviewing",
//         "locked": false,
//         "slug": "assessment"
//       },
//       {
//         "type": "stage",
//         "id": 11006,
//         "name": "Interview",
//         "color": "",
//         "icon": "",
//         "sort_order": 2,
//         "created_at": 1711471910635,
//         "last_modified": 1711471910635,
//         "parent_id": 300,
//         "group": "interviewing",
//         "locked": false,
//         "slug": "interview"
//       },
//       {
//         "type": "stage",
//         "id": 11007,
//         "name": "Offer",
//         "color": "",
//         "icon": "",
//         "sort_order": 3,
//         "created_at": 1711471910641,
//         "last_modified": 1711471910640,
//         "parent_id": 300,
//         "group": "offer",
//         "locked": false,
//         "slug": "offer"
//       },
//       {
//         "type": "stage",
//         "id": 11008,
//         "name": "Hired",
//         "color": "",
//         "icon": "",
//         "sort_order": 4,
//         "created_at": 1711471910646,
//         "last_modified": 1711471910646,
//         "parent_id": 300,
//         "group": "hired",
//         "locked": true,
//         "slug": "hired"
//       },
//       {
//         "type": "stage",
//         "id": 11009,
//         "name": "Rejected",
//         "color": "",
//         "icon": "",
//         "sort_order": 5,
//         "created_at": 1711471910652,
//         "last_modified": 1711471910652,
//         "parent_id": 300,
//         "group": "rejected",
//         "locked": true,
//         "slug": "rejected"
//       },
//       {
//         "type": "stage",
//         "id": 11010,
//         "name": "Inbox",
//         "color": "",
//         "icon": "",
//         "sort_order": 1,
//         "created_at": 1711471910658,
//         "last_modified": 1711471910657,
//         "parent_id": 300,
//         "group": "screening",
//         "locked": true,
//         "slug": "inbox"
//       },
//       {
//         "id": 443,
//         "application_id": 7611,
//         "user_id": 49,
//         "created_at": 1712013064371,
//         "metadata_type": "application",
//         "company_id": 61,
//         "activity_type": "favorite_update",
//         "preview": [
//           {
//             "key": "starred",
//             "value": "1"
//           }
//         ],
//         "type": "activity"
//       },
//       {
//         "id": 445,
//         "application_id": 7611,
//         "user_id": 49,
//         "created_at": 1712026919812,
//         "metadata_type": "application",
//         "company_id": 61,
//         "activity_type": "favorite_update",
//         "preview": [
//           {
//             "key": "starred",
//             "value": ""
//           }
//         ],
//         "type": "activity"
//       },
//       {
//         "id": 446,
//         "application_id": 7611,
//         "user_id": 49,
//         "created_at": 1712026930737,
//         "metadata_type": "application",
//         "company_id": 61,
//         "activity_type": "favorite_update",
//         "preview": [
//           {
//             "key": "starred",
//             "value": "1"
//           }
//         ],
//         "type": "activity"
//       },
//       {
//         "id": 447,
//         "application_id": 7611,
//         "user_id": 49,
//         "created_at": 1712099856153,
//         "metadata_type": "application",
//         "company_id": 61,
//         "activity_type": "favorite_update",
//         "preview": [
//           {
//             "key": "starred",
//             "value": ""
//           }
//         ],
//         "type": "activity"
//       },
//       {
//         "id": 448,
//         "application_id": 7611,
//         "user_id": 49,
//         "created_at": 1712099896950,
//         "metadata_type": "application",
//         "company_id": 61,
//         "activity_type": "favorite_update",
//         "preview": [
//           {
//             "key": "starred",
//             "value": "1"
//           }
//         ],
//         "type": "activity"
//       },
//       {
//         "id": 7609,
//         "created_at": 1711471910323,
//         "first_name": "John",
//         "last_name": "Williams",
//         "email": "johnwilliams@gmail.com",
//         "phone": "5106910374",
//         "description": "Brings a strong work ethic and collaborative spirit to every project.",
//         "read": false,
//         "starred": false,
//         "role_id": 298,
//         "stage_id": 10999,
//         "rating_avg": 0,
//         "tag_id": [817],
//         "resume_id": 0,
//         "archived_date": null,
//         "company_id": 61,
//         "last_modified": 1711471910323,
//         "ratings": {
//           "user_id": 0,
//           "rating": 0
//         },
//         "type": "application"
//       },
//       {
//         "id": 7615,
//         "created_at": 1711471910432,
//         "first_name": "Lisa",
//         "last_name": "Harris",
//         "email": "lisaharris@gmail.com",
//         "phone": "4121557993",
//         "description": "Passionate about developing accessible and inclusive technology.",
//         "read": true,
//         "starred": true,
//         "role_id": 298,
//         "stage_id": 10997,
//         "rating_avg": 0,
//         "tag_id": [817, 823, 821],
//         "resume_id": 0,
//         "archived_date": null,
//         "company_id": 61,
//         "last_modified": 1711471910431,
//         "ratings": {
//           "user_id": 0,
//           "rating": 0
//         },
//         "type": "application"
//       },
//       {
//         "id": 7608,
//         "created_at": 1711471910313,
//         "first_name": "Mary",
//         "last_name": "Johnson",
//         "email": "maryjohnson@gmail.com",
//         "phone": "4883652862",
//         "description": "Experienced in multiple programming languages and frameworks.",
//         "read": true,
//         "starred": true,
//         "role_id": 298,
//         "stage_id": 10999,
//         "rating_avg": 0,
//         "tag_id": [820],
//         "resume_id": 0,
//         "archived_date": null,
//         "company_id": 61,
//         "last_modified": 1711471910312,
//         "ratings": {
//           "user_id": 0,
//           "rating": 0
//         },
//         "type": "application"
//       },
//       {
//         "id": 7611,
//         "created_at": 1711471910339,
//         "first_name": "Charles",
//         "last_name": "Thompson",
//         "email": "charlesthompson@gmail.com",
//         "phone": "7511325067",
//         "description": "Strong analytical skills and attention to detail.",
//         "read": true,
//         "starred": true,
//         "role_id": 298,
//         "stage_id": 10997,
//         "rating_avg": 0,
//         "tag_id": [819, 817, 822],
//         "resume_id": 0,
//         "archived_date": null,
//         "company_id": 61,
//         "last_modified": 1711471910339,
//         "ratings": {
//           "user_id": 0,
//           "rating": 0
//         },
//         "type": "application"
//       },
//       {
//         "id": 7612,
//         "created_at": 1711471910410,
//         "first_name": "Christopher",
//         "last_name": "Lopez",
//         "email": "christopherlopez@gmail.com",
//         "phone": "6196344303",
//         "description": "Highly skilled in web development and digital marketing strategies.",
//         "read": true,
//         "starred": false,
//         "role_id": 298,
//         "stage_id": 10996,
//         "rating_avg": 0,
//         "tag_id": [822, 0],
//         "resume_id": 0,
//         "archived_date": null,
//         "company_id": 61,
//         "last_modified": 1711471910410,
//         "ratings": {
//           "user_id": 0,
//           "rating": 0
//         },
//         "type": "application"
//       },
//       {
//         "id": 7614,
//         "created_at": 1711471910424,
//         "first_name": "Daniel",
//         "last_name": "Gonzalez",
//         "email": "danielgonzalez@gmail.com",
//         "phone": "1992703709",
//         "description": "Versatile developer with experience in front and backend technologies.",
//         "read": true,
//         "starred": true,
//         "role_id": 298,
//         "stage_id": 10995,
//         "rating_avg": 0,
//         "tag_id": [],
//         "resume_id": 0,
//         "archived_date": null,
//         "company_id": 61,
//         "last_modified": 1711471910423,
//         "ratings": {
//           "user_id": 0,
//           "rating": 0
//         },
//         "type": "application"
//       },
//       {
//         "id": 7610,
//         "created_at": 1711471910331,
//         "first_name": "Dan",
//         "last_name": "Smigaj",
//         "email": "dansmigaj@example.com",
//         "phone": "4612237545",
//         "description": "Creative problem solver with a passion for technology.",
//         "read": true,
//         "starred": false,
//         "role_id": 298,
//         "stage_id": 10998,
//         "rating_avg": 0,
//         "tag_id": [820, 819, 822],
//         "resume_id": 0,
//         "archived_date": null,
//         "company_id": 61,
//         "last_modified": 1711471910330,
//         "ratings": {
//           "user_id": 0,
//           "rating": 0
//         },
//         "type": "application"
//       },
//       {
//         "id": 7613,
//         "created_at": 1711471910417,
//         "first_name": "Richard",
//         "last_name": "Taylor",
//         "email": "richardtaylor@gmail.com",
//         "phone": "0037144577",
//         "description": "Expertise in cybersecurity and protecting digital assets.",
//         "read": false,
//         "starred": false,
//         "role_id": 298,
//         "stage_id": 10995,
//         "rating_avg": 0,
//         "tag_id": [817, 820, 0],
//         "resume_id": 0,
//         "archived_date": null,
//         "company_id": 61,
//         "last_modified": 1711471910417,
//         "ratings": {
//           "user_id": 0,
//           "rating": 0
//         },
//         "type": "application"
//       }
//     ];
  
// // Create Map to use for all functions
// createMap(combinedRawData);

// // Create JSON representation of Map to print to console / test
// mapToJSON();

// // Separate JSON objects by type
// separateObjectsByType();

// console.log("OBJECT POOL AS JSON:");
// console.log(window.systemSyncEngine.objectPool);

// objectsToBubble(); // move to very end

// console.log("BUBBLE OBJECTS:");
// console.log(window.systemSyncEngine.bubbleObjects);
// console.log(window.systemSyncEngine.bubbleObjects.application);

// instance.publishState('filtered_applications', window.systemSyncEngine.bubbleObjects.application);
// instance.publishState('all_applications', window.systemSyncEngine.bubbleObjects.application);


// refreshApplicants(instance.data.objectMap, properties.filterCriteria, properties.sortingCriteria);



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