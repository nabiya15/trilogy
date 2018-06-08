$(document).ready(function(){
	$('[data-toggle="collapse"]').on('click', function () {
		var iconElement = $(this).find("[data-icon-in]")
		var iconIn = iconElement.attr('data-icon-in')
		var iconOut = iconElement.attr('data-icon-out')
		var cssDown = {
			"padding":"3px 5px",
			"border": "1px solid #000",
			"border-radius": "60%",
			"color": "#38bcdb",
			"background-color": "#000"
		}
		var cssUp = {
			"padding":"3px 5px",
			"border": "1px solid #38bcdb",
			"border-radius": "60%",
			"color": "#000",
			"background-color": "#38bcdb"
		}
		if (iconElement.hasClass(iconIn)) {
			iconElement.removeClass(iconIn).addClass(iconOut).css(cssDown)

		} else {
			iconElement.removeClass("iconOut").addClass(iconIn).css(cssUp)
		}
	})
})