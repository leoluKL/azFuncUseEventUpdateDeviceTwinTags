const iothub = require('azure-iothub');
var iothubRegistry;

module.exports = function (context, IoTHubMessages) {
    if(!iothubRegistry) iothubRegistry= iothub.Registry.fromConnectionString(process.env.IoTHubOwnerString)
    for(var index=0;index<IoTHubMessages.length;index++){
        var message=IoTHubMessages[index]
        if (!context.bindingData.systemPropertiesArray)  continue;
        if (!message.body || !message.body.DevEUI_uplink)  continue;

        var devID = context.bindingData.systemPropertiesArray[index]["iothub-connection-device-id"]

        if(message.body.DevEUI_uplink.payload){
            var payload= message.body.DevEUI_uplink.payload
            iothubRegistry.updateTwin(devID,{"tags":{"payload":payload}},"*")
        }

        if(message.body.DevEUI_uplink.CustomerData && message.body.DevEUI_uplink.CustomerData.tags){
            var tags=message.body.DevEUI_uplink.CustomerData.tags
            iothubRegistry.updateTwin(devID,{"tags":{"customTags":tags}},"*")
        }
    }

    context.done();
};