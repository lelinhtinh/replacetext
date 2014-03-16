/* jQuery plugin replaceText v0.1 <http://devs.forumvi.com/>	Copyright (c) 2014+ zzbaivong */
(function ($) {
    $.fn.replaceText = function (options) {
        var settings = $.extend({}, options);
        return this.each(function (index, obj) {
            $(this).html(function () {
                return this.innerHTML.replace(new RegExp(Object.keys(settings).join("|"), "gi"), function (txt) {
                    txt = txt.replace(/(\"|\'|\(|\)|\[|\]|\.|\*|\!|\?|\$|\||\+|\^)/g, "\\$1");
                    return settings[txt];
                });
            });
        });
    };
}(jQuery));
