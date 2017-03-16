$(document).ready(function(){

	function toHex(num){
		if(num <= 255){
			return num.toString(16)
		} else {
			num = 0
			return num.toString(16)
		}
	}

	var red = 0
	var green = 0
	var blue = 0

	var clock = setInterval(function (){
		red 
		green 
		if(blue > 255){
			if(green <= 255){
				green += 1
				blue = 0
			} else if (green > 255){
				if(red <= 255){
					red += 1
					green = 0
				} else {
					red = 0
				}
			}
		} else {
			blue += 1
		}
		var color = "#" + toHex(red) + toHex(green) + toHex(blue)
		$(".app").html(`${color}`)
		$("body").css('background-color', `${color}`)
	}, 1000)


})


