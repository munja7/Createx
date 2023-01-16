import "./signup.sass";
import $ from "jquery";
import "magnific-popup";
import "magnific-popup/dist/magnific-popup.css";

$(document).ready(function() {
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		showCloseBtn: false,
		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
	$( "#sign-up-close" ).click(function() {
		$.magnificPopup.close();
	});
});