/*! Capacitor: https://capacitor.ionicframework.com/ - MIT License */
var capacitorExports = function (e) {
    "use strict";
    var t, n, r, i, o, s, a, u, c, l, d, p, h;
    (t = e.CameraSource || (e.CameraSource = {})).Prompt = "PROMPT", t.Camera = "CAMERA", t.Photos = "PHOTOS", (n = e.CameraDirection || (e.CameraDirection = {})).Rear = "REAR", n.Front = "FRONT", (r = e.CameraResultType || (e.CameraResultType = {})).Uri = "uri", r.Base64 = "base64", r.DataUrl = "dataUrl", (i = e.FilesystemDirectory || (e.FilesystemDirectory = {})).Application = "APPLICATION", i.Documents = "DOCUMENTS", i.Data = "DATA", i.Cache = "CACHE", i.External = "EXTERNAL", i.ExternalStorage = "EXTERNAL_STORAGE", (o = e.FilesystemEncoding || (e.FilesystemEncoding = {})).UTF8 = "utf8", o.ASCII = "ascii", o.UTF16 = "utf16", (s = e.HapticsImpactStyle || (e.HapticsImpactStyle = {})).Heavy = "HEAVY", s.Medium = "MEDIUM", s.Light = "LIGHT", (a = e.HapticsNotificationType || (e.HapticsNotificationType = {})).SUCCESS = "SUCCESS", a.WARNING = "WARNING", a.ERROR = "ERROR", (u = e.KeyboardStyle || (e.KeyboardStyle = {})).Dark = "DARK", u.Light = "LIGHT", (c = e.KeyboardResize || (e.KeyboardResize = {})).Body = "body", c.Ionic = "ionic", c.Native = "native", c.None = "none", (l = e.ActionSheetOptionStyle || (e.ActionSheetOptionStyle = {})).Default = "DEFAULT", l.Destructive = "DESTRUCTIVE", l.Cancel = "CANCEL", (d = e.PermissionType || (e.PermissionType = {})).Camera = "camera", d.Photos = "photos", d.Geolocation = "geolocation", d.Notifications = "notifications", d.ClipboardRead = "clipboard-read", d.ClipboardWrite = "clipboard-write", (p = e.PhotosAlbumType || (e.PhotosAlbumType = {})).Smart = "smart", p.Shared = "shared", p.User = "user", (h = e.StatusBarStyle || (e.StatusBarStyle = {})).Dark = "DARK", h.Light = "LIGHT";
    var f, y = function () {
            function e() {
                var e = this;
                this.platform = "web", this.isNative = !1, this.Plugins = {}, this.Plugins = new Proxy(this.Plugins, {
                    get: function (t, n) {
                        if (void 0 === t[n]) {
                            var r = e;
                            return new Proxy({}, {
                                get: function (e, t) {
                                    return void 0 === e[t] ? r.pluginMethodNoop.bind(r, e, t, n) : e[t]
                                }
                            })
                        }
                        return t[n]
                    }
                })
            }

            return e.prototype.pluginMethodNoop = function (e, t, n) {
                return Promise.reject(n + " does not have web implementation.")
            }, e.prototype.getPlatform = function () {
                return this.platform
            }, e.prototype.isPluginAvailable = function (e) {
                return this.Plugins.hasOwnProperty(e)
            }, e.prototype.convertFileSrc = function (e) {
                return e
            }, e.prototype.handleError = function (e) {
                console.error(e)
            }, e
        }(),
        m = (f = "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).Capacitor = f.Capacitor || new y,
        v = m.Plugins, g = function () {
            function e() {
                this.plugins = {}, this.loadedPlugins = {}
            }

            return e.prototype.addPlugin = function (e) {
                this.plugins[e.config.name] = e
            }, e.prototype.getPlugin = function (e) {
                return this.plugins[e]
            }, e.prototype.loadPlugin = function (e) {
                var t = this.getPlugin(e);
                t ? t.load() : console.error("Unable to load web plugin " + e + ", no such plugin found.")
            }, e.prototype.getPlugins = function () {
                var e = [];
                for (var t in this.plugins) e.push(this.plugins[t]);
                return e
            }, e
        }(), w = new g, b = function () {
            function e(e, t) {
                this.config = e, this.loaded = !1, this.listeners = {}, this.windowListeners = {}, t ? t.addPlugin(this) : w.addPlugin(this)
            }

            return e.prototype.addWindowListener = function (e) {
                window.addEventListener(e.windowEventName, e.handler), e.registered = !0
            }, e.prototype.removeWindowListener = function (e) {
                e && (window.removeEventListener(e.windowEventName, e.handler), e.registered = !1)
            }, e.prototype.addListener = function (e, t) {
                var n = this;
                this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t);
                var r = this.windowListeners[e];
                return r && !r.registered && this.addWindowListener(r), {
                    remove: function () {
                        n.removeListener(e, t)
                    }
                }
            }, e.prototype.removeListener = function (e, t) {
                var n = this.listeners[e];
                if (n) {
                    var r = n.indexOf(t);
                    this.listeners[e].splice(r, 1), this.listeners[e].length || this.removeWindowListener(this.windowListeners[e])
                }
            }, e.prototype.notifyListeners = function (e, t) {
                var n = this.listeners[e];
                n && n.forEach(function (e) {
                    return e(t)
                })
            }, e.prototype.hasListeners = function (e) {
                return !!this.listeners[e].length
            }, e.prototype.registerWindowListener = function (e, t) {
                var n = this;
                this.windowListeners[t] = {
                    registered: !1, windowEventName: e, pluginEventName: t, handler: function (e) {
                        n.notifyListeners(t, e)
                    }
                }
            }, e.prototype.requestPermissions = function () {
                return Capacitor.isNative ? Capacitor.nativePromise(this.config.name, "requestPermissions", {}) : Promise.resolve({results: []})
            }, e.prototype.load = function () {
                this.loaded = !0
            }, e
        }(), P = function (e) {
            for (var t = 0, n = w.getPlugins(); t < n.length; t++) {
                var r = n[t];
                E(e, r)
            }
        }, E = function (e, t) {
            e.hasOwnProperty(t.config.name) && !function (e) {
                return e.config.platforms && e.config.platforms.indexOf(Capacitor.platform) >= 0
            }(t) || (e[t.config.name] = t)
        }, x = function (e, t) {
            return (x = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
        };

    function S(e, t) {
        function n() {
            this.constructor = e
        }

        x(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }

    function R(e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
            function s(e) {
                try {
                    u(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    u(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                e.done ? i(e.value) : new n(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            u((r = r.apply(e, t || [])).next())
        })
    }

    function C(e, t) {
        var n, r, i, o, s = {
            label: 0, sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1]
            }, trys: [], ops: []
        };
        return o = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
            return this
        }), o;

        function a(o) {
            return function (a) {
                return function (o) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                        switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return s.label++, {value: o[1], done: !1};
                            case 5:
                                s.label++, r = o[1], o = [0];
                                continue;
                            case 7:
                                o = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    s.label = o[1];
                                    break
                                }
                                if (6 === o[0] && s.label < i[1]) {
                                    s.label = i[1], i = o;
                                    break
                                }
                                if (i && s.label < i[2]) {
                                    s.label = i[2], s.ops.push(o);
                                    break
                                }
                                i[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        o = t.call(e, s)
                    } catch (e) {
                        o = [6, e], r = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {value: o[0] ? o[1] : void 0, done: !0}
                }([o, a])
            }
        }
    }

    var A = function (e) {
        function t() {
            return e.call(this, {name: "Accessibility", platforms: ["web"]}) || this
        }

        return S(t, e), t.prototype.isScreenReaderEnabled = function () {
            throw new Error("Feature not available in the browser")
        }, t.prototype.speak = function (e) {
            if (!("speechSynthesis" in window)) return Promise.reject("Browser does not support the Speech Synthesis API");
            var t = new SpeechSynthesisUtterance(e.value);
            return e.language && (t.lang = e.language), window.speechSynthesis.speak(t), Promise.resolve()
        }, t
    }(b), D = new A, T = function (e) {
        function t() {
            var t = e.call(this, {name: "App", platforms: ["web"]}) || this;
            return "undefined" != typeof document && document.addEventListener("visibilitychange", t.handleVisibilityChange.bind(t), !1), t
        }

        return S(t, e), t.prototype.exitApp = function () {
            throw new Error("Method not implemented.")
        }, t.prototype.canOpenUrl = function (e) {
            return Promise.resolve({value: !0})
        }, t.prototype.openUrl = function (e) {
            return Promise.resolve({completed: !0})
        }, t.prototype.getLaunchUrl = function () {
            return Promise.resolve({url: ""})
        }, t.prototype.handleVisibilityChange = function () {
            var e = {isActive: !0 !== document.hidden};
            this.notifyListeners("appStateChange", e)
        }, t
    }(b), L = new T, I = function (e) {
        function t() {
            return e.call(this, {name: "Browser", platforms: ["web"]}) || this
        }

        return S(t, e), t.prototype.open = function (e) {
            return R(this, void 0, void 0, function () {
                return C(this, function (t) {
                    return this._lastWindow = window.open(e.url, e.windowName || "_blank"), [2, Promise.resolve()]
                })
            })
        }, t.prototype.prefetch = function (e) {
            return R(this, void 0, void 0, function () {
                return C(this, function (e) {
                    return [2, Promise.resolve()]
                })
            })
        }, t.prototype.close = function () {
            return R(this, void 0, void 0, function () {
                return C(this, function (e) {
                    return this._lastWindow && this._lastWindow.close(), [2, Promise.resolve()]
                })
            })
        }, t
    }(b), O = new I, F = function (t) {
        function n() {
            return t.call(this, {name: "Camera", platforms: ["web"]}) || this
        }

        return S(n, t), n.prototype.getPhoto = function (e) {
            return R(this, void 0, void 0, function () {
                var t = this;
                return C(this, function (n) {
                    return [2, new Promise(function (n, r) {
                        return R(t, void 0, void 0, function () {
                            var t, i = this;
                            return C(this, function (o) {
                                switch (o.label) {
                                    case 0:
                                        return t = document.createElement("pwa-camera-modal"), document.body.appendChild(t), [4, t.componentOnReady()];
                                    case 1:
                                        return o.sent(), t.addEventListener("onPhoto", function (o) {
                                            return R(i, void 0, void 0, function () {
                                                var i, s;
                                                return C(this, function (a) {
                                                    switch (a.label) {
                                                        case 0:
                                                            return null !== (i = o.detail) ? [3, 1] : (r("User cancelled photos app"), [3, 4]);
                                                        case 1:
                                                            return i instanceof Error ? (r(i.message), [3, 4]) : [3, 2];
                                                        case 2:
                                                            return s = n, [4, this._getCameraPhoto(i, e)];
                                                        case 3:
                                                            s.apply(void 0, [a.sent()]), a.label = 4;
                                                        case 4:
                                                            return t.dismiss(), document.body.removeChild(t), [2]
                                                    }
                                                })
                                            })
                                        }), t.present(), [2]
                                }
                            })
                        })
                    })]
                })
            })
        }, n.prototype._getCameraPhoto = function (t, n) {
            return new Promise(function (r, i) {
                var o = new FileReader, s = t.type.split("/")[1];
                n.resultType == e.CameraResultType.Uri ? r({
                    webPath: URL.createObjectURL(t),
                    format: s
                }) : (o.readAsDataURL(t), o.onloadend = function () {
                    var t = o.result;
                    n.resultType == e.CameraResultType.DataUrl ? r({
                        dataUrl: t,
                        format: s
                    }) : r({base64String: t.split(",")[1], format: s})
                }, o.onerror = function (e) {
                    i(e)
                })
            })
        }, n
    }(b), _ = new F, N = function (e) {
        function t() {
            return e.call(this, {name: "Clipboard", platforms: ["web"]}) || this
        }

        return S(t, e), t.prototype.write = function (e) {
            return R(this, void 0, void 0, function () {
                return C(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return navigator.clipboard ? e.string || e.url ? [4, navigator.clipboard.writeText(e.string || e.url)] : [3, 2] : [2, Promise.reject("Clipboard API not available in this browser")];
                        case 1:
                            return t.sent(), [3, 3];
                        case 2:
                            if (e.image) return [2, Promise.reject("Setting images not supported on the web")];
                            t.label = 3;
                        case 3:
                            return [2, Promise.resolve()]
                    }
                })
            })
        }, t.prototype.read = function (e) {
            return R(this, void 0, void 0, function () {
                var t, n, r, i, o;
                return C(this, function (s) {
                    switch (s.label) {
                        case 0:
                            return navigator.clipboard ? "string" !== e.type && "url" !== e.type ? [3, 2] : [4, navigator.clipboard.readText()] : [2, Promise.reject("Clipboard API not available in this browser")];
                        case 1:
                            return t = s.sent(), [2, Promise.resolve({value: t})];
                        case 2:
                            return [4, navigator.clipboard.read()];
                        case 3:
                            for (n = s.sent(), r = 0, i = n.items; r < i.length; r++) if ("text/plain" === (o = i[r]).type) return [2, Promise.resolve({value: o.getAs("text/plain")})];
                            s.label = 4;
                        case 4:
                            return [2, Promise.reject("Unable to get data from clipboard")]
                    }
                })
            })
        }, t
    }(b), W = new N, k = function (t) {
        function n() {
            var n = t.call(this, {name: "Filesystem", platforms: ["web"]}) || this;
            return n.DEFAULT_DIRECTORY = e.FilesystemDirectory.Data, n.DB_VERSION = 1, n.DB_NAME = "Disc", n._writeCmds = ["add", "put", "delete"], n
        }

        return S(n, t), n.prototype.initDb = function () {
            return R(this, void 0, void 0, function () {
                var e = this;
                return C(this, function (t) {
                    if (void 0 !== this._db) return [2, this._db];
                    if (!("indexedDB" in window)) throw new Error("This browser doesn't support IndexedDB");
                    return [2, new Promise(function (t, r) {
                        var i = indexedDB.open(e.DB_NAME, e.DB_VERSION);
                        i.onupgradeneeded = n.doUpgrade, i.onsuccess = function () {
                            e._db = i.result, t(i.result)
                        }, i.onerror = function () {
                            return r(i.error)
                        }, i.onblocked = function () {
                            console.warn("db blocked")
                        }
                    })]
                })
            })
        }, n.doUpgrade = function (e) {
            var t = e.target.result;
            switch (e.oldVersion) {
                case 0:
                case 1:
                default:
                    t.objectStoreNames.contains("FileStorage") && t.deleteObjectStore("FileStorage"), t.createObjectStore("FileStorage", {keyPath: "path"}).createIndex("by_folder", "folder")
            }
        }, n.prototype.dbRequest = function (e, t) {
            return R(this, void 0, void 0, function () {
                var n;
                return C(this, function (r) {
                    return n = -1 !== this._writeCmds.indexOf(e) ? "readwrite" : "readonly", [2, this.initDb().then(function (r) {
                        return new Promise(function (i, o) {
                            var s = r.transaction(["FileStorage"], n).objectStore("FileStorage"), a = s[e].apply(s, t);
                            a.onsuccess = function () {
                                return i(a.result)
                            }, a.onerror = function () {
                                return o(a.error)
                            }
                        })
                    })]
                })
            })
        }, n.prototype.dbIndexRequest = function (e, t, n) {
            return R(this, void 0, void 0, function () {
                var r;
                return C(this, function (i) {
                    return r = -1 !== this._writeCmds.indexOf(t) ? "readwrite" : "readonly", [2, this.initDb().then(function (i) {
                        return new Promise(function (o, s) {
                            var a = i.transaction(["FileStorage"], r).objectStore("FileStorage").index(e),
                                u = a[t].apply(a, n);
                            u.onsuccess = function () {
                                return o(u.result)
                            }, u.onerror = function () {
                                return s(u.error)
                            }
                        })
                    })]
                })
            })
        }, n.prototype.getPath = function (e, t) {
            e = e || this.DEFAULT_DIRECTORY;
            var n = void 0 !== t ? t.replace(/^[\/]+|[\/]+$/g, "") : "", r = "/" + e;
            return "" !== t && (r += "/" + n), r
        }, n.prototype.clear = function () {
            return R(this, void 0, void 0, function () {
                var e, t;
                return C(this, function (n) {
                    switch (n.label) {
                        case 0:
                            return [4, this.initDb()];
                        case 1:
                            return e = n.sent(), t = e.transaction(["FileStorage"], "readwrite"), t.objectStore("FileStorage").clear(), [2, {}]
                    }
                })
            })
        }, n.prototype.readFile = function (e) {
            return R(this, void 0, void 0, function () {
                var t, n;
                return C(this, function (r) {
                    switch (r.label) {
                        case 0:
                            return t = this.getPath(e.directory, e.path), [4, this.dbRequest("get", [t])];
                        case 1:
                            if (void 0 === (n = r.sent())) throw Error("File does not exist.");
                            return [2, {data: n.content}]
                    }
                })
            })
        }, n.prototype.writeFile = function (e) {
            return R(this, void 0, void 0, function () {
                var t, n, r, i, o, s, a, u;
                return C(this, function (c) {
                    switch (c.label) {
                        case 0:
                            return t = this.getPath(e.directory, e.path), n = e.data, [4, this.dbRequest("get", [t])];
                        case 1:
                            if ((r = c.sent()) && "directory" === r.type) throw"The supplied path is a directory.";
                            return i = t.substr(0, t.lastIndexOf("/")), [4, this.dbRequest("get", [i])];
                        case 2:
                            return void 0 !== c.sent() ? [3, 4] : -1 === (o = i.indexOf("/", 1)) ? [3, 4] : (s = i.substr(o), [4, this.mkdir({
                                path: s,
                                directory: e.directory,
                                createIntermediateDirectories: !0
                            })]);
                        case 3:
                            c.sent(), c.label = 4;
                        case 4:
                            return a = Date.now(), u = {
                                path: t,
                                folder: i,
                                type: "file",
                                size: n.length,
                                ctime: a,
                                mtime: a,
                                content: n
                            }, [4, this.dbRequest("put", [u])];
                        case 5:
                            return c.sent(), [2, {}]
                    }
                })
            })
        }, n.prototype.appendFile = function (e) {
            return R(this, void 0, void 0, function () {
                var t, n, r, i, o, s, a, u;
                return C(this, function (c) {
                    switch (c.label) {
                        case 0:
                            return t = this.getPath(e.directory, e.path), n = e.data, r = t.substr(0, t.lastIndexOf("/")), i = Date.now(), o = i, [4, this.dbRequest("get", [t])];
                        case 1:
                            if ((s = c.sent()) && "directory" === s.type) throw"The supplied path is a directory.";
                            return [4, this.dbRequest("get", [r])];
                        case 2:
                            return void 0 !== c.sent() ? [3, 4] : (a = r.substr(r.indexOf("/", 1)), [4, this.mkdir({
                                path: a,
                                directory: e.directory,
                                createIntermediateDirectories: !0
                            })]);
                        case 3:
                            c.sent(), c.label = 4;
                        case 4:
                            return void 0 !== s && (n = s.content + n, o = s.ctime), u = {
                                path: t,
                                folder: r,
                                type: "file",
                                size: n.length,
                                ctime: o,
                                mtime: i,
                                content: n
                            }, [4, this.dbRequest("put", [u])];
                        case 5:
                            return c.sent(), [2, {}]
                    }
                })
            })
        }, n.prototype.deleteFile = function (e) {
            return R(this, void 0, void 0, function () {
                var t;
                return C(this, function (n) {
                    switch (n.label) {
                        case 0:
                            return t = this.getPath(e.directory, e.path), [4, this.dbRequest("get", [t])];
                        case 1:
                            if (void 0 === n.sent()) throw Error("File does not exist.");
                            return [4, this.dbIndexRequest("by_folder", "getAllKeys", [IDBKeyRange.only(t)])];
                        case 2:
                            if (0 !== n.sent().length) throw Error("Folder is not empty.");
                            return [4, this.dbRequest("delete", [t])];
                        case 3:
                            return n.sent(), [2, {}]
                    }
                })
            })
        }, n.prototype.mkdir = function (e) {
            return R(this, void 0, void 0, function () {
                var t, n, r, i, o, s, a, u, c;
                return C(this, function (l) {
                    switch (l.label) {
                        case 0:
                            return t = this.getPath(e.directory, e.path), n = e.createIntermediateDirectories, r = t.substr(0, t.lastIndexOf("/")), i = (t.match(/\//g) || []).length, [4, this.dbRequest("get", [r])];
                        case 1:
                            return o = l.sent(), [4, this.dbRequest("get", [t])];
                        case 2:
                            if (s = l.sent(), 1 === i) throw Error("Cannot create Root directory");
                            if (void 0 !== s) throw Error("Current directory does already exist.");
                            if (!n && 2 !== i && void 0 === o) throw Error("Parent directory must exist");
                            return n && 2 !== i && void 0 === o ? (a = r.substr(r.indexOf("/", 1)), [4, this.mkdir({
                                path: a,
                                directory: e.directory,
                                createIntermediateDirectories: n
                            })]) : [3, 4];
                        case 3:
                            l.sent(), l.label = 4;
                        case 4:
                            return u = Date.now(), c = {
                                path: t,
                                folder: r,
                                type: "directory",
                                size: 0,
                                ctime: u,
                                mtime: u
                            }, [4, this.dbRequest("put", [c])];
                        case 5:
                            return l.sent(), [2, {}]
                    }
                })
            })
        }, n.prototype.rmdir = function (e) {
            return R(this, void 0, void 0, function () {
                var t, n, r, i, o, s, a, u, c, l;
                return C(this, function (d) {
                    switch (d.label) {
                        case 0:
                            return t = e.path, n = e.directory, r = e.recursive, i = this.getPath(n, t), [4, this.dbRequest("get", [i])];
                        case 1:
                            if (void 0 === (o = d.sent())) throw Error("Folder does not exist.");
                            if ("directory" !== o.type) throw Error("Requested path is not a directory");
                            return [4, this.readdir({path: t, directory: n})];
                        case 2:
                            if (0 !== (s = d.sent()).files.length && !r) throw Error("Folder is not empty");
                            a = 0, u = s.files, d.label = 3;
                        case 3:
                            return a < u.length ? (c = u[a], l = t + "/" + c, [4, this.stat({
                                path: l,
                                directory: n
                            })]) : [3, 9];
                        case 4:
                            return "file" !== d.sent().type ? [3, 6] : [4, this.deleteFile({path: l, directory: n})];
                        case 5:
                            return d.sent(), [3, 8];
                        case 6:
                            return [4, this.rmdir({path: l, directory: n, recursive: r})];
                        case 7:
                            d.sent(), d.label = 8;
                        case 8:
                            return a++, [3, 3];
                        case 9:
                            return [4, this.dbRequest("delete", [i])];
                        case 10:
                            return d.sent(), [2, {}]
                    }
                })
            })
        }, n.prototype.readdir = function (e) {
            return R(this, void 0, void 0, function () {
                var t, n, r;
                return C(this, function (i) {
                    switch (i.label) {
                        case 0:
                            return t = this.getPath(e.directory, e.path), [4, this.dbRequest("get", [t])];
                        case 1:
                            if (n = i.sent(), "" !== e.path && void 0 === n) throw Error("Folder does not exist.");
                            return [4, this.dbIndexRequest("by_folder", "getAllKeys", [IDBKeyRange.only(t)])];
                        case 2:
                            return r = i.sent(), [2, {
                                files: r.map(function (e) {
                                    return e.substring(t.length + 1)
                                })
                            }]
                    }
                })
            })
        }, n.prototype.getUri = function (e) {
            return R(this, void 0, void 0, function () {
                var t, n;
                return C(this, function (r) {
                    switch (r.label) {
                        case 0:
                            return t = this.getPath(e.directory, e.path), [4, this.dbRequest("get", [t])];
                        case 1:
                            return void 0 !== (n = r.sent()) ? [3, 3] : [4, this.dbRequest("get", [t + "/"])];
                        case 2:
                            n = r.sent(), r.label = 3;
                        case 3:
                            if (void 0 === n) throw Error("Entry does not exist.");
                            return [2, {uri: n.path}]
                    }
                })
            })
        }, n.prototype.stat = function (e) {
            return R(this, void 0, void 0, function () {
                var t, n;
                return C(this, function (r) {
                    switch (r.label) {
                        case 0:
                            return t = this.getPath(e.directory, e.path), [4, this.dbRequest("get", [t])];
                        case 1:
                            return void 0 !== (n = r.sent()) ? [3, 3] : [4, this.dbRequest("get", [t + "/"])];
                        case 2:
                            n = r.sent(), r.label = 3;
                        case 3:
                            if (void 0 === n) throw Error("Entry does not exist.");
                            return [2, {type: n.type, size: n.size, ctime: n.ctime, mtime: n.mtime, uri: n.path}]
                    }
                })
            })
        }, n.prototype.rename = function (e) {
            return R(this, void 0, void 0, function () {
                return C(this, function (t) {
                    return [2, this._copy(e, !0)]
                })
            })
        }, n.prototype.copy = function (e) {
            return R(this, void 0, void 0, function () {
                return C(this, function (t) {
                    return [2, this._copy(e, !1)]
                })
            })
        }, n.prototype._copy = function (e, t) {
            return void 0 === t && (t = !1), R(this, void 0, void 0, function () {
                var n, r, i, o, s, a, u, c, l, d, p, h, f, y, m, v, g = this;
                return C(this, function (w) {
                    switch (w.label) {
                        case 0:
                            if (n = e.to, r = e.from, i = e.directory, o = e.toDirectory, !n || !r) throw Error("Both to and from must be provided");
                            if (o || (o = i), s = this.getPath(i, r), a = this.getPath(o, n), s === a) return [2, {}];
                            if (a.startsWith(s)) throw Error("To path cannot contain the from path");
                            w.label = 1;
                        case 1:
                            return w.trys.push([1, 3, , 6]), [4, this.stat({path: n, directory: o})];
                        case 2:
                            return u = w.sent(), [3, 6];
                        case 3:
                            return w.sent(), (c = n.split("/")).pop(), l = c.join("/"), c.length > 0 ? [4, this.stat({
                                path: l,
                                directory: o
                            })] : [3, 5];
                        case 4:
                            if ("directory" !== w.sent().type) throw new Error("Parent directory of the to path is a file");
                            w.label = 5;
                        case 5:
                            return [3, 6];
                        case 6:
                            if (u && "directory" === u.type) throw new Error("Cannot overwrite a directory with a file");
                            return [4, this.stat({path: r, directory: i})];
                        case 7:
                            switch (d = w.sent(), p = function (e, t, n) {
                                return R(g, void 0, void 0, function () {
                                    var r, i;
                                    return C(this, function (s) {
                                        switch (s.label) {
                                            case 0:
                                                return r = this.getPath(o, e), [4, this.dbRequest("get", [r])];
                                            case 1:
                                                return (i = s.sent()).ctime = t, i.mtime = n, [4, this.dbRequest("put", [i])];
                                            case 2:
                                                return s.sent(), [2]
                                        }
                                    })
                                })
                            }, d.type) {
                                case"file":
                                    return [3, 8];
                                case"directory":
                                    return [3, 15]
                            }
                            return [3, 28];
                        case 8:
                            return [4, this.readFile({path: r, directory: i})];
                        case 9:
                            return h = w.sent(), t ? [4, this.deleteFile({path: r, directory: i})] : [3, 11];
                        case 10:
                            w.sent(), w.label = 11;
                        case 11:
                            return [4, this.writeFile({path: n, directory: o, data: h.data})];
                        case 12:
                            return w.sent(), t ? [4, p(n, d.ctime, d.mtime)] : [3, 14];
                        case 13:
                            w.sent(), w.label = 14;
                        case 14:
                            return [2, {}];
                        case 15:
                            if (u) throw Error("Cannot move a directory over an existing object");
                            w.label = 16;
                        case 16:
                            return w.trys.push([16, 20, , 21]), [4, this.mkdir({
                                path: n,
                                directory: o,
                                createIntermediateDirectories: !1
                            })];
                        case 17:
                            return w.sent(), t ? [4, p(n, d.ctime, d.mtime)] : [3, 19];
                        case 18:
                            w.sent(), w.label = 19;
                        case 19:
                            return [3, 21];
                        case 20:
                            return w.sent(), [3, 21];
                        case 21:
                            return [4, this.readdir({path: r, directory: i})];
                        case 22:
                            f = w.sent().files, y = 0, m = f, w.label = 23;
                        case 23:
                            return y < m.length ? (v = m[y], [4, this._copy({
                                from: r + "/" + v,
                                to: n + "/" + v,
                                directory: i,
                                toDirectory: o
                            }, t)]) : [3, 26];
                        case 24:
                            w.sent(), w.label = 25;
                        case 25:
                            return y++, [3, 23];
                        case 26:
                            return t ? [4, this.rmdir({path: r, directory: i})] : [3, 28];
                        case 27:
                            w.sent(), w.label = 28;
                        case 28:
                            return [2, {}]
                    }
                })
            })
        }, n._debug = !0, n
    }(b), q = new k, U = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return t.forEach(function (t) {
            if (t && "object" == typeof t) for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        }), e
    }, K = function (e) {
        function t() {
            return e.call(this, {name: "Geolocation", platforms: ["web"]}) || this
        }

        return S(t, e), t.prototype.getCurrentPosition = function (e) {
            var t = this;
            return new Promise(function (n, r) {
                return t.requestPermissions().then(function (t) {
                    window.navigator.geolocation.getCurrentPosition(function (e) {
                        n(e)
                    }, function (e) {
                        r(e)
                    }, U({enableHighAccuracy: !0, timeout: 1e4, maximumAge: 0}, e))
                })
            })
        }, t.prototype.watchPosition = function (e, t) {
            return "" + window.navigator.geolocation.watchPosition(function (e) {
                t(e)
            }, function (e) {
                t(null, e)
            }, U({enableHighAccuracy: !0, timeout: 1e4, maximumAge: 0}, e))
        }, t.prototype.clearWatch = function (e) {
            return window.navigator.geolocation.clearWatch(parseInt(e.id, 10)), Promise.resolve()
        }, t
    }(b), j = new K, M = function (e) {
        function t() {
            return e.call(this, {name: "Device", platforms: ["web"]}) || this
        }

        return S(t, e), t.prototype.getInfo = function () {
            return R(this, void 0, void 0, function () {
                var e, t, n;
                return C(this, function (r) {
                    switch (r.label) {
                        case 0:
                            e = navigator.userAgent, t = this.parseUa(e), n = {}, r.label = 1;
                        case 1:
                            return r.trys.push([1, 3, , 4]), [4, navigator.getBattery()];
                        case 2:
                            return n = r.sent(), [3, 4];
                        case 3:
                            return r.sent(), [3, 4];
                        case 4:
                            return [2, Promise.resolve({
                                model: t.model,
                                platform: "web",
                                appVersion: "",
                                osVersion: t.osVersion,
                                manufacturer: navigator.vendor,
                                isVirtual: !1,
                                batteryLevel: n.level,
                                isCharging: n.charging,
                                uuid: this.getUid()
                            })]
                    }
                })
            })
        }, t.prototype.getLanguageCode = function () {
            return R(this, void 0, void 0, function () {
                return C(this, function (e) {
                    return [2, {value: navigator.language}]
                })
            })
        }, t.prototype.parseUa = function (e) {
            var t = {}, n = e.indexOf("(") + 1, r = e.indexOf(") AppleWebKit");
            -1 !== e.indexOf(") Gecko") && (r = e.indexOf(") Gecko"));
            var i = e.substring(n, r);
            if (-1 !== e.indexOf("Android")) t.model = i.replace("; wv", "").split("; ").pop().split(" Build")[0], t.osVersion = i.split("; ")[1]; else if (t.model = i.split("; ")[0], navigator.oscpu) t.osVersion = navigator.oscpu; else if (-1 !== e.indexOf("Windows")) t.osVersion = i; else {
                var o = i.split("; ").pop().replace(" like Mac OS X", "").split(" ");
                t.osVersion = o[o.length - 1].replace(/_/g, ".")
            }
            return t
        }, t.prototype.getUid = function () {
            var e = window.localStorage.getItem("_capuid");
            return e || (e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                var t = 16 * Math.random() | 0;
                return ("x" == e ? t : 3 & t | 8).toString(16)
            }), window.localStorage.setItem("_capuid", e), e)
        }, t
    }(b), B = new M, V = function (e) {
        function t() {
            var t = e.call(this, {name: "LocalNotifications", platforms: ["web"]}) || this;
            return t.pending = [], t
        }

        return S(t, e), t.prototype.sendPending = function () {
            var e = this, t = [], n = +new Date;
            this.pending.forEach(function (r) {
                r.schedule && r.schedule.at && +r.schedule.at <= n && (e.buildNotification(r), t.push(r))
            }), console.log("Sent pending, removing", t), this.pending = this.pending.filter(function (e) {
                return !t.find(function (t) {
                    return t === e
                })
            })
        }, t.prototype.sendNotification = function (e) {
            var t = this, n = e;
            if (e.schedule && e.schedule.at) {
                var r = +e.schedule.at - +new Date;
                return this.pending.push(n), void setTimeout(function () {
                    t.sendPending()
                }, r)
            }
            this.buildNotification(e)
        }, t.prototype.buildNotification = function (e) {
            var t = e;
            return new Notification(t.title, {body: t.body})
        }, t.prototype.schedule = function (e) {
            var t = this, n = [];
            return e.notifications.forEach(function (e) {
                n.push(t.sendNotification(e))
            }), Promise.resolve({
                notifications: n.map(function (e) {
                    return {id: ""}
                })
            })
        }, t.prototype.getPending = function () {
            return Promise.resolve({
                notifications: this.pending.map(function (e) {
                    return {id: "" + e.id}
                })
            })
        }, t.prototype.registerActionTypes = function (e) {
            throw new Error("Method not implemented.")
        }, t.prototype.cancel = function (e) {
            return console.log("Cancel these", e), this.pending = this.pending.filter(function (t) {
                return !e.notifications.find(function (e) {
                    return e.id === "" + t.id
                })
            }), Promise.resolve()
        }, t.prototype.areEnabled = function () {
            throw new Error("Method not implemented.")
        }, t.prototype.requestPermissions = function () {
            return new Promise(function (e, t) {
                Notification.requestPermission().then(function (n) {
                    "denied" !== n && "default" !== n ? e({results: [n]}) : t(n)
                }).catch(function (e) {
                    t(e)
                })
            })
        }, t
    }(b), G = new V, H = function (e) {
        function t() {
            return e.call(this, {name: "Share", platforms: ["web"]}) || this
        }

        return S(t, e), t.prototype.share = function (e) {
            return navigator.share ? navigator.share({
                title: e.title,
                text: e.text,
                url: e.url
            }) : Promise.reject("Web Share API not available")
        }, t
    }(b), z = new H, X = function (e) {
        function t() {
            return e.call(this, {name: "Modals", platforms: ["web"]}) || this
        }

        return S(t, e), t.prototype.alert = function (e) {
            return R(this, void 0, void 0, function () {
                return C(this, function (t) {
                    return window.alert(e.message), [2, Promise.resolve()]
                })
            })
        }, t.prototype.prompt = function (e) {
            return R(this, void 0, void 0, function () {
                var t;
                return C(this, function (n) {
                    return t = window.prompt(e.message, e.inputPlaceholder || ""), [2, Promise.resolve({
                        value: t,
                        cancelled: null === t
                    })]
                })
            })
        }, t.prototype.confirm = function (e) {
            return R(this, void 0, void 0, function () {
                var t;
                return C(this, function (n) {
                    return t = window.confirm(e.message), [2, Promise.resolve({value: t})]
                })
            })
        }, t.prototype.showActions = function (e) {
            return R(this, void 0, void 0, function () {
                var t = this;
                return C(this, function (n) {
                    return [2, new Promise(function (n, r) {
                        return R(t, void 0, void 0, function () {
                            var t, r;
                            return C(this, function (i) {
                                switch (i.label) {
                                    case 0:
                                        return (t = document.querySelector("ion-action-sheet-controller")) || (t = document.createElement("ion-action-sheet-controller"), document.body.appendChild(t)), [4, t.componentOnReady()];
                                    case 1:
                                        return i.sent(), r = e.options.map(function (e, t) {
                                            return {
                                                text: e.title,
                                                role: e.style && e.style.toLowerCase() || "",
                                                icon: e.icon || "",
                                                handler: function () {
                                                    n({index: t})
                                                }
                                            }
                                        }), [4, t.create({title: e.title, buttons: r})];
                                    case 2:
                                        return [4, i.sent().present()];
                                    case 3:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    })]
                })
            })
        }, t
    }(b), Y = new X, $ = function (e) {
        function t() {
            var t = e.call(this, {name: "Motion"}) || this;
            return t.registerWindowListener("devicemotion", "accel"), t.registerWindowListener("deviceorientation", "orientation"), t
        }

        return S(t, e), t
    }(b), J = new $, Q = function (e) {
        function t() {
            var t = e.call(this, {name: "Network", platforms: ["web"]}) || this;
            return t.listenerFunction = null, t
        }

        return S(t, e), t.prototype.getStatus = function () {
            return new Promise(function (e, t) {
                if (window.navigator) {
                    var n = window.navigator.onLine,
                        r = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection,
                        i = r ? r.type || r.effectiveType : "wifi";
                    e({connected: n, connectionType: n ? i : "none"})
                } else t("Network info not available")
            })
        }, t.prototype.addListener = function (e, t) {
            var n = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection,
                r = n ? n.type || n.effectiveType : "wifi", i = t.bind(this, {connected: !0, connectionType: r}),
                o = t.bind(this, {connected: !1, connectionType: "none"});
            if (0 === e.localeCompare("networkStatusChange")) return window.addEventListener("online", i), window.addEventListener("offline", o), {
                remove: function () {
                    window.removeEventListener("online", i), window.removeEventListener("offline", o)
                }
            }
        }, t
    }(b), Z = new Q, ee = function (t) {
        function n() {
            return t.call(this, {name: "Permissions"}) || this
        }

        return S(n, t), n.prototype.query = function (t) {
            return R(this, void 0, void 0, function () {
                var n, r;
                return C(this, function (i) {
                    switch (i.label) {
                        case 0:
                            return (n = window.navigator).permissions ? (r = t.name === e.PermissionType.Photos ? "camera" : t.name, [4, n.permissions.query({name: r})]) : [2, Promise.reject("This browser does not support the Permissions API")];
                        case 1:
                            return [2, {state: i.sent().state}]
                    }
                })
            })
        }, n
    }(b), te = new ee, ne = function (e) {
        function t() {
            return e.call(this, {name: "SplashScreen", platforms: ["web"]}) || this
        }

        return S(t, e), t.prototype.show = function (e, t) {
            return Promise.resolve()
        }, t.prototype.hide = function (e, t) {
            return Promise.resolve()
        }, t
    }(b), re = new ne, ie = function (e) {
        function t() {
            var t = e.call(this, {name: "Storage", platforms: ["web"]}) || this;
            return t.KEY_PREFIX = "_cap_", t
        }

        return S(t, e), t.prototype.get = function (e) {
            var t = this;
            return new Promise(function (n, r) {
                n({value: window.localStorage.getItem(t.makeKey(e.key))})
            })
        }, t.prototype.set = function (e) {
            var t = this;
            return new Promise(function (n, r) {
                window.localStorage.setItem(t.makeKey(e.key), e.value), n()
            })
        }, t.prototype.remove = function (e) {
            var t = this;
            return new Promise(function (n, r) {
                window.localStorage.removeItem(t.makeKey(e.key)), n()
            })
        }, t.prototype.keys = function () {
            var e = this;
            return new Promise(function (t, n) {
                t({
                    keys: Object.keys(localStorage).filter(function (t) {
                        return e.isKey(t)
                    }).map(function (t) {
                        return e.getKey(t)
                    })
                })
            })
        }, t.prototype.clear = function () {
            var e = this;
            return new Promise(function (t, n) {
                Object.keys(localStorage).filter(function (t) {
                    return e.isKey(t)
                }).forEach(function (e) {
                    return window.localStorage.removeItem(e)
                }), t()
            })
        }, t.prototype.makeKey = function (e) {
            return this.KEY_PREFIX + e
        }, t.prototype.isKey = function (e) {
            return 0 === e.indexOf(this.KEY_PREFIX)
        }, t.prototype.getKey = function (e) {
            return e.substr(this.KEY_PREFIX.length)
        }, t
    }(b), oe = new ie, se = function (e) {
        function t() {
            return e.call(this, {name: "Toast", platforms: ["web"]}) || this
        }

        return S(t, e), t.prototype.show = function (e) {
            return R(this, void 0, void 0, function () {
                var t, n;
                return C(this, function (r) {
                    return t = 3e3, e.duration && (t = "long" === e.duration ? 5e3 : 3e3), (n = document.createElement("pwa-toast")).duration = t, n.message = e.text, document.body.appendChild(n), [2]
                })
            })
        }, t
    }(b), ae = new se;
    P(v);
    return e.Accessibility = D, e.AccessibilityPluginWeb = A, e.App = L, e.AppPluginWeb = T, e.Browser = O, e.BrowserPluginWeb = I, e.Camera = _, e.CameraPluginWeb = F, e.Capacitor = m, e.Clipboard = W, e.ClipboardPluginWeb = N, e.Device = B, e.DevicePluginWeb = M, e.Filesystem = q, e.FilesystemPluginWeb = k, e.Geolocation = j, e.GeolocationPluginWeb = K, e.LocalNotifications = G, e.LocalNotificationsPluginWeb = V, e.Modals = Y, e.ModalsPluginWeb = X, e.Motion = J, e.MotionPluginWeb = $, e.Network = Z, e.NetworkPluginWeb = Q, e.Permissions = te, e.PermissionsPluginWeb = ee, e.Plugins = v, e.Share = z, e.SharePluginWeb = H, e.SplashScreen = re, e.SplashScreenPluginWeb = ne, e.Storage = oe, e.StoragePluginWeb = ie, e.Toast = ae, e.ToastPluginWeb = se, e.WebPlugin = b, e.WebPluginRegistry = g, e.WebPlugins = w, e.mergeWebPlugin = E, e.mergeWebPlugins = P, e.registerWebPlugin = function (e) {
        E(v, e)
    }, e
}({});
//# sourceMappingURL=capacitor.js.map
