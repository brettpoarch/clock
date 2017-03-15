var foo = setInterval(function (){
	var d = new Date()
	var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
	console.log(time)
}, 1000)
