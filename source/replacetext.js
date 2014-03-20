/* jQuery plugin replaceText v0.3 <http://devs.forumvi.com/>	Copyright (c) 2014+ zzbaivong */
(function ($) {
	$.fn.replaceText = function (options) {
		var settings = $.extend({}, options);
		return this.each(function (index, obj) {
			$(this).html(function () {
				var content = this.innerHTML;
				$.each(Object.keys(settings), function (index, val) {
					var regex = new RegExp(val.replace(/(\"|\'|\(|\)|\[|\]|\.|\*|\!|\?|\$|\||\+|\^|\/|\,|\;)/g, "\\$1"), "gi");
					content = content.replace(regex, settings[val]);
				})
				return content;
			});
		});
	};
}(jQuery));
