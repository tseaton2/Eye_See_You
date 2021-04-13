GazeCloudAPI.StartEyeTracking();

//this is an example of how to pull data from webGazer
//gazeData contains the x and y of eye
//gazedata.state is for identifying the state of the process ie error, recording,etc
 GazeCloudAPI.OnResult = function (GazeData) { 
 GazeData.state
 console.log(GazeData)
 }
