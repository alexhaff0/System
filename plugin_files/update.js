function(instance, properties, context) {
// ------------ BEGINNING OF PLUGIN ---------------- //
console.log("FN CALL: Update");

// if (!window.systemSyncEngine.inputs) {
//     window.systemSyncEngine.inputs = {};
// }

// if (properties.active_role_id) {
//     window.systemSyncEngine.inputs.active_role_id = properties.active_role_id;
//     // console.log("active_role_id:", properties.active_role_id);
// }

// if (properties.filter_criteria) {
//     window.systemSyncEngine.inputs.filter_criteria = properties.filter_criteria;
//     // console.log("filter_criteria:", properties.filter_criteria);
// }

// if (properties.sort_criteria) {
//     window.systemSyncEngine.inputs.sort_criteria = properties.sort_criteria;
//     // console.log("sort_criteria:", properties.sort_criteria);
// }


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


// ------------ END OF PLUGIN ---------------- //
}