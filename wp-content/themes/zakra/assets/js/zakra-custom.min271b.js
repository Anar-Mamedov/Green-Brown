var ZakraFrontend = {
    toggleMenu: function (e, t, n, o, s) {
        e.addEventListener("click", (function () {
            this.classList.toggle("tg-mobile-toggle--opened"), t.classList.toggle("tg-mobile-navigation--opened"), n && n.classList.toggle("overlay-show"), t.getElementsByClassName("tg-mobile-navigation-close").length || t.insertBefore(o, t.childNodes[0])
        })), n && n.addEventListener("click", (function () {
            this.classList.toggle("overlay-show"), s.classList.toggle("tg-mobile-toggle--opened"), t.classList.toggle("tg-mobile-navigation--opened")
        }))
    }
};
window.zakraFrontend = ZakraFrontend, document.addEventListener("DOMContentLoaded", (function () {
    try {
        ! function () {
            var e, t, n, o, s, l, a, c, i, r, u, d, g = document.getElementById("mobile-navigation"),
                m = document.querySelector(".tg-mobile-toggle"),
                h = document.querySelector(".tg-overlay-wrapper"),
                p = document.getElementById("wpadminbar");
            if ((l = document.createElement("button")).classList.add("tg-mobile-navigation-close"), l.setAttribute("aria-label", "Close Button"), g && (t = g.querySelectorAll("li.page_item_has_children, li.menu-item-has-children"), document.body.contains(p) && (e = p.getBoundingClientRect().height, a = getComputedStyle(g), c = parseInt(a.paddingTop) + e, l.style.top = e + "px", g.style.paddingTop = c + "px")), m && g && (l.addEventListener("click", (function () {
                    m.click()
                })), zakraFrontend.toggleMenu(m, g, h, l, m), m.addEventListener("click", (function () {
                    'a, button, input[type="search"]',
                    r = g.querySelectorAll('a, button, input[type="search"]'),
                    r = Array.prototype.slice.call(r),
                    u = r[0],
                    d = r[r.length - 1],
                    setTimeout((function () {
                        u.focus()
                    }), 100),
                    g.addEventListener("keydown", (function (e) {
                        "Tab" === e.key && (e.shiftKey ? document.activeElement === u && (e.preventDefault(), d.focus()) : document.activeElement === d && (e.preventDefault(), u.focus()))
                    }))
                }))), t) {
                var y = t.length;
                for (i = 0; i < y; i++)
                    if ((o = document.createElement("button")).classList.add("tg-submenu-toggle"), (n = t[i]).insertBefore(o, n.childNodes[1]), null !== (s = n.querySelector(".tg-submenu-toggle")) && s.addEventListener("click", (function (e) {
                            e.preventDefault(), this.parentNode.classList.toggle("submenu--show")
                        })), null !== n.querySelector("a")) {
                        var f = n.querySelector("a").getAttribute("href"),
                            v = n.querySelector("a");
                        f && "#" !== f || v.addEventListener("click", (function (e) {
                            g.classList.toggle("tg-mobile-navigation--opened"), this.parentNode.classList.toggle("submenu--show")
                        }))
                    }
            }
        }()
    } catch (e) {
        console.log(e.message)
    }
    var e;
    (e = document.getElementById("tg-scroll-to-top")) && (window.addEventListener("scroll", (function () {
        500 < window.scrollY ? e.classList.add("tg-scroll-to-top--show") : 500 > window.scrollY && e.classList.remove("tg-scroll-to-top--show")
    })), e.addEventListener("click", (function (e) {
        e.preventDefault(), 0 !== window.scrollY && window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }))),
    function () {
        var e, t, n;

        function o(n) {
            "hide" !== n ? (t.classList.toggle("show-search"), t.classList.contains("show-search") && (t.getElementsByTagName("input")[0].focus(), document.querySelector(".tg-menu-item-search").addEventListener("keydown", (function (n) {
                n.shiftKey || "Tab" !== n.key || document.activeElement !== t.getElementsByTagName("input")[0] || (n.preventDefault(), e.focus()), n.shiftKey && "Tab" === n.key && document.activeElement === e && t.classList.contains("show-search") && (n.preventDefault(), t.getElementsByTagName("input")[0].focus())
            })))) : t.classList.remove("show-search")
        }
        e = document.querySelector(".tg-menu-item-search > a"), t = document.getElementsByClassName("tg-menu-item-search")[0], n = function (e, t) {
            for (Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (e) {
                    for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length; 0 <= --n && t.item(n) !== this;);
                    return -1 < n
                }); e && e !== document; e = e.parentNode)
                if (e.matches(t)) return e;
            return null
        }, null !== e && (e.addEventListener("click", (function (e) {
            e.preventDefault(), o()
        })), document.addEventListener("click", (function (e) {
            switch (typeof e.target.closest) {
                case "undefined":
                    if (n(e.target, ".tg-menu-item-search") || n(e.target, ".tg-icon-search")) return;
                    break;
                default:
                    if (e.target.closest(".tg-menu-item-search") || e.target.closest(".tg-icon-search")) return
            }
            o("hide")
        })), document.addEventListener("keyup", (function (e) {
            t.classList.contains("show-search") && "Escape" === e.key && o("hide")
        })))
    }();
    var t = document.getElementsByTagName("body")[0],
        n = t.getElementsByClassName("tg-site-header-top")[0];
    t.classList.contains("has-transparent-header") && void 0 !== n && n.classList.contains("tg-site-header-top") && function (e, t) {
        var n = t.offsetHeight,
            o = document.getElementById("main"),
            s = document.getElementById("colophon");
        o.style.position = "relative", o.style.top = n + "px", s.style.position = "relative", s.style.top = n + "px"
    }(0, n)
}));