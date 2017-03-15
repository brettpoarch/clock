$(document).ready(function(){

	function twoDigit(check){
		check = check.toString()
		if(check.length < 2){
			return ("0" + check)
		}
		return check
	}

	function nonMil(num){
		if(num > 12){
			if((num - 12) < 10){
				return "0" + (num - 12)
			} else {
				return num - 12
			}
		}
		return num
	}


	var clock = setInterval(function (){
		var d = new Date()
		var hours = d.getHours()
		var minutes = d.getMinutes()
		var seconds = d.getSeconds()
		var time = nonMil(twoDigit(hours)) + ":" + twoDigit(minutes) + ":" + twoDigit(seconds) + "PM"
		$(".app").html(`${time}`)
	}, 1000)

})


