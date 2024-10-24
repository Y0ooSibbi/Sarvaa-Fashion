(() => {
    "use strict";
    var e = {
        n: t => {
            var a = t && t.__esModule ? () => t.default : () => t;
            return e.d(a, {
                a
            }), a
        },
        d: (t, a) => {
            for (var n in a) e.o(a, n) && !e.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            })
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t)
    };
    const t = window.wp.domReady;
    var a = e.n(t);
    const n = () => window.location.href !== window.parent.location.href,
        i = "zipwp-client-iframe-preview-data",
        o = () => {
            let e = "";
            const t = document.querySelector(".site-logo-img img");
            return t && (e = t.src), e
        };
    let l = o();
    const r = (e, t) => {
            if (!e) return "";
            if (e) {
                const a = e.match(/'([^']+)'/);
                return a ? a[1] : "inherit" === e ? t : e
            }
            return t || void 0
        },
        s = e => {
            switch (e.value.param) {
                case "siteLogo":
                    const t = document.querySelectorAll(".site-logo-img img");
                    "" === l && (l = o());
                    let a = e.value.data.url || l;
                    if (a = e.value.data.dataUri || a, 0 === t.length && "" !== a) {
                        const t = document.createElement("span");
                        t.classList.add("site-logo-img");
                        const n = document.createElement("a");
                        n.setAttribute("class", "custom-logo-link"), n.setAttribute("href", "#"), n.setAttribute("aria-current", "page"), t.appendChild(n);
                        const i = document.createElement("img");
                        i.classList.add("custom-logo"), i.setAttribute("src", a), n.appendChild(i);
                        const o = document.getElementById("ast-desktop-header").querySelectorAll(".ast-site-identity")[0],
                            l = o.querySelectorAll(".ast-site-title-wrap")[0];
                        o.insertBefore(t, l);
                        const r = e.value.data.width || "";
                        "" !== r && (i.style.width = r + "px", i.style.maxWidth = r + "px")
                    } else if ("" !== a)
                        for (const [n, i] of Object.entries(t)) {
                            i.removeAttribute("srcset"), i.setAttribute("src", a);
                            const t = e.value.data.width;
                            "" !== t && (i.style.width = t + "px", i.style.maxWidth = t + "px")
                        }
                    break;
                case "colorPalette":
                    const n = e.value.data.colors || [],
                        i = zipwp_client_preview.AstColorPaletteVarPrefix,
                        s = zipwp_client_preview.AstEleColorPaletteVarPrefix;
                    if (0 === n.length) {
                        document.querySelector("body").classList.remove("zipwp-client-preview-palette");
                        const e = document.getElementsByClassName("zipwp-client-preview-palette");
                        return void(e.length > 0 && e[0].remove())
                    }
                    document.querySelector("body").classList.add("zipwp-client-preview-palette");
                    const c = Object.entries(n).map(((e, t) => [`--e-global-color-${s[t].replace(/-/g,"")}: ${e[1]};`, `${i}${t}: ${e[1]};`])).map((e => e.join(""))).join("");
                    let d = document.getElementById("zipwp-client-preview-palette-css");
                    d || (d = document.createElement("style"), d.id = "zipwp-client-preview-palette-css", d.setAttribute("rel", "stylesheet"), document.head.appendChild(d)), d.innerHTML = `.zipwp-client-preview-palette{ ${c} }`;
                    break;
                case "siteTypography":
                    if (!Object.keys(e.value.data).length) {
                        const e = document.getElementById("zipwp-client-typography");
                        return void(e && e.remove())
                    }(e => {
                        if (!e) return;
                        if (!document.getElementById("google-fonts-domain")) {
                            const e = document.createElement("link");
                            e.id = "google-fonts-domain", e.setAttribute("rel", "preconnect"), e.setAttribute("href", "https://fonts.gstatic.com"), document.head.appendChild(e)
                        }
                        let t = document.getElementById("st-previw-google-fonts-url");
                        t || (t = document.createElement("link"), t.id = "st-previw-google-fonts-url", t.setAttribute("rel", "stylesheet"), document.head.appendChild(t));
                        const a = [];
                        let n = e["body-font-family"] || "",
                            i = parseInt(e["body-font-weight"]) || "";
                        i && (i = `:wght@${i}`), n && (n = r(n), n = n.replace(" ", "+"), a.push(`family=${n}${i}`));
                        let o = e["headings-font-family"] || "",
                            l = parseInt(e["headings-font-weight"]) || "";
                        l && (l = `:wght@${l}`), o && (o = r(o, n), o = o.replace(" ", "+"), a.push(`family=${o}${l}`));
                        const s = `https://fonts.googleapis.com/css2?${a.join("&")}&display=swap`;
                        t.setAttribute("href", s)
                    })(e.value.data), (e => {
                        if (!e) return;
                        let t = document.getElementById("zipwp-client-typography");
                        t || (t = document.createElement("style"), t.id = "zipwp-client-typography", t.setAttribute("rel", "stylesheet"), document.head.appendChild(t));
                        let a = "";
                        a += "body, button, input, select, textarea, .ast-button, .ast-custom-button {", a += "\tfont-family: " + e["body-font-family"] + ";", a += "\tfont-weight: " + e["body-font-weight"] + ";", a += "\tfont-size: " + e["font-size-body"].desktop + e["font-size-body"]["desktop-unit"] + ";", a += "\tline-height: " + e["body-line-height"] + ";", a += "}", a += "h1, .entry-content h1, h2, .entry-content h2, h3, .entry-content h3, h4, .entry-content h4, h5, .entry-content h5, h6, .entry-content h6, .site-title, .site-title a {", a += "\tfont-family: " + e["headings-font-family"] + ";", a += "\tline-height: " + e["headings-line-height"] + ";", a += "\tfont-weight: " + e["headings-font-weight"] + ";", a += "}", ["h1", "h2", "h3", "h4", "h5", "h6"].forEach((t => {
                            const n = "inherit" === e["font-family-" + t] ? e["headings-font-family"] : e["font-family-" + t],
                                i = "inherit" === e["font-weight-" + t] ? e["headings-font-weight"] : e["font-weight-" + t];
                            let o = "";
                            void 0 !== n && "" !== n && (o += `${t}, .entry-content ${t} {`, o += "\tfont-family: " + n + ";"), void 0 !== e["line-height-" + t] && "" !== e["line-height-" + t] && (o += "\tline-height: " + e["line-height-" + t] + ";"), void 0 !== i && "" !== i && (o += "\tfont-weight: " + i + ";"), a += "" !== o ? o + "}" : ""
                        })), t.innerHTML = a
                    })(e.value.data);
                    break;
                case "siteTitle":
                    (e => {
                        const t = document.getElementById("ast-desktop-header"),
                            a = t && t.querySelectorAll(".ast-site-identity")[0],
                            n = a && a.querySelectorAll(".ast-site-title-wrap")[0];
                        n && (n.style.display = e ? "block" : "none")
                    })(e.value.data);
                    break;
                case "clearPreviewAssets":
                    const p = document.getElementById("zipwp-client-typography");
                    p && p.remove(), document.querySelector("body").classList.remove("zipwp-client-preview-palette");
                    const m = document.getElementsByClassName("zipwp-client-preview-palette");
                    m.length > 0 && m[0].remove();
                    break;
                case "completeOnboarding":
                    localStorage.removeItem("zipwp-client-iframe-preview-data")
            }
        };
    window.addEventListener("message", (function(e) {
        if (n() && "object" == typeof e.data && "zipwpPreviewDispatch" === e.data.call) {
            const t = e.data;
            let a = JSON.parse(localStorage.getItem(i));
            null === a && (a = {}, a.data = {}), a.data[t.value.param] = t.value.data, delete a.data.clearPreviewAssets, t.url = window.location.origin, a.url = window.location.origin, "cleanStorage" === t.value.param ? (delete a.data.cleanStorage, a.data.siteLogo = t.value.data, a.data.colorPalette = {}, a.data.siteTypography = {}, Object.keys(a.data).map((e => s({
                value: {
                    param: e,
                    data: a.data[e]
                }
            })))) : s(t), localStorage.setItem(i, JSON.stringify(a))
        }
    }), !1), a()((() => {
        if (!n()) return;
        const e = document.createElement("style");
        e.id = "zipwp-client-logo-css", document.getElementsByTagName("head")[0].appendChild(e), e.innerHTML = ".site-logo-img img { transition: unset; } #wpadminbar { display: none; } html{  margin-top: 0 !important; }}";
        const t = (a = i, JSON.parse(localStorage.getItem(a)));
        var a;
        t && Object.keys(t.data).map((e => s({
            value: {
                param: e,
                data: t.data[e]
            }
        })))
    }))
})();