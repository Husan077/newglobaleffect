///////////////////////////////////////////////////////////////////////////////////
//Scroll
///////////////////////////////////////////////////////////////////////////////////
function scrollLink() {
	$(document).ready(function () {
		$("a:not(.kma-lang-list a,[modal='kmacb-form'], [modal=polit], [modal=agreement], .icon-close)").click(function(e){
			e.preventDefault();
			
			$("html, body").animate({scrollTop:$(".form-button").offset().top - ($(window).height() - $(".form-button").outerHeight(true))},800)
		 })

	});
}
scrollLink();

$(function() {
	var date=new Date();
	$('.date').text(date.toLocaleString().split(',')[0])

})
