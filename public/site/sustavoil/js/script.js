///////////////////////////////////////////////////////////////////////////////////
// Scroll (TO‘G‘RILANGAN)
///////////////////////////////////////////////////////////////////////////////////
function scrollLink() {
	$(document).ready(function () {

		// faqat # bilan boshlanadigan linklar uchun ishlaydi
		$("a[href^='#']").click(function(e){

			let target = $(this).attr("href");

			// agar element mavjud bo‘lsa
			if ($(target).length) {
				e.preventDefault();

				$("html, body").animate({
					scrollTop: $(target).offset().top
				}, 800);
			}

		});

	});
}
scrollLink();

///////////////////////////////////////////////////////////////////////////////////
// Sana
///////////////////////////////////////////////////////////////////////////////////
$(function() {
	var date = new Date();
	$('.date').text(date.toLocaleString().split(',')[0]);
});