/*jslint browser: true*/
/*global $*/
/*global document*/


$(document).ready(function () {
 "use strict";
 var menuBtn = $('.menu-color-icon'), menu = $('body');
 menuBtn.click(function () {if (menu.hasClass('dark')) { menu.removeClass('dark'); menu.addClass('light'); } else { menu.addClass('dark'); menu.removeClass('light'); } });
});

$(document).ready(function () {
 "use strict";
 var menuBtn = $('.menu-icon'), menu = $('.navigation ul');
 menuBtn.click(function () { menu.toggle('show'); });
});

$(document).ready(function () {
 "use strict";
 var menuBtn = $('.menu-color-icon'), ind = $('.menu-color-icon');
 menuBtn.click(function () {if (ind.hasClass('dark')) { ind.removeClass('dark'); ind.addClass('light'); } else { ind.addClass('dark'); ind.removeClass('light'); } });
});

