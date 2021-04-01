webgazer
webgazer.setRegression("ridge")
	.setGazeListener((data,timestamp) => {
		console.log(data,timestamp)
		console.save()
	}).begin()
