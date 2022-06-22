# Introduction
This is an Azure Function project. It is triggered by IoT Hub event input and it will use a few event key/value pair to update device twin tags in IoTHub.

# Environment
It needs Azure IoT Hub and Azure Function App services.

# Deployment Instruction (use Visual Studio Code)
1. In Azure portal, create an Azure function App.
2. Check the IoT Hub service, copy content from "Built-in-endpoints"->"Event Hub-compatible endpoint" (e.g. Endpoint=sb://iothub-ns..). Choose Azure function App left pane "Configuration", paste value into it with name as "IoTHubConnectionString"
3. Check the IoT Hub service, copy content from "Shared access policies"->"iothubowner"->"Primary connection string" (e.g. HostName=LeoLuIoTHub.azure-devices.net;....). Choose Azure function App left pane "Configuration", paste value into it with name as "IoTHubOwnerString"
4. Deploy this project to Function App. (You need to install Azure functions extension to your visual studio code if you have not)
5. Done.