webgazer.setRegression("ridge")
webgazer.setGazeListener((data,timestamp) => {
		console.log(data,timestamp)
		console.save()
	}).begin()
