'use strict';
(function(window, k) {
  
  /** @type {string} */
  var LIBVERSION = "0.7.19";
  /** @type {string} */
  var EMPTY = "";
  /** @type {string} */
  var AS_IS = "?";
  /** @type {string} */
  var FUNC_TYPE = "function";
  /** @type {string} */
  var UNDEF_TYPE = "undefined";
  /** @type {string} */
  var c = "object";
  /** @type {string} */
  var type = "string";
  /** @type {string} */
  var MAJOR = "major";
  /** @type {string} */
  var MODEL = "model";
  /** @type {string} */
  var NAME = "name";
  /** @type {string} */
  var TYPE = "type";
  /** @type {string} */
  var VENDOR = "vendor";
  /** @type {string} */
  var VERSION = "version";
  /** @type {string} */
  var ARCHITECTURE = "architecture";
  /** @type {string} */
  var CONSOLE = "console";
  /** @type {string} */
  var MOBILE = "mobile";
  /** @type {string} */
  var TABLET = "tablet";
  /** @type {string} */
  var SMARTTV = "smarttv";
  /** @type {string} */
  var WEARABLE = "wearable";
  /** @type {string} */
  var EMBEDDED = "embedded";
  var util = {
    extend : function(obj, extensions) {
      var toObj = {};
      var i;
      for (i in obj) {
        if (extensions[i] && extensions[i].length % 2 === 0) {
          toObj[i] = extensions[i].concat(obj[i]);
        } else {
          toObj[i] = obj[i];
        }
      }
      return toObj;
    },
    has : function(header, i) {
      if (typeof header === "string") {
        return i.toLowerCase().indexOf(header.toLowerCase()) !== -1;
      } else {
        return false;
      }
    },
    lowerize : function(str) {
      return str.toLowerCase();
    },
    major : function(v) {
      return typeof v === type ? v.replace(/[^\d\.]/g, "").split(".")[0] : k;
    },
    trim : function(n) {
      return n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    }
  };
  // mapper.rgx.call(browser, ua, rgxmap.browser);
  var mapper = {
    rgx : function(ua, arrays) {
      /** @type {number} */
      var i = 0;
      var j;
      var idx;
      var index;
      var a;
      var matches;
      var r;
      for (; i < arrays.length && !matches;) {
        
        var regex = arrays[i];
        var array = arrays[i + 1];
        /** @type {number} */
        j = idx = 0;
        for (; j < regex.length && !matches;) {
          matches = regex[j++].exec(ua);
          if (!!matches) {
            /** @type {number} */
            index = 0;
            for (; index < array.length; index++) {
              r = matches[++idx];
              a = array[index];
              if (typeof a === "object" && a.length > 0) {
                if (a.length == 2) {
                  if (typeof a[1] == "function") {
                    this[a[0]] = a[1].call(this, r);
                  } else {
                    this[a[0]] = a[1];
                  }
                } else {
                  if (a.length == 3) {
                    if (typeof a[1] === "function" && !(a[1].exec && a[1].test)) {
                      this[a[0]] = r ? a[1].call(this, r, a[2]) : k;
                    } else {
                      this[a[0]] = r ? r.replace(a[1], a[2]) : k;
                    }
                  } else {
                    if (a.length == 4) {
                      this[a[0]] = r ? a[3].call(this, r.replace(a[1], a[2])) : k;
                    }
                  }
                }
              } else {
                this[a] = r ? r : k;
              }
            }
          }
        }
        /** @type {number} */
        i = i + 2;
      }
    },
    str : function(obj, a) {
      var v;
      for (v in a) {
        if (typeof a[v] === c && a[v].length > 0) {
          /** @type {number} */
          var i = 0;
          for (; i < a[v].length; i++) {
            if (util.has(a[v][i], obj)) {
              return v === AS_IS ? k : v;
            }
          }
        } else {
          if (util.has(a[v], obj)) {
            return v === AS_IS ? k : v;
          }
        }
      }
      return obj;
    }
  };
  var maps = {
    browser : { //浏览器
      oldsafari : {
        version : {
          "1.0" : "/8",
          "1.2" : "/1",
          "1.3" : "/3",
          "2.0" : "/412",
          "2.0.2" : "/416",
          "2.0.3" : "/417",
          "2.0.4" : "/419",
          "?" : "/"
        }
      }
    },
    device : {  //设备
      amazon : {
        model : {
          "Fire Phone" : ["SD", "KF"]
        }
      },
      sprint : {
        model : {
          "Evo Shift 4G" : "7373KT"
        },
        vendor : {
          HTC : "APA",
          Sprint : "Sprint"
        }
      }
    },
    os : {
      windows : {
        version : {
          ME : "4.90",
          "NT 3.11" : "NT3.51",
          "NT 4.0" : "NT4.0",
          2E3 : "NT 5.0",
          XP : ["NT 5.1", "NT 5.2"],
          Vista : "NT 6.0",
          7 : "NT 6.1",
          8 : "NT 6.2",
          "8.1" : "NT 6.3",
          10 : ["NT 6.4", "NT 10.0"],
          RT : "ARM"
        }
      }
    }
  };
  var regexes = {
    browser : [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [NAME, VERSION], [/(opios)[\/\s]+([\w\.]+)/i], [[NAME, "Opera Mini"], VERSION], [/\s(opr)\/([\w\.]+)/i], [[NAME, "Opera"], VERSION], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i], 
    [NAME, VERSION], [/(konqueror)\/([\w\.]+)/i], [[NAME, "Konqueror"], VERSION], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[NAME, "IE"], VERSION], [/(edge|edgios|edga)\/((\d+)?[\w\.]+)/i], [[NAME, "Edge"], VERSION], [/(yabrowser)\/([\w\.]+)/i], [[NAME, "Yandex"], VERSION], [/(puffin)\/([\w\.]+)/i], [[NAME, "Puffin"], VERSION], [/(focus)\/([\w\.]+)/i], [[NAME, "Firefox Focus"], VERSION], [/(opt)\/([\w\.]+)/i], [[NAME, "Opera Touch"], VERSION], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], 
    [[NAME, "UCBrowser"], VERSION], [/(comodo_dragon)\/([\w\.]+)/i], [[NAME, /_/g, " "], VERSION], [/(micromessenger)\/([\w\.]+)/i], [[NAME, "WeChat"], VERSION], [/(brave)\/([\w\.]+)/i], [[NAME, "Brave"], VERSION], [/(qqbrowserlite)\/([\w\.]+)/i], [NAME, VERSION], [/(QQ)\/([\d\.]+)/i], [NAME, VERSION], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i], [NAME, VERSION], [/(BIDUBrowser)[\/\s]?([\w\.]+)/i], [NAME, VERSION], [/(2345Explorer)[\/\s]?([\w\.]+)/i], [NAME, VERSION], [/(MetaSr)[\/\s]?([\w\.]+)/i], [NAME], 
    [/(LBBROWSER)/i], [NAME], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [VERSION, [NAME, "MIUI Browser"]], [/;fbav\/([\w\.]+);/i], [VERSION, [NAME, "Facebook"]], [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i], [NAME, VERSION], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [VERSION, [NAME, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[NAME, /(.+)/, "$1 WebView"], VERSION], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[NAME, /(.+(?:g|us))(.+)/, "$1 $2"], VERSION], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], 
    [VERSION, [NAME, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [NAME, VERSION], [/(dolfin)\/([\w\.]+)/i], [[NAME, "Dolphin"], VERSION], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[NAME, "Chrome"], VERSION], [/(coast)\/([\w\.]+)/i], [[NAME, "Opera Coast"], VERSION], [/fxios\/([\w\.-]+)/i], [VERSION, [NAME, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [VERSION, [NAME, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], 
    [VERSION, NAME], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [[NAME, "GSA"], VERSION], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [/(webkit|khtml)\/([\w\.]+)/i], [NAME, VERSION], [/(navigator|netscape)\/([\w\.-]+)/i], [[NAME, "Netscape"], VERSION], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, 
    /(mozilla)\/([\w\.]+).+rv:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [NAME, VERSION]],
    cpu : [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[ARCHITECTURE, "amd64"]], [/(ia32(?=;))/i], [[ARCHITECTURE, util.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[ARCHITECTURE, "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [[ARCHITECTURE, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[ARCHITECTURE, /ower/, "", util.lowerize]], [/(sun4\w)[;\)]/i], [[ARCHITECTURE, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], 
    [[ARCHITECTURE, util.lowerize]]],
    device : [[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i], [MODEL, VENDOR, [TYPE, TABLET]], [/applecoremedia\/[\w\.]+ \((ipad)/], [MODEL, [VENDOR, "Apple"], [TYPE, TABLET]], [/(apple\s{0,1}tv)/i], [[MODEL, "Apple TV"], [VENDOR, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [VENDOR, MODEL, [TYPE, TABLET]], [/(kf[A-z]+)\sbuild\/.+silk\//i], [MODEL, [VENDOR, "Amazon"], [TYPE, 
    TABLET]], [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, "Amazon"], [TYPE, MOBILE]], [/android.+aft([bms])\sbuild/i], [MODEL, [VENDOR, "Amazon"], [TYPE, SMARTTV]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [MODEL, VENDOR, [TYPE, MOBILE]], [/\((ip[honed|\s\w*]+);/i], [MODEL, [VENDOR, "Apple"], [TYPE, MOBILE]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, 
    /(asus)-?(\w+)/i], [VENDOR, MODEL, [TYPE, MOBILE]], [/\(bb10;\s(\w+)/i], [MODEL, [VENDOR, "BlackBerry"], [TYPE, MOBILE]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i], [MODEL, [VENDOR, "Asus"], [TYPE, TABLET]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[VENDOR, "Sony"], [MODEL, "Xperia Tablet"], [TYPE, TABLET]], [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [MODEL, [VENDOR, "Sony"], [TYPE, MOBILE]], 
    [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [VENDOR, MODEL, [TYPE, CONSOLE]], [/android.+;\s(shield)\sbuild/i], [MODEL, [VENDOR, "Nvidia"], [TYPE, CONSOLE]], [/(playstation\s[34portablevi]+)/i], [MODEL, [VENDOR, "Sony"], [TYPE, CONSOLE]], [/(sprint\s(\w+))/i], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [VENDOR, MODEL, [TYPE, TABLET]], [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, 
    /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [VENDOR, [MODEL, /_/g, " "], [TYPE, MOBILE]], [/(nexus\s9)/i], [MODEL, [VENDOR, "HTC"], [TYPE, TABLET]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i], [MODEL, [VENDOR, "Huawei"], [TYPE, MOBILE]], [/(microsoft);\s(lumia[\s\w]+)/i], [VENDOR, MODEL, [TYPE, MOBILE]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [MODEL, [VENDOR, "Microsoft"], [TYPE, CONSOLE]], [/(kin\.[onetw]{3})/i], [[MODEL, /\./g, " "], [VENDOR, 
    "Microsoft"], [TYPE, MOBILE]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [MODEL, [VENDOR, "Motorola"], [TYPE, MOBILE]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [MODEL, [VENDOR, "Motorola"], [TYPE, TABLET]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [/hbbtv.+maple;(\d+)/i], [[MODEL, /^/, "SmartTV"], [VENDOR, 
    "Samsung"], [TYPE, SMARTTV]], [/\(dtv[\);].+(aquos)/i], [MODEL, [VENDOR, "Sharp"], [TYPE, SMARTTV]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[VENDOR, "Samsung"], MODEL, [TYPE, TABLET]], [/smart-tv.+(samsung)/i], [VENDOR, [TYPE, SMARTTV], MODEL], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i], [[VENDOR, "Samsung"], MODEL, [TYPE, MOBILE]], [/sie-(\w*)/i], [MODEL, [VENDOR, "Siemens"], 
    [TYPE, MOBILE]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i], [[VENDOR, "Nokia"], MODEL, [TYPE, MOBILE]], [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i], [MODEL, [VENDOR, "Acer"], [TYPE, TABLET]], [/android.+([vl]k\-?\d{3})\s+build/i], [MODEL, [VENDOR, "LG"], [TYPE, TABLET]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[VENDOR, "LG"], MODEL, [TYPE, TABLET]], [/(lg) netcast\.tv/i], [VENDOR, MODEL, [TYPE, SMARTTV]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i], 
    [MODEL, [VENDOR, "LG"], [TYPE, MOBILE]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [MODEL, [VENDOR, "Lenovo"], [TYPE, TABLET]], [/linux;.+((jolla));/i], [VENDOR, MODEL, [TYPE, MOBILE]], [/((pebble))app\/[\d\.]+\s/i], [VENDOR, MODEL, [TYPE, WEARABLE]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [VENDOR, MODEL, [TYPE, MOBILE]], [/crkey/i], [[MODEL, "Chromecast"], [VENDOR, "Google"]], [/android.+;\s(glass)\s\d/i], [MODEL, [VENDOR, "Google"], [TYPE, WEARABLE]], [/android.+;\s(pixel c)[\s)]/i], [MODEL, 
    [VENDOR, "Google"], [TYPE, TABLET]], [/android.+;\s(pixel( [23])?( xl)?)\s/i], [MODEL, [VENDOR, "Google"], [TYPE, MOBILE]], [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i], [[MODEL, /_/g, " "], [VENDOR, "Xiaomi"], [TYPE, MOBILE]], [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i], [[MODEL, 
    /_/g, " "], [VENDOR, "Xiaomi"], [TYPE, TABLET]], [/android.+;\s(m[1-5]\snote)\sbuild/i], [MODEL, [VENDOR, "Meizu"], [TYPE, TABLET]], [/(mz)-([\w-]{2,})/i], [[VENDOR, "Meizu"], MODEL, [TYPE, MOBILE]], [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i], [MODEL, [VENDOR, "OnePlus"], [TYPE, MOBILE]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i], [MODEL, [VENDOR, "RCA"], [TYPE, TABLET]], [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i], [MODEL, [VENDOR, "Dell"], [TYPE, TABLET]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i], 
    [MODEL, [VENDOR, "Verizon"], [TYPE, TABLET]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i], [[VENDOR, "Barnes & Noble"], MODEL, [TYPE, TABLET]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i], [MODEL, [VENDOR, "NuVision"], [TYPE, TABLET]], [/android.+;\s(k88)\sbuild/i], [MODEL, [VENDOR, "ZTE"], [TYPE, TABLET]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i], [MODEL, [VENDOR, "Swiss"], [TYPE, MOBILE]], [/android.+[;\/]\s*(zur\d{3})\s+build/i], [MODEL, [VENDOR, "Swiss"], [TYPE, 
    TABLET]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i], [MODEL, [VENDOR, "Zeki"], [TYPE, TABLET]], [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i], [[VENDOR, "Dragon Touch"], MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i], [MODEL, [VENDOR, "Insignia"], [TYPE, TABLET]], [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i], [MODEL, [VENDOR, "NextBook"], [TYPE, TABLET]], [/android.+[;\/]\s*(Xtreme_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], 
    [[VENDOR, "Voice"], MODEL, [TYPE, MOBILE]], [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i], [[VENDOR, "LvTel"], MODEL, [TYPE, MOBILE]], [/android.+;\s(PH-1)\s/i], [MODEL, [VENDOR, "Essential"], [TYPE, MOBILE]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i], [MODEL, [VENDOR, "Envizen"], [TYPE, TABLET]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i], [VENDOR, MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i], [MODEL, [VENDOR, "MachSpeed"], [TYPE, 
    TABLET]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i], [VENDOR, MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*TU_(1491)\s+build/i], [MODEL, [VENDOR, "Rotor"], [TYPE, TABLET]], [/android.+(KS(.+))\s+build/i], [MODEL, [VENDOR, "Amazon"], [TYPE, TABLET]], [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i], [VENDOR, MODEL, [TYPE, TABLET]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[TYPE, util.lowerize], VENDOR, MODEL], [/(android[\w\.\s\-]{0,9});.+build/i], [MODEL, [VENDOR, 
    "Generic"]]],
    engine : [[/windows.+\sedge\/([\w\.]+)/i], [VERSION, [NAME, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)/i], [[NAME, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [NAME, VERSION], [/rv:([\w\.]{1,9}).+(gecko)/i], [VERSION, NAME]],
    os : [[/microsoft\s(windows)\s(vista|xp)/i], [NAME, VERSION], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[NAME, "Windows"], [VERSION, mapper.str, maps.os.windows.version]], [/\((bb)(10);/i], [[NAME, "BlackBerry"], VERSION], [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, 
    /linux;.+(sailfish);/i], [NAME, VERSION], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i], [[NAME, "Symbian"], VERSION], [/\((series40);/i], [NAME], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[NAME, "Firefox OS"], VERSION], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, 
    /(gnu)\s?([\w\.]*)/i], [NAME, VERSION], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[NAME, "Chromium OS"], VERSION], [/(sunos)\s?([\w\.\d]*)/i], [[NAME, "Solaris"], VERSION], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i], [NAME, VERSION], [/(haiku)\s(\w+)/i], [NAME, VERSION], [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i], [[VERSION, /_/g, "."], [NAME, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i], [[NAME, "Mac OS"], [VERSION, /_/g, "."]], 
    [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i], [NAME, VERSION]]
  };
  /**
   * @param {string} uastring
   * @param {string} extensions
   * @return {?}
   */
  var UAParser = function(uastring, extensions) {
    if (typeof uastring === "object") {
      /** @type {string} */
      extensions = uastring;
      /** @type {string} */
      uastring = k;
    }
    if (!(this instanceof UAParser)) {
      return (new UAParser(uastring, extensions)).getResult();
    }
    var ua = uastring || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : EMPTY);
    var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;
    /**
     * @return {?}
     */
    this.getBrowser = function() {
      var browser = {
        name : k,
        version : k
      };
      mapper.rgx.call(browser, ua, rgxmap.browser);
      browser.major = util.major(browser.version);
      
      return browser;
    };
    /**
     * @return {?}
     */
    this.getCPU = function() {
      var cpu = {
        architecture : k
      };
      mapper.rgx.call(cpu, ua, rgxmap.cpu);
      return cpu;
    };
    /**
     * @return {?}
     */
    this.getDevice = function() {
      var ret = {
        vendor : k,
        model : k,
        type : k
      };
      mapper.rgx.call(ret, ua, rgxmap.device);
      return ret;
    };
    /**
     * @return {?}
     */
    this.getEngine = function() {
      var newComponent = {
        name : k,
        version : k
      };
      mapper.rgx.call(newComponent, ua, rgxmap.engine);
      return newComponent;
    };
    /**
     * @return {?}
     */
    this.getOS = function() {
      var a = {
        name : k,
        version : k
      };
      mapper.rgx.call(a, ua, rgxmap.os);
      return a;
    };
    /**
     * @return {?}
     */
    this.getResult = function() {
      return {
        ua : this.getUA(),
        browser : this.getBrowser(),
        engine : this.getEngine(),
        os : this.getOS(),
        device : this.getDevice(),
        cpu : this.getCPU()
      };
    };
    /**
     * @return {?}
     */
    this.getUA = function() {
      return ua;
    };
    /**
     * @param {string} uastring
     * @return {?}
     */
    this.setUA = function(uastring) {
      /** @type {string} */
      ua = uastring;
      return this;
    };
    return this;
  };
  /** @type {string} */
  UAParser.VERSION = LIBVERSION;
  UAParser.BROWSER = {
    NAME : NAME,
    MAJOR : MAJOR,
    VERSION : VERSION
  };
  UAParser.CPU = {
    ARCHITECTURE : ARCHITECTURE
  };
  UAParser.DEVICE = {
    MODEL : MODEL,
    VENDOR : VENDOR,
    TYPE : TYPE,
    CONSOLE : CONSOLE,
    MOBILE : MOBILE,
    SMARTTV : SMARTTV,
    TABLET : TABLET,
    WEARABLE : WEARABLE,
    EMBEDDED : EMBEDDED
  };
  UAParser.ENGINE = {
    NAME : NAME,
    VERSION : VERSION
  };
  UAParser.OS = {
    NAME : NAME,
    VERSION : VERSION
  };
  if (typeof exports !== UNDEF_TYPE) {
    if (typeof module !== UNDEF_TYPE && module.exports) {
      /** @type {function(string, string): ?} */
      exports = module.exports = UAParser;
    }
    /** @type {function(string, string): ?} */
    exports.UAParser = UAParser;
  } else {
    if (typeof define === FUNC_TYPE && define.amd) {
      define(function() {
        return UAParser;
      });
    } else {
      if (window) {
        /** @type {function(string, string): ?} */
        window.UAParser = UAParser;
      }
    }
  }
  var $ = window && (window.jQuery || window.Zepto);
  if (typeof $ !== UNDEF_TYPE && !$.ua) {
    var parser = new UAParser;
    $.ua = parser.getResult();
    /**
     * @return {?}
     */
    $.ua.get = function() {
      return parser.getUA();
    };
    /**
     * @param {string} uastring
     * @return {undefined}
     */
    $.ua.set = function(uastring) {
      parser.setUA(uastring);
      var initVars = parser.getResult();
      var prop;
      for (prop in initVars) {
        $.ua[prop] = initVars[prop];
      }
    };
  }
})(typeof window === "object" ? window : this);
(function(factory) {
  /** @type {boolean} */
  var e = false;
  if (typeof define === "function" && define.amd) {
    define(factory);
    /** @type {boolean} */
    e = true;
  }
  if (typeof exports === "object") {
    module.exports = factory();
    /** @type {boolean} */
    e = true;
  }
  if (!e) {
    var OldCookies = window.Cookies;
    var jsonic = window.Cookies = factory();
    /**
     * @return {?}
     */
    jsonic.noConflict = function() {
      window.Cookies = OldCookies;
      return jsonic;
    };
  }
})(function() {
  /**
   * @return {?}
   */
  function extend() {
    /** @type {number} */
    var i = 0;
    var obj = {};
    for (; i < arguments.length; i++) {
      var source = arguments[i];
      var prop;
      for (prop in source) {
        obj[prop] = source[prop];
      }
    }
    return obj;
  }
  /**
   * @param {!Object} converter
   * @return {?}
   */
  function init(converter) {
    /**
     * @param {string} key
     * @param {string} value
     * @param {!Object} options
     * @return {?}
     */
    function api(key, value, options) {
      var result;
      if (typeof document === "undefined") {
        return;
      }
      if (arguments.length > 1) {
        options = extend({
          path : "/"
        }, api.defaults, options);
        if (typeof options.expires === "number") {
          /** @type {!Date} */
          var d = new Date;
          d.setMilliseconds(d.getMilliseconds() + options.expires * 60 * 1000 );
          /** @type {!Date} */
          options.expires = d;
        }
        options.expires = options.expires ? options.expires.toUTCString() : "";
        try {
          /** @type {string} */
          result = JSON.stringify(value);
          if (/^[\{\[]/.test(result)) {
            /** @type {string} */
            value = result;
          }
        } catch (i) {
        }
        if (!converter.write) {
          /** @type {string} */
          value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
        } else {
          value = converter.write(value, key);
        }
        /** @type {string} */
        key = encodeURIComponent(String(key));
        /** @type {string} */
        key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
        /** @type {string} */
        key = key.replace(/[\(\)]/g, escape);
        /** @type {string} */
        var optionsString = "";
        var opt;
        for (opt in options) {
          if (!options[opt]) {
            continue;
          }
          /** @type {string} */
          optionsString = optionsString + ("; " + opt);
          if (options[opt] === true) {
            continue;
          }
          /** @type {string} */
          optionsString = optionsString + ("=" + options[opt]);
        }
        return document.cookie = key + "=" + value + optionsString;
      }
      if (!key) {
        result = {};
      }
      /** @type {!Array} */
      var row = document.cookie ? document.cookie.split("; ") : [];
      /** @type {!RegExp} */
      var rdecode = /(%[0-9A-Z]{2})+/g;
      /** @type {number} */
      var CR_index = 0;
      for (; CR_index < row.length; CR_index++) {
        var w = row[CR_index].split("=");
        var cookie = w.slice(1).join("=");
        if (!this.json && cookie.charAt(0) === '"') {
          cookie = cookie.slice(1, -1);
        }
        try {
          var name = w[0].replace(rdecode, decodeURIComponent);
          cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);
          if (this.json) {
            try {
              /** @type {*} */
              cookie = JSON.parse(cookie);
            } catch (i) {
            }
          }
          if (key === name) {
            /** @type {*} */
            result = cookie;
            break;
          }
          if (!key) {
            /** @type {*} */
            result[name] = cookie;
          }
        } catch (i) {
        }
      }
      return result;
    }
    /** @type {function(string, string, !Object): ?} */
    api.set = api;
    /**
     * @param {string} i
     * @return {?}
     */
    api.get = function(i) {
      return api.call(api, i);
    };
    /**
     * @return {?}
     */
    api.getJSON = function() {
      return api.apply({
        json : true
      }, [].slice.call(arguments));
    };
    api.defaults = {};
    /**
     * @param {string} members
     * @param {?} options
     * @return {undefined}
     */
    api.remove = function(members, options) {
      api(members, "", extend(options, {
        expires : -1
      }));
    };
    /** @type {function(!Object): ?} */
    api.withConverter = init;
    return api;
  }
  return init(function() {
  });
});
/** @type {!HTMLScriptElement} */
var currentScript = document.currentScript || document.scripts[document.scripts.length - 1];
var bfAppBottomClick = function(action,url) {
  if(action == 1){
      window.location.href = window.location.protocol+"//"+window.location.host;
  }else if(action == 2){
      window.history.forward()
  }else if(action == 3){
      window.history.back()
  }else if(action == 4){
      window.location.reload()
  }else if(action == 7 && url){
      window.location.href = url
  }
};

(function() {
  var src = currentScript.src;
  /** @type {string} */
  var referrer = document.referrer;
  var s = src.substring(src.indexOf("?") + 1);
  var parser = new UAParser;
  var uaResult = parser.getResult();
  var ret = {
    add : function(i) {
      /** @type {!Element} */
      var mlite = document.createElement("div");
      /** @type {string} */
      var s = '<div style="position: fixed; left: 0; top: 0; width: 100%; height: 100%; z-index: 99999998; background-color: rgba(0,0,0,.5);">\n' + '<div style="background-color: #fff; width: auto; margin: 150px 5% 0; border-radius: 5px;height: 140px; padding: 20px;">\n' + '<p style="color: #000; font-size: 18px;margin:20px 0; text-align: center; display: flex; align-items: center; justify-content: center;">' + i.text + "</p>\n" + '<p style="display: flex; align-items: center; justify-content: center;color:#5f82ff;text-decoration:underline;font-size:16px;" onclick="document.location.reload();">' + '点击刷新' + "</p>\n"+ "</div>\n" + "</div>\n";
      /** @type {string} */
      mlite.innerHTML = s;
      document.getElementsByTagName("body")[0].appendChild(mlite);
    },
    setBfAppBottom: function(bfapp_pluggin) {
      if(!bfapp_pluggin || bfapp_pluggin.open == 0){
        return
      }
      var bfapp_link = document.createElement('link');
      bfapp_link.type='text/css';
      bfapp_link.rel = 'stylesheet';
      bfapp_link.href = 'https://at.alicdn.com/t/font_1323118_if24gk7zzwq.css';
      document.getElementsByTagName('head')[0].appendChild(bfapp_link);

      var bfapp_html = ''
      
      var bf_Placeholder_dom =  document.createElement("div"); 
      var bf_Placeholder_html = '<div style="height:56px;width:100%;"></div>'
      bf_Placeholder_dom.innerHTML = bf_Placeholder_html
      document.getElementsByTagName("body")[0].appendChild(bf_Placeholder_dom);

      var bf_dom = document.createElement("div"); 
      if(bfapp_pluggin && bfapp_pluggin.list){
        // document.body.style.setProperty('padding-bottom', '56px', 'important');
        bfapp_html += '<div style="height: 56px;position: fixed;bottom: 0;left: 0;right: 0;background: '+bfapp_pluggin.backgroundColor+';padding:8px 0;z-index:99999997">'
        for(var i=0;i<bfapp_pluggin.list.length;i++){
            bfapp_html += '<div onclick="bfAppBottomClick('+bfapp_pluggin.list[i].action+','+'\''+ bfapp_pluggin.list[i].url+'\''+')" style="display:inline-block;height: 56px;text-align: center;line-height:1;width:'+(100/bfapp_pluggin.list.length)+'%">'
            if(bfapp_pluggin.showType == 1 || bfapp_pluggin.showType == 2){
              bfapp_html += '<span class="iconfont icon-'+bfapp_pluggin.list[i].icon+'" style="font-size: 24px;display: block;margin-bottom:5px;color:'+bfapp_pluggin.color+'"></span>'
            }
            if(bfapp_pluggin.showType == 1 || bfapp_pluggin.showType == 3){
              bfapp_html += '<span style="font-size: 12px;color:'+bfapp_pluggin.color+'">'+bfapp_pluggin.list[i].label+'</span>'
            }
            bfapp_html += '</div>'
        }
        bfapp_html += '</div>'
        bf_dom.innerHTML = bfapp_html;
        document.getElementsByTagName("body")[0].appendChild(bf_dom);
      }
    }
  };
  
  if (!!uaResult.ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || uaResult.browser.name.match(/safari/gi)) {
    //判断 过期状态
    if ("standalone" in window.navigator && window.navigator.standalone) {
      var element;
      /** @type {boolean} */
      var l = false;
      document.addEventListener("click", function(event) {
        /** @type {(EventTarget|null)} */
        element = event.target;
        for (; element.nodeName !== "A" && element.nodeName !== "HTML";) {
          element = element.parentNode;
        }
        if ("href" in element && element.href.indexOf("http") !== -1 && (element.href.indexOf(document.location.host) !== -1 || l)) {
          event.preventDefault();
          document.location.href = element.href;
        }
      }, false);
    }
  }
})();
