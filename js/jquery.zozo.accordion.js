
/*
*	@name							Zozo Accordion
*	@descripton						Create awesome Accordion
*	@version						2.0
*	@copyright                      Copyright (c) 2013 Zozo UI, http://www.zozoui.com
*/


(function (a) { jQuery.browser.mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)) })(navigator.userAgent || navigator.vendor || window.opera);

; (function ($, window, document, undefined) {
    if (!window.console) window.console = {};
    if (!window.console.log) window.console.log = function () { };

    $.fn.extend({
        hasClasses: function (selectors) {
            var _base = this;
            for (i in selectors) {
                if ($(_base).hasClass(selectors[i]))
                    return true;
            }
            return false;
        }
    });

    $.zozo = {};
    $.zozo.core = {};
    $.zozo.core.console = {
        debug: false,
        log: function (message) {
            if ($("#console").length != 0) {
                $("<div/>")
                .css({ marginTop: -24 })
                .html(message)
                .prependTo("#console")
                .animate({ marginTop: 0 }, 300)
                .animate({ backgroundColor: "#ffffff" }, 800);
            }
            else {
                if (console && this.debug === true) {
                    console.log(message);
                }
            }
        }
    };

    $.zozo.core.keyCodes = {
        tab: 9,
        enter: 13,
        esc: 27,

        space: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36,

        left: 37,
        up: 38,
        right: 39,
        down: 40
    };

    $.zozo.core.debug = {
        startTime: new Date(),
        log: function (msg) {
            if (console) {
                console.log(msg);
            }
        },
        start: function () {
            this.startTime = +new Date();
            this.log("start: " + this.startTime);
        },
        stop: function () {
            var _end = +new Date();
            var _diff = _end - this.startTime;

            this.log("end: " + _end);
            this.log("diff: " + _diff);

            var Seconds_from_T1_to_T2 = _diff / 1000;
            var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);

            //this.log("diff s: " + Seconds_Between_Dates);
        }
    };

    $.zozo.core.support = {
        is_touch_device: function () {
            return !!('ontouchstart' in window) // works on most browsers
                || !!('onmsgesturechange' in window); // works on ie10
        },
        supportsCss: (function () {
            var div = document.createElement('div'),
               vendors = 'Khtml Ms O Moz Webkit'.split(' '),
               len = vendors.length;
            return function (prop) {
                if (prop in div.style) return true;
                prop = prop.replace(/^[a-z]/, function (val) {
                    return val.toUpperCase();
                });
                while (len--) {
                    if (vendors[len] + prop in div.style) {
                        return true;
                    }
                }
                return false;
            };
        })()
    };

    $.zozo.core.utils = {
        toArray: function (_object) {
            return $.map(_object, function (value, key) {
                return value;
            });
        },
        createHeader: function (_t, _c) {
            var _tab = $("<li><a>" + _t + "</a></li>");
            var _content = $("<div>" + _c + "</div>");

            return { tab: _tab, content: _content };
        },
        isEmpty: function (_str) {
            return (!_str || 0 === _str.length);
        },
        isNumber: function (_input) {
            return typeof _input === 'number' && isFinite(_input);
        }
    };

    $.zozo.core.plugins = {
        easing: function (_base) {
            var _exist = false;
            if (_base) {
                if (_base.settings) {
                    //set up a default value for easing
                    var _defEasing = 'swing';

                    // check for the existence of the easing plugin
                    if ($.easing.def) {
                        _exist = true;
                    }
                    else {
                        if (_base.settings.animation.easing != 'swing' && _base.settings.animation.easing != 'linear') {
                            _base.settings.animation.easing = _defEasing;
                        }
                    }
                }
            }
            return _exist;
        }
    };

    $.zozo.core.browser = {
        init: function () {
            this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
            this.version = this.searchVersion(navigator.userAgent)
                           || this.searchVersion(navigator.appVersion)
                           || "an unknown version";

            $.zozo.core.console.log("init: " + this.browser + " : " + this.version);
            if (this.browser === "Explorer") {

                var _el = $("html");
                var version = parseInt(this.version);

                if (version === 6) {
                    _el.addClass("ie ie7");
                }
                else if (version === 7) {
                    _el.addClass("ie ie7");
                }
                else if (version === 8) {
                    _el.addClass("ie ie8");
                }
                else if (version === 9) {
                    _el.addClass("ie ie9");
                }
            }
        },
        searchString: function (data) {
            for (var i = 0; i < data.length; i++) {
                var dataString = data[i].string;
                var dataProp = data[i].prop;
                this.versionSearchString = data[i].versionSearch || data[i].identity;
                if (dataString) {
                    if (dataString.indexOf(data[i].subString) != -1)
                        return data[i].identity;
                }
                else if (dataProp)
                    return data[i].identity;
            }
        },
        searchVersion: function (dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index == -1)
                return;
            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        },
        dataBrowser: [
            {
                string: navigator.userAgent,
                subString: "Chrome",
                identity: "Chrome"
            }, {
                string: navigator.vendor,
                subString: "Apple",
                identity: "Safari",
                versionSearch: "Version"
            }, {
                prop: window.opera,
                identity: "Opera"
            }, {
                string: navigator.userAgent,
                subString: "Firefox",
                identity: "Firefox"
            }, {
                string: navigator.userAgent,
                subString: "MSIE",
                identity: "Explorer",
                versionSearch: "MSIE"
            }
        ]
    };

    $.zozo.core.hashHelper = {
        all: function () {
            var hashArray = [];
            var hash = document.location.hash;

            if (!this.hasHash()) {
                return hashArray;
            }

            hash = hash.substring(1).split('&');

            for (var i = 0; i < hash.length; i++) {
                var match = hash[i].split('=');
                //if (match.length != 2 || match[0] in hashArray) return undefined;
                if (match.length != 2 || match[0] in hashArray) {
                    match[1] = "none";
                }
                hashArray[match[0]] = match[1];
            }

            return hashArray;
        },
        get: function (key) {
            var all = this.all();

            if (typeof all === 'undefined' || typeof all.length < 0) {
                //self.log("get: undefined or null all");
                return null;
            }
            else {
                if (typeof all[key] !== 'undefined' && all[key] !== null) {
                    //self.log("get: exist key");
                    return all[key];
                }
                else {
                    //self.log("get: undefined or null key" + key);
                    return null;
                }
            }

        },
        set: function (key, value) {
            var all = this.all();
            var hash = [];

            all[key] = value;
            for (var key in all) {
                hash.push(key + '=' + all[key]);
            }
            document.location.hash = hash.join('&');
        },
        hasHash: function () {
            var hash = document.location.hash;
            if (hash.length > 0) {
                return true;
            }
            else {
                return false;
            }
        }
    };


    $.zozo.core.support.transition = $.zozo.core.support.supportsCss("transition");
    $.zozo.core.browser.init();

})(jQuery, window, document);


; (function ($, window, document, undefined) {
    var ZozoAccordion = function (elem, options) {
        this.elem = elem;
        this.$elem = $(elem);
        this.options = options;
        this.metadata = (this.$elem.data("options")) ? this.$elem.data("options") : {};
        this.attrdata = (this.$elem.data()) ? this.$elem.data() : {};
        this.elemID;
        this.$sections;
        this.sectionCount;
        this.$container;
        this.$contents;
        this.autoplayIntervalId;
        this.currentsection;
        this.browser = $.zozo.core.browser;
        this.responsive;
    };

    if (window.zozo == null) {
        window.zozo = {};
    }
    var zozo = {
        pluginName: "zozoAccordion",
        elementSpacer: "<span class='z-tab-spacer' style='clear: both;display: block;'></span>",
        commaRegExp: /,/g,
        headerTitle: "<span class='z-title'>Illustrations</span>",
        headerArrow: "<span class='z-arrow'><i class='icon-chevron-down'></i></span>",
        space: " ",
        responsive: {
            largeDesktop: 1200,
            desktop: 960,
            tablet: 720,
            phone: "auto"
        },
        animationTypes: {
            css: "css",
            jquery: "jquery"
        },
        expandModes: {
            single: "single",
            multiple: "multiple"
        },
        events: {
            click: "click",
            mousover: "mouseover",
            touchend: "touchend"
        },
        classes: {
            prefix: "z-",
            wrapper: "z-accordion",
            section: "z-section",
            first: "z-first",
            last: "z-last",
            active: "z-active",
            link: "z-link",
            focus: "z-focus",
            container: "z-container",
            content: "z-content",
            shadows: "z-shadows",
            bordered: "z-bordered",
            rounded: "z-rounded",
            scrollable: "z-scrollable",
            autoClass: "z-auto-g",
            themes: {
                gray: "gray",
                black: "black",
                blue: "blue",
                white: "white",
                lightblue: "lightblue",
                deepblue: "deepblue",
                crystal: "crystal",
                green: "green",
                yellow: "yellow",
                purple: "purple",
                silver: "silver",
                red: "red",
                orange: "orange",
                clean: "clean2"
            },
            orientations: {
                vertical: "vertical",
                horizontal: "horizontal"
            },
            groups: {
                grouped: "z-grouped",
                ungrouped: "z-ungrouped"
            }
        }
    },

    LINK = ".z-link",
    ARROW = ".z-arrow",
    ERROR = "error",
    DOTNAV = ".z-dot-nav",
    SELECT = "select",
    CONTENT = ".z-content",
    EXPAND = "expand",
    ACTIVATE = "activate",
    SECTION = "section",
    CONTENTS = "> " + CONTENT,
    SECTIONS = "> " + SECTION,
    CONTENTURL = "contentUrl",
    CONTENTLOAD = "contentLoad";
    DOTNAVCLASS = "z-dot-nav",
    MOBILECLASS = "z-mobile",
    ACTIVECLASS = "z-active",
    LOADINGCLASS = "z-loading",
    ACTIVESECTION = SECTIONS + "." + ACTIVECLASS;
    DOTNAVITEMCLASS = "z-dot-nav-item",
    SLIDERWRAPPERCLASS = "z-slider-wrapper",
    DOTNAVITEM = DOTNAV + " span." + DOTNAVITEMCLASS,
    DOTNAVACTIVEITEM = DOTNAV + " ." + ACTIVECLASS,



    ZozoAccordion.prototype = {
        defaults: {
            animation: { duration: 600, effects: "fadeIn", easing: "easeOutQuart", type: zozo.animationTypes.jquery },
            autoplay: { interval: 0 },
            active: false,
            activate: function () { },
            bordered: true,
            cacheAjax: true,
            contentHeight: 0,
            contentLoad: function () { },
            contentSpacing: 0,
            contentUrls: null,
            contentWidth: 715,
            dotNav: false,
            event: zozo.events.click,
            error: function () { },
            expand: function () { },
            expandMode: zozo.expandModes.single,
            grouped: true,
            headerSize: 40,
            height: 320,
            keyboard: false,
            orientation: zozo.classes.orientations.vertical,
            original: { width: 0, orientation: null },
            responsive: false,
            rounded: false,
            scrollable: false,
            shadows: true,
            showIcons: true,
            slider: false,
            sectionSpacing: 0,
            theme: zozo.classes.themes.silver,
            urlBased: false,
            select: function () { },
            width: 800
        },
        init: function () {
            var _base = this;
            _base.settings = $.extend(true, {}, _base.defaults, _base.options, _base.metadata, _base.attrdata);

            _base.currentsection = _base.settings.active;
            _base.settings.original.width = _base.settings.width;
            _base.settings.original.orientation = _base.settings.orientation;

            if ((_base.settings.animation.type === zozo.animationTypes.css && $.zozo.core.support.transition) || jQuery.browser.mobile) {
                _base.settings.animation.duration = 0;
            }

            if (_base.settings.dotNav === true) {
                if (!_base.$elem.parent().hasClass(SLIDERWRAPPERCLASS)) {
                    _base.$elem.wrap("<div class='" + SLIDERWRAPPERCLASS + "'></div>");
                }
                if (_base.settings.dotNav === true && _base.settings.slider === true) {
                    _base.$sections = _base.$elem.find(SECTIONS);

                    var _dotNav = $("<div class='" + DOTNAVCLASS + "'></div>");
                    _base.$sections.each(function (index, item) {
                        _dotNav.append($("<span class='" + DOTNAVITEMCLASS + "'></span>"));
                    });

                    _base.$elem.parent().append(_dotNav);
                }
            }

            $.zozo.core.plugins.easing(_base);

            methods.updateClasses(_base);
            methods.bindEvents(_base);

            if (_base.settings.contentUrls != null ) {
                _base.$sections.each(function (index, item) {
                    $(item).find("." + zozo.classes.link).data(CONTENTURL, _base.settings.contentUrls[index]);
                });
            }

            if (_base.settings.responsive === true && _base.settings.original.orientation === zozo.classes.orientations.horizontal) {
                methods.checkWidth(_base);
            }
            else {
                if (_base.settings.orientation === zozo.classes.orientations.vertical) {
                    if ($.zozo.core.utils.isNumber(_base.settings.active)) {
                        methods.showSection(_base, _base.settings.active);
                    }
                }
                else {
                    methods.showSection(_base, _base.settings.active);
                }
            }
            return _base;
        },
        setOptions: function (_option, _refresh) {
            var _base = this;

           // methods.resetClasses(_base);

            _base.settings.active = _base.currentsection;
            _base.settings = $.extend(true, _base.settings, _option);

            methods.updateClasses(_base, true);

            //(_refresh === true) &&
            methods.showSection(_base, _base.settings.active);
            return _base;
        }
    };

    var methods = {
        resetClasses: function (_base) {
            _base.elemID = _base.$elem.attr("id");

            _base.$sections = _base.$elem.find(SECTIONS);
            _base.sectionCount = _base.$sections.length;
            _base.settings.contentWidth = _base.settings.width - (_base.sectionCount * (_base.settings.headerSize + 1));

            _base.$elem
                .attr("role", "tablist")
                //.attr("accesskey", "W")
                //.attr("tabindex", "0")
                .removeClass(zozo.classes.wrapper).addClass(zozo.classes.wrapper)
                .removeClass(zozo.classes.orientations.vertical)
                .removeClass(zozo.classes.orientations.horizontal)
                .removeClass(zozo.classes.groups.grouped)
                .removeClass(zozo.classes.groups.ungrouped)
                .addClass(_base.settings.orientation)
                .removeClass(zozo.classes.rounded)
                .removeClass(zozo.classes.shadows)
                .removeClass(zozo.classes.bordered)
                .parents("." + SLIDERWRAPPERCLASS).css({
                    'width': ""
                });

            _base.$elem.css({
                width: "",
                height: ""
            });

            _base.$sections.each(function (index, item) {

                $(item)
                    .removeClass(zozo.classes.first)
                    .removeClass(zozo.classes.last)
                    .removeClass(zozo.classes.active)
                    .addClass(zozo.classes.section)
                    .css({ 'margin': 'none' });

                $(item).css({
                    left: "",
                    width: "",
                    margin: ""
                });

                $(item).find("> h3").css({
                    width: "",
                    height: "",
                    "line-height": ""
                });

                $(item).find("> div").css({
                    height: "",
                    width: "",
                    left: "",
                    display: "",
                    margin: ""
                });
            });

            return _base;
        },
        updateClasses: function (_base, _active) {
            methods.resetClasses(_base, _active);

            if (jQuery.browser.mobile) {
                _base.$elem.addClass(MOBILECLASS);
            }

            if (_base.settings.orientation === zozo.classes.orientations.horizontal) {
                //horizontal ungrouped/grouped_base.settings.contentWidth = _base.settings.width - (_base.sectionCount * (_base.settings.headerSize) + ((_base.sectionCount - 1) * _base.settings.sectionSpacing));
                _base.settings.contentWidth = _base.settings.width - (_base.sectionCount * (_base.settings.headerSize));
            }
            else {
                 (_base.settings.sectionSpacing > 0) ? _base.settings.grouped = false : _base.settings.grouped = true;
            }
            var _headerSize = _base.settings.headerSize;
            _base.$sections.each(function (index, item) {
                var _$section = $(item);
                var _head = $(item).find("> h3");
                var _iconTop = (_base.settings.headerSize / 2) - 6;
                var _headText = _head.text();
                var _cont = $(item).find("> div");
                var _icon = (_base.settings.showIcons === true) ? "<span class='z-arrow' style='top:none'></span>" : "";//(_base.settings.showIcons === true) ? "<span class='z-arrow' style='top:" + _iconTop + "px;'></span>" : "";
                var _headContainer = $("<div class='z-head'></div>");

                if (_base.settings.orientation === zozo.classes.orientations.vertical) {
                    _icon = (_base.settings.showIcons === true) ? "<span class='z-arrow' style='top:none'></span>" : "";
                }

                //(_active !== true) && _$section.removeClass(zozo.classes.active)

                _head
                    //.attr("aria-controls", _base.elemID + "-" + (index + 1))
                    .text("")
                    .append("<span class='z-title'>" + $.trim(_headText) + "</span>" + _icon)
                    .addClass(zozo.classes.link);
                //.attr({"role": "tab", 'tabindex': "-1"});

                _head
                  .css({ "outline": "none", "height": _headerSize + "px", "line-height": _headerSize + "px" });


                if (_base.browser.browser === "Explorer" && _base.browser.version <= 8) {
                    _head.css({ "height": _headerSize + "px", "line-height": (_headerSize) + "px" });
                }


                _cont
                    //.attr({"id":  _base.elemID + "-" + (index + 1), "role": "tabpanel", "aria-hidden": "true", "aria-expanded": "false"})
                    .addClass(zozo.classes.content);

                if (_base.settings.orientation === zozo.classes.orientations.horizontal) {
                    _head.css({ "width": _base.settings.height });

                    if (_base.settings.slider === true) {
                        var _width = _base.settings.contentWidth - ((_base.settings.contentSpacing * 2));
                        var _height = _base.settings.height - (_base.settings.contentSpacing * 2);
                        _cont
                            .css({ "height": "100%", "margin": 0 })
                            .find("img")
                            .css({
                                //"width": _width + "px",
                                //"height": _height + "px",
                                //"overflow": "hidden",
                                //"border-radius": 0,
                                "margin": _base.settings.contentSpacing
                            });
                    }

                }
                else {

                    if (_base.settings.contentHeight > 0) {
                        _cont.css({ "height": _base.settings.contentHeight, "overflow": "auto" });
                    }

                    if (_base.settings.grouped === false || _base.settings.sectionSpacing > 0) {
                        _$section.css({
                            'margin-top': _base.settings.sectionSpacing + "px",
                            'margin-bottom': _base.settings.sectionSpacing + "px"
                        });
                    }
                }

                if (!_$section.find(">div>." + zozo.classes.autoClass).length) {
                    var _contentContainer = $("<div class='" + zozo.classes.autoClass + "'></div>");
                    var _contentHtml = _cont.html();
                    if (_base.settings.slider === true) {
                        _contentContainer = $("<div class='" + zozo.classes.autoClass + "' style='padding:0;'></div>");
                    }
                    _cont.html("");
                    _contentContainer.append(_contentHtml);
                    _contentContainer.appendTo(_cont);
                }
            });

            if (_base.settings.orientation === zozo.classes.orientations.horizontal) {
                _base.$elem.css({
                    'width': _base.settings.width,
                    'height': _base.settings.height
                }).parents("." + SLIDERWRAPPERCLASS).css({
                    'width': _base.settings.width
                });


            }

            //update first and last
            _base.$sections.filter(zozo.classes.first + ":not(:first-child)").removeClass(zozo.classes.first);
            _base.$sections.filter(zozo.classes.last + ":not(:last-child)").removeClass(zozo.classes.last);
            _base.$sections.filter(":first-child").addClass(zozo.classes.first).find("h3").attr("tabindex", "0").attr("accesskey", "w");
            _base.$sections.filter(":last-child").addClass(zozo.classes.last);

            var _themes = $.zozo.core.utils.toArray(zozo.classes.themes);
            if (!$.zozo.core.utils.isEmpty(_base.settings.theme)) {
                _base.$elem
                .removeClass(_themes.join().replace(zozo.commaRegExp, zozo.space))
                .addClass(_base.settings.theme);
            }
            else {
                if (!_base.$elem.hasClasses(_themes)) {
                    _base.$elem.addClass(zozo.classes.themes.silver);
                }
            }


            if ((_base.settings.animation.type === "css" && $.zozo.core.support.transition) || jQuery.browser.mobile) {
                _base.settings.animation.duration = 0;
                _base.$elem.addClass("transition");
            }

            if (jQuery.browser.mobile) {
                _base.settings.event = zozo.events.touchend;
            }



            //($.zozo.core.support.transition) && _base.$elem.addClass("transition");
            (_base.settings.rounded === true) &&    _base.$elem.addClass(zozo.classes.rounded);
            (_base.settings.scrollable === true) && _base.$elem.addClass(zozo.classes.scrollable);
            (_base.settings.grouped === true) ?     _base.$elem.addClass(zozo.classes.groups.grouped): _base.$elem.addClass(zozo.classes.groups.ungrouped);
            (_base.settings.bordered === true) &&   _base.$elem.addClass(zozo.classes.bordered);
            (_base.settings.shadows === true) && _base.$elem.addClass(zozo.classes.shadows);

            //add aria
            methods.addAria(_base, { index: _base.currentsection });
        },
        bindEvents: function (_base) {
            var _windowFocus = false;
            $(window).blur(function () {
                _windowFocus = false;
                $.zozo.core.console.log("blur: " + _windowFocus);
            }).focus(function () {
                _windowFocus = true;
                $.zozo.core.console.log("focus: " + _windowFocus);
            });

            _base.$elem.focus(function (e) {
                var _this = $(this);
                var _mdown = _this.data('mdown');

                _this.removeData('mdown');

                if (!_mdown) {
                    _this.addClass(zozo.classes.focus);
                }
            }).blur(function (e) {
                $(this).removeClass(zozo.classes.focus);
            });

            _base.$sections.find("> h3").each(function () {
                methods.bindEvent(_base, $(this));
            });


            _base.$elem.bind(SELECT, _base.settings.select);
            _base.$elem.bind(EXPAND, _base.settings.expand);
            _base.$elem.bind(ACTIVATE, _base.settings.activate);
            _base.$elem.bind(ERROR, _base.settings.error);
            _base.$elem.bind(CONTENTLOAD, _base.settings.contentLoad);

            if (_base.settings.slider === true && _base.settings.dotNav === true) {
                $(DOTNAVITEM).each(function () {
                    $(this).on("click", function (_event) {
                        _event.preventDefault();
                        methods.showSection(_base, $(this).index());
                    });
                });


                $(".z-nav a.z-next").click(function (_event) {
                    _event.preventDefault();
                    methods.showSection(_base, _base.currentsection + 1);

                });

                $(".z-nav a.z-prev").click(function (_event) {
                    _event.preventDefault();
                     methods.showSection(_base, _base.currentsection - 1);
                });
            }

            if (_base.settings.responsive === true && _base.settings.original.orientation === zozo.classes.orientations.horizontal) {
                $(window).resize(function () {
                    setTimeout((function (_base) {
                        return function () {
                            methods.checkWidth(_base);
                        };
                    })(_base), 1000);
                });
            }

        },
        bindEvent: function (_base, _section) {
           //jquery 1.5 _section.bind(_base.settings.event, function (_event) {
            _section.on(_base.settings.event, function (_event) {
                _event.preventDefault();
                var _index = $(this).parent().index();
                _base.currentsection = _index;
                methods.showSection(_base, _index);
            });

            if (_base.settings.keyboard === true) {
                _section.on('keyup', function (e) {
                    e.preventDefault();
                    var _this = $(this);
                    var _keyCode = e.keyCode || e.which;
                    var _indexOriginal = _this.parent().index();
                    var _index = _this.parent().index();
                    var _total = _base.sectionCount;
                    if (_keyCode == $.zozo.core.keyCodes.space || _keyCode == $.zozo.core.keyCodes.enter) {
                        methods.showSection(_base, _index);
                    }
                    else if (_keyCode >= $.zozo.core.keyCodes.end || _keyCode <= $.zozo.core.keyCodes.down) {
                        if (_keyCode === $.zozo.core.keyCodes.home) {
                            _index = 0;
                        }
                        else if (_keyCode === $.zozo.core.keyCodes.end) {
                            _index = _total - 1;
                        }
                        else if (_keyCode === $.zozo.core.keyCodes.up || _keyCode === $.zozo.core.keyCodes.left) {
                            _index--;
                        }
                        else if (_keyCode === $.zozo.core.keyCodes.down || _keyCode === $.zozo.core.keyCodes.right) {
                            _index++;
                        }

                        if (_index != _indexOriginal) {
                            if (_index === -1) {
                                _index = _total - 1;
                            }
                            if (_index === _total && _keyCode != $.zozo.core.keyCodes.end) {
                                _index = 0;
                            }
                            _base.$sections.find("> h3").eq(_index).focus();
                        }
                    }
                }).mousedown(function (_event) {
                    var _this = $(this);
                    if (!_this.is(':focus')) {
                        _this.data('mdown', true);
                    }
                }).focus(function (e) {
                    var _this = $(this);
                    var _mdown = _this.data('mdown');

                    _this.removeData('mdown');

                    if (!_mdown) {
                        _this.addClass(zozo.classes.focus);
                    }
                }).blur(function (e) {
                    $(this).removeClass(zozo.classes.focus);
                });
            }

        },
        checkWidth: function (_base) {
            var windowSize = $(window).width();

            if (windowSize >= 1200 && _base.responsive != zozo.responsive.largeDesktop) {
                _base.responsive = zozo.responsive.largeDesktop;
                methods.changeOrientation(_base, zozo.classes.orientations.horizontal, _base.settings.original.width);
            }
            else if (windowSize >= 960 && windowSize <= 1199 && _base.responsive != zozo.responsive.desktop) {
                _base.responsive = zozo.responsive.desktop;
                methods.changeOrientation(_base, zozo.classes.orientations.horizontal, zozo.responsive.desktop);
            }
            else if (windowSize >= 720 && windowSize <= 959 && _base.responsive != zozo.responsive.tablet) {
                _base.responsive = zozo.responsive.tablet;
                methods.changeOrientation(_base, zozo.classes.orientations.horizontal, zozo.responsive.tablet);
            }
            else if (windowSize < 720 && _base.responsive != zozo.responsive.phone) {
                _base.responsive = 'auto';
                methods.changeOrientation(_base, zozo.classes.orientations.vertical, _base.settings.original.width);
            }
        },
        changeOrientation: function (_base, _orientation, _deviceWidth) {
            if (_deviceWidth > _base.settings.original.width) {
                _deviceWidth = _base.settings.original.width;
            }

            if (_deviceWidth != 'auto') {
                _base.settings.width = _deviceWidth;
            }

            //methods.resetClasses(_base);
            _base.setOptions({ orientation: _orientation });
            methods.showSection(_base, _base.settings.active);
        },
        showSection: function (_base, _index) {
            var _$section = _base.$elem.find(SECTIONS).eq(_index);
            var $item = {
                index: $.zozo.core.utils.isNumber(_index) ? _index : 0,
                section: _$section,
                head: _$section.find("> h3"),
                link: _$section.find(".z-link"),
                content: _$section.find("> .z-content"),
                contentInner: _$section.find("> .z-content > .z-auto-g"),
                contentUrl: _$section.find(".z-link").data(CONTENTURL)
            };

            (_base.settings.select && typeof (_base.settings.select) == typeof (Function)) && _base.$elem.trigger(SELECT, { header: $item.link[0], content: $item.contentInner[0], index: $item.index});

            if ($item.contentUrl) {
                (_base.settings.orientation === zozo.classes.orientations.vertical) ? methods.ajaxRequest(_base, $item, methods.showVertical) : methods.ajaxRequest(_base, $item, methods.showHorizontal);
            } else {
                (_base.settings.orientation === zozo.classes.orientations.vertical) ? methods.showVertical(_base, $item) : methods.showHorizontal(_base, $item);
            }

            methods.updateDotNav(_base, $item);
            methods.addAria(_base, $item);

            _base.currentsection = $item.index;

            //(_base.settings.expand && typeof (_base.settings.expand) == typeof (Function)) && _base.$elem.trigger(EXPAND, { header: $item.link[0], content: $item.contentInner[0] });

            (_base.settings.activate && typeof (_base.settings.activate) == typeof (Function)) && _base.$elem.trigger(ACTIVATE, { header: $item.link[0], content: $item.contentInner[0], index: $item.index });

            return _base;
        },
        showHorizontal: function (_base, _item) {
            var _headerSize = _base.settings.headerSize;
            var _contentWidth = _base.settings.contentWidth;
            var _sectionSpacing = _base.settings.sectionSpacing;
            var _left = 0;
            var _index = _item.index;
            _base.$sections.each(function (index, item) {
                var _currentLeft;
                var _$section = $(item);
                var _$head =  _$section.find("> h3");
                var _$cont = _$section.find("> .z-content");

                if (index > 0) {
                    //horizontal grouped _left = _left + _headerSize + _sectionSpacing;
                    _left = _left + _headerSize

                   // _$cont.find("img").css({ "border-left": "2px solid white" })
                }

                //horizontal grouped if ((index+1) >= _base.sectionCount){_left - _sectionSpacing;}

                _currentLeft = _left;

                //if (true){_$head.hide();}

                if (index === _index) {
                    _left = _left + _contentWidth;
                }

                _base.$elem.find("section.z-active > .z-content").parent().removeClass(zozo.classes.active);
                _base.$elem.find("section > .z-content").eq(_index).parent().toggleClass(zozo.classes.active);

                _$section
                    .stop().animate({ "left": _currentLeft, "width": _contentWidth + _headerSize }, { duration: _base.settings.animation.duration, easing: _base.settings.animation.easing });

                _$head
                    .css({ "outline": "none", "height": _headerSize + 1, "line-height": _headerSize + "px" })
                    .find("> span.z-title").css({ "height": _headerSize, "line-height": _headerSize + "px" });



                if (_base.browser.browser === "Explorer" && _base.browser.version <= 8) {
                    _$head.css({ "height": _headerSize + 2, "line-height": (_headerSize) + "px" });
                }

                _$cont
                    .css({ "left": _headerSize })
                    .stop().animate({ "width": "auto" }, {
                        duration: _base.settings.animation.duration, easing: _base.settings.animation.easing, complete: function () {
                            $(this).css({ "overflow": "" });
                        }
                    });

               // methods.addAria(_base, _$section, _$head, _$cont, index);
            });

            return _base;
        },
        showVertical: function (_base, _item) {
            if (_item.section.hasClass(zozo.classes.active)) {

                _item.head.siblings(CONTENT)
                    .parent()
                    .toggleClass(zozo.classes.active);

                _item.head.siblings(CONTENT)
                    .slideToggle({ duration: _base.settings.animation.duration, easing: _base.settings.animation.easing });
            }
            else {
                if (_base.settings.expandMode === zozo.expandModes.single) {
                    _base.$elem
                        .find(ACTIVESECTION)
                        .removeClass(zozo.classes.active)
                        .find(CONTENTS)
                        .slideToggle({
                            duration: _base.settings.animation.duration, easing: _base.settings.animation.easing, complete: function () {
                                (_base.settings.expand && typeof (_base.settings.expand) == typeof (Function)) && _base.$elem.trigger(EXPAND, { header: _item.link[0], content: _item.contentInner[0] });
                            }
                        });
                }

                _item.head.siblings(CONTENT)
                    .parent()
                    .toggleClass(zozo.classes.active);

                _item.head.siblings(CONTENT)
                    .slideToggle({ duration: _base.settings.animation.duration, easing: _base.settings.animation.easing });
            }


            return _base;
        },
        updateDotNav: function (_base, _item) {
            if (_base.settings.slider === true) {
                _base.$elem.parent().find(DOTNAVACTIVEITEM).removeClass(zozo.classes.active);
                _base.$elem.parent().find(DOTNAVITEM).eq(_item.index).toggleClass(zozo.classes.active);
            }
        },
        addAria: function (_base, _item) {
            _base.$sections.each(function (index, item) {
                var _$section = $(item);
                var _$head = _$section.find("> h3");
                var _$cont = _$section.find("> div");
                var _expanded = (_$section.hasClass(zozo.classes.active));

                $.zozo.core.console.log("currentsection: " + _base.currentsection + " index: " + _item.index + " expanded: " + _expanded);

                _$section.attr({
                    "aria-hidden": (!_expanded).toString(),
                    "aria-expanded": (_expanded).toString(),
                    "aria-selected": (_expanded).toString()
                });

                _$head.attr({
                    "aria-controls": _base.elemID + "-" + (index + 1),
                    "role": "tab",
                    "tabindex": "-1"
                });

                _$cont.attr({
                    "id": _base.elemID + "-" + (index + 1),
                    "role": "tabpanel",
                    "aria-hidden": (!_expanded).toString(),
                    "aria-expanded": (_expanded).toString()
                });
            });

            return _base;
        },
        ajaxRequest: function (_base, _item, _func) {
            if (!_item.section.hasClass(zozo.classes.active)) {
                var loadingIconTimeout = setTimeout(function () {
                    _item.link.find(ARROW).addClass(LOADINGCLASS);
                }, 100);

                var data = {};

                $.ajax({
                    type: "GET",
                    cache: (_base.settings.cacheAjax === true),
                    url: _item.contentUrl,
                    dataType: "html",
                    data: data,
                    beforeSend: function (xhr, settings) {
                        //return fire(element, 'ajax:beforeSend', [xhr, settings]);
                    },
                    error: function (xhr, status, error) {
                        if (xhr.status == 404) {
                            _item.contentInner.html("<h4 style='color:red;'>Sorry, error: 404 - the requested content could not be found.</h4>");
                        }
                        else {
                            _item.contentInner.html("<h4 style='color:red;'>An error occurred: " + status + "\nError: " + xhr + " code: " + xhr.status + "</h4>");
                        }
                        (_base.settings.error && typeof (_base.settings.error) == typeof (Function)) && _base.$elem.trigger(ERROR, xhr);
                    },
                    complete: function (xhr, status) {
                        //_base.$elem.trigger('ajax:complete', [xhr, status]);
                        clearTimeout(loadingIconTimeout);
                        _item.link.find(ARROW).removeClass(LOADINGCLASS);
                        (_func && typeof (_func) == typeof (Function)) && _func(_base, _item);
                    },
                    success: function (data, status, xhr) {
                        _item.contentInner.html(data);
                        (_base.settings.contentLoad && typeof (_base.settings.contentLoad) == typeof (Function)) && _base.$elem.trigger(CONTENTLOAD, { header: _item.link[0], content: _item.contentInner[0], index: _item.index });
                    }
                });
            } else {
                (_func && typeof (_func) == typeof (Function)) && _func(_base, _item);
            }
            return _base;
        }
    };

    ZozoAccordion.defaults = ZozoAccordion.prototype.defaults;

    $.fn.zozoAccordion = function (options) {
        return this.each(function () {
            if (undefined == $(this).data(zozo.pluginName)) {
                var zozoAccordion = new ZozoAccordion(this, options).init();
                $(this).data(zozo.pluginName, zozoAccordion);
            }
        });
    };

    window.zozo.accordion = ZozoAccordion;

    $(document).ready(function () {
        $("[data-role='z-accordion']").each(function (index, item) {
            if (!$(item).zozoAccordion())
                $(item).zozoAccordion();

            $(item).find("[data-role='z-accordion']").each(function (index, nested2) {
                if (!$(nested2).zozoAccordion())
                    $(nested2).zozoAccordion();

                $(nested2).find("[data-role='z-accordion']").each(function (index, nested3) {
                    if (!$(nested3).zozoAccordion())
                        $(nested3).zozoAccordion();

                    $(nested3).find("[data-role='z-accordion']").each(function (index, nested4) {
                        if (!$(nested4).zozoAccordion())
                            $(nested4).zozoAccordion();
                    });
                });
            });
        });
    });



})(jQuery, window, document);