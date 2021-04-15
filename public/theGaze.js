
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedGreeting() {
  GazeRecorderAPI.Rec();
  GazeCloudAPI.StartEyeTracking();
  await sleep(150000);
  var SesionReplayData = await GazeRecorderAPI.GetRecData();
  GazePlayer.PlayResultsData(SesionReplayData );
}

delayedGreeting()
