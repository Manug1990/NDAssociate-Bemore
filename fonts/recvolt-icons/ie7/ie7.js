/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'recvolt-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-next': '&#xe90d;',
		'icon-up-arrow': '&#xe916;',
		'icon-up-arrow_wht': '&#xe904;',
		'icon-6': '&#xe901;',
		'icon-calendar': '&#xe903;',
		'icon-dollar': '&#xe905;',
		'icon-down-arrow': '&#xe906;',
		'icon-down-arrow_wht': '&#xe907;',
		'icon-edit': '&#xe908;',
		'icon-facebook-logo-button': '&#xe909;',
		'icon-google-plus-symbol': '&#xe90a;',
		'icon-keyboard-right-arrow-button': '&#xe900;',
		'icon-linkedin-logo': '&#xe90b;',
		'icon-lock': '&#xe90c;',
		'icon-next2': '&#xe90e;',
		'icon-notification-bell': '&#xe90f;',
		'icon-notification-bell-info': '&#xe910;',
		'icon-or': '&#xe912;',
		'icon-search': '&#xe915;',
		'icon-check-sign': '&#xe911;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
