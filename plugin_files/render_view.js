function(instance, properties, context) {
    // ------------ BEGINNING OF PLUGIN ---------------- //

    console.log("FN CALL: Render View");

    if (!window.systemSyncEngine.inputs) {
        window.systemSyncEngine.inputs = {};
    }

    if (properties.active_role_id) {
        window.systemSyncEngine.inputs.active_role_id = properties.active_role_id;
        // console.log("active_role_id:", properties.active_role_id);
    }
    
    if (properties.filter_criteria) {
        window.systemSyncEngine.inputs.filter_criteria = properties.filter_criteria;
        // console.log("filter_criteria:", properties.filter_criteria);
    }
    
    if (properties.sort_criteria) {
        window.systemSyncEngine.inputs.sort_criteria = properties.sort_criteria;
        // console.log("sort_criteria:", properties.sort_criteria);
    }
    

    // GET ACTIVE ROLE
    if (window.systemSyncEngine.inputs.active_role_id) {

        // GET INPUT ROLE ID
        const activeRoleId = window.systemSyncEngine.inputs.active_role_id;

        // GET ACTIVE ROLE & CONVERT TO BUBBLE ITEM
        const activeRole = jsonToBubbleItem(getActiveRole(activeRoleId));

        // PUBLISH STATE
        instance.publishState('active_role', activeRole);

        // FILTER TO ACTIVE STAGES
        window.systemSyncEngine.objects.stage = getActiveStages(activeRoleId);


        // FILTER & SORT APPLICANTS
        const filterCriteria = JSON.parse(window.systemSyncEngine.inputs.filter_criteria);
        console.log("FILTER CRITERIA: ", filterCriteria);   

        const sortCriteria = JSON.parse(window.systemSyncEngine.inputs.sort_criteria);
        console.log("SORT CRITERIA: ", sortCriteria);
        
        const applicantsToFilter = filterObjectsByType(window.systemSyncEngine.objectMap, 'application');

        if (applicantsToFilter.length > 0) {
            let filteredApplicants = filterApplicants(applicantsToFilter, filterCriteria, sortCriteria);
            
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

function publishBubbleObjects() {
    // PUBLISH ALL OBJECTS TO BUBBLE  
    objectsToBubble(); // move to very end

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