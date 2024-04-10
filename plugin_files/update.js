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






// ------------ END OF PLUGIN ---------------- //
}