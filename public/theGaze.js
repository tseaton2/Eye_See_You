GazeRecorderAPI.Rec();

//possible way to add eye heatmaps to the recording
GazeCloudAPI.StartEyeTracking();
		
//this needs to be stopped on a button click or something , right now it 
GazeRecorderAPI.StopRec()

var SesionReplayData = GazeRecorderAPI.GetRecData()


GazePlayer.PlayResultsData(SesionReplayData )