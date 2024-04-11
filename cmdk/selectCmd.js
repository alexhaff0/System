function(instance, properties, context) {

    console.log("👨🏻‍✈️ Select Command Called");

  // ------------------------------------ 0️⃣ GET DATA  ------------------------------------ //

    // GET ALL COMMANDS
    const commands = instance.data.cmdkItems;

    // GET SELECTED COMMAND
    const selectedID = properties.cmdID;
    const selectedCommand = commands.find(command => command._p_id === selectedID); // SELECTED COMMAND

    console.log("👨🏻‍✈️ Selected Command: ", selectedCommand);




    // --------------------------------- 1️⃣ BASIC ACTION  --------------------------------- //

    if (selectedCommand._p_parameters === false) {
      console.log("👨🏻‍✈️ About to run command: ", selectedCommand._p_name);
      eval(selectedCommand._p_handler + '()');
      instance.triggerEvent('cmdk_close')
    }




    // ----------------------------- 2️⃣ ACTION WITH PARAMETERS ---------------------------- //

    // PARAMETERS REQUIRED
    if (selectedCommand._p_parameters === true) {

      console.log("👨🏻‍✈️ About to display parameters for: ", selectedCommand._p_name);


       //LOAD ANY DATA
      mapToJSON();
      const objectPool = window.systemSyncEngine.objectPool;

      if (!objectPool) {
        console.error("Object Map not found by Cmd K menu.");
        return;
      } else if (objectPool) {
        console.log("👨🏻‍✈️ All Command Objects:", objectPool);
      }

      // GET THE RELEVANT METADATA
      let formattedCommands = [];

      if (selectedCommand._p_param_type !== 'rating') {
  
        const relevantObjects = objectPool.filter(item => item.type === selectedCommand._p_param_type);
  
        
        console.log("👨🏻‍✈️ Relevant Command Objects:", relevantObjects);
  
        formattedCommands = relevantObjects.map(item => ({
          name: item.name,
          id: item.id,
          icon: item.icon,
          handler: `${selectedCommand._p_handler}(${item.id});`
        }));
      
      } else {
  
        for (let i = 1; i < 6; i++) {
          const formattedCommand = {
            name: i.toString(),
            id: i,
            handler: `${selectedCommand._p_handler}(${i});`
          };
          formattedCommands.push(formattedCommand);
        }
  
      }
  
      // FORMAT THE METADATA AS COMMANDS
      console.log("👨🏻‍✈️ Formatted Sub-Commands:", formattedCommands);
  
      // CONVERT JSON TO BUBBLE LIST
      const cmdKBUBBLE = jsonToBubbleList(formattedCommands);
  
      // SAVE TO INSTANCE DATA
      instance.data.cmdkItems = cmdKBUBBLE;
  
      console.log("👨🏻‍✈️ Publishable Sub-Commands:", cmdKBUBBLE);
  
      // PUBLISH VALUE
      instance.publishState("cmd_k_items", instance.data.cmdkItems);

    }

}