function(instance, properties, context) {

    console.log("👨🏻‍✈️ Select Command Called");

    // GET SELECTED COMMAND
    const commands = instance.data.cmdkItems;

    const selectedID = properties.cmdID;
    const selectedCommand = commands.find(command => command._p_id === selectedID); // SELECTED COMMAND

    console.log("👨🏻‍✈️ Selected Command: ", selectedCommand);


    // NO PARAMETERS REQUIRED
    if (selectedCommand._p_parameters === false) {
      console.log("👨🏻‍✈️ About to run command: ", selectedCommand._p_name);
      eval(selectedCommand._p_handler + '()');
      bubble_fn_cmdk_close();
    }

    // PARAMETERS REQUIRED
    if (selectedCommand._p_parameters === true) {

      console.log("👨🏻‍✈️ About to display parameters for: ", selectedCommand._p_name);

       //LOAD ANY DATA
      const metadata = window.systemSyncEngine.metadata.all;
      if (!metadata) {
        console.error("Metadata is undefined");
        return;
      }

      // GET THE RELEVANT METADATA
      let formattedCommands = [];

      if (selectedCommand._p_param_type !== 'rating') {
  
        const relevantMetadata = metadata.filter(item => item._p_type === selectedCommand._p_param_type);
  
        console.log("👨🏻‍✈️ Relevant Command Metadata:", relevantMetadata);
  
        formattedCommands = relevantMetadata.map(item => ({
          name: item._p_name,
          id: item._p_id,
          icon: item._p_icon,
          handler: `${selectedCommand._p_handler}(${item._p_id});`
        }));
      
      } else {
  
        for (let i = 1; i < 6; i++) {
          const formattedCommand = {
            name: i,
            id: i,
            handler: 'handler'
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