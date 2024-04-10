function(instance, properties, context) {
    // ------------ BEGINNING OF PLUGIN ---------------- //


const combinedRawData = [];
if (properties.raw_applications) {
    const rawApplications = JSON.parse(properties.raw_applications);
    combinedRawData.push(...rawApplications);
}
if (properties.raw_metadata) {
    const rawMetadata = JSON.parse(properties.raw_metadata);
    combinedRawData.push(...rawMetadata);
}
if (properties.raw_activity) {
    const rawActivity = JSON.parse(properties.raw_activity);
    combinedRawData.push(...rawActivity);
}


// Create Map to use for all functions
createMap(combinedRawData);

// Create JSON representation of Map to print to console / test
mapToJSON();

// Separate JSON objects by type
separateObjectsByType();

console.log("OBJECT POOL AS JSON:");
console.log(window.systemSyncEngine.objectPool);

objectsToBubble(); // move to very end

console.log("BUBBLE OBJECTS:");
console.log(window.systemSyncEngine.bubbleObjects);
console.log(window.systemSyncEngine.bubbleObjects.application);

instance.publishState('company', window.systemSyncEngine.bubbleObjects.company);
instance.publishState('roles', window.systemSyncEngine.bubbleObjects.role);
instance.publishState('labels', window.systemSyncEngine.bubbleObjects.label);
instance.publishState('stages', window.systemSyncEngine.bubbleObjects.stage);
instance.publishState('activity', window.systemSyncEngine.bubbleObjects.activity);
instance.publishState('applications', window.systemSyncEngine.bubbleObjects.application);



refreshApplicants(window.systemSyncEngine.objectPool, properties.filter_criteria, properties.sort_criteria);



// ------------ END OF PLUGIN ---------------- //
}