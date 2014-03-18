/* jQuery plugin replaceText v0.2 <http://devs.forumvi.com/>	Copyright (c) 2014+ zzbaivong */
(function ($) {
	$.fn.replaceText = function (options) {
		var settings = $.extend({}, options);
		return this.each(function (index, obj) {
			$(this).html(function () {
				return this.innerHTML.replace(new RegExp(Object.keys(settings).toString().replace(/(\"|\'|\(|\)|\[|\]|\.|\*|\!|\?|\$|\||\+|\^|\/)/g, "\\$1").replace(/,/g, "|"), "gi"), function (txt) {
					return settings[txt];
				});
			});
		});
	};
}(jQuery));
