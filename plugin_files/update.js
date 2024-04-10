function(instance, properties, context) {
    // ------------ BEGINNING OF PLUGIN ---------------- //
    console.log("FN CALL: Update");

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

// console.log("OBJECT POOL AS JSON:");
// console.log(window.systemSyncEngine.objectPool);



// ######## STILL NEED TO DO ######## //

// GET ACTIVE ROLE
if (properties.active_role_id) {


    // GET INPUT ROLE ID
    const activeRoleId = properties.active_role_id;

    // GET ACTIVE ROLE & CONVERT TO BUBBLE ITEM
    const activeRole = jsonToBubbleItem(getActiveRole(activeRoleId));

    // PUBLISH STATE
    instance.publishState('active_role', activeRole);

    // FILTER TO ACTIVE STAGES
    window.systemSyncEngine.objects.stage = getActiveStages(activeRoleId);


    // FILTER & SORT APPLICANTS
    const filterCriteria = JSON.parse(properties.filter_criteria);
    // console.log("FILTER CRITERIA: ", filterCriteria);   

    const sortCriteria = JSON.parse(properties.sort_criteria);
    // console.log("SORT CRITERIA: ", sortCriteria);
    
    const applicantsToFilter = filterObjectsByType(window.systemSyncEngine.objectMap, 'application');

    if (applicantsToFilter.length > 0) {
        filteredApplicants = filterApplicants(applicantsToFilter, filterCriteria, sortCriteria);
        
        window.systemSyncEngine.objects.application = filteredApplicants;
        // console.log("FILTERED APPLICANTS: ", window.systemSyncEngine.objects.application);
        publishBubbleObjects();
        instance.publishState('applications', window.systemSyncEngine.bubbleObjects.application);
    }


    // COUNT APPLICANTS
    const count = window.systemSyncEngine.objects.application.length;
    instance.publishState('count_applications', count);

    // COUNT APPLICANTS BY STAGE
    if (window.systemSyncEngine.objects.application && window.systemSyncEngine.objects.application.length > 0 && window.systemSyncEngine.objects.stage && window.systemSyncEngine.objects.stage.length > 0) {
        const countPerStage = countApplicantsByStage(window.systemSyncEngine.objects.stage, window.systemSyncEngine.objects.application);
        instance.publishState('count_per_stage', countPerStage);
    }
    
}


// GET ACTIVE APPLICANT & ADJACENT APPLICANTS
if (properties.active_app_index && window.systemSyncEngine.objects.application) {
    if  (window.systemSyncEngine.objects.application.length > 0) {

    const activeAppIndex = properties.active_app_index - 1;

    const activeApplication = window.systemSyncEngine.objects.application[activeAppIndex];
    instance.publishState('active_application', jsonToBubbleItem(activeApplication));

    const adjacentApplicants = getAdjacentApplicants(window.systemSyncEngine.objects.application, activeAppIndex);
    
    instance.publishState('next_application', jsonToBubbleItem(adjacentApplicants.nextApplicant));
    instance.publishState('previous_application', jsonToBubbleItem(adjacentApplicants.previousApplicant));
    }
}




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

// ------------ END OF PLUGIN ---------------- //
}