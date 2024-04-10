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

}