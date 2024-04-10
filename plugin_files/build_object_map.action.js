function(instance, properties, context) {
// ------------ BEGINNING OF PLUGIN ---------------- //
console.log("FN CALL: Build Object Map");

  // TAKE INPUTS AS TEXT, PARSE INTO JSON AND COMBINE THEM INTO ONE
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
  
  // CREATE MAP OF ALL INPUT DATA
  createMap(combinedRawData);

  // REPRESENT MAP IN JSON
  mapToJSON();

  // SEPARATE JSON BY OBJECT TYPE
  separateObjectsByType();


  function publishBubbleObjects() {
    // PUBLISH ALL OBJECTS TO BUBBLE  
    objectsToBubble(); // move to very end

    // console.log("BUBBLE OBJECTS:");
    // console.log(window.systemSyncEngine.bubbleObjects);
    // console.log(window.systemSyncEngine.bubbleObjects.application);

    // if (window.systemSyncEngine.bubbleObjects.company.length > 0) {
    //     instance.publishState('company', window.systemSyncEngine.bubbleObjects.company);
    // }
    if (window.systemSyncEngine.bubbleObjects.role.length > 0) {
        instance.publishState('roles', window.systemSyncEngine.bubbleObjects.role);
    }
    if (window.systemSyncEngine.bubbleObjects.label.length > 0) {
        instance.publishState('labels', window.systemSyncEngine.bubbleObjects.label);
    }
    if (window.systemSyncEngine.bubbleObjects.stage.length > 0) {
        instance.publishState('stages', window.systemSyncEngine.bubbleObjects.stage);
    }
    if (window.systemSyncEngine.bubbleObjects.activity.length > 0) {
        instance.publishState('activity', window.systemSyncEngine.bubbleObjects.activity);
    }
    if (window.systemSyncEngine.bubbleObjects.application.length > 0) {
        instance.publishState('applications', window.systemSyncEngine.bubbleObjects.application);
    }
  }

  publishBubbleObjects();

}