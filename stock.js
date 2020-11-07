/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./jssrc/stock.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/web.js":
/*!***********************!*\
  !*** ./config/web.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  test: {
    dataurl: function(){
      return 'http://reportapi.eastmoney.com/'
    }
  },
  production: {
    dataurl: function(){
      return 'http://reportapi.eastmoney.com/'
    }
  },
  getParam: function(name){
    var urlpara = location.search;
    var par = {};
    if (urlpara != "") {
      urlpara = urlpara.substring(1, urlpara.length);
      var para = urlpara.split("&");
      var parname;
      var parvalue;
      for (var i = 0; i < para.length; i++) {
        parname = para[i].substring(0, para[i].indexOf("="));
        parvalue = para[i].substring(para[i].indexOf("=") + 1, para[i].length);
        par[parname] = parvalue;
      }
    }
    if(typeof (par[name]) != "undefined"){
      return par[name];
    }
    else{
      return null;
    }
  },
  getWebPath: function (name) {
    if (this.getParam('env')) {
      return this[this.getParam('env')][name]()
    }
    return this.production[name]()
  }
}



/***/ }),

/***/ "./jssrc/stock.ts":
/*!************************!*\
  !*** ./jssrc/stock.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * 个股研报
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var datatable_1 = __importDefault(__webpack_require__(/*! ../src/modules/datatable */ "./src/modules/datatable/index.ts"));
var utils_1 = __importDefault(__webpack_require__(/*! ../src/modules/commonutil/utils */ "./src/modules/commonutil/utils.ts"));
var getbkinfo_1 = __importDefault(__webpack_require__(/*! ../src/modules/getbkinfo */ "./src/modules/getbkinfo/index.ts"));
var collect_stock_1 = __importDefault(__webpack_require__(/*! ../src/modules/collect_stock */ "./src/modules/collect_stock/index.ts")); //获取自选股股票
//url参数   
var rating = utils_1["default"].getUrlParams('rating'); //评级相关
var ratingchange = utils_1["default"].getUrlParams('ratingchange'); //评级变动
var orgCode = utils_1["default"].getUrlParams('orgcode');
var authorstr = utils_1["default"].getUrlParams('authorstr');
var collectstock = utils_1["default"].getUrlParams('collectstock'); //自选股研报
//url参数 
var hyId = utils_1["default"].getUrlParams('hyid');
var hyName = utils_1["default"].getUrlParams('hyname');
init();
function init() {
    return __awaiter(this, void 0, void 0, function () {
        var code, collect_stock_codes, stock_datatable, searchobj, hoverTimer, outTimer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    //设置默认时间
                    $('#beginDate').val(utils_1["default"].getDateStr(-2, 0, 0));
                    $('#endDate').val(utils_1["default"].getDateStr(0, 0, 0));
                    dealInitParam(); //处理init参数
                    getReportBK(); //行业
                    code = '';
                    if (!collectstock) return [3 /*break*/, 2];
                    $('#check_zxgyb').prop('checked', true);
                    $('#check_zxgyb').data('waschecked', true);
                    return [4 /*yield*/, collect_stock_1["default"]()];
                case 1:
                    collect_stock_codes = _a.sent();
                    code = collect_stock_codes != '' ? collect_stock_codes : 'None'; //自选股股票代码
                    _a.label = 2;
                case 2:
                    ;
                    stock_datatable = new datatable_1["default"]({
                        initdata: true,
                        initdataone: true,
                        table_type: 'stock',
                        div_id: 'stock_table',
                        pager_id: 'stock_table_pager',
                        floathead: true,
                        loadscroll: true,
                        loadingImg: true,
                        initParams: {
                            beginTime: utils_1["default"].getDateStr(-2, 0, 0),
                            endTime: utils_1["default"].getDateStr(0, 0, 0),
                            industryCode: hyId ? hyId : '*',
                            ratingChange: ratingchange != 'null' ? ratingchange : '*',
                            rating: rating != 'null' ? rating : '*',
                            orgCode: orgCode != 'null' ? orgCode : '*',
                            code: code ? code : '*',
                            rcode: authorstr ? authorstr : ''
                        }
                    });
                    searchobj = {
                        code: '*',
                        industryCode: '*',
                        ratingChange: '*',
                        rating: '*',
                        beginTime: $('#beginDate').val(),
                        endTime: $('#endDate').val()
                    };
                    if (hyId) {
                        searchobj.industryCode = hyId;
                    }
                    //查询
                    $('#search_btn').click(function () {
                        searchobj.beginTime = $('#beginDate').val();
                        searchobj.endTime = $('#endDate').val();
                        getlist(stock_datatable, searchobj);
                    });
                    //行业绑定选中事件
                    $('#hy-box').on('click', 'span', function () {
                        searchobj.industryCode = $(this).data('bkval');
                        searchobj.pageNo = 1;
                        getlist(stock_datatable, searchobj);
                    });
                    //评级相关选中事件
                    $('#pjxg-box').on('click', 'span', function () {
                        searchobj.rating = $(this).data('xgcode');
                        searchobj.pageNo = 1;
                        getlist(stock_datatable, searchobj);
                    });
                    //评级变动选中事件
                    $('#pjbd-box').on('click', 'span', function () {
                        searchobj.ratingChange = $(this).data('bdcode');
                        searchobj.pageNo = 1;
                        getlist(stock_datatable, searchobj);
                    });
                    $('.filter-item-box').on('click', '.item', function () {
                        $(this).addClass('selectItem').siblings().removeClass('selectItem');
                    });
                    $('#check_zxgyb_box').on('click', function () {
                        var $radio = $('#check_zxgyb');
                        if ($radio.data('waschecked') == true) {
                            $radio.prop('checked', false);
                            $radio.data('waschecked', false);
                            searchobj.code = '*';
                        }
                        else {
                            $radio.prop('checked', true);
                            $radio.data('waschecked', true);
                        }
                        getlist(stock_datatable, searchobj);
                    });
                    //时间控件点击图标触发
                    $('.date-icon').on('click', function () {
                        $(this).siblings('.t-input').click();
                    });
                    //更多
                    $("#tohymore").on('click', function () {
                        $('#hymore').css({ 'display': 'block' });
                    });
                    $("#hymoreblock").mouseenter(function () {
                        clearTimeout(outTimer);
                        hoverTimer = setTimeout(function () {
                            $('#hymore').css({ 'display': 'block' });
                        }, 0);
                    }).mouseleave(function () {
                        clearTimeout(hoverTimer);
                        outTimer = setTimeout(function () {
                            $('#hymore').css({ 'display': 'none' });
                        }, 300);
                    });
                    $("#hymore").on('click', 'a', function () {
                        var name = $(this).text();
                        var bkcode = $(this).data('bkval');
                        var $span = "<span class=\"item\" data-bkval=" + bkcode + (">" + name + "</span>");
                        var hyboxbkcodeArr = [];
                        $("#hy-box").find(".item").each(function (v) {
                            var bkcode = $(this).data("bkval");
                            hyboxbkcodeArr.push(bkcode);
                        });
                        if (hyboxbkcodeArr.indexOf(bkcode) > -1) {
                        }
                        else {
                            $("#hy-box").children("span:last-child").replaceWith($span);
                        }
                        $('#hymore').css({ 'display': 'none' });
                        $('.filter-item-box #hy-box').find('.item').each(function () {
                            var code = $(this).data('bkval');
                            if (code == bkcode) {
                                $(this).click();
                            }
                        });
                    });
                    //时间change事件
                    $("#change_time").change(function () {
                        var id = $(this).children('option:selected').val();
                        searchobj.pageNo = 1;
                        switch (id) {
                            case "1":
                                searchobj.beginTime = utils_1["default"].getDateStr(0, 0, -7);
                                searchobj.endTime = utils_1["default"].getDateStr(0, 0, 0);
                                break;
                            case "2":
                                searchobj.beginTime = utils_1["default"].getDateStr(0, -1, 0);
                                searchobj.endTime = utils_1["default"].getDateStr(0, 0, 0);
                                break;
                            case "3":
                                searchobj.beginTime = utils_1["default"].getDateStr(0, -6, 0);
                                searchobj.endTime = utils_1["default"].getDateStr(0, 0, 0);
                                break;
                            case "4":
                                searchobj.beginTime = utils_1["default"].getDateStr(-1, 0, 0);
                                searchobj.endTime = utils_1["default"].getDateStr(0, 0, 0);
                                break;
                            case "5":
                                searchobj.beginTime = utils_1["default"].getDateStr(-2, 0, 0);
                                searchobj.endTime = utils_1["default"].getDateStr(0, 0, 0);
                                break;
                        }
                        ;
                        getlist(stock_datatable, searchobj);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
;
function getlist(stock_datatable, searchobj) {
    return __awaiter(this, void 0, void 0, function () {
        var val, collect_stock_codes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    val = $('input:radio[name="zxgyb-only"]:checked').val();
                    if (!(val == null)) return [3 /*break*/, 1];
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, collect_stock_1["default"]()];
                case 2:
                    collect_stock_codes = _a.sent();
                    searchobj.code = collect_stock_codes != '' ? collect_stock_codes : 'None'; //自选股股票代码
                    _a.label = 3;
                case 3:
                    ;
                    stock_datatable.search(searchobj);
                    return [2 /*return*/];
            }
        });
    });
}
;
//保留第一个 firstLetter
function filterArr(arr) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        if (temp.indexOf(arr[i].firstLetter) < 0) {
            temp.push(arr[i].firstLetter);
        }
        else {
            arr[i].firstLetter = '';
        }
    }
    return arr;
}
;
function sortLetter(arr, dataLeven) {
    function getValue(option) {
        if (!dataLeven)
            return option;
        var data = option;
        dataLeven.split('.').filter(function (item) {
            data = data[item];
        });
        return data + '';
    }
    arr.sort(function (item1, item2) {
        return getValue(item1).localeCompare(getValue(item2), 'zh-Hans-CN');
    });
    return filterArr(arr);
}
;
function getReportBK() {
    return __awaiter(this, void 0, void 0, function () {
        var hyboxbkcode_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    hyboxbkcode_1 = [];
                    $("#hy-box").find(".item").each(function (v) {
                        var bkcode = $(this).data("bkval");
                        hyboxbkcode_1.push(bkcode);
                    });
                    return [4 /*yield*/, getbkinfo_1["default"].hyInfo().then(function (v) {
                            var backdata = v.data;
                            var arr = sortLetter(backdata, 'firstLetter');
                            var $li = "";
                            for (var i = 0; i < arr.length; i++) {
                                var $b = "";
                                var $link = "";
                                if (arr[i].firstLetter) {
                                    $b = "<b>" + arr[i].firstLetter + "</b>";
                                }
                                $link = "<a target=\"_self\" data-bkval=" + arr[i].bkCode + (">" + arr[i].bkName + "</a>");
                                $li += "<li>" + $b + "" + $link + "</li>";
                                if (hyboxbkcode_1.indexOf(Number(hyId)) > -1) {
                                    $("#hy-box").find(".item").each(function (v) {
                                        if ($(this).data("bkval") == hyId) {
                                            $(this).addClass("selectItem").siblings().removeClass("selectItem");
                                        }
                                    });
                                }
                                else {
                                    if (!hyId) {
                                        $("#hy-box").find('.item').first().addClass('selectItem');
                                    }
                                    if (!!hyId && arr[i].bkCode == hyId) {
                                        var $span = "<span class=\"item selectItem\" data-bkval=" + hyId + (">" + arr[i].bkName + "</span>");
                                        $("#hy-box").children("span:last-child").replaceWith($span);
                                    }
                                    else {
                                        // $("#hy-box").find('.item').first().addClass('selectItem')
                                    }
                                }
                            }
                            $('#hymore').append("<ul>" + $li + "<ul>");
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
;
//处理url 参数 
function dealInitParam() {
    //评级变动 
    if (ratingchange != null) {
        $("#pjbd-box").find('.item').each(function () {
            if (ratingchange == $(this).data('bdcode')) {
                $(this).addClass('selectItem').siblings().removeClass('selectItem');
            }
        });
    }
    else {
        $("#pjbd-box").find('.item').first().addClass('selectItem');
    }
    //评级相关
    if (rating != null) {
        $("#pjxg-box").find('.item').each(function () {
            if (rating == $(this).data('xgcode')) {
                $(this).addClass('selectItem').siblings().removeClass('selectItem');
            }
        });
    }
    else {
        $("#pjxg-box").find('.item').first().addClass('selectItem');
    }
}


/***/ }),

/***/ "./src/modules/bid/index.js":
/*!**********************************!*\
  !*** ./src/modules/bid/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 浏览器id
 */

var cookie = __webpack_require__(/*! ../cookie */ "./src/modules/cookie/index.js")

module.exports = {
  get : function(){
      var zw = cookie.get('qgqp_b_id')
      if (zw == null) {
          return this.make()
      }
      else{
        return zw;
      }
      
  },
  make : function(){
      var newid = Math.floor(Math.random()*9+1).toString();
      for (var i = 0; i < 19; i++) {
          newid +=  Math.floor(Math.random()*9).toString();
          
      }
      cookie.set('qgqp_b_id', newid, 10000, '.eastmoney.com');
      return newid;
  },
  init: function(){
      if (this.get() == null || this.get() == '') {
          return this.make();
      }
      else{
          return this.get();
      }
  }
}

/***/ }),

/***/ "./src/modules/browser_fingerprint/fingerprint2.js":
/*!*********************************************************!*\
  !*** ./src/modules/browser_fingerprint/fingerprint2.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
* Fingerprintjs2 1.5.1 - Modern & flexible browser fingerprint library v2
* https://github.com/Valve/fingerprintjs2
* Copyright (c) 2015 Valentin Vasilyev (valentin.vasilyev@outlook.com)
* Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL VALENTIN VASILYEV BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
* THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

(function (name, context, definition) {
  "use strict";
  if (true) { !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); }
  else {}
})("Fingerprint2", this, function() {
  "use strict";
  var Fingerprint2 = function(options) {

    if (!(this instanceof Fingerprint2)) {
      return new Fingerprint2(options);
    }

    var defaultOptions = {
      swfContainerId: "fingerprintjs2",
      swfPath: "flash/compiled/FontList.swf",
      detectScreenOrientation: true,
      sortPluginsFor: [/palemoon/i],
      userDefinedFonts: []
    };
    this.options = this.extend(options, defaultOptions);
    this.nativeForEach = Array.prototype.forEach;
    this.nativeMap = Array.prototype.map;
  };
  Fingerprint2.prototype = {
    extend: function(source, target) {
      if (source == null) { return target; }
      for (var k in source) {
        if(source[k] != null && target[k] !== source[k]) {
          target[k] = source[k];
        }
      }
      return target;
    },
    get: function(done){
      var keys = [];
      keys = this.userAgentKey(keys);
      keys = this.languageKey(keys);
      keys = this.colorDepthKey(keys);
      keys = this.pixelRatioKey(keys);
      keys = this.hardwareConcurrencyKey(keys);
      keys = this.screenResolutionKey(keys);
      keys = this.availableScreenResolutionKey(keys);
      keys = this.timezoneOffsetKey(keys);
      keys = this.sessionStorageKey(keys);
      keys = this.localStorageKey(keys);
      keys = this.indexedDbKey(keys);
      keys = this.addBehaviorKey(keys);
      keys = this.openDatabaseKey(keys);
      keys = this.cpuClassKey(keys);
      keys = this.platformKey(keys);
      keys = this.doNotTrackKey(keys);
      keys = this.pluginsKey(keys);
      keys = this.canvasKey(keys);
      keys = this.webglKey(keys);
      keys = this.adBlockKey(keys);
      keys = this.hasLiedLanguagesKey(keys);
      keys = this.hasLiedResolutionKey(keys);
      keys = this.hasLiedOsKey(keys);
      keys = this.hasLiedBrowserKey(keys);
      keys = this.touchSupportKey(keys);
      keys = this.customEntropyFunction(keys);
      var that = this;
      this.fontsKey(keys, function(newKeys){
        var values = [];
        that.each(newKeys, function(pair) {
          var value = pair.value;
          if (typeof pair.value.join !== "undefined") {
            value = pair.value.join(";");
          }
          values.push(value);
        });
        var murmur = that.x64hash128(values.join("~~~"), 31);
        return done(murmur, newKeys);
      });
    },
    customEntropyFunction: function (keys) {
      if (typeof this.options.customFunction === "function") {
        keys.push({key: "custom", value: this.options.customFunction()});
      }
      return keys;
    },
    userAgentKey: function(keys) {
      if(!this.options.excludeUserAgent) {
        keys.push({key: "user_agent", value: this.getUserAgent()});
      }
      return keys;
    },
    // for tests
    getUserAgent: function(){
      return navigator.userAgent;
    },
    languageKey: function(keys) {
      if(!this.options.excludeLanguage) {
        // IE 9,10 on Windows 10 does not have the `navigator.language` property any longer
        keys.push({ key: "language", value: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || "" });
      }
      return keys;
    },
    colorDepthKey: function(keys) {
      if(!this.options.excludeColorDepth) {
        keys.push({key: "color_depth", value: screen.colorDepth || -1});
      }
      return keys;
    },
    pixelRatioKey: function(keys) {
      if(!this.options.excludePixelRatio) {
        keys.push({key: "pixel_ratio", value: this.getPixelRatio()});
      }
      return keys;
    },
    getPixelRatio: function() {
      return window.devicePixelRatio || "";
    },
    screenResolutionKey: function(keys) {
      if(!this.options.excludeScreenResolution) {
        return this.getScreenResolution(keys);
      }
      return keys;
    },
    getScreenResolution: function(keys) {
      var resolution;
      if(this.options.detectScreenOrientation) {
        resolution = (screen.height > screen.width) ? [screen.height, screen.width] : [screen.width, screen.height];
      } else {
        resolution = [screen.width, screen.height];
      }
      if(typeof resolution !== "undefined") { // headless browsers
        keys.push({key: "resolution", value: resolution});
      }
      return keys;
    },
    availableScreenResolutionKey: function(keys) {
      if (!this.options.excludeAvailableScreenResolution) {
        return this.getAvailableScreenResolution(keys);
      }
      return keys;
    },
    getAvailableScreenResolution: function(keys) {
      var available;
      if(screen.availWidth && screen.availHeight) {
        if(this.options.detectScreenOrientation) {
          available = (screen.availHeight > screen.availWidth) ? [screen.availHeight, screen.availWidth] : [screen.availWidth, screen.availHeight];
        } else {
          available = [screen.availHeight, screen.availWidth];
        }
      }
      if(typeof available !== "undefined") { // headless browsers
        keys.push({key: "available_resolution", value: available});
      }
      return keys;
    },
    timezoneOffsetKey: function(keys) {
      if(!this.options.excludeTimezoneOffset) {
        keys.push({key: "timezone_offset", value: new Date().getTimezoneOffset()});
      }
      return keys;
    },
    sessionStorageKey: function(keys) {
      if(!this.options.excludeSessionStorage && this.hasSessionStorage()) {
        keys.push({key: "session_storage", value: 1});
      }
      return keys;
    },
    localStorageKey: function(keys) {
      if(!this.options.excludeSessionStorage && this.hasLocalStorage()) {
        keys.push({key: "local_storage", value: 1});
      }
      return keys;
    },
    indexedDbKey: function(keys) {
      if(!this.options.excludeIndexedDB && this.hasIndexedDB()) {
        keys.push({key: "indexed_db", value: 1});
      }
      return keys;
    },
    addBehaviorKey: function(keys) {
      //body might not be defined at this point or removed programmatically
      if(document.body && !this.options.excludeAddBehavior && document.body.addBehavior) {
        keys.push({key: "add_behavior", value: 1});
      }
      return keys;
    },
    openDatabaseKey: function(keys) {
      if(!this.options.excludeOpenDatabase && window.openDatabase) {
        keys.push({key: "open_database", value: 1});
      }
      return keys;
    },
    cpuClassKey: function(keys) {
      if(!this.options.excludeCpuClass) {
        keys.push({key: "cpu_class", value: this.getNavigatorCpuClass()});
      }
      return keys;
    },
    platformKey: function(keys) {
      if(!this.options.excludePlatform) {
        keys.push({key: "navigator_platform", value: this.getNavigatorPlatform()});
      }
      return keys;
    },
    doNotTrackKey: function(keys) {
      if(!this.options.excludeDoNotTrack) {
        keys.push({key: "do_not_track", value: this.getDoNotTrack()});
      }
      return keys;
    },
    canvasKey: function(keys) {
      if(!this.options.excludeCanvas && this.isCanvasSupported()) {
        keys.push({key: "canvas", value: this.getCanvasFp()});
      }
      return keys;
    },
    webglKey: function(keys) {
      if(this.options.excludeWebGL) {
        return keys;
      }
      if(!this.isWebGlSupported()) {
        return keys;
      }
      keys.push({key: "webgl", value: this.getWebglFp()});
      return keys;
    },
    adBlockKey: function(keys){
      if(!this.options.excludeAdBlock) {
        keys.push({key: "adblock", value: this.getAdBlock()});
      }
      return keys;
    },
    hasLiedLanguagesKey: function(keys){
      if(!this.options.excludeHasLiedLanguages){
        keys.push({key: "has_lied_languages", value: this.getHasLiedLanguages()});
      }
      return keys;
    },
    hasLiedResolutionKey: function(keys){
      if(!this.options.excludeHasLiedResolution){
        keys.push({key: "has_lied_resolution", value: this.getHasLiedResolution()});
      }
      return keys;
    },
    hasLiedOsKey: function(keys){
      if(!this.options.excludeHasLiedOs){
        keys.push({key: "has_lied_os", value: this.getHasLiedOs()});
      }
      return keys;
    },
    hasLiedBrowserKey: function(keys){
      if(!this.options.excludeHasLiedBrowser){
        keys.push({key: "has_lied_browser", value: this.getHasLiedBrowser()});
      }
      return keys;
    },
    fontsKey: function(keys, done) {
      if (this.options.excludeJsFonts) {
        return this.flashFontsKey(keys, done);
      }
      return this.jsFontsKey(keys, done);
    },
    // flash fonts (will increase fingerprinting time 20X to ~ 130-150ms)
    flashFontsKey: function(keys, done) {
      if(this.options.excludeFlashFonts) {
        return done(keys);
      }
      // we do flash if swfobject is loaded
      if(!this.hasSwfObjectLoaded()){
        return done(keys);
      }
      if(!this.hasMinFlashInstalled()){
        return done(keys);
      }
      if(typeof this.options.swfPath === "undefined"){
        return done(keys);
      }
      this.loadSwfAndDetectFonts(function(fonts){
        keys.push({key: "swf_fonts", value: fonts.join(";")});
        done(keys);
      });
    },
    // kudos to http://www.lalit.org/lab/javascript-css-font-detect/
    jsFontsKey: function(keys, done) {
      var that = this;
      // doing js fonts detection in a pseudo-async fashion
      return setTimeout(function(){

        // a font will be compared against all the three default fonts.
        // and if it doesn't match all 3 then that font is not available.
        var baseFonts = ["monospace", "sans-serif", "serif"];

        var fontList = [
                        "Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS",
                        "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style",
                        "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New",
                        "Garamond", "Geneva", "Georgia",
                        "Helvetica", "Helvetica Neue",
                        "Impact",
                        "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode",
                        "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO",
                        "Palatino", "Palatino Linotype",
                        "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol",
                        "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS",
                        "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"
                      ];
        var extendedFontList = [
                        "Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter",
                        "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER",
                         "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville",
                        "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD",
                        "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed",
                        "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara",
                        "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer",
                        "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold",
                        "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark",
                        "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC",
                        "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte",
                        "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER",
                        "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT",
                        "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD",
                        "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV",
                        "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT",
                        "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN",
                        "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island",
                        "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic",
                        "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le",
                        "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti",
                        "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli",
                        "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN",
                        "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB",
                        "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla",
                        "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood",
                        "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket",
                        "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC",
                        "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold",
                        "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin",
                        "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"];

        if(that.options.extendedJsFonts) {
            fontList = fontList.concat(extendedFontList);
        }

        fontList = fontList.concat(that.options.userDefinedFonts);

        //we use m or w because these two characters take up the maximum width.
        // And we use a LLi so that the same matching fonts can get separated
        var testString = "mmmmmmmmmmlli";

        //we test using 72px font size, we may use any size. I guess larger the better.
        var testSize = "72px";

        var h = document.getElementsByTagName("body")[0];

        // div to load spans for the base fonts
        var baseFontsDiv = document.createElement("div");

        // div to load spans for the fonts to detect
        var fontsDiv = document.createElement("div");

        var defaultWidth = {};
        var defaultHeight = {};

        // creates a span where the fonts will be loaded
        var createSpan = function() {
            var s = document.createElement("span");
            /*
             * We need this css as in some weird browser this
             * span elements shows up for a microSec which creates a
             * bad user experience
             */
            s.style.position = "absolute";
            s.style.left = "-9999px";
            s.style.fontSize = testSize;
            s.style.lineHeight = "normal";
            s.innerHTML = testString;
            return s;
        };

        // creates a span and load the font to detect and a base font for fallback
        var createSpanWithFonts = function(fontToDetect, baseFont) {
            var s = createSpan();
            s.style.fontFamily = "'" + fontToDetect + "'," + baseFont;
            return s;
        };

        // creates spans for the base fonts and adds them to baseFontsDiv
        var initializeBaseFontsSpans = function() {
            var spans = [];
            for (var index = 0, length = baseFonts.length; index < length; index++) {
                var s = createSpan();
                s.style.fontFamily = baseFonts[index];
                baseFontsDiv.appendChild(s);
                spans.push(s);
            }
            return spans;
        };

        // creates spans for the fonts to detect and adds them to fontsDiv
        var initializeFontsSpans = function() {
            var spans = {};
            for(var i = 0, l = fontList.length; i < l; i++) {
                var fontSpans = [];
                for(var j = 0, numDefaultFonts = baseFonts.length; j < numDefaultFonts; j++) {
                    var s = createSpanWithFonts(fontList[i], baseFonts[j]);
                    fontsDiv.appendChild(s);
                    fontSpans.push(s);
                }
                spans[fontList[i]] = fontSpans; // Stores {fontName : [spans for that font]}
            }
            return spans;
        };

        // checks if a font is available
        var isFontAvailable = function(fontSpans) {
            var detected = false;
            for(var i = 0; i < baseFonts.length; i++) {
                detected = (fontSpans[i].offsetWidth !== defaultWidth[baseFonts[i]] || fontSpans[i].offsetHeight !== defaultHeight[baseFonts[i]]);
                if(detected) {
                    return detected;
                }
            }
            return detected;
        };

        // create spans for base fonts
        var baseFontsSpans = initializeBaseFontsSpans();

        // add the spans to the DOM
        h.appendChild(baseFontsDiv);

        // get the default width for the three base fonts
        for (var index = 0, length = baseFonts.length; index < length; index++) {
            defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth; // width for the default font
            defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight; // height for the default font
        }

        // create spans for fonts to detect
        var fontsSpans = initializeFontsSpans();

        // add all the spans to the DOM
        h.appendChild(fontsDiv);

        // check available fonts
        var available = [];
        for(var i = 0, l = fontList.length; i < l; i++) {
            if(isFontAvailable(fontsSpans[fontList[i]])) {
                available.push(fontList[i]);
            }
        }

        // remove spans from DOM
        h.removeChild(fontsDiv);
        h.removeChild(baseFontsDiv);

        keys.push({key: "js_fonts", value: available});
        done(keys);
      }, 1);
    },
    pluginsKey: function(keys) {
      if(!this.options.excludePlugins){
        if(this.isIE()){
          if(!this.options.excludeIEPlugins) {
            keys.push({key: "ie_plugins", value: this.getIEPlugins()});
          }
        } else {
          keys.push({key: "regular_plugins", value: this.getRegularPlugins()});
        }
      }
      return keys;
    },
    getRegularPlugins: function () {
      var plugins = [];
      for(var i = 0, l = navigator.plugins.length; i < l; i++) {
        plugins.push(navigator.plugins[i]);
      }
      // sorting plugins only for those user agents, that we know randomize the plugins
      // every time we try to enumerate them
      if(this.pluginsShouldBeSorted()) {
        plugins = plugins.sort(function(a, b) {
          if(a.name > b.name){ return 1; }
          if(a.name < b.name){ return -1; }
          return 0;
        });
      }
      return this.map(plugins, function (p) {
        var mimeTypes = this.map(p, function(mt){
          return [mt.type, mt.suffixes].join("~");
        }).join(",");
        return [p.name, p.description, mimeTypes].join("::");
      }, this);
    },
    getIEPlugins: function () {
      var result = [];
      if((Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject")) || ("ActiveXObject" in window)) {
        var names = [
          "AcroPDF.PDF", // Adobe PDF reader 7+
          "Adodb.Stream",
          "AgControl.AgControl", // Silverlight
          "DevalVRXCtrl.DevalVRXCtrl.1",
          "MacromediaFlashPaper.MacromediaFlashPaper",
          "Msxml2.DOMDocument",
          "Msxml2.XMLHTTP",
          "PDF.PdfCtrl", // Adobe PDF reader 6 and earlier, brrr
          "QuickTime.QuickTime", // QuickTime
          "QuickTimeCheckObject.QuickTimeCheck.1",
          "RealPlayer",
          "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)",
          "RealVideo.RealVideo(tm) ActiveX Control (32-bit)",
          "Scripting.Dictionary",
          "SWCtl.SWCtl", // ShockWave player
          "Shell.UIHelper",
          "ShockwaveFlash.ShockwaveFlash", //flash plugin
          "Skype.Detection",
          "TDCCtl.TDCCtl",
          "WMPlayer.OCX", // Windows media player
          "rmocx.RealPlayer G2 Control",
          "rmocx.RealPlayer G2 Control.1"
        ];
        // starting to detect plugins in IE
        result = this.map(names, function(name) {
          try {
            new ActiveXObject(name); // eslint-disable-no-new
            return name;
          } catch(e) {
            return null;
          }
        });
      }
      if(navigator.plugins) {
        result = result.concat(this.getRegularPlugins());
      }
      return result;
    },
    pluginsShouldBeSorted: function () {
      var should = false;
      for(var i = 0, l = this.options.sortPluginsFor.length; i < l; i++) {
        var re = this.options.sortPluginsFor[i];
        if(navigator.userAgent.match(re)) {
          should = true;
          break;
        }
      }
      return should;
    },
    touchSupportKey: function (keys) {
      if(!this.options.excludeTouchSupport){
        keys.push({key: "touch_support", value: this.getTouchSupport()});
      }
      return keys;
    },
    hardwareConcurrencyKey: function(keys){
      if(!this.options.excludeHardwareConcurrency){
        keys.push({key: "hardware_concurrency", value: this.getHardwareConcurrency()});
      }
      return keys;
    },
    hasSessionStorage: function () {
      try {
        return !!window.sessionStorage;
      } catch(e) {
        return true; // SecurityError when referencing it means it exists
      }
    },
    // https://bugzilla.mozilla.org/show_bug.cgi?id=781447
    hasLocalStorage: function () {
      try {
        return !!window.localStorage;
      } catch(e) {
        return true; // SecurityError when referencing it means it exists
      }
    },
    hasIndexedDB: function (){
      try {
        return !!window.indexedDB;
      } catch(e) {
        return true; // SecurityError when referencing it means it exists
      }
    },
    getHardwareConcurrency: function(){
      if(navigator.hardwareConcurrency){
        return navigator.hardwareConcurrency;
      }
      return "unknown";
    },
    getNavigatorCpuClass: function () {
      if(navigator.cpuClass){
        return navigator.cpuClass;
      } else {
        return "unknown";
      }
    },
    getNavigatorPlatform: function () {
      if(navigator.platform) {
        return navigator.platform;
      } else {
        return "unknown";
      }
    },
    getDoNotTrack: function () {
      if(navigator.doNotTrack) {
        return navigator.doNotTrack;
      } else if (navigator.msDoNotTrack) {
        return navigator.msDoNotTrack;
      } else if (window.doNotTrack) {
        return window.doNotTrack;
      } else {
        return "unknown";
      }
    },
    // This is a crude and primitive touch screen detection.
    // It's not possible to currently reliably detect the  availability of a touch screen
    // with a JS, without actually subscribing to a touch event.
    // http://www.stucox.com/blog/you-cant-detect-a-touchscreen/
    // https://github.com/Modernizr/Modernizr/issues/548
    // method returns an array of 3 values:
    // maxTouchPoints, the success or failure of creating a TouchEvent,
    // and the availability of the 'ontouchstart' property
    getTouchSupport: function () {
      var maxTouchPoints = 0;
      var touchEvent = false;
      if(typeof navigator.maxTouchPoints !== "undefined") {
        maxTouchPoints = navigator.maxTouchPoints;
      } else if (typeof navigator.msMaxTouchPoints !== "undefined") {
        maxTouchPoints = navigator.msMaxTouchPoints;
      }
      try {
        document.createEvent("TouchEvent");
        touchEvent = true;
      } catch(_) { /* squelch */ }
      var touchStart = "ontouchstart" in window;
      return [maxTouchPoints, touchEvent, touchStart];
    },
    // https://www.browserleaks.com/canvas#how-does-it-work
    getCanvasFp: function() {
      var result = [];
      // Very simple now, need to make it more complex (geo shapes etc)
      var canvas = document.createElement("canvas");
      canvas.width = 2000;
      canvas.height = 200;
      canvas.style.display = "inline";
      var ctx = canvas.getContext("2d");
      // detect browser support of canvas winding
      // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
      // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/canvas/winding.js
      ctx.rect(0, 0, 10, 10);
      ctx.rect(2, 2, 6, 6);
      result.push("canvas winding:" + ((ctx.isPointInPath(5, 5, "evenodd") === false) ? "yes" : "no"));

      ctx.textBaseline = "alphabetic";
      ctx.fillStyle = "#f60";
      ctx.fillRect(125, 1, 62, 20);
      ctx.fillStyle = "#069";
      // https://github.com/Valve/fingerprintjs2/issues/66
      if(this.options.dontUseFakeFontInCanvas) {
        ctx.font = "11pt Arial";
      } else {
        ctx.font = "11pt no-real-font-123";
      }
      ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15);
      ctx.fillStyle = "rgba(102, 204, 0, 0.2)";
      ctx.font = "18pt Arial";
      ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45);

      // canvas blending
      // http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/
      // http://jsfiddle.net/NDYV8/16/
      ctx.globalCompositeOperation = "multiply";
      ctx.fillStyle = "rgb(255,0,255)";
      ctx.beginPath();
      ctx.arc(50, 50, 50, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "rgb(0,255,255)";
      ctx.beginPath();
      ctx.arc(100, 50, 50, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "rgb(255,255,0)";
      ctx.beginPath();
      ctx.arc(75, 100, 50, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "rgb(255,0,255)";
      // canvas winding
      // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
      // http://jsfiddle.net/NDYV8/19/
      ctx.arc(75, 75, 75, 0, Math.PI * 2, true);
      ctx.arc(75, 75, 25, 0, Math.PI * 2, true);
      ctx.fill("evenodd");

      result.push("canvas fp:" + canvas.toDataURL());
      return result.join("~");
    },

    getWebglFp: function() {
      var gl;
      var fa2s = function(fa) {
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        return "[" + fa[0] + ", " + fa[1] + "]";
      };
      var maxAnisotropy = function(gl) {
        var anisotropy, ext = gl.getExtension("EXT_texture_filter_anisotropic") || gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || gl.getExtension("MOZ_EXT_texture_filter_anisotropic");
        return ext ? (anisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === anisotropy && (anisotropy = 2), anisotropy) : null;
      };
      gl = this.getWebglCanvas();
      if(!gl) { return null; }
      // WebGL fingerprinting is a combination of techniques, found in MaxMind antifraud script & Augur fingerprinting.
      // First it draws a gradient object with shaders and convers the image to the Base64 string.
      // Then it enumerates all WebGL extensions & capabilities and appends them to the Base64 string, resulting in a huge WebGL string, potentially very unique on each device
      // Since iOS supports webgl starting from version 8.1 and 8.1 runs on several graphics chips, the results may be different across ios devices, but we need to verify it.
      var result = [];
      var vShaderTemplate = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}";
      var fShaderTemplate = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}";
      var vertexPosBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);
      var vertices = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
      vertexPosBuffer.itemSize = 3;
      vertexPosBuffer.numItems = 3;
      var program = gl.createProgram(), vshader = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(vshader, vShaderTemplate);
      gl.compileShader(vshader);
      var fshader = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(fshader, fShaderTemplate);
      gl.compileShader(fshader);
      gl.attachShader(program, vshader);
      gl.attachShader(program, fshader);
      gl.linkProgram(program);
      gl.useProgram(program);
      program.vertexPosAttrib = gl.getAttribLocation(program, "attrVertex");
      program.offsetUniform = gl.getUniformLocation(program, "uniformOffset");
      gl.enableVertexAttribArray(program.vertexPosArray);
      gl.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, gl.FLOAT, !1, 0, 0);
      gl.uniform2f(program.offsetUniform, 1, 1);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems);
      if (gl.canvas != null) { result.push(gl.canvas.toDataURL()); }
      result.push("extensions:" + gl.getSupportedExtensions().join(";"));
      result.push("webgl aliased line width range:" + fa2s(gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)));
      result.push("webgl aliased point size range:" + fa2s(gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)));
      result.push("webgl alpha bits:" + gl.getParameter(gl.ALPHA_BITS));
      result.push("webgl antialiasing:" + (gl.getContextAttributes().antialias ? "yes" : "no"));
      result.push("webgl blue bits:" + gl.getParameter(gl.BLUE_BITS));
      result.push("webgl depth bits:" + gl.getParameter(gl.DEPTH_BITS));
      result.push("webgl green bits:" + gl.getParameter(gl.GREEN_BITS));
      result.push("webgl max anisotropy:" + maxAnisotropy(gl));
      result.push("webgl max combined texture image units:" + gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
      result.push("webgl max cube map texture size:" + gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE));
      result.push("webgl max fragment uniform vectors:" + gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS));
      result.push("webgl max render buffer size:" + gl.getParameter(gl.MAX_RENDERBUFFER_SIZE));
      result.push("webgl max texture image units:" + gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS));
      result.push("webgl max texture size:" + gl.getParameter(gl.MAX_TEXTURE_SIZE));
      result.push("webgl max varying vectors:" + gl.getParameter(gl.MAX_VARYING_VECTORS));
      result.push("webgl max vertex attribs:" + gl.getParameter(gl.MAX_VERTEX_ATTRIBS));
      result.push("webgl max vertex texture image units:" + gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS));
      result.push("webgl max vertex uniform vectors:" + gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS));
      result.push("webgl max viewport dims:" + fa2s(gl.getParameter(gl.MAX_VIEWPORT_DIMS)));
      result.push("webgl red bits:" + gl.getParameter(gl.RED_BITS));
      result.push("webgl renderer:" + gl.getParameter(gl.RENDERER));
      result.push("webgl shading language version:" + gl.getParameter(gl.SHADING_LANGUAGE_VERSION));
      result.push("webgl stencil bits:" + gl.getParameter(gl.STENCIL_BITS));
      result.push("webgl vendor:" + gl.getParameter(gl.VENDOR));
      result.push("webgl version:" + gl.getParameter(gl.VERSION));

      try {
        // Add the unmasked vendor and unmasked renderer if the debug_renderer_info extension is available
        var extensionDebugRendererInfo = gl.getExtension("WEBGL_debug_renderer_info");
        if (extensionDebugRendererInfo) {
          result.push("webgl unmasked vendor:" + gl.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL));
          result.push("webgl unmasked renderer:" + gl.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL));
        }
      } catch(e) { /* squelch */ }

      if (!gl.getShaderPrecisionFormat) {
        return result.join("~");
      }

      result.push("webgl vertex shader high float precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT ).precision);
      result.push("webgl vertex shader high float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT ).rangeMin);
      result.push("webgl vertex shader high float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT ).rangeMax);
      result.push("webgl vertex shader medium float precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT ).precision);
      result.push("webgl vertex shader medium float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT ).rangeMin);
      result.push("webgl vertex shader medium float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT ).rangeMax);
      result.push("webgl vertex shader low float precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT ).precision);
      result.push("webgl vertex shader low float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT ).rangeMin);
      result.push("webgl vertex shader low float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT ).rangeMax);
      result.push("webgl fragment shader high float precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT ).precision);
      result.push("webgl fragment shader high float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT ).rangeMin);
      result.push("webgl fragment shader high float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT ).rangeMax);
      result.push("webgl fragment shader medium float precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT ).precision);
      result.push("webgl fragment shader medium float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT ).rangeMin);
      result.push("webgl fragment shader medium float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT ).rangeMax);
      result.push("webgl fragment shader low float precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT ).precision);
      result.push("webgl fragment shader low float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT ).rangeMin);
      result.push("webgl fragment shader low float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT ).rangeMax);
      result.push("webgl vertex shader high int precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_INT ).precision);
      result.push("webgl vertex shader high int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_INT ).rangeMin);
      result.push("webgl vertex shader high int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_INT ).rangeMax);
      result.push("webgl vertex shader medium int precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_INT ).precision);
      result.push("webgl vertex shader medium int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_INT ).rangeMin);
      result.push("webgl vertex shader medium int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_INT ).rangeMax);
      result.push("webgl vertex shader low int precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_INT ).precision);
      result.push("webgl vertex shader low int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_INT ).rangeMin);
      result.push("webgl vertex shader low int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_INT ).rangeMax);
      result.push("webgl fragment shader high int precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_INT ).precision);
      result.push("webgl fragment shader high int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_INT ).rangeMin);
      result.push("webgl fragment shader high int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_INT ).rangeMax);
      result.push("webgl fragment shader medium int precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_INT ).precision);
      result.push("webgl fragment shader medium int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_INT ).rangeMin);
      result.push("webgl fragment shader medium int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_INT ).rangeMax);
      result.push("webgl fragment shader low int precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT ).precision);
      result.push("webgl fragment shader low int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT ).rangeMin);
      result.push("webgl fragment shader low int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT ).rangeMax);
      return result.join("~");
    },
    getAdBlock: function(){
      var ads = document.createElement("div");
      ads.innerHTML = "&nbsp;";
      ads.className = "adsbox";
      var result = false;
      try {
        // body may not exist, that's why we need try/catch
        document.body.appendChild(ads);
        result = document.getElementsByClassName("adsbox")[0].offsetHeight === 0;
        document.body.removeChild(ads);
      } catch (e) {
        result = false;
      }
      return result;
    },
    getHasLiedLanguages: function(){
      //We check if navigator.language is equal to the first language of navigator.languages
      if(typeof navigator.languages !== "undefined"){
        try {
          var firstLanguages = navigator.languages[0].substr(0, 2);
          if(firstLanguages !== navigator.language.substr(0, 2)){
            return true;
          }
        } catch(err) {
          return true;
        }
      }
      return false;
    },
    getHasLiedResolution: function(){
      if(screen.width < screen.availWidth){
        return true;
      }
      if(screen.height < screen.availHeight){
        return true;
      }
      return false;
    },
    getHasLiedOs: function(){
      var userAgent = navigator.userAgent.toLowerCase();
      var oscpu = navigator.oscpu;
      var platform = navigator.platform.toLowerCase();
      var os;
      //We extract the OS from the user agent (respect the order of the if else if statement)
      if(userAgent.indexOf("windows phone") >= 0){
        os = "Windows Phone";
      } else if(userAgent.indexOf("win") >= 0){
        os = "Windows";
      } else if(userAgent.indexOf("android") >= 0){
        os = "Android";
      } else if(userAgent.indexOf("linux") >= 0){
        os = "Linux";
      } else if(userAgent.indexOf("iphone") >= 0 || userAgent.indexOf("ipad") >= 0 ){
        os = "iOS";
      } else if(userAgent.indexOf("mac") >= 0){
        os = "Mac";
      } else{
        os = "Other";
      }
      // We detect if the person uses a mobile device
      var mobileDevice;
      if (("ontouchstart" in window) ||
           (navigator.maxTouchPoints > 0) ||
           (navigator.msMaxTouchPoints > 0)) {
            mobileDevice = true;
      } else{
        mobileDevice = false;
      }

      if(mobileDevice && os !== "Windows Phone" && os !== "Android" && os !== "iOS" && os !== "Other"){
        return true;
      }

      // We compare oscpu with the OS extracted from the UA
      if(typeof oscpu !== "undefined"){
        oscpu = oscpu.toLowerCase();
        if(oscpu.indexOf("win") >= 0 && os !== "Windows" && os !== "Windows Phone"){
          return true;
        } else if(oscpu.indexOf("linux") >= 0 && os !== "Linux" && os !== "Android"){
          return true;
        } else if(oscpu.indexOf("mac") >= 0 && os !== "Mac" && os !== "iOS"){
          return true;
        } else if(oscpu.indexOf("win") === 0 && oscpu.indexOf("linux") === 0 && oscpu.indexOf("mac") >= 0 && os !== "other"){
          return true;
        }
      }

      //We compare platform with the OS extracted from the UA
      if(platform.indexOf("win") >= 0 && os !== "Windows" && os !== "Windows Phone"){
        return true;
      } else if((platform.indexOf("linux") >= 0 || platform.indexOf("android") >= 0 || platform.indexOf("pike") >= 0) && os !== "Linux" && os !== "Android"){
        return true;
      } else if((platform.indexOf("mac") >= 0 || platform.indexOf("ipad") >= 0 || platform.indexOf("ipod") >= 0 || platform.indexOf("iphone") >= 0) && os !== "Mac" && os !== "iOS"){
        return true;
      } else if(platform.indexOf("win") === 0 && platform.indexOf("linux") === 0 && platform.indexOf("mac") >= 0 && os !== "other"){
        return true;
      }

      if(typeof navigator.plugins === "undefined" && os !== "Windows" && os !== "Windows Phone"){
        //We are are in the case where the person uses ie, therefore we can infer that it's windows
        return true;
      }

      return false;
    },
    getHasLiedBrowser: function () {
      var userAgent = navigator.userAgent.toLowerCase();
      var productSub = navigator.productSub;

      //we extract the browser from the user agent (respect the order of the tests)
      var browser;
      if(userAgent.indexOf("firefox") >= 0){
        browser = "Firefox";
      } else if(userAgent.indexOf("opera") >= 0 || userAgent.indexOf("opr") >= 0){
        browser = "Opera";
      } else if(userAgent.indexOf("chrome") >= 0){
        browser = "Chrome";
      } else if(userAgent.indexOf("safari") >= 0){
        browser = "Safari";
      } else if(userAgent.indexOf("trident") >= 0){
        browser = "Internet Explorer";
      } else{
        browser = "Other";
      }

      if((browser === "Chrome" || browser === "Safari" || browser === "Opera") && productSub !== "20030107"){
        return true;
      }

      var tempRes = eval.toString().length;
      if(tempRes === 37 && browser !== "Safari" && browser !== "Firefox" && browser !== "Other"){
        return true;
      } else if(tempRes === 39 && browser !== "Internet Explorer" && browser !== "Other"){
        return true;
      } else if(tempRes === 33 && browser !== "Chrome" && browser !== "Opera" && browser !== "Other"){
        return true;
      }

      //We create an error to see how it is handled
      var errFirefox;
      try {
        throw "a";
      } catch(err){
        try{
          err.toSource();
          errFirefox = true;
        } catch(errOfErr){
          errFirefox = false;
        }
      }
      if(errFirefox && browser !== "Firefox" && browser !== "Other"){
        return true;
      }
      return false;
    },
    isCanvasSupported: function () {
      var elem = document.createElement("canvas");
      return !!(elem.getContext && elem.getContext("2d"));
    },
    isWebGlSupported: function() {
      // code taken from Modernizr
      if (!this.isCanvasSupported()) {
        return false;
      }

      var canvas = document.createElement("canvas"),
          glContext;

      try {
        glContext = canvas.getContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
      } catch(e) {
        glContext = false;
      }

      return !!window.WebGLRenderingContext && !!glContext;
    },
    isIE: function () {
      if(navigator.appName === "Microsoft Internet Explorer") {
        return true;
      } else if(navigator.appName === "Netscape" && /Trident/.test(navigator.userAgent)) { // IE 11
        return true;
      }
      return false;
    },
    hasSwfObjectLoaded: function(){
      return typeof window.swfobject !== "undefined";
    },
    hasMinFlashInstalled: function () {
      return swfobject.hasFlashPlayerVersion("9.0.0");
    },
    addFlashDivNode: function() {
      var node = document.createElement("div");
      node.setAttribute("id", this.options.swfContainerId);
      document.body.appendChild(node);
    },
    loadSwfAndDetectFonts: function(done) {
      var hiddenCallback = "___fp_swf_loaded";
      window[hiddenCallback] = function(fonts) {
        done(fonts);
      };
      var id = this.options.swfContainerId;
      this.addFlashDivNode();
      var flashvars = { onReady: hiddenCallback};
      var flashparams = { allowScriptAccess: "always", menu: "false" };
      swfobject.embedSWF(this.options.swfPath, id, "1", "1", "9.0.0", false, flashvars, flashparams, {});
    },
    getWebglCanvas: function() {
      var canvas = document.createElement("canvas");
      var gl = null;
      try {
        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      } catch(e) { /* squelch */ }
      if (!gl) { gl = null; }
      return gl;
    },
    each: function (obj, iterator, context) {
      if (obj === null) {
        return;
      }
      if (this.nativeForEach && obj.forEach === this.nativeForEach) {
        obj.forEach(iterator, context);
      } else if (obj.length === +obj.length) {
        for (var i = 0, l = obj.length; i < l; i++) {
          if (iterator.call(context, obj[i], i, obj) === {}) { return; }
        }
      } else {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (iterator.call(context, obj[key], key, obj) === {}) { return; }
          }
        }
      }
    },

    map: function(obj, iterator, context) {
      var results = [];
      // Not using strict equality so that this acts as a
      // shortcut to checking for `null` and `undefined`.
      if (obj == null) { return results; }
      if (this.nativeMap && obj.map === this.nativeMap) { return obj.map(iterator, context); }
      this.each(obj, function(value, index, list) {
        results[results.length] = iterator.call(context, value, index, list);
      });
      return results;
    },

    /// MurmurHash3 related functions

    //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // added together as a 64bit int (as an array of two 32bit ints).
    //
    x64Add: function(m, n) {
      m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
      n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
      var o = [0, 0, 0, 0];
      o[3] += m[3] + n[3];
      o[2] += o[3] >>> 16;
      o[3] &= 0xffff;
      o[2] += m[2] + n[2];
      o[1] += o[2] >>> 16;
      o[2] &= 0xffff;
      o[1] += m[1] + n[1];
      o[0] += o[1] >>> 16;
      o[1] &= 0xffff;
      o[0] += m[0] + n[0];
      o[0] &= 0xffff;
      return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]];
    },

    //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // multiplied together as a 64bit int (as an array of two 32bit ints).
    //
    x64Multiply: function(m, n) {
      m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
      n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
      var o = [0, 0, 0, 0];
      o[3] += m[3] * n[3];
      o[2] += o[3] >>> 16;
      o[3] &= 0xffff;
      o[2] += m[2] * n[3];
      o[1] += o[2] >>> 16;
      o[2] &= 0xffff;
      o[2] += m[3] * n[2];
      o[1] += o[2] >>> 16;
      o[2] &= 0xffff;
      o[1] += m[1] * n[3];
      o[0] += o[1] >>> 16;
      o[1] &= 0xffff;
      o[1] += m[2] * n[2];
      o[0] += o[1] >>> 16;
      o[1] &= 0xffff;
      o[1] += m[3] * n[1];
      o[0] += o[1] >>> 16;
      o[1] &= 0xffff;
      o[0] += (m[0] * n[3]) + (m[1] * n[2]) + (m[2] * n[1]) + (m[3] * n[0]);
      o[0] &= 0xffff;
      return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]];
    },
    //
    // Given a 64bit int (as an array of two 32bit ints) and an int
    // representing a number of bit positions, returns the 64bit int (as an
    // array of two 32bit ints) rotated left by that number of positions.
    //
    x64Rotl: function(m, n) {
      n %= 64;
      if (n === 32) {
        return [m[1], m[0]];
      }
      else if (n < 32) {
        return [(m[0] << n) | (m[1] >>> (32 - n)), (m[1] << n) | (m[0] >>> (32 - n))];
      }
      else {
        n -= 32;
        return [(m[1] << n) | (m[0] >>> (32 - n)), (m[0] << n) | (m[1] >>> (32 - n))];
      }
    },
    //
    // Given a 64bit int (as an array of two 32bit ints) and an int
    // representing a number of bit positions, returns the 64bit int (as an
    // array of two 32bit ints) shifted left by that number of positions.
    //
    x64LeftShift: function(m, n) {
      n %= 64;
      if (n === 0) {
        return m;
      }
      else if (n < 32) {
        return [(m[0] << n) | (m[1] >>> (32 - n)), m[1] << n];
      }
      else {
        return [m[1] << (n - 32), 0];
      }
    },
    //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // xored together as a 64bit int (as an array of two 32bit ints).
    //
    x64Xor: function(m, n) {
      return [m[0] ^ n[0], m[1] ^ n[1]];
    },
    //
    // Given a block, returns murmurHash3's final x64 mix of that block.
    // (`[0, h[0] >>> 1]` is a 33 bit unsigned right shift. This is the
    // only place where we need to right shift 64bit ints.)
    //
    x64Fmix: function(h) {
      h = this.x64Xor(h, [0, h[0] >>> 1]);
      h = this.x64Multiply(h, [0xff51afd7, 0xed558ccd]);
      h = this.x64Xor(h, [0, h[0] >>> 1]);
      h = this.x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53]);
      h = this.x64Xor(h, [0, h[0] >>> 1]);
      return h;
    },

    //
    // Given a string and an optional seed as an int, returns a 128 bit
    // hash using the x64 flavor of MurmurHash3, as an unsigned hex.
    //
    x64hash128: function (key, seed) {
      key = key || "";
      seed = seed || 0;
      var remainder = key.length % 16;
      var bytes = key.length - remainder;
      var h1 = [0, seed];
      var h2 = [0, seed];
      var k1 = [0, 0];
      var k2 = [0, 0];
      var c1 = [0x87c37b91, 0x114253d5];
      var c2 = [0x4cf5ad43, 0x2745937f];
      for (var i = 0; i < bytes; i = i + 16) {
        k1 = [((key.charCodeAt(i + 4) & 0xff)) | ((key.charCodeAt(i + 5) & 0xff) << 8) | ((key.charCodeAt(i + 6) & 0xff) << 16) | ((key.charCodeAt(i + 7) & 0xff) << 24), ((key.charCodeAt(i) & 0xff)) | ((key.charCodeAt(i + 1) & 0xff) << 8) | ((key.charCodeAt(i + 2) & 0xff) << 16) | ((key.charCodeAt(i + 3) & 0xff) << 24)];
        k2 = [((key.charCodeAt(i + 12) & 0xff)) | ((key.charCodeAt(i + 13) & 0xff) << 8) | ((key.charCodeAt(i + 14) & 0xff) << 16) | ((key.charCodeAt(i + 15) & 0xff) << 24), ((key.charCodeAt(i + 8) & 0xff)) | ((key.charCodeAt(i + 9) & 0xff) << 8) | ((key.charCodeAt(i + 10) & 0xff) << 16) | ((key.charCodeAt(i + 11) & 0xff) << 24)];
        k1 = this.x64Multiply(k1, c1);
        k1 = this.x64Rotl(k1, 31);
        k1 = this.x64Multiply(k1, c2);
        h1 = this.x64Xor(h1, k1);
        h1 = this.x64Rotl(h1, 27);
        h1 = this.x64Add(h1, h2);
        h1 = this.x64Add(this.x64Multiply(h1, [0, 5]), [0, 0x52dce729]);
        k2 = this.x64Multiply(k2, c2);
        k2 = this.x64Rotl(k2, 33);
        k2 = this.x64Multiply(k2, c1);
        h2 = this.x64Xor(h2, k2);
        h2 = this.x64Rotl(h2, 31);
        h2 = this.x64Add(h2, h1);
        h2 = this.x64Add(this.x64Multiply(h2, [0, 5]), [0, 0x38495ab5]);
      }
      k1 = [0, 0];
      k2 = [0, 0];
      switch(remainder) {
        case 15:
          k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 14)], 48));
        case 14:
          k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 13)], 40));
        case 13:
          k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 12)], 32));
        case 12:
          k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 11)], 24));
        case 11:
          k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 10)], 16));
        case 10:
          k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 9)], 8));
        case 9:
          k2 = this.x64Xor(k2, [0, key.charCodeAt(i + 8)]);
          k2 = this.x64Multiply(k2, c2);
          k2 = this.x64Rotl(k2, 33);
          k2 = this.x64Multiply(k2, c1);
          h2 = this.x64Xor(h2, k2);
        case 8:
          k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 7)], 56));
        case 7:
          k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 6)], 48));
        case 6:
          k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 5)], 40));
        case 5:
          k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 4)], 32));
        case 4:
          k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 3)], 24));
        case 3:
          k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 2)], 16));
        case 2:
          k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 1)], 8));
        case 1:
          k1 = this.x64Xor(k1, [0, key.charCodeAt(i)]);
          k1 = this.x64Multiply(k1, c1);
          k1 = this.x64Rotl(k1, 31);
          k1 = this.x64Multiply(k1, c2);
          h1 = this.x64Xor(h1, k1);
      }
      h1 = this.x64Xor(h1, [0, key.length]);
      h2 = this.x64Xor(h2, [0, key.length]);
      h1 = this.x64Add(h1, h2);
      h2 = this.x64Add(h2, h1);
      h1 = this.x64Fmix(h1);
      h2 = this.x64Fmix(h2);
      h1 = this.x64Add(h1, h2);
      h2 = this.x64Add(h2, h1);
      return ("00000000" + (h1[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h1[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[1] >>> 0).toString(16)).slice(-8);
    }
  };
  Fingerprint2.VERSION = "1.5.1";
  return Fingerprint2;
});


/***/ }),

/***/ "./src/modules/browser_fingerprint/index.js":
/*!**************************************************!*\
  !*** ./src/modules/browser_fingerprint/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 浏览器指纹
 */

var fingerprint = __webpack_require__(/*! ./fingerprint2 */ "./src/modules/browser_fingerprint/fingerprint2.js");
var bid = __webpack_require__(/*! ../bid */ "./src/modules/bid/index.js");
var save = __webpack_require__(/*! ./save */ "./src/modules/browser_fingerprint/save.js");

/**
 * 是否支持canvas
 * 
 * @returns 
 */
function isSupportCanvas(){
  var elem = document.createElement('canvas');
  return !!(elem.getContext && elem.getContext('2d'));
}

module.exports = {
  get: function(){
    return new Promise(function(resolve, reject){
      if (isSupportCanvas()) {
        new fingerprint({
          dontUseFakeFontInCanvas: true,
          swfContainerId : true,
          swfPath : true,
          // userDefinedFonts : true,
          excludeUserAgent : true,
          // excludeLanguage : true,
          // excludeColorDepth : true,
          excludeScreenResolution : true,
          excludeAvailableScreenResolution: true,
          // excludeTimezoneOffset : true,
          // excludeSessionStorage : true,
          // excludeIndexedDB : true,
          // excludeAddBehavior : true,
          // excludeOpenDatabase : true,
          // excludeCpuClass : true,
          // excludePlatform : true,
          // excludeDoNotTrack : true,
          // excludeCanvas : true,
          // excludeWebGL : true,
          excludeAdBlock : true,
          // excludeHasLiedLanguages : true,
          // excludeHasLiedResolution : true,
          // excludeHasLiedOs : true,
          // excludeHasLiedBrowser : true,
          // excludeJsFonts : true,
          excludeFlashFonts : true,
          excludePlugins : true,
          excludeIEPlugins : true
          // excludeTouchSupport : true,
          // excludePixelRatio : true,
          // excludeHardwareConcurrency : true,
        }).get(function(result, components){
          save(result);
          resolve(result);
          return;
        });
      }
      else{
        resolve(bid.init())
      }      
    })

  }
}

/***/ }),

/***/ "./src/modules/browser_fingerprint/save.js":
/*!*************************************************!*\
  !*** ./src/modules/browser_fingerprint/save.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 保存浏览器指纹
 */

var cookie = __webpack_require__(/*! ../cookie */ "./src/modules/cookie/index.js");

module.exports = function(fingerprint){
  if (fingerprint) {
    cookie.set('qgqp_b_id', fingerprint, 10000, '.eastmoney.com');
  }
}


/***/ }),

/***/ "./src/modules/collect_stock/index.ts":
/*!********************************************!*\
  !*** ./src/modules/collect_stock/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * 获取用户的自选股
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var user = __webpack_require__(/*! ../user */ "./src/modules/user/index.js");
var fingerprint = __webpack_require__(/*! ../browser_fingerprint */ "./src/modules/browser_fingerprint/index.js");
/**
 * 筛选沪深股票
 * @param stocks
 */
function getHSStock(stocks) {
    var codes = stocks.split(',');
    var hsab_codes = []; //沪深
    codes.forEach(function (v) {
        if (v.indexOf('0.') == 0 || v.indexOf('1.') == 0) {
            hsab_codes.push(v.substring(2));
        }
    });
    return hsab_codes.join(',');
}
function default_1() {
    return __awaiter(this, void 0, void 0, function () {
        var fp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(user.get() != null)) return [3 /*break*/, 1];
                    return [2 /*return*/, $.ajax({
                            url: 'http://myfavor.eastmoney.com/mystock_web?f=gsaandcheck&cb=?',
                            type: 'GET',
                            dataType: 'jsonp',
                            timeout: 5000
                        }).then(function (json) {
                            if (json.result == "1" && json.data.list != "") {
                                return getHSStock(json.data.list);
                            }
                            else {
                                return "";
                            }
                        })];
                case 1: return [4 /*yield*/, fingerprint.get()];
                case 2:
                    fp = _a.sent();
                    return [2 /*return*/, $.ajax({
                            url: 'http://myfavor.eastmoney.com/mystock_webanonym?f=gsaandcheck&cb=?',
                            type: 'GET',
                            dataType: 'jsonp',
                            timeout: 5000
                        }).then(function (json) {
                            //console.info(json)
                            if (json.result == "1" && json.data.list != "") {
                                return getHSStock(json.data.list);
                            }
                            else {
                                return "";
                            }
                        })];
            }
        });
    });
} //http://myfavor.eastmoney.com/mystock_web?f=gsaandcheck&cb=a
exports["default"] = default_1;


/***/ }),

/***/ "./src/modules/commonutil/utils.ts":
/*!*****************************************!*\
  !*** ./src/modules/commonutil/utils.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var util = {
    //这个方法暂时保留
    GetDayStr1: function (preYear, preMonth, preDay) {
        var dd = new Date();
        var y = dd.getFullYear() - preYear;
        var m = dd.getMonth() + 1;
        var d = dd.getDate();
        var CurrentDate = "";
        CurrentDate += y + "-";
        if (m >= 10) {
            CurrentDate += m + "-";
        }
        else {
            CurrentDate += "0" + m + "-";
        }
        if (d >= 10) {
            CurrentDate += d;
        }
        else {
            CurrentDate += "0" + d;
        }
        return CurrentDate;
    },
    // //获取时间差
    // getDateStr: function (preYear: any, preMonth:any,preDay:any) {
    //     let dd = new Date();
    //     let y = dd.getFullYear() + preYear;
    //     let m = dd.getMonth() + 1 + preMonth;
    //     let d = dd.getDate() + preDay;
    //     let CurrentDate = "";
    //     CurrentDate += y + "-";
    //     if (m >= 10) {
    //         CurrentDate += m + "-";
    //     } else {
    //         CurrentDate += "0" + m + "-";
    //     }
    //     if (d >= 10) {
    //         CurrentDate += d;
    //     } else {
    //         CurrentDate += "0" + d;
    //     }
    //     return CurrentDate;
    // },
    //获取时间差:该方法只能取当前时间及之前时间
    getDateStr: function (preYear, preMonth, preDay) {
        var dd = new Date();
        var y = dd.getFullYear() + preYear;
        var m = dd.getMonth() + 1 + preMonth;
        var d = dd.getDate() + preDay;
        var CurrentDate = "";
        //日期
        if (d == 0) {
            d = "01";
        }
        else if (d < 0) { //小于0的时候要做月份处理
            m = m - 1; //月份减一
            var dd_1 = new Date(y, m, 0);
            var mdays = dd_1.getDate();
            d = mdays - Math.abs(d);
            if (0 < d && d < 10) {
                d = "0" + d;
            }
            ;
        }
        else if (0 < d && d < 10) { //小于10日
            d = "0" + d;
        }
        //月份 
        if (m == 0) {
            m = '01';
        }
        else if (m < 0) {
            y = y - 1;
            m = 13 - Math.abs(m); //月份12+1
            if (0 < m && m < 10) {
                m = "0" + m;
            }
            ;
        }
        else if (0 < m && m < 10) {
            m = "0" + m;
        }
        CurrentDate = y + "-" + m + '-' + d;
        return CurrentDate;
    },
    //将标注时间格式转为中文年月日
    getchinesedate: function (str) {
        // let date = new Date(str);
        if (!str)
            return '';
        var date = new Date(Date.parse(str.replace(/-/g, "/"))); //兼容ie浏览器时间格式处理
        var Y = date.getFullYear() + '年';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '月';
        var D = date.getDate() + '日  ';
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + '';
        // let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        // return Y + M + D + h + m;
        return Y + M + D;
    },
    getUrlParams: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        // if (r != null) return unescape(r[2]); return null;
        if (r != null)
            return decodeURI(r[2]);
        return null;
    },
    //去除数组重复元素
    uniqueArr: function (arr) {
        var tmp = new Array();
        for (var i in arr) {
            if (tmp.indexOf(arr[i]) == -1) {
                tmp.push(arr[i]);
            }
        }
        return tmp;
    },
    uniqueArr2: function (arr) {
        var ret = [];
        var hash = {};
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            var key = typeof (item) + item;
            if (hash[key] !== 1) {
                ret.push(item);
                hash[key] = 1;
            }
        }
        return ret;
    },
    formatquteid: function (stockcode, market) {
        if (!stockcode || !market)
            return '';
        var marketcode = '';
        switch (market) {
            case 'SHENZHEN':
                marketcode = 'SZ' + stockcode;
                break;
            case 'SHEN':
                marketcode = 'SZ' + stockcode;
                break;
            case 'SHANGHAI':
                marketcode = 'SH' + stockcode;
                break;
            case 'HU':
                marketcode = 'SH' + stockcode;
                break;
        }
        ;
        return marketcode;
    },
    formatcodeMk: function (stockcode, market) {
        var codeMk = '';
        if (!stockcode || !market)
            return '';
        if (market.indexOf('SHEN') > -1 || market.indexOf('SHENZHEN') > -1) {
            codeMk = stockcode ? stockcode + '2' : '';
        }
        if (market.indexOf('HU') > -1 || market.indexOf('SHANGHAI') > -1) {
            codeMk = stockcode ? stockcode + '1' : '';
        }
        return codeMk;
    },
    formatMarketcode: function (stockcode, market) {
        var codeMk = '';
        if (!stockcode || !market)
            return '';
        if (market.indexOf('SHEN') > -1 || market.indexOf('SHENZHEN') > -1) {
            codeMk = stockcode ? '0.' + stockcode : '';
        }
        if (market.indexOf('HU') > -1 || market.indexOf('SHANGHAI') > -1) {
            codeMk = stockcode ? '1.' + stockcode : '';
        }
        return codeMk;
    },
    //字符串截取
    txtLeft: function (txt, n, needtip) {
        if (txt == null || txt == "") {
            return "";
        }
        var len = 0;
        for (var i = 0; i < txt.length; i++) {
            if (txt.charCodeAt(i) > 255) {
                len += 2;
            }
            else {
                len++;
            }
            if (len > n + 3) {
                if (needtip) {
                    return '<span title="' + txt + '">' + txt.substring(0, i) + "...</span>";
                }
                else {
                    return txt.substring(0, i) + "..";
                }
                break;
            }
        }
        return txt;
    }
};
exports["default"] = util;


/***/ }),

/***/ "./src/modules/cookie/index.js":
/*!*************************************!*\
  !*** ./src/modules/cookie/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * cookie
 */


var cookie = {
	get: function (name) {
		var xarr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
		if (xarr != null)
			// return decodeURIComponent(xarr[2]);
			return unescape(xarr[2]);
		return null;
	},
	set: function(key,value,expiredays,domain){
		var cookiestr = key + "=" + escape(value)

		if (expiredays != undefined) {
			var exdate = new Date();
			exdate.setDate(exdate.getDate() + expiredays);	
			cookiestr += ";expires=" + exdate.toGMTString()
		}
		if (domain != undefined) {
			cookiestr += ";domain=" + domain
		}
		cookiestr += ';path=/'
		document.cookie = cookiestr

	},
	del: function (key, domain) {
		var exdate = new Date((new Date).getTime() - 1);
		if (domain) {
			document.cookie = key + '=;path=/;expires=' + exdate.toGMTString() + ';domain=' + domain;
		}
		else{
			document.cookie = key + '=;path=/;expires=' + exdate.toGMTString();
		}
		
	}
};

module.exports = cookie;

/***/ }),

/***/ "./src/modules/datatable/dataconfig.ts":
/*!*********************************************!*\
  !*** ./src/modules/datatable/dataconfig.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/**
 * 表格配置
 * paramname 排序必须字段
 *
 */
var utils_1 = __importDefault(__webpack_require__(/*! ../commonutil/utils */ "./src/modules/commonutil/utils.ts"));
//评级变动配置
function getRatingChangeStr(ratingChange) {
    var ratingChangeName = "";
    switch (ratingChange) {
        case 0:
            ratingChangeName = '调高';
            break;
        case 1:
            ratingChangeName = '调低';
            break;
        case 2:
            ratingChangeName = '首次';
            break;
        case 3:
            ratingChangeName = '维持';
            break;
        case 4:
            ratingChangeName = '无';
            break;
        default:
            ratingChangeName = '-';
            break;
    }
    return ratingChangeName;
}
;
//作者名字处理:len需要截取的字符串长度2个单位等于一个汉字
function authorFormat(v, len) {
    var authorInfo = v.author ? v.author : '';
    var anthorStr = '';
    if (authorInfo != '' && authorInfo.length > 0) {
        for (var i = 0; i < authorInfo.length; i++) {
            var name_1 = authorInfo[i] ? authorInfo[i].split('.')[1] : '';
            if (len) {
                // name = '经纪业务管理总部财富管理部 '
                name_1 = utils_1["default"].txtLeft(name_1, len, true);
            }
            var id = authorInfo[i] ? authorInfo[i].split('.')[0] : '';
            anthorStr += "<a class=\"tt-wrap\" href=\"personalpublish.jshtml?authorid=" + id + "&orgcode=" + v.orgCode + ("\">" + name_1 + "</a>&nbsp;");
        }
    }
    return anthorStr;
}
;
//单个机构和单个作者正文跳转地址
function getZWUrl(v) {
    if (v.columnType == '个股研报') {
        var date = ((v.publishDate).split(' ')[0]).replace(/-/g, '');
        return "<a href=\"zw_stock.jshtml?encodeUrl=" + v.encodeUrl + ("\">" + v.title + "</a>");
        // return `<a href="http://data.eastmoney.com/report/ReportRedirect.aspx?date=` + date + `&code=` + v.infoCode + `">${v.title}</a>`;
    }
    ;
    if (v.columnType == '行业研报') {
        return "<a href=\"zw_industry.jshtml?encodeUrl=" + v.encodeUrl + ("\">" + v.title + "</a>");
    }
    ;
    if (v.columnType == '券商晨会') {
        return "<a href=\"zw_brokerreport.jshtml?encodeUrl=" + v.encodeUrl + ("\">" + v.title + "</a>");
    }
    ;
    if (v.columnType == '宏观研究' || v.columnType == '宏观策略') {
        return "<a href=\"zw_macresearch.jshtml?encodeUrl=" + v.encodeUrl + ("\">" + v.title + "</a>");
    }
    ;
    if (v.columnType == '策略报告') {
        return "<a href=\"zw_strategy.jshtml?encodeUrl=" + v.encodeUrl + ("\">" + v.title + "</a>");
    }
}
;
//单个机构和单个作者类型跳转地址
function geTypeUrl(v) {
    if (v.columnType == '个股研报') {
        return "<a href=\"stock.jshtml\">" + v.columnType + "</a>";
    }
    ;
    if (v.columnType == '行业研报') {
        return "<a href=\"industry.jshtml\">" + v.columnType + "</a>";
    }
    ;
    if (v.columnType == '券商晨会') {
        return "<a href=\"brokerreport.jshtml\">" + v.columnType + "</a>";
    }
    ;
    if (v.columnType == '宏观研究' || v.columnType == '宏观策略') {
        return "<a href=\"macresearch.jshtml\">" + v.columnType + "</a>";
    }
    ;
    if (v.columnType == '策略报告') {
        return "<a href=\"strategyreport.jshtml\">" + v.columnType + "</a>";
    }
}
;
//单个机构和单个作者研究对象取值和跳转地址
function getYJDXUrl(v) {
    if (v.columnType == '个股研报') {
        if (v.stockCode != '' && v.stockName != '') {
            // return `<a href="http://data.eastmoney.com/stockdata/` + v.stockCode + `.html">${v.stockName}(${v.stockCode})</a>`
            return "<a href=\"singlestock.jshtml?stockcode=" + v.stockCode + "&market=" + v.market + ("\">" + v.stockName + "(" + v.stockCode + ")</a>");
        }
    }
    else if (v.columnType == '行业研报') { //产品确认：跳转只带行业代码即可，不带机构
        if (v.industryName != '' && v.industryCode != '') {
            return "<a href=\"industry.jshtml?hyid=" + v.industryCode + ("\">" + v.industryName + "</a>");
        }
    }
    else {
        return '';
    }
}
;
var config = {
    "industryresearch": {
        config: [
            {
                width: 44,
                th: function name(v) {
                    return '序号';
                },
                td: function (v) {
                    return v.index + 1;
                }
            },
            {
                th: function name(v) {
                    return '行业名称';
                },
                td: function (v) {
                    // return `<a>${v.industryName}</a>`
                    //
                    // return `<a href="industry?hyname=` + v.industryName + `&hyid=` + v.industryCode + `">${v.industryName}</a>`
                    var bkcode = v.industryCode ? v.industryCode.length > 3 ? 'bk' + v.industryCode : 'bk0' + v.industryCode : '';
                    return "<a href=\"http://quote.eastmoney.com/center/boardlist.html#boards-" + bkcode + ("\">" + v.industryName + "</a>");
                }
            },
            {
                th: function name(v) {
                    return '涨跌幅';
                },
                td: function (v) {
                    return '<span class="hqspan" data-hqtype="zdf" data-code="' + v.industryCode + '"></span>';
                }
            },
            {
                width: 130,
                th: function name(v) {
                    return '相关';
                },
                td: function (v) {
                    var bkcode = v.industryCode ? v.industryCode.length > 3 ? 'bk' + v.industryCode : 'bk0' + v.industryCode : '';
                    //`<a href="http://data.eastmoney.com/report/` + v.industryCode+`yb_1.html" class="red">详细</a>&nbsp;
                    return "<a href=\"industry.jshtml?hyid=" + v.industryCode + "\" class=\"red\">\u8BE6\u7EC6</a>&nbsp;\n                  <a href=\"http://data.eastmoney.com/bkzj/" + v.industryCode + ".html\">\u8D44\u91D1\u6D41</a>&nbsp;\n                  <a href=\"http://guba.eastmoney.com/list," + bkcode + ".html\">\u80A1\u5427</a>&nbsp;\n                  <a href=\"http://stock.eastmoney.com/hangye/hy" + v.industryCode + ".html\">\u4E13\u533A</a>";
                }
            },
            {
                width: 220,
                th: function name(v) {
                    return '报告名称';
                },
                td: function (v) {
                    return "<a href=\"zw_industry.jshtml?encodeUrl=" + v.encodeUrl + ("\">" + v.title + "</a>");
                }
            },
            {
                th: function name(v) {
                    return '评级<br>类型';
                },
                td: function (v) {
                    var emRatingName = v.emRatingName ? v.emRatingName : '-';
                    return "" + emRatingName;
                }
            },
            {
                th: function name(v) {
                    return '评级<br>变动';
                },
                td: function (v) {
                    var ratingChangeName = getRatingChangeStr(v.ratingChange);
                    return "" + ratingChangeName;
                }
            },
            {
                th: function name(v) {
                    return '机构名称';
                },
                td: function (v) {
                    return "<a href=\"orgpublish.jshtml?orgcode=" + v.orgCode + ("\">" + (v.orgSName ? v.orgSName : v.orgName) + "</a>");
                }
            },
            {
                paramname: 'count',
                th: function name(v) {
                    return '近一月行<br>业研报数';
                },
                // sort: {
                //   asc: {
                //     sortkey: 'count',
                //     value: 'asc'
                //   },
                //   desc: {
                //     sortkey: 'count',
                //     value: 'desc'
                //   },
                //   default: {
                //     sortkey: 'count',
                //     value: ''
                //   }
                // },
                td: function (v) {
                    return "" + v.count;
                }
            },
            {
                th: function name(v) {
                    return '日期';
                },
                td: function (v) {
                    var date = (v.publishDate).split(' ')[0];
                    return date;
                }
            }
        ]
    },
    "indexnewreport": {
        theadfix: {
            thisyear_ylyc: function (v) {
                var currentYear = v.currentYear ? v.currentYear : '';
                return currentYear + '盈利预测';
            },
            nextyear_ylyc: function (v) {
                var nextyear = v.currentYear ? v.currentYear + 1 : '';
                return nextyear + '盈利预测';
            }
        },
        config: [
            {
                width: 44,
                th: function name(v) {
                    return '序号';
                },
                td: function (v) {
                    return v.index + 1;
                }
            },
            {
                width: 60,
                paramname: 'stockCode',
                th: function name(v) {
                    return "\u80A1\u7968\u4EE3\u7801";
                },
                defaultsortType: '',
                // sort: {
                //   asc: {
                //     sortkey: 'sort',
                //     value: 'stockCode,asc'
                //   },
                //   desc: {
                //     sortkey: 'sort',
                //     value: 'stockCode,desc'
                //   },
                //   default: {
                //     sortkey: 'sort',
                //     value: 'stockCode,default'
                //   }
                // },
                td: function (v) {
                    return "<a href=\"http://quote.eastmoney.com/" + v.stockCode + (".html\">" + v.stockCode + "</a>");
                }
            },
            {
                width: 60,
                th: function name(v) {
                    return '股票简称';
                },
                td: function (v) {
                    return "<a href=\"http://data.eastmoney.com/stockdata/" + v.stockCode + (".html\">" + v.stockName + "</a>");
                }
            },
            {
                width: 60,
                th: function name(v) {
                    return '相关';
                },
                td: function (v) {
                    return "<a href=\"singlestock.jshtml?stockcode=" + v.stockCode + "&market=" + v.market + "\" class=\"red\">\u8BE6\u7EC6</a>&nbsp;\n                  <a href=\"http://guba.eastmoney.com/list," + v.stockCode + ".html\">\u80A1\u5427</a>";
                }
            },
            {
                width: 130,
                th: function name(v) {
                    return '报告名称';
                },
                td: function (v) {
                    var date = ((v.publishDate).split(' ')[0]).replace(/-/g, '');
                    return "<a href=\"zw_stock.jshtml?encodeUrl=" + v.encodeUrl + ("\">" + v.title + "</a>");
                    // return `<a href="http://data.eastmoney.com/report/ReportRedirect.aspx?date=`+date+`&code=` + v.infoCode+`">${v.title}</a>`
                }
            },
            {
                th: function name(v) {
                    return '原文<br>评级';
                },
                td: function (v) {
                    var emRatingName = v.emRatingName ? v.emRatingName : '-';
                    return "" + emRatingName;
                }
            },
            {
                th: function name(v) {
                    return '评级<br>变动';
                },
                td: function (v) {
                    var ratingChangeName = getRatingChangeStr(v.ratingChange);
                    return "" + ratingChangeName;
                }
            },
            {
                width: 60,
                th: function name(v) {
                    return '机构';
                },
                td: function (v) {
                    return "<a href=\"orgpublish.jshtml?orgcode=" + v.orgCode + ("\">" + (v.orgSName ? v.orgSName : v.orgName) + "</a>");
                }
            },
            {
                paramname: 'count',
                th: function name(v) {
                    return '近一月<br>个股研<br>报数';
                },
                // sort: {
                //   asc: {
                //     sortkey: 'count',
                //     value: 'asc'
                //   },
                //   desc: {
                //     sortkey: 'count',
                //     value: 'desc'
                //   },
                //   default: {
                //     sortkey: 'count',
                //     value: 'default'
                //   }
                // },
                td: function (v) {
                    return "" + v.count;
                }
            },
            {
                th: function name(v) {
                    return '收益';
                },
                theadfix: 'thisyear_ylyc',
                td: function (v) {
                    return v.predictThisYearEps == '' ? '' : Number(v.predictThisYearEps).toFixed(3);
                }
            },
            {
                th: function name(v) {
                    return '市盈率';
                },
                theadfix: 'thisyear_ylyc',
                td: function (v) {
                    return v.predictThisYearPe == '' ? '' : Number(v.predictThisYearPe).toFixed(2);
                }
            },
            {
                th: function name(v) {
                    return '收益';
                },
                theadfix: 'nextyear_ylyc',
                td: function (v) {
                    return v.predictNextYearEps == '' ? '' : Number(v.predictNextYearEps).toFixed(3);
                }
            },
            {
                th: function name(v) {
                    return '市盈率';
                },
                theadfix: 'nextyear_ylyc',
                td: function (v) {
                    return v.predictNextYearPe == '' ? '' : Number(v.predictNextYearPe).toFixed(2);
                }
            },
            {
                width: 60,
                th: function name(v) {
                    return '行业';
                },
                td: function (v) {
                    var indvInduName = v.indvInduName ? v.indvInduName : '';
                    return "<a href=\"industry.jshtml?hyid=" + v.indvInduCode + ("\">" + indvInduName + "</a>");
                }
            },
            {
                width: 65,
                paramname: 'publishDate',
                th: function name(v) {
                    return '日期';
                },
                // sort: {
                //   asc: {
                //     sortkey: 'publishDate',
                //     value: 'publishDate,asc'
                //   },
                //   desc: {
                //     sortkey: 'publishDate',
                //     value: 'publishDate,desc'
                //   },
                //   default: {
                //     sortkey: 'publishDate',
                //     value: 'publishDate,default'
                //   }
                // },
                td: function (v) {
                    var date = (v.publishDate).split(' ')[0];
                    return date;
                }
            }
        ]
    },
    "indexylyc": {
        theadfix: {
            jgtzpj: function (v) {
                return '机构投资评级(近六个月)';
            }
            //   preyearprofit: function (v: any) {
            //     let preyear = v.currentYear ? v.currentYear - 1 : '';
            //     return preyear + '实际'
            //   },
            //   thisyear_yc: function (v: any) {
            //     let currentYear = v.currentYear ? v.currentYear : '';
            //     return currentYear + '预测'
            //   },
            //   nextyear_yc: function (v: any) {
            //     let nextyear = v.currentYear ? v.currentYear + 1 : '';
            //     return nextyear + '预测'
            //   },
            //   nextmoreyear_yc: function (v: any) {
            //     let nextmoreyear = v.currentYear ? v.currentYear + 2 : '';
            //     return nextmoreyear + '预测'
            //   }
        },
        config: [
            {
                width: 44,
                th: function name(v) {
                    return '序号';
                },
                td: function (v) {
                    return v.index + 1;
                }
            },
            {
                paramname: 'stockCode',
                th: function name(v) {
                    return '代码';
                },
                // sort: {
                //   asc: {
                //     sortkey: 'xxx',
                //     value: '1'
                //   },
                //   desc: {
                //     sortkey: 'xxx',
                //     value: '2'
                //   },
                //   default: {
                //     sortkey: 'xxx',
                //     value: ''
                //   }
                // },
                td: function (v) {
                    return "<a href=\"http://quote.eastmoney.com/" + v.stockCode + (".html\">" + v.stockCode + "</a>");
                }
            },
            {
                th: function name(v) {
                    return '名称';
                },
                td: function (v) {
                    return "<a href=\"http://data.eastmoney.com/stockdata/" + v.stockCode + (".html\">" + v.stockName + "</a>");
                }
            },
            {
                th: function name(v) {
                    return '相关';
                },
                td: function (v) {
                    return "<a href = \"singlestock.jshtml?stockcode=" + v.stockCode + "&market=" + v.market + "\" class=\"red\">\u8BE6\u7EC6</a>&nbsp;\n                  <a href=\"http://guba.eastmoney.com/list," + v.stockCode + ".html\">\u80A1\u5427</a>";
                }
            },
            {
                paramname: 'total',
                th: function name(v) {
                    return '研报数';
                },
                // sort: {
                //   asc: {
                //     sortkey: 'xxx',
                //     value: '1'
                //   },
                //   desc: {
                //     sortkey: 'xxx',
                //     value: '2'
                //   },
                //   default: {
                //     sortkey: 'xxx',
                //     value: ''
                //   }
                // },
                td: function (v) {
                    return "" + v.total;
                }
            },
            {
                th: function name(v) {
                    return '买入';
                },
                theadfix: 'jgtzpj',
                td: function (v) {
                    return v.rateBuy;
                }
            },
            {
                th: function name(v) {
                    return '增持';
                },
                theadfix: 'jgtzpj',
                td: function (v) {
                    return v.rateIncrease;
                }
            },
            {
                th: function name(v) {
                    return '中性';
                },
                theadfix: 'jgtzpj',
                td: function (v) {
                    return v.rateNeutral;
                }
            },
            {
                th: function name(v) {
                    return '减持';
                },
                theadfix: 'jgtzpj',
                td: function (v) {
                    return v.rateReduce;
                }
            },
            {
                th: function name(v) {
                    return '卖出';
                },
                theadfix: 'jgtzpj',
                td: function (v) {
                    return v.rateSellout;
                }
            },
            {
                th: function name(v) {
                    var preyear = v.data.currentYear ? v.data.currentYear - 1 : '';
                    return preyear + '每股收益';
                },
                // theadfix: 'preyearprofit',
                td: function (v) {
                    return v.lastYearActualEps == '' ? '' : Number(v.lastYearActualEps).toFixed(3); //去年实际收益
                },
                icons: {
                    name: 'faq',
                    title: "\u9884\u6D4B\u6570\u636E\u6839\u636E\u5404\u673A\u6784\u53D1\u5E03\u7684\u7814\u62A5\u62A5\u544A\u6458\u5F55\u6240\u5F97\uFF0C\u4E0E\u672C\u7F51\u7AD9\u7ACB\u573A\u65E0\u5173\uFF1B\u5B9E\u9645\u6BCF\u80A1\u6536\u76CA\u4E3A\u7ECF\u6700\u65B0\u603B\u80A1\u672C\u8BA1\u7B97\u6240\u5F97"
                }
            },
            {
                th: function name(v) {
                    var thisyear = v.data.currentYear ? v.data.currentYear : '';
                    return thisyear + '预测每股收益';
                },
                // theadfix: 'thisyear_yc',
                td: function (v) {
                    return v.thisYearEps == '' ? '' : Number(v.thisYearEps).toFixed(3);
                }
            },
            // {
            //   th: function name(v: any) {
            //     return '市盈率'
            //   },
            //   theadfix: 'thisyear_yc',
            //   td: function (v: any) {
            //     return v.thisYearPe == ''?'':Number(v.thisYearPe).toFixed(2)
            //   }
            // },
            {
                th: function name(v) {
                    var nextyear = v.data.currentYear ? v.data.currentYear + 1 : '';
                    return nextyear + '预测每股收益';
                },
                // theadfix: 'nextyear_yc',
                td: function (v) {
                    return v.nextYearEps == '' ? '' : Number(v.nextYearEps).toFixed(3);
                }
            },
            // {
            //   th: function name(v: any) {
            //     return '市盈率'
            //   },
            //   theadfix: 'nextyear_yc',
            //   td: function (v: any) {
            //     return v.nextYearPe==''?'':Number(v.nextYearPe).toFixed(2)
            //   }
            // },
            {
                th: function name(v) {
                    var afterYear = v.data.currentYear ? v.data.currentYear + 2 : '';
                    return afterYear + '预测每股收益';
                },
                // theadfix: 'nextmoreyear_yc',
                td: function (v) {
                    return v.afterYearEps == '' ? '' : Number(v.afterYearEps).toFixed(3);
                }
            }
            // {
            //   th: function name(v: any) {
            //     return '市盈率'
            //   },
            //   theadfix: 'nextmoreyear_yc',
            //   td: function (v: any) {
            //     return v.afterYearPe==''?'':Number(v.afterYearPe).toFixed(2)
            //   }
            // }
        ]
    },
    "indexmacresearch": {
        config: [
            {
                width: 44,
                th: function name(v) {
                    return '序号';
                },
                td: function (v) {
                    return v.index + 1;
                }
            },
            {
                width: 324,
                th: function name(v) {
                    return '报告名称';
                },
                td: function (v) {
                    return "<a href=\"zw_macresearch.jshtml?encodeUrl=" + v.encodeUrl + ("\">" + v.title + "</a>");
                }
            },
            {
                th: function name(v) {
                    return '作者';
                },
                td: function (v) {
                    var authorStr = authorFormat(v, 12);
                    return authorStr;
                }
            },
            {
                th: function name(v) {
                    return '机构名称';
                },
                td: function (v) {
                    return "<a href=\"orgpublish.jshtml?orgcode=" + v.orgCode + ("\">" + (v.orgSName ? v.orgSName : v.orgName) + "</a>");
                }
            },
            {
                paramname: 'count',
                th: function name(v) {
                    return '近一月机构宏<br>观研报数量';
                },
                // sort: {
                //   asc: {
                //     sortkey: 'count',
                //     value: '1'
                //   },
                //   desc: {
                //     sortkey: 'count',
                //     value: '2'
                //   },
                //   default: {
                //     sortkey: 'count',
                //     value: ''
                //   }
                // },
                td: function (v) {
                    return "" + (v.count != undefined ? v.count : '');
                }
            },
            {
                paramname: 'publishDate',
                th: function name(v) {
                    return '日期';
                },
                // sort: {
                //   asc: {
                //     sortkey: 'date',
                //     value: 'asc'
                //   },
                //   desc: {
                //     sortkey: 'date',
                //     value: 'desc'
                //   },
                //   default: {
                //     sortkey: 'date',
                //     value: ''
                //   }
                // },
                td: function (v) {
                    var date = (v.publishDate).split(' ')[0];
                    return date;
                }
            }
        ]
    },
    "indexnewstock": {
        config: [
            {
                width: 44,
                th: function name(v) {
                    return '序号';
                },
                td: function (v) {
                    return v.index + 1;
                }
            },
            {
                th: function name(v) {
                    return '股票代码';
                },
                td: function (v) {
                    return "<a href=\"http://quote.eastmoney.com/" + v.stockCode + (".html\">" + v.stockCode + "</a>");
                }
            },
            {
                th: function name(v) {
                    return '股票简称';
                },
                td: function (v) {
                    return "<a href=\"http://data.eastmoney.com/stockdata/" + v.stockCode + (".html\">" + v.stockName + "</a>");
                }
            },
            {
                width: 60,
                th: function name(v) {
                    return '相关';
                },
                td: function (v) {
                    return "<a href = \"singlestock.jshtml?stockcode=" + v.stockCode + "&market=" + v.market + "\" class=\"red\">\u8BE6\u7EC6</a>&nbsp;\n                  <a href=\"http://guba.eastmoney.com/list," + v.stockCode + ".html\">\u80A1\u5427</a>";
                }
            },
            {
                width: 220,
                th: function name(v) {
                    return '报告名称';
                },
                td: function (v) {
                    var date = ((v.publishDate).split(' ')[0]).replace(/-/g, '');
                    return "<a href=\"zw_stock.jshtml?encodeUrl=" + v.encodeUrl + ("\">" + v.title + "</a>");
                    // return `<a href="http://data.eastmoney.com/report/ReportRedirect.aspx?date=` + date + `&code=` + v.infoCode + `">${v.title}</a>`
                }
            },
            {
                paramname: 'publishdate',
                th: function name(v) {
                    return '发布日期';
                },
                // sort: {
                //   asc: {
                //     sortkey: 'publishdate',
                //     value: 'asc'
                //   },
                //   desc: {
                //     sortkey: 'publishdate',
                //     value: 'desc'
                //   },
                //   default: {
                //     sortkey: 'publishdate',
                //     value: ''
                //   }
                // },
                td: function (v) {
                    var publishDate = v.publishDate ? (v.publishDate).substring(5, 11) : '';
                    return publishDate;
                }
            },
            {
                paramname: 'purchasedate',
                th: function name(v) {
                    return '申购日期';
                },
                // sort: {
                //   asc: {
                //     sortkey: 'purchasedate',
                //     value: 'asc'
                //   },
                //   desc: {
                //     sortkey: 'purchasedate',
                //     value: 'desc'
                //   },
                //   default: {
                //     sortkey: 'purchasedate',
                //     value: ''
                //   }
                // },
                td: function (v) {
                    var newPurchaseDate = v.newPurchaseDate ? (v.newPurchaseDate).substring(5, 11) : '';
                    return newPurchaseDate;
                }
            },
            {
                paramname: 'listingdate',
                th: function name(v) {
                    return '上市日期';
                },
                // sort: {
                //   asc: {
                //     sortkey: 'listingdate',
                //     value: 'asc'
                //   },
                //   desc: {
                //     sortkey: 'listingdate',
                //     value: 'desc'
                //   },
                //   default: {
                //     sortkey: 'listingdate',
                //     value: ''
                //   }
                // },
                td: function (v) {
                    var newListingDate = v.newListingDate ? (v.newListingDate).substring(5, 11) : '';
                    return newListingDate;
                }
            },
            {
                paramname: 'newIssuePrice',
                th: function name(v) {
                    return '发行价';
                },
                // sort: {
                //   asc: {
                //     sortkey: 'newIssuePrice',
                //     value: 'asc'
                //   },
                //   desc: {
                //     sortkey: 'newIssuePrice',
                //     value: 'desc'
                //   },
                //   default: {
                //     sortkey: 'newIssuePrice',
                //     value: ''
                //   }
                // },
                td: function (v) {
                    return v.newIssuePrice != '' ? Number(v.newIssuePrice).toFixed(2) : '';
                }
            },
            {
                paramname: 'newPeIssueA',
                th: function name(v) {
                    return '发行市<br>盈率';
                },
                // sort: {
                //   asc: {
                //     sortkey: 'newPeIssueA',
                //     value: 'asc'
                //   },
                //   desc: {
                //     sortkey: 'newPeIssueA',
                //     value: 'desc'
                //   },
                //   default: {
                //     sortkey: 'newPeIssueA',
                //     value: ''
                //   }
                // },
                td: function (v) {
                    return v.newPeIssueA != '' ? Number(v.newPeIssueA).toFixed(2) : '';
                }
            },
            {
                paramname: 'zxj',
                th: function name(v) {
                    return '最新价';
                },
                // sort: {
                //   asc: {
                //     sortkey: 'zxj',
                //     value: 'asc'
                //   },
                //   desc: {
                //     sortkey: 'zxj',
                //     value: 'desc'
                //   },
                //   default: {
                //     sortkey: 'zxj',
                //     value: ''
                //   }
                // },
                td: function (v) {
                    return '<span class="gghqspan" data-hqtype="zxj" data-market=' + v.market + ' data-code="' + v.stockCode + '"></span>';
                    // return '<span class="gghqspan" data-hqtype="zxj" data-market="SHENZHEN" data-code="300059"></span>'
                }
            },
            {
                paramname: 'zxsyl',
                th: function name(v) {
                    return '最新市盈率';
                },
                // sort: {
                //   asc: {
                //     sortkey: 'zxsyl',
                //     value: 'asc'
                //   },
                //   desc: {
                //     sortkey: 'zxsyl',
                //     value: 'desc'
                //   },
                //   default: {
                //     sortkey: 'zxsyl',
                //     value: ''
                //   }
                // },
                td: function (v) {
                    return '<span class="gghqspan" data-hqtype="zxsyl" data-market=' + v.market + ' data-code="' + v.stockCode + '"></span>';
                }
            },
            // {
            //   paramname:'hysyl',
            //   th: function name(v: any) {
            //     return '行业市盈率'
            //   },
            //   td: function (v: any) {
            //     return '<span class="hqspan" data-hqtype="hysyl" data-code="' + v.indvInduCode + '"></span>'
            //   }
            // },
            {
                th: function name(v) {
                    return '机构';
                },
                td: function (v) {
                    return "<a href=\"orgpublish.jshtml?orgcode=" + v.orgCode + ("\">" + (v.orgSName ? v.orgSName : v.orgName) + "</a>");
                }
            }
        ]
    },
    "indexstrategyreport": {
        config: [
            {
                width: 44,
                th: function name(v) {
                    return '序号';
                },
                td: function (v) {
                    return v.index + 1;
                }
            },
            {
                width: 280,
                th: function name(v) {
                    return '报告名称';
                },
                td: function (v) {
                    return "<a href=\"zw_strategy.jshtml?encodeUrl=" + v.encodeUrl + ("\">" + v.title + "</a>");
                }
            },
            {
                width: 220,
                th: function name(v) {
                    return '作者';
                },
                td: function (v) {
                    var authorStr = authorFormat(v, 20);
                    return authorStr;
                }
            },
            {
                th: function name(v) {
                    return '机构名称';
                },
                td: function (v) {
                    return "<a href=\"orgpublish.jshtml?orgcode=" + v.orgCode + ("\">" + (v.orgSName ? v.orgSName : v.orgName) + "</a>");
                }
            },
            {
                paramname: 'count',
                th: function name(v) {
                    return '近一月机构策<br>略报告数量';
                },
                // sort: {
                //   asc: {
                //     sortkey: 'count',
                //     value: '1'
                //   },
                //   desc: {
                //     sortkey: 'count',
                //     value: '2'
                //   },
                //   default: {
                //     sortkey: 'count',
                //     value: ''
                //   }
                // },
                td: function (v) {
                    return "" + (v.count != undefined ? v.count : '');
                }
            },
            {
                width: 65,
                th: function name(v) {
                    return '日期';
                },
                td: function (v) {
                    var date = (v.publishDate).split(' ')[0];
                    return date;
                }
            }
        ]
    },
    "indexbroker": {
        config: [
            {
                width: 44,
                th: function name(v) {
                    return '序号';
                },
                td: function (v) {
                    return v.index + 1;
                }
            },
            {
                width: 222,
                th: function name(v) {
                    return '报告名称';
                },
                td: function (v) {
                    return "<a href=\"zw_brokerreport.jshtml?encodeUrl=" + v.encodeUrl + ("\">" + v.title + "</a>");
                }
            },
            {
                th: function name(v) {
                    return '作者';
                },
                td: function (v) {
                    var authorStr = authorFormat(v, 20);
                    return authorStr;
                }
            },
            {
                th: function name(v) {
                    return '机构名称';
                },
                td: function (v) {
                    return "<a href=\"orgpublish.jshtml?orgcode=" + v.orgCode + ("\">" + (v.orgSName ? v.orgSName : v.orgName) + "</a>");
                }
            },
            {
                th: function name(v) {
                    return '日期';
                },
                td: function (v) {
                    var date = (v.publishDate).split(' ')[0];
                    return date;
                }
            }
        ]
    },
    "eastmoneyanalyst": {
        config: [
            {
                width: 44,
                th: function name(v) {
                    return '序号';
                },
                td: function (v) {
                    return v.index + 1;
                }
            },
            {
                width: 74,
                th: function name(v) {
                    return '分析师名称';
                },
                td: function (v) {
                    return "<a href=\"http://data.eastmoney.com/invest/invest/" + v.FxsCode + ".html\">" + v.FxsName + "</a>";
                }
            },
            {
                th: function name(v) {
                    return '分析师单位';
                },
                td: function (v) {
                    return v.Ssjg;
                }
            },
            {
                th: function name(v) {
                    return '最新指数';
                },
                td: function (v) {
                    return (v.NewIndex).toFixed(2);
                }
            },
            {
                width: 158,
                th: function name(v) {
                    return '图表';
                },
                td: function (v) {
                    return "<a href=\"http://data.eastmoney.com/invest/invest/" + v.FxsCode + ".html\">\u67E5\u770B\u8BE5\u5206\u6790\u5E08\u6307\u6570</a>";
                }
            },
            {
                th: function name(v) {
                    var displayYear = '';
                    var date = new Date();
                    var currentYear = date.getFullYear();
                    var myMonth = date.getMonth() + 1;
                    if (myMonth < 3) {
                        displayYear = currentYear - 1;
                    }
                    else {
                        displayYear = currentYear;
                    }
                    return displayYear + '年收益<br>率<span class="icon icon_desc"></span>';
                },
                td: function (v) {
                    return (v.LastYearSyl).toFixed(2) + '%';
                }
            },
            {
                th: function name(v) {
                    return '3个月收益率';
                },
                td: function (v) {
                    return (v.Earnings_3).toFixed(2) + '%';
                }
            },
            {
                th: function name(v) {
                    return '6个月收益率';
                },
                td: function (v) {
                    return (v.Earnings_6).toFixed(2) + '%';
                }
            },
            {
                th: function name(v) {
                    return '成分股个数';
                },
                td: function (v) {
                    return v.CfgGs;
                }
            },
            {
                width: 140,
                th: function name(v) {
                    var displayYear = '';
                    var date = new Date();
                    var currentYear = date.getFullYear();
                    var myMonth = date.getMonth() + 1;
                    if (myMonth < 3) {
                        displayYear = currentYear - 1;
                    }
                    else {
                        displayYear = currentYear;
                    }
                    return displayYear + '最新个股评级';
                },
                td: function (v) {
                    return "<a href=\"http://data.eastmoney.com/invest/invest/" + v.FxsCode + (".html#new\">" + v.NewGgpj + "</a>");
                }
            }
        ]
    },
    "industry": {
        config: [
            {
                th: function name(v) {
                    return '序号';
                },
                td: function (v) {
                    return v.index + 1;
                }
            },
            {
                th: function name(v) {
                    return '行业名称';
                },
                td: function (v) {
                    var bkcode = v.industryCode ? v.industryCode.length > 3 ? 'bk' + v.industryCode : 'bk0' + v.industryCode : '';
                    return "<a href=\"http://quote.eastmoney.com/center/boardlist.html#boards-" + bkcode + ("\">" + v.industryName + "</a>");
                }
            },
            {
                th: function name(v) {
                    return '涨跌幅';
                },
                td: function (v) {
                    return '<span class="hqspan" data-hqtype="zdf" data-code="' + v.industryCode + '"></span>';
                }
            },
            {
                width: 162,
                th: function name(v) {
                    return '相关';
                },
                td: function (v) {
                    var bkcode = v.industryCode ? v.industryCode.length > 3 ? 'bk' + v.industryCode : 'bk0' + v.industryCode : '';
                    return "<a href=\"industry.jshtml?hyid=" + v.industryCode + "\" class=\"red\">\u8BE6\u7EC6</a>&nbsp;\n                  <a href=\"http://data.eastmoney.com/bkzj/" + v.industryCode + ".html\">\u8D44\u91D1\u6D41</a>&nbsp;\n                  <a href=\"http://guba.eastmoney.com/list," + bkcode + ".html\">\u80A1\u5427</a>&nbsp;\n                  <a href=\"http://stock.eastmoney.com/hangye/hy" + v.industryCode + ".html\">\u4E13\u533A</a>";
                }
            },
            {
                width: 222,
                th: function name(v) {
                    return '报告名称';
                },
                td: function (v) {
                    return "<a href=\"zw_industry.jshtml?encodeUrl=" + v.encodeUrl + ("\">" + v.title + "</a>");
                }
            },
            {
                th: function name(v) {
                    return '评级类型';
                },
                td: function (v) {
                    var emRatingName = v.emRatingName ? v.emRatingName : '-';
                    return "" + emRatingName;
                }
            },
            {
                th: function name(v) {
                    return '评级<br>变动';
                },
                td: function (v) {
                    var ratingChangeName = getRatingChangeStr(v.ratingChange);
                    return "" + ratingChangeName;
                }
            },
            {
                th: function name(v) {
                    return '机构名称';
                },
                td: function (v) {
                    return "<a href=\"orgpublish.jshtml?orgcode=" + v.orgCode + ("\">" + (v.orgSName ? v.orgSName : v.orgName) + "</a>");
                }
            },
            {
                paramname: 'count',
                th: function name(v) {
                    return '近一月行<br>业研报数';
                },
                // sort: {
                //   asc: {
                //     sortkey: 'count',
                //     value: '1'
                //   },
                //   desc: {
                //     sortkey: 'count',
                //     value: '2'
                //   },
                //   default: {
                //     sortkey: 'count',
                //     value: ''
                //   }
                // },
                td: function (v) {
                    return "" + v.count;
                }
            },
            {
                width: 65,
                paramname: 'publishDate',
                th: function name(v) {
                    return '日期';
                },
                sort: {
                    asc: {
                        sortkey: 'sort',
                        value: 'publishDate,asc'
                    },
                    desc: {
                        sortkey: 'sort',
                        value: 'publishDate,desc'
                    },
                    "default": {
                        sortkey: 'sort',
                        value: 'publishDate,default'
                    }
                },
                td: function (v) {
                    var date = (v.publishDate).split(' ')[0];
                    return "" + date;
                }
            }
        ]
    },
    "stock": {
        theadfix: {
            thisyear_ylyc: function (v) {
                var currentYear = v.currentYear ? v.currentYear : '';
                return currentYear + '盈利预测';
            },
            nextyear_ylyc: function (v) {
                var nextyear = v.currentYear ? v.currentYear + 1 : '';
                return nextyear + '盈利预测';
            }
        },
        config: [
            {
                th: function name(v) {
                    return '序号';
                },
                td: function (v) {
                    return v.index + 1;
                }
            },
            {
                width: 60,
                paramname: 'stockCode',
                th: function name(v) {
                    return '股票代码';
                },
                sort: {
                    asc: {
                        sortkey: 'sort',
                        value: 'stockCode,asc'
                    },
                    desc: {
                        sortkey: 'sort',
                        value: 'stockCode,desc'
                    },
                    "default": {
                        sortkey: 'sort',
                        value: 'stockCode,default'
                    }
                },
                td: function (v) {
                    return "<a href=\"http://quote.eastmoney.com/" + v.stockCode + (".html\">" + v.stockCode + "</a>");
                }
            },
            {
                width: 60,
                th: function name(v) {
                    return '股票简称';
                },
                td: function (v) {
                    return "<a href=\"http://data.eastmoney.com/stockdata/" + v.stockCode + (".html\">" + v.stockName + "</a>");
                }
            },
            {
                width: 60,
                th: function name(v) {
                    return '相关';
                },
                td: function (v) {
                    return "<a href=\"singlestock.jshtml?stockcode=" + v.stockCode + "&market=" + v.market + "\" class=\"red\">\u8BE6\u7EC6</a>&nbsp;\n                  <a href=\"http://guba.eastmoney.com/list," + v.stockCode + ".html\">\u80A1\u5427</a>";
                }
            },
            {
                width: 150,
                th: function name(v) {
                    return '报告名称';
                },
                td: function (v) {
                    var date = ((v.publishDate).split(' ')[0]).replace(/-/g, '');
                    return "<a href=\"zw_stock.jshtml?encodeUrl=" + v.encodeUrl + ("\">" + v.title + "</a>");
                    // return `<a href="http://data.eastmoney.com/report/ReportRedirect.aspx?date=` + date + `&code=` + v.infoCode + `">${v.title}</a>`
                }
            },
            {
                th: function name(v) {
                    return '原文<br>评级';
                },
                td: function (v) {
                    var emRatingName = v.emRatingName ? v.emRatingName : '-';
                    return "" + emRatingName;
                }
            },
            {
                th: function name(v) {
                    return '评级<br>变动';
                },
                td: function (v) {
                    var ratingChangeName = getRatingChangeStr(v.ratingChange);
                    return "" + ratingChangeName;
                }
            },
            {
                width: 70,
                th: function name(v) {
                    return '机构';
                },
                td: function (v) {
                    return "<a href=\"orgpublish.jshtml?orgcode=" + v.orgCode + ("\">" + (v.orgSName ? v.orgSName : v.orgName) + "</a>");
                }
            },
            {
                paramname: 'count',
                th: function name(v) {
                    return '近一月<br>个股研<br>报数';
                },
                // sort: {
                //   asc: {
                //     sortkey: 'sort',
                //     value: 'count,asc'
                //   },
                //   desc: {
                //     sortkey: 'sort',
                //     value: 'count,desc'
                //   },
                //   default: {
                //     sortkey: 'sort',
                //     value: 'count,default'
                //   }
                // },
                td: function (v) {
                    return "" + v.count;
                }
            },
            {
                paramname: 'predictThisYearEps',
                th: function (v) {
                    return '收益';
                },
                theadfix: "thisyear_ylyc",
                sort: {
                    asc: {
                        sortkey: 'sort',
                        value: 'predictThisYearEps,asc'
                    },
                    desc: {
                        sortkey: 'sort',
                        value: 'predictThisYearEps,desc'
                    },
                    "default": {
                        sortkey: 'sort',
                        value: 'predictThisYearEps,default'
                    }
                },
                td: function (v) {
                    var predictThisYearEps = v.predictThisYearEps == '' ? "" : Number(v.predictThisYearEps).toFixed(3);
                    return predictThisYearEps;
                }
            },
            {
                paramname: 'predictThisYearPe',
                th: function name(v) {
                    return '市盈率';
                },
                theadfix: "thisyear_ylyc",
                sort: {
                    asc: {
                        sortkey: 'sort',
                        value: 'predictThisYearPe,asc'
                    },
                    desc: {
                        sortkey: 'sort',
                        value: 'predictThisYearPe,desc'
                    },
                    "default": {
                        sortkey: 'sort',
                        value: 'predictThisYearPe,default'
                    }
                },
                td: function (v) {
                    var predictThisYearPe = v.predictThisYearPe == '' ? "" : Number(v.predictThisYearPe).toFixed(2);
                    return predictThisYearPe;
                }
            },
            {
                paramname: 'predictNextYearEps',
                th: function name(v) {
                    return '收益';
                },
                theadfix: "nextyear_ylyc",
                sort: {
                    asc: {
                        sortkey: 'sort',
                        value: 'predictNextYearEps,asc'
                    },
                    desc: {
                        sortkey: 'sort',
                        value: 'predictNextYearEps,desc'
                    },
                    "default": {
                        sortkey: 'sort',
                        value: 'predictNextYearEps,default'
                    }
                },
                td: function (v) {
                    var predictNextYearEps = v.predictNextYearEps == '' ? "" : Number(v.predictNextYearEps).toFixed(3);
                    return predictNextYearEps;
                }
            },
            {
                paramname: 'predictNextYearPe',
                th: function name(v) {
                    return '市盈率';
                },
                theadfix: "nextyear_ylyc",
                sort: {
                    asc: {
                        sortkey: 'sort',
                        value: 'predictNextYearPe,asc'
                    },
                    desc: {
                        sortkey: 'sort',
                        value: 'predictNextYearPe,desc'
                    },
                    "default": {
                        sortkey: 'sort',
                        value: 'predictNextYearPe'
                    }
                },
                td: function (v) {
                    var predictNextYearPe = v.predictNextYearPe == '' ? "" : Number(v.predictNextYearPe).toFixed(2);
                    return predictNextYearPe;
                }
            },
            {
                width: 60,
                th: function name(v) {
                    return '行业';
                },
                td: function (v) {
                    return "<a href=\"industry.jshtml?hyid=" + v.indvInduCode + ("\">" + v.indvInduName + "</a>");
                }
            },
            {
                width: 65,
                paramname: 'publishDate',
                th: function name(v) {
                    return '日期';
                },
                sort: {
                    asc: {
                        sortkey: 'sort',
                        value: 'publishDate,asc'
                    },
                    desc: {
                        sortkey: 'sort',
                        value: 'publishDate,desc'
                    },
                    "default": {
                        sortkey: 'sort',
                        value: 'publishDate,default'
                    }
                },
                td: function (v) {
                    // let date = (v.publishDate).split(' ')[0];
                    var publishDate = v.publishDate ? (v.publishDate).substring(0, 10) : '';
                    return "" + publishDate;
                }
            }
        ]
    },
    "profitforecast": {
        theadfix: {
            jgtzpj: function (v) {
                return '机构投资评级(近六个月)';
            }
            //   preyearprofit: function (v: any) {
            //     let preyear = v.currentYear ? v.currentYear -1 : '';
            //     return preyear+'实际'
            //   },
            //   thisyear_yc: function (v: any) {
            //     let currentYear = v.currentYear ? v.currentYear : '';
            //     return currentYear + '预测'
            //   },
            //   nextyear_yc: function (v: any) {
            //     let nextyear = v.currentYear ? v.currentYear+1 : '';
            //     return nextyear+'预测'
            //   },
            //   nextmoreyear_yc: function (v: any) {
            //     let nextmoreyear = v.currentYear ? v.currentYear+2 : '';
            //     return nextmoreyear+'预测'
            //   }
        },
        config: [
            {
                th: function name(v) {
                    return '序号';
                },
                td: function (v) {
                    return v.index + 1;
                }
            },
            {
                paramname: 'stockCode',
                th: function name(v) {
                    return '代码';
                },
                sort: {
                    asc: {
                        sortkey: 'sort',
                        value: 'stockCode,asc'
                    },
                    desc: {
                        sortkey: 'sort',
                        value: 'stockCode,desc'
                    },
                    "default": {
                        sortkey: 'sort',
                        value: 'stockCode,default'
                    }
                },
                td: function (v) {
                    return "<a href=\"http://quote.eastmoney.com/" + v.stockCode + (".html\">" + v.stockCode + "</a>");
                }
            },
            {
                th: function name(v) {
                    return '名称';
                },
                td: function (v) {
                    return "<a href=\"http://data.eastmoney.com/stockdata/" + v.stockCode + (".html\">" + v.stockName + "</a>");
                }
            },
            {
                th: function name(v) {
                    return '相关';
                },
                td: function (v) {
                    return "<a href = \"singlestock.jshtml?stockcode=" + v.stockCode + "&market=" + v.market + "\" class=\"red\">\u8BE6\u7EC6</a>&nbsp;\n                  <a href=\"http://guba.eastmoney.com/list," + v.stockCode + ".html\">\u80A1\u5427</a>";
                }
            },
            {
                paramname: 'total',
                th: function name(v) {
                    return '研报数';
                },
                defaultsortType: 'desc',
                sort: {
                    asc: {
                        sortkey: 'sort',
                        value: 'count,asc'
                    },
                    desc: {
                        sortkey: 'sort',
                        value: 'count,desc'
                    },
                    "default": {
                        sortkey: 'sort',
                        value: 'count,default'
                    }
                },
                td: function (v) {
                    return "" + v.total;
                }
            },
            {
                paramname: 'rateBuy',
                th: function name(v) {
                    return '买入';
                },
                theadfix: 'jgtzpj',
                sort: {
                    asc: {
                        sortkey: 'sort',
                        value: 'rateBuy,asc'
                    },
                    desc: {
                        sortkey: 'sort',
                        value: 'rateBuy,desc'
                    },
                    "default": {
                        sortkey: 'sort',
                        value: 'rateBuy,default'
                    }
                },
                td: function (v) {
                    return v.rateBuy;
                }
            },
            {
                paramname: 'rateIncrease',
                th: function name(v) {
                    return '增持';
                },
                theadfix: 'jgtzpj',
                sort: {
                    asc: {
                        sortkey: 'sort',
                        value: 'rateIncrease,asc'
                    },
                    desc: {
                        sortkey: 'sort',
                        value: 'rateIncrease,desc'
                    },
                    "default": {
                        sortkey: 'sort',
                        value: 'rateIncrease,default'
                    }
                },
                td: function (v) {
                    return v.rateIncrease;
                }
            },
            {
                paramname: 'rateNeutral',
                th: function name(v) {
                    return '中性';
                },
                theadfix: 'jgtzpj',
                sort: {
                    asc: {
                        sortkey: 'sort',
                        value: 'rateNeutral,asc'
                    },
                    desc: {
                        sortkey: 'sort',
                        value: 'rateNeutral,desc'
                    },
                    "default": {
                        sortkey: 'sort',
                        value: 'rateNeutral,default'
                    }
                },
                td: function (v) {
                    return v.rateNeutral;
                }
            },
            {
                paramname: 'rateReduce',
                th: function name(v) {
                    return '减持';
                },
                theadfix: 'jgtzpj',
                sort: {
                    asc: {
                        sortkey: 'sort',
                        value: 'rateReduce,asc'
                    },
                    desc: {
                        sortkey: 'sort',
                        value: 'rateReduce,desc'
                    },
                    "default": {
                        sortkey: 'sort',
                        value: 'rateReduce,default'
                    }
                },
                td: function (v) {
                    return v.rateReduce;
                }
            },
            {
                paramname: 'rateSellout',
                th: function name(v) {
                    return '卖出';
                },
                theadfix: 'jgtzpj',
                sort: {
                    asc: {
                        sortkey: 'sort',
                        value: 'rateSellout,asc'
                    },
                    desc: {
                        sortkey: 'sort',
                        value: 'rateSellout,desc'
                    },
                    "default": {
                        sortkey: 'sort',
                        value: 'rateSellout,default'
                    }
                },
                td: function (v) {
                    return v.rateSellout;
                }
            },
            {
                paramname: 'preyearprofit',
                th: function name(v) {
                    var preyear = v.data.currentYear ? v.data.currentYear - 1 : '';
                    return preyear + '每股收益';
                },
                // theadfix:'preyearprofit',
                sort: {
                    asc: {
                        sortkey: 'sort',
                        value: 'lastYearActualEps,asc'
                    },
                    desc: {
                        sortkey: 'sort',
                        value: 'lastYearActualEps,desc'
                    },
                    "default": {
                        sortkey: 'sort',
                        value: 'lastYearActualEps,default'
                    }
                },
                td: function (v) {
                    var lastYearActualEps = v.lastYearActualEps ? Number(v.lastYearActualEps).toFixed(3) : '';
                    return lastYearActualEps;
                },
                icons: {
                    name: 'faq',
                    title: "\u9884\u6D4B\u6570\u636E\u6839\u636E\u5404\u673A\u6784\u53D1\u5E03\u7684\u7814\u62A5\u62A5\u544A\u6458\u5F55\u6240\u5F97\uFF0C\u4E0E\u672C\u7F51\u7AD9\u7ACB\u573A\u65E0\u5173\uFF1B\u5B9E\u9645\u6BCF\u80A1\u6536\u76CA\u4E3A\u7ECF\u6700\u65B0\u603B\u80A1\u672C\u8BA1\u7B97\u6240\u5F97"
                }
            },
            {
                paramname: 'thisYearEps',
                th: function name(v) {
                    var currentYear = v.data.currentYear ? v.data.currentYear : '';
                    return currentYear + '预测每股收益';
                },
                // theadfix: 'thisyear_yc',
                sort: {
                    asc: {
                        sortkey: 'sort',
                        value: 'thisYearEps,asc'
                    },
                    desc: {
                        sortkey: 'sort',
                        value: 'thisYearEps,desc'
                    },
                    "default": {
                        sortkey: 'sort',
                        value: 'thisYearEps,default'
                    }
                },
                td: function (v) {
                    var thisYearEps = v.thisYearEps ? Number(v.thisYearEps).toFixed(3) : '';
                    return thisYearEps;
                }
            },
            // {
            //   paramname:'thisYearPe',
            //   th: function name(v: any) {
            //     return '市盈率'
            //   },
            //   theadfix: 'thisyear_yc',
            //   sort: {
            //     asc: {
            //       sortkey: 'sort',
            //       value: 'thisYearPe,asc'
            //     },
            //     desc: {
            //       sortkey: 'sort',
            //       value: 'thisYearPe,desc'
            //     },
            //     default: {
            //       sortkey: 'sort',
            //       value: 'thisYearPe,default'
            //     }
            //   },
            //   td: function (v: any) {
            //     let thisYearPe = v.thisYearPe ? Number(v.thisYearPe).toFixed(2) : '';
            //     return thisYearPe
            //   }
            // },
            {
                paramname: 'nextYearEps',
                th: function name(v) {
                    var nextYear = v.data.currentYear ? v.data.currentYear + 1 : '';
                    return nextYear + '预测每股收益';
                },
                // theadfix: 'nextyear_yc',
                sort: {
                    asc: {
                        sortkey: 'sort',
                        value: 'nextYearEps,asc'
                    },
                    desc: {
                        sortkey: 'sort',
                        value: 'nextYearEps,desc'
                    },
                    "default": {
                        sortkey: 'sort',
                        value: 'nextYearEps,default'
                    }
                },
                td: function (v) {
                    var nextYearEps = v.nextYearEps ? Number(v.nextYearEps).toFixed(3) : '';
                    return nextYearEps;
                }
            },
            // {
            //   paramname:'nextYearPe',
            //   th: function name(v: any) {
            //     return '市盈率'
            //   },
            //   theadfix: 'nextyear_yc',
            //   sort: {
            //     asc: {
            //       sortkey: 'sort',
            //       value: 'nextYearPe,asc'
            //     },
            //     desc: {
            //       sortkey: 'sort',
            //       value: 'nextYearPe,desc'
            //     },
            //     default: {
            //       sortkey: 'sort',
            //       value: 'nextYearPe,default'
            //     }
            //   },
            //   td: function (v: any) {
            //     let nextYearPe = v.nextYearPe ? Number(v.nextYearPe).toFixed(2) : '';
            //     return nextYearPe
            //   }
            // },
            {
                paramname: 'afterYearEps',
                th: function name(v) {
                    var afterYear = v.data.currentYear ? v.data.currentYear + 2 : '';
                    return afterYear + '预测每股收益';
                },
                // theadfix: 'nextmoreyear_yc',
                sort: {
                    asc: {
                        sortkey: 'sort',
                        value: 'afterYearEps,asc'
                    },
                    desc: {
                        sortkey: 'sort',
                        value: 'afterYearEps,desc'
                    },
                    "default": {
                        sortkey: 'sort',
                        value: 'afterYearEps,default'
                    }
                },
                td: function (v) {
                    var afterYearEps = v.afterYearEps ? Number(v.afterYearEps).toFixed(3) : '';
                    return afterYearEps;
                }
            }
            // {
            //   paramname:'afterYearPe',
            //   th: function name(v: any) {
            //     return '市盈率'
            //   },
            //   theadfix: 'nextmoreyear_yc',
            //   sort: {
            //     asc: {
            //       sortkey: 'sort',
            //       value: 'afterYearPe,asc'
            //     },
            //     desc: {
            //       sortkey: 'sort',
            //       value: 'afterYearPe,desc'
            //     },
            //     default: {
            //       sortkey: 'sort',
            //       value: 'afterYearPe,default'
            //     }
            //   },
            //   td: function (v: any) {
            //     let afterYearPe = v.afterYearPe ? Number(v.afterYearPe).toFixed(2) : '';
            //     return afterYearPe
            //   }
            // }
        ]
    },
    "newstock": {
        config: [
            {
                th: function name(v) {
                    return '序号';
                },
                td: function (v) {
                    return v.index + 1;
                }
            },
            {
                width: 60,
                th: function name(v) {
                    return '股票代码';
                },
                td: function (v) {
                    return "<a href=\"http://quote.eastmoney.com/" + v.stockCode + (".html\">" + v.stockCode + "</a>");
                }
            },
            {
                width: 60,
                th: function name(v) {
                    return '股票简称';
                },
                td: function (v) {
                    return "<a href=\"http://data.eastmoney.com/stockdata/" + v.stockCode + (".html\">" + v.stockName + "</a>");
                }
            },
            {
                width: 60,
                th: function name(v) {
                    return '相关';
                },
                td: function (v) {
                    return "<a href = \"singlestock.jshtml?stockcode=" + v.stockCode + "&market=" + v.market + "\" class=\"red\">\u8BE6\u7EC6</a>&nbsp;\n                  <a href=\"http://guba.eastmoney.com/list," + v.stockCode + ".html\">\u80A1\u5427</a>";
                }
            },
            {
                width: 180,
                th: function name(v) {
                    return '报告名称';
                },
                td: function (v) {
                    return "<a href=\"zw_stock.jshtml?encodeUrl=" + v.encodeUrl + ("\">" + v.title + "</a>");
                    // let date = ((v.publishDate).split(' ')[0]).replace(/-/g, '');
                    // return `<a href="http://data.eastmoney.com/report/ReportRedirect.aspx?date=` + date + `&code=` + v.infoCode + `">${v.title}</a>`
                }
            },
            {
                width: 54,
                paramname: 'publishDate',
                th: function name(v) {
                    return '发布日期';
                },
                sort: {
                    asc: {
                        sortkey: 'sort',
                        value: 'publishDate,asc'
                    },
                    desc: {
                        sortkey: 'sort',
                        value: 'publishDate,desc'
                    },
                    "default": {
                        sortkey: 'sort',
                        value: 'publishDate,default'
                    }
                },
                td: function (v) {
                    var publishDate = v.publishDate ? (v.publishDate).substring(5, 11) : '';
                    return publishDate;
                }
            },
            {
                width: 54,
                paramname: 'newPurchaseDate',
                th: function name(v) {
                    return '申购日期';
                },
                sort: {
                    asc: {
                        sortkey: 'sort',
                        value: 'newPurchaseDate,asc'
                    },
                    desc: {
                        sortkey: 'sort',
                        value: 'newPurchaseDate,desc'
                    },
                    "default": {
                        sortkey: 'sort',
                        value: 'newPurchaseDate,default'
                    }
                },
                td: function (v) {
                    var newPurchaseDate = v.newPurchaseDate ? (v.newPurchaseDate).substring(5, 11) : '';
                    return newPurchaseDate;
                }
            },
            {
                width: 54,
                paramname: 'newListingDate',
                th: function name(v) {
                    return '上市日期';
                },
                sort: {
                    asc: {
                        sortkey: 'sort',
                        value: 'newListingDate,asc'
                    },
                    desc: {
                        sortkey: 'sort',
                        value: 'newListingDate,desc'
                    },
                    "default": {
                        sortkey: 'sort',
                        value: 'newListingDate,default'
                    }
                },
                td: function (v) {
                    var newListingDate = v.newListingDate ? (v.newListingDate).substring(5, 11) : '';
                    return newListingDate;
                }
            },
            {
                width: 44,
                paramname: 'newIssuePrice',
                th: function name(v) {
                    return '发行价';
                },
                sort: {
                    asc: {
                        sortkey: 'sort',
                        value: 'newIssuePrice,asc'
                    },
                    desc: {
                        sortkey: 'sort',
                        value: 'newIssuePrice,desc'
                    },
                    "default": {
                        sortkey: 'sort',
                        value: 'newIssuePrice,default'
                    }
                },
                td: function (v) {
                    return v.newIssuePrice != '' ? Number(v.newIssuePrice).toFixed(2) : '';
                }
            },
            {
                paramname: 'newPeIssueA',
                th: function name(v) {
                    return '发行市<br>盈率';
                },
                sort: {
                    asc: {
                        sortkey: 'sort',
                        value: 'newPeIssueA,asc'
                    },
                    desc: {
                        sortkey: 'sort',
                        value: 'newPeIssueA,desc'
                    },
                    "default": {
                        sortkey: 'sort',
                        value: 'newPeIssueA,default'
                    }
                },
                td: function (v) {
                    return v.newPeIssueA != '' ? Number(v.newPeIssueA).toFixed(2) : '';
                }
            },
            {
                th: function name(v) {
                    return '最新价';
                },
                td: function (v) {
                    return '<span class="gghqspan" data-hqtype="zxj" data-market=' + v.market + ' data-code="' + v.stockCode + '"></span>';
                }
            },
            {
                th: function name(v) {
                    return '最新市<br>盈率';
                },
                td: function (v) {
                    return '<span class="gghqspan" data-hqtype="zxsyl" data-market=' + v.market + ' data-code="' + v.stockCode + '"></span>';
                }
            },
            // {
            //   th: function name(v: any) {
            //     return '行业市<br>盈率'
            //   },
            //   td: function (v: any) {
            //     return ``
            //   }
            // },
            {
                width: 70,
                th: function name(v) {
                    return '机构';
                },
                td: function (v) {
                    return "<a href=\"orgpublish.jshtml?orgcode=" + v.orgCode + ("\">" + (v.orgSName ? v.orgSName : v.orgName) + "</a>");
                }
            }
        ]
    },
    "macresearch": {
        config: [
            {
                th: function name(v) {
                    return '序号';
                },
                td: function (v) {
                    return v.index + 1;
                }
            },
            {
                width: 288,
                th: function name(v) {
                    return '报告名称';
                },
                td: function (v) {
                    return "<a href=\"zw_macresearch.jshtml?encodeUrl=" + v.encodeUrl + ("\">" + v.title + "</a>");
                }
            },
            {
                width: 210,
                th: function name(v) {
                    return '作者';
                },
                td: function (v) {
                    var authorStr = authorFormat(v);
                    return authorStr;
                }
            },
            {
                width: 120,
                th: function name(v) {
                    return '机构名称';
                },
                td: function (v) {
                    return "<a href=\"orgpublish.jshtml?orgcode=" + v.orgCode + ("\">" + (v.orgSName ? v.orgSName : v.orgName) + "</a>");
                }
            },
            {
                paramname: 'count',
                th: function name(v) {
                    return '近一月机构宏<br>观研报数量';
                },
                // sort: {
                //   asc: {
                //     sortkey: 'sort',
                //     value: 'count,asc'
                //   },
                //   desc: {
                //     sortkey: 'sort',
                //     value: 'count,desc'
                //   },
                //   default: {
                //     sortkey: 'sort',
                //     value: 'count,default'
                //   }
                // },
                td: function (v) {
                    return "" + (v.count != undefined ? v.count : '');
                }
            },
            {
                paramname: 'publishDate',
                th: function name(v) {
                    return '日期';
                },
                sort: {
                    asc: {
                        sortkey: 'sort',
                        value: 'publishDate,asc'
                    },
                    desc: {
                        sortkey: 'sort',
                        value: 'publishDate,desc'
                    },
                    "default": {
                        sortkey: 'sort',
                        value: 'publishDate,default'
                    }
                },
                td: function (v) {
                    var publishDate = v.publishDate ? (v.publishDate).substring(0, 11) : '';
                    return publishDate;
                }
            }
        ]
    },
    "strategyreport": {
        config: [
            {
                width: 60,
                th: function name(v) {
                    return '序号';
                },
                td: function (v) {
                    return v.index + 1;
                }
            },
            {
                width: 288,
                th: function name(v) {
                    return '报告名称';
                },
                td: function (v) {
                    return "<a href=\"zw_strategy.jshtml?encodeUrl=" + v.encodeUrl + ("\">" + v.title + "</a>");
                }
            },
            {
                width: 180,
                th: function name(v) {
                    return '作者';
                },
                td: function (v) {
                    var authorStr = authorFormat(v);
                    return authorStr;
                }
            },
            {
                width: 90,
                th: function name(v) {
                    return '机构名称';
                },
                td: function (v) {
                    return "<a href=\"orgpublish.jshtml?orgcode=" + v.orgCode + ("\">" + (v.orgSName ? v.orgSName : v.orgName) + "</a>");
                }
            },
            {
                width: 90,
                paramname: 'count',
                th: function name(v) {
                    return '近一月机构策略报告数量';
                },
                // sort: {
                //   asc: {
                //     sortkey: 'sort',
                //     value: 'count,asc'
                //   },
                //   desc: {
                //     sortkey: 'sort',
                //     value: 'count,desc'
                //   },
                //   default: {
                //     sortkey: 'sort',
                //     value: 'count,default'
                //   }
                // },
                td: function (v) {
                    return "" + (v.count != undefined ? v.count : '');
                }
            },
            {
                width: 90,
                paramname: 'publishDate',
                th: function name(v) {
                    return '日期';
                },
                sort: {
                    asc: {
                        sortkey: 'sort',
                        value: 'publishDate,asc'
                    },
                    desc: {
                        sortkey: 'sort',
                        value: 'publishDate,desc'
                    },
                    "default": {
                        sortkey: 'sort',
                        value: 'publishDate,default'
                    }
                },
                td: function (v) {
                    var publishDate = v.publishDate ? (v.publishDate).substring(0, 11) : '';
                    return publishDate;
                }
            }
        ]
    },
    "brokerreport": {
        config: [
            {
                th: function name(v) {
                    return '序号';
                },
                td: function (v) {
                    return v.index + 1;
                }
            },
            {
                width: 268,
                th: function name(v) {
                    return '报告名称';
                },
                td: function (v) {
                    return "<a href=\"zw_brokerreport.jshtml?encodeUrl=" + v.encodeUrl + ("\">" + v.title + "</a>");
                }
            },
            {
                width: 220,
                th: function name(v) {
                    return '作者';
                },
                td: function (v) {
                    var authorStr = authorFormat(v);
                    return authorStr;
                }
            },
            {
                width: 220,
                th: function name(v) {
                    return '机构名称';
                },
                td: function (v) {
                    return "<a href=\"orgpublish.jshtml?orgcode=" + v.orgCode + ("\">" + (v.orgSName ? v.orgSName : v.orgName) + "</a>");
                }
            },
            {
                paramname: 'publishDate',
                th: function name(v) {
                    return '日期';
                },
                sort: {
                    asc: {
                        sortkey: 'sort',
                        value: 'publishDate,asc'
                    },
                    desc: {
                        sortkey: 'sort',
                        value: 'publishDate,desc'
                    },
                    "default": {
                        sortkey: 'sort',
                        value: 'publishDate,default'
                    }
                },
                td: function (v) {
                    var publishDate = v.publishDate ? (v.publishDate).substring(0, 11) : '';
                    return publishDate;
                }
            }
        ]
    },
    "orgpublish": {
        config: [
            {
                th: function name(v) {
                    return '序号';
                },
                td: function (v) {
                    return v.index + 1;
                }
            },
            {
                width: 282,
                th: function name(v) {
                    return '报告名称';
                },
                td: function (v) {
                    //return `<a>${v.title}</a>`
                    return getZWUrl(v);
                }
            },
            {
                th: function name(v) {
                    return '报告类型';
                },
                td: function (v) {
                    return geTypeUrl(v);
                }
            },
            {
                th: function name(v) {
                    return '研究对象';
                },
                td: function (v) {
                    return getYJDXUrl(v);
                }
            },
            {
                width: 180,
                th: function name(v) {
                    return '作者';
                },
                td: function (v) {
                    var authorStr = authorFormat(v);
                    return authorStr;
                }
            },
            {
                th: function name(v) {
                    return '机构';
                },
                td: function (v) {
                    return "<a href=\"orgpublish.jshtml?orgcode=" + v.orgCode + ("\">" + (v.orgSName ? v.orgSName : v.orgName) + "</a>");
                }
            },
            {
                paramname: 'publishDate',
                th: function name(v) {
                    return '日期';
                },
                sort: {
                    asc: {
                        sortkey: 'sort',
                        value: 'publishDate,asc'
                    },
                    desc: {
                        sortkey: 'sort',
                        value: 'publishDate,desc'
                    },
                    "default": {
                        sortkey: 'sort',
                        value: 'publishDate,default'
                    }
                },
                td: function (v) {
                    var publishDate = v.publishDate ? (v.publishDate).split(' ')[0] : '';
                    return publishDate;
                }
            }
        ]
    },
    "personalpublish": {
        config: [
            {
                th: function name(v) {
                    return '序号';
                },
                td: function (v) {
                    return v.index + 1;
                }
            },
            {
                width: 282,
                th: function name(v) {
                    return '报告名称';
                },
                td: function (v) {
                    return getZWUrl(v);
                }
            },
            {
                th: function name(v) {
                    return '报告类型';
                },
                td: function (v) {
                    return geTypeUrl(v);
                }
            },
            {
                th: function name(v) {
                    return '研究对象';
                },
                td: function (v) {
                    return getYJDXUrl(v);
                }
            },
            {
                width: 180,
                th: function name(v) {
                    return '作者';
                },
                td: function (v) {
                    var authorStr = authorFormat(v);
                    return authorStr;
                }
            },
            {
                th: function name(v) {
                    return '机构';
                },
                td: function (v) {
                    return "<a href=\"orgpublish.jshtml?orgcode=" + v.orgCode + ("\">" + (v.orgSName ? v.orgSName : v.orgName) + "</a>");
                }
            },
            {
                paramname: 'publishDate',
                th: function name(v) {
                    return '日期';
                },
                sort: {
                    asc: {
                        sortkey: 'sort',
                        value: 'publishDate,asc'
                    },
                    desc: {
                        sortkey: 'sort',
                        value: 'publishDate,desc'
                    },
                    "default": {
                        sortkey: 'sort',
                        value: 'publishDate,default'
                    }
                },
                td: function (v) {
                    var publishDate = v.publishDate ? (v.publishDate).split(' ')[0] : '';
                    return publishDate;
                }
            }
        ]
    },
    "singlestock": {
        config: [
            {
                th: function name(v) {
                    return '序号';
                },
                td: function (v) {
                    return v.index + 1;
                }
            },
            {
                width: 248,
                th: function name(v) {
                    return '报告名称';
                },
                td: function (v) {
                    return "<a href=\"zw_stock.jshtml?encodeUrl=" + v.encodeUrl + ("\">" + v.title + "</a>");
                    // let date = ((v.publishDate).split(' ')[0]).replace(/-/g, '');
                    // return `<a href="http://data.eastmoney.com/report/ReportRedirect.aspx?date=` + date + `&code=` + v.infoCode + `">${v.title}</a>`
                }
            },
            {
                th: function name(v) {
                    return '评级<br>类别';
                },
                td: function (v) {
                    var emRatingName = v.emRatingName ? v.emRatingName : '-';
                    return "" + emRatingName;
                }
            },
            {
                th: function name(v) {
                    return '评级<br>变动';
                },
                td: function (v) {
                    var ratingChangeName = getRatingChangeStr(v.ratingChange);
                    return "" + ratingChangeName;
                }
            },
            {
                th: function name(v) {
                    return '作者';
                },
                td: function (v) {
                    var authorStr = authorFormat(v);
                    return authorStr;
                }
            },
            {
                th: function name(v) {
                    return '机构';
                },
                td: function (v) {
                    return "<a href=\"orgpublish.jshtml?orgcode=" + v.orgCode + ("\">" + (v.orgSName ? v.orgSName : v.orgName) + "</a>");
                }
            },
            {
                paramname: 'publishDate',
                th: function name(v) {
                    return '日期';
                },
                sort: {
                    asc: {
                        sortkey: 'sort',
                        value: 'publishDate,asc'
                    },
                    desc: {
                        sortkey: 'sort',
                        value: 'publishDate,desc'
                    },
                    "default": {
                        sortkey: 'sort',
                        value: 'publishDate,default'
                    }
                },
                td: function (v) {
                    var publishDate = v.publishDate ? (v.publishDate).split(' ')[0] : '';
                    return publishDate;
                }
            }
        ]
    },
    //------------正文----------
    //策略报告正文：策略报告
    "zw_stratyge": {
        config: [
            {
                width: 312,
                th: function name(v) {
                    return '标题';
                },
                td: function (v) {
                    return "<a href=\"zw_strategy.jshtml?encodeUrl=" + v.encodeUrl + ("\">" + v.title + "</a>");
                }
            },
            {
                th: function name(v) {
                    return '报告日期';
                },
                td: function (v) {
                    var publishDate = v.publishDate ? (v.publishDate).substring(0, 11) : '';
                    return publishDate;
                }
            },
            {
                th: function name(v) {
                    return '机构名称';
                },
                td: function (v) {
                    return "<a href=\"orgpublish.jshtml?orgcode=" + v.orgCode + ("\">" + (v.orgSName ? v.orgSName : v.orgName) + "</a>");
                }
            },
            {
                width: 160,
                th: function name(v) {
                    return '研究员';
                },
                td: function (v) {
                    return v.researcher;
                }
            }
        ]
    },
    //策略报告正文：zuixin
    "zw_neweast": {
        config: [
            {
                width: 312,
                th: function name(v) {
                    return '标题';
                },
                td: function (v) {
                    return "<a href=\"zw_strategy.jshtml?encodeUrl=" + v.encodeUrl + ("\">" + v.title + "</a>");
                }
            },
            {
                th: function name(v) {
                    return '报告日期';
                },
                td: function (v) {
                    var publishDate = v.publishDate ? (v.publishDate).substring(0, 11) : '';
                    return publishDate;
                }
            },
            {
                th: function name(v) {
                    return '机构名称';
                },
                td: function (v) {
                    return "<a href=\"orgpublish.jshtml?orgcode=" + v.orgCode + ("\">" + (v.orgSName ? v.orgSName : v.orgName) + "</a>");
                }
            },
            {
                width: 160,
                th: function name(v) {
                    return '研究员';
                },
                td: function (v) {
                    return v.researcher;
                }
            }
        ]
    },
    //策略报告正文：机构一致看多个股  券商 宏观公用
    "zw_mutiplestock": {
        config: [
            {
                th: function name(v) {
                    return '名称';
                },
                td: function (v) {
                    return "<a href=\"http://data.eastmoney.com/stockdata/" + v.stockCode + (".html\">" + v.stockName + "</a>");
                }
            },
            {
                th: function name(v) {
                    return '研报';
                },
                td: function (v) {
                    return "<a href=\"singlestock.jshtml?stockcode=" + v.stockCode + "&market=" + v.market + "\" class=\"\">\u8BE6\u7EC6</a>";
                }
            },
            {
                th: function name(v) {
                    return '看多<br>家数';
                },
                td: function (v) {
                    return v.ratekanduo;
                }
            },
            {
                th: function name(v) {
                    return '最高<br>目标价';
                },
                td: function (v) {
                    return Number(v.aimPriceT).toFixed(2);
                }
            },
            {
                th: function name(v) {
                    return '最低<br>目标价';
                },
                td: function (v) {
                    return Number(v.aimPriceL).toFixed(2);
                }
            },
            {
                th: function name(v) {
                    return '现价';
                },
                td: function (v) {
                    return '<span class="gghqspan" data-hqtype="zxj" data-market=' + v.market + ' data-code="' + v.stockCode + '"></span>';
                }
            }
        ]
    },
    //策略报告正文：热门行业追踪 
    "zw_hotindustry": {
    // config: [
    //   {
    //     th: function name(v: any) {
    //       return '名称'
    //     },
    //     td: function (v: any) {
    //       return `<a>${v.industryName}</a>`
    //     }
    //   },
    //   {
    //     th: function name(v: any) {
    //       return '涨跌幅'
    //     },
    //     td: function (v: any) {
    //       return '<span class="hqspan" data-hqtype="zdf" data-code="' + v.industryCode + '"></span>'
    //     }
    //   },
    //   {
    //     th: function name(v: any) {
    //       return '相关'
    //     },
    //     td: function (v: any) {
    //       return `<a>研报</a>&nbsp;<a>资金流</a>`
    //     }
    //   },
    //   {
    //     th: function name(v: any) {
    //       return '领涨股票'
    //     },
    //     td: function (v: any) {
    //       return v.stockName
    //     }
    //   },
    //   {
    //     width: 70,
    //     th: function name(v: any) {
    //       return '相关'
    //     },
    //     td: function (v: any) {
    //       return `<a>研报</a>&nbsp;<a>资金流</a>`
    //     }
    //   }
    // ]
    },
    //行业研报正文：文中涉及到的个股
    "zw_industry_stock": {
        config: [
            {
                th: function name(v) {
                    return '代码';
                },
                td: function (v) {
                    return "<a href=\"http://quote.eastmoney.com/" + v.code + (".html\">" + v.code + "</a>");
                }
            },
            {
                th: function name(v) {
                    return '名称';
                },
                td: function (v) {
                    return "<a href=\"http://data.eastmoney.com/stockdata/" + v.code + (".html\">" + v.name + "</a>");
                }
            },
            {
                width: 120,
                th: function name(v) {
                    return '相关';
                },
                td: function (v) {
                    return "<a href=\"singlestock.jshtml?quoteid=" + v.quoteid + "&stockcode=" + v.code + "\">\u7814\u62A5</a>&nbsp;\n                  <a href=\"http://data.eastmoney.com/zjlx/" + v.code + ".html\">\u8D44\u91D1\u6D41</a>&nbsp;\n                  <a href=\"http://guba.eastmoney.com/list," + v.code + ".html\">\u80A1\u5427</a>";
                }
            },
            {
                th: function name(v) {
                    return '最新价';
                },
                td: function (v) {
                    var $span;
                    if (v.zde < 0) {
                        $span = "<span class='green'>" + v.zxj + "</span>";
                    }
                    else if (v.zde > 0) {
                        $span = "<span class='red'>" + v.zxj + "</span>";
                    }
                    else {
                        $span = "<span class=''>" + v.zxj + "</span>";
                    }
                    return $span;
                }
            },
            {
                th: function name(v) {
                    return '涨跌额';
                },
                td: function (v) {
                    var $span;
                    if (v.zde < 0) {
                        $span = "<span class='green'>" + v.zde + "</span>";
                    }
                    else if (v.zde > 0) {
                        $span = "<span class='red'>" + v.zde + "</span>";
                    }
                    else {
                        $span = "<span class=''>" + v.zde + "</span>";
                    }
                    return $span;
                }
            },
            {
                th: function name(v) {
                    return '涨跌幅';
                },
                td: function (v) {
                    var $span;
                    if (v.zde < 0) {
                        $span = "<span class='green'>" + v.zdf + "</span>";
                    }
                    else if (v.zde > 0) {
                        $span = "<span class='red'>" + v.zdf + "</span>";
                    }
                    else {
                        $span = "<span class=''>" + v.zdf + "</span>";
                    }
                    return $span;
                }
            }
        ]
    },
    //行业研报正文：所在行业最新研究报告
    "zw_indsneweast": {
        config: [
            {
                width: 312,
                th: function name(v) {
                    return '标题';
                },
                td: function (v) {
                    var title = v.title;
                    return "<a href=\"zw_industry.jshtml?encodeUrl=" + v.encodeUrl + ("\">" + v.title + "</a>");
                }
            },
            {
                th: function name(v) {
                    return '评级类别';
                },
                td: function (v) {
                    var emRatingName = v.emRatingName ? v.emRatingName : '';
                    return "" + emRatingName;
                }
            },
            {
                th: function name(v) {
                    return '评级变动';
                },
                td: function (v) {
                    var ratingChangeName = getRatingChangeStr(v.ratingChange);
                    return "" + ratingChangeName;
                }
            },
            {
                th: function name(v) {
                    return '报告日期';
                },
                td: function (v) {
                    var publishDate = v.publishDate ? (v.publishDate).substring(0, 11) : '';
                    return publishDate;
                }
            },
            {
                th: function name(v) {
                    return '机构名称';
                },
                td: function (v) {
                    return "<a href=\"orgpublish.jshtml?orgcode=" + v.orgCode + ("\">" + (v.orgSName ? v.orgSName : v.orgName) + "</a>");
                }
            }
        ]
    },
    //行业研报正文  ：热门行业评级一览
    "zw_indshotstock": {
        theadfix: {
            orgGrade_6: function (v) {
                return '机构投资评级（近六个月）';
            }
        },
        config: [
            {
                width: 60,
                th: function name(v) {
                    return '名称';
                },
                td: function (v) {
                    return "<a href=\"http://data.eastmoney.com/stockdata/" + v.code + (".html\">" + v.name + "</a>");
                }
            },
            {
                width: 60,
                th: function name(v) {
                    return '涨跌幅';
                },
                td: function (v) {
                    var zdf = v.zdf;
                    var span = '';
                    // span = zdf == '-' ? span = zdf : String(zdf).indexOf('-')>-1 ? span = '<span class="green">' + zdf + '%</span>' : span = '<span class="red">' + zdf + '%</span>';
                    if (zdf > 0) {
                        span = '<span class="red">' + zdf + '%</span>';
                    }
                    else if (zdf < 0) {
                        span = '<span class="green">' + zdf + '%</span>';
                    }
                    else if (zdf == 0) {
                        span = '<span>0.00%</span>';
                    }
                    else if (zdf == '-') {
                        span = '<span>-</span>';
                    }
                    return span;
                    // return '<span class="gghqspan" data-hqtype="zdf" data-market="'+v.market+'" data-code="' + v.stockCode + '"></span>'
                }
            },
            {
                width: 40,
                th: function name(v) {
                    return '研报数';
                },
                td: function (v) {
                    // return !!v.total ? `<a href="">` + v.total+`</a>` :''
                    return v.total !== '' ? v.total : '';
                }
            },
            {
                th: function name(v) {
                    return '买入';
                },
                theadfix: 'orgGrade_6',
                td: function (v) {
                    return v.rateBuy;
                }
            },
            {
                th: function name(v) {
                    return '增持';
                },
                theadfix: 'orgGrade_6',
                td: function (v) {
                    return v.rateIncrease;
                }
            },
            {
                th: function name(v) {
                    return '中性';
                },
                theadfix: 'orgGrade_6',
                td: function (v) {
                    return v.rateNeutral;
                }
            },
            {
                th: function name(v) {
                    return '减持';
                },
                theadfix: 'orgGrade_6',
                td: function (v) {
                    return v.rateReduce;
                }
            },
            {
                th: function name(v) {
                    return '卖出';
                },
                theadfix: 'orgGrade_6',
                td: function (v) {
                    return v.rateSellout;
                }
            }
        ]
    },
    //行业研报正文  ：行业个股未来3年盈利预测
    "zw_indsstockforecast": {
        // theadfix: {
        //   thisyear_ycsy: function (v: any) {
        //     let currentYear = v.currentYear ? v.currentYear : '';
        //     return currentYear
        //   },
        //   nextyear_ycsy: function (v: any) {
        //     let nextyear = v.currentYear ? v.currentYear+1 : '';
        //     return nextyear
        //   },
        //   afteryear_ycsy: function (v: any) {
        //     let afteryear = v.currentYear ? v.currentYear + 2 : '';
        //     return afteryear
        //   }
        // },
        config: [
            {
                width: 60,
                th: function name(v) {
                    return '名称';
                },
                td: function (v) {
                    return "<a href=\"http://data.eastmoney.com/stockdata/" + v.stockCode + (".html\">" + v.stockName + "</a>");
                }
            },
            {
                width: 70,
                th: function name(v) {
                    return '相关';
                },
                td: function (v) {
                    return "<a href=\"singlestock.jshtml?stockcode=" + v.stockCode + "&market=" + v.market + "\" class=\"red\">\u8BE6\u7EC6</a>&nbsp;\n          <a href=\"http://guba.eastmoney.com/list," + v.stockCode + ".html\">\u80A1\u5427</a>";
                }
            },
            {
                th: function name(v) {
                    var thisYear = v.data.currentYear ? v.data.currentYear : '';
                    return thisYear + '<br>预测收益';
                },
                // theadfix: 'thisyear_ycsy',
                td: function (v) {
                    return Number(v.thisYearEps).toFixed(3);
                }
            },
            {
                th: function name(v) {
                    var nextYear = v.data.currentYear ? v.data.currentYear + 1 : '';
                    return nextYear + '<br>预测收益';
                },
                // theadfix: 'nextyear_ycsy',
                td: function (v) {
                    return Number(v.nextYearEps).toFixed(3);
                }
            },
            {
                th: function name(v) {
                    var afterYear = v.data.currentYear ? v.data.currentYear + 2 : '';
                    return afterYear + '<br>预测收益';
                },
                // theadfix: 'afteryear_ycsy',
                td: function (v) {
                    return Number(v.afterYearEps).toFixed(3);
                }
            }
        ]
    },
    //行业研报正文：热门行业追踪
    "zw_indshotindustry": {
        config: [
            {
                width: 60,
                th: function name(v) {
                    return '名称';
                },
                td: function (v) {
                    // return `<a>${v.name}</a>`   
                    return "<a href=\"http://quote.eastmoney.com/center/boardlist.html#boards-" + v.code + ("\">" + v.name + "</a>");
                    // return `<a href="http://quote.eastmoney.com/center/list.html#` + v.stockcode+`">${v.name}</a>`
                }
            },
            {
                width: 40,
                th: function name(v) {
                    return '涨跌幅';
                },
                td: function (v) {
                    var zdf = v.zdf;
                    var span = '';
                    // span = zdf == '-' ? span = zdf : String(zdf).indexOf('-')>-1 ? span = '<span class="green">' + zdf + '%</span>' : span = '<span class="red">' + zdf + '%</span>';
                    if (zdf > 0) {
                        span = '<span class="red">' + zdf + '%</span>';
                    }
                    else if (zdf < 0) {
                        span = '<span class="green">' + zdf + '%</span>';
                    }
                    else if (zdf == 0) {
                        span = '<span>0.00%</span>';
                    }
                    if (zdf == '-') {
                        span = zdf;
                    }
                    return span;
                }
            },
            {
                width: 70,
                th: function name(v) {
                    return '相关';
                },
                td: function (v) {
                    var bkcode = v.code;
                    bkcode = bkcode.charAt(2) == '0' ? bkcode.substring(3) : bkcode.substring(2);
                    // return `<a href="http://data.eastmoney.com/report/` + bkcode +`yb.html">研报</a>
                    return "<a href=\"industry.jshtml?hyid=" + bkcode + "\">\u7814\u62A5</a>\n                  <a href=\"http://data.eastmoney.com/bkzj/" + bkcode + ".html\">\u8D44\u91D1\u6D41</a>";
                }
            },
            {
                width: 60,
                th: function name(v) {
                    return '领涨股票';
                },
                td: function (v) {
                    return v.lzgp == '-' ? v.lzgp : "<a href=\"http://quote.eastmoney.com/" + v.stockcode + (".html\">" + v.lzgp + "</a>");
                }
            },
            {
                width: 70,
                th: function name(v) {
                    return '相关';
                },
                td: function (v) {
                    // return `<a href="http://data.eastmoney.com/report/` + v.stockcode + `.html">研报</a>      
                    return "<a href = \"singlestock.jshtml?quoteid=" + v.quoteid + "&stockcode=" + v.stockcode + "\">\u7814\u62A5</a>\n                  <a href=\"http://data.eastmoney.com/zjlx/" + v.stockcode + ".html\">\u8D44\u91D1\u6D41</a>";
                }
            }
        ]
    },
    //行业正文：个股财务指标 
    "zw_indggcw_table": {
        config: [
            {
                width: 30,
                th: function name(v) {
                    return '序号';
                },
                td: function (v) {
                    return v.index + 1;
                }
            },
            {
                width: 90,
                th: function name(v) {
                    return '名称';
                },
                td: function (v) {
                    // return `<a>${v.name}</a>`
                    return "<a href=\"http://data.eastmoney.com/stockdata/" + v.code + (".html\">" + v.name + "</a>");
                }
            },
            {
                width: 90,
                th: function name(v) {
                    return '相关';
                },
                td: function (v) {
                    // return `<a href="http://data.eastmoney.com/report/`+v.code+`.html">研报</a>&nbsp;
                    return "<a href=\"singlestock.jshtml?quoteid=" + v.quoteid + "&stockcode=" + v.code + "\">\u7814\u62A5</a>&nbsp;\n                  <a href=\"http://guba.eastmoney.com/list," + v.code + ".html\">\u80A1\u5427</a>";
                }
            },
            {
                th: function name(v) {
                    var fid = v.data.data[0].fid;
                    var titlename = '';
                    if (fid == 'f112') {
                        titlename = '每股收益(元)';
                    }
                    else if (fid == 'f113') {
                        titlename += '每股净资产(元)';
                    }
                    else if (fid == 'f37') {
                        titlename = '净资产收益率(%)';
                    }
                    else if (fid == 'f48') {
                        titlename = '每股未分配利润(元)';
                    }
                    else if (fid == 'f45') {
                        titlename = '净利润(亿元)';
                    }
                    else if (fid == 'f40') {
                        titlename = '营业收入(亿元)';
                    }
                    else if (fid == 'f41') {
                        titlename = '营业收入同比(%)';
                    }
                    return titlename;
                    // return '<span>每股收益(元)</span>'
                },
                td: function (v) {
                    // let profit = v.value ? Number(v.value).toFixed(2):'';
                    return v.value;
                }
            }
        ]
    },
    //宏观研究正文 ：最新宏观研究
    "zw_macsearch": {
        config: [
            {
                width: 312,
                th: function name(v) {
                    return '标题';
                },
                td: function (v) {
                    return "<a href=\"zw_macresearch.jshtml?encodeUrl=" + v.encodeUrl + ("\">" + v.title + "</a>");
                }
            },
            {
                th: function name(v) {
                    return '报告日期';
                },
                td: function (v) {
                    var publishDate = v.publishDate ? (v.publishDate).substring(0, 11) : '';
                    return publishDate;
                }
            },
            {
                th: function name(v) {
                    return '机构名称';
                },
                td: function (v) {
                    return "<a href=\"orgpublish.jshtml?orgcode=" + v.orgCode + ("\">" + (v.orgSName ? v.orgSName : v.orgName) + "</a>");
                }
            },
            {
                th: function name(v) {
                    return '研究员';
                },
                td: function (v) {
                    return v.researcher;
                }
            }
        ]
    },
    //券商晨报正文：最新券商 
    "zw_broker": {
        config: [
            {
                width: 212,
                th: function name(v) {
                    return '标题';
                },
                td: function (v) {
                    return "<a href=\"zw_brokerreport.jshtml?encodeUrl=" + v.encodeUrl + ("\">" + v.title + "</a>");
                }
            },
            {
                th: function name(v) {
                    return '报告日期';
                },
                td: function (v) {
                    var publishDate = v.publishDate ? (v.publishDate).substring(0, 11) : '';
                    return publishDate;
                }
            },
            {
                th: function name(v) {
                    return '机构名称';
                },
                td: function (v) {
                    return "<a href=\"orgpublish.jshtml?orgcode=" + v.orgCode + ("\">" + (v.orgSName ? v.orgSName : v.orgName) + "</a>");
                }
            },
            {
                th: function name(v) {
                    return '研究员';
                },
                td: function (v) {
                    return v.researcher;
                }
            }
        ]
    },
    //券商晨报正文：最新研究  暂定
    "zw_neweastbroker": {
        config: [
            {
                width: 312,
                th: function name(v) {
                    return '标题';
                },
                td: function (v) {
                    return "<a href=\"zw_macresearch.jshtml?encodeUrl=" + v.encodeUrl + ("\">" + v.title + "</a>");
                }
            },
            {
                th: function name(v) {
                    return '报告日期';
                },
                td: function (v) {
                    var publishDate = v.publishDate ? (v.publishDate).substring(0, 11) : '';
                    return publishDate;
                }
            },
            {
                th: function name(v) {
                    return '机构名称';
                },
                td: function (v) {
                    return "<a href=\"orgpublish.jshtml?orgcode=" + v.orgCode + ("\">" + (v.orgSName ? v.orgSName : v.orgName) + "</a>");
                }
            },
            {
                th: function name(v) {
                    return '研究员';
                },
                td: function (v) {
                    return v.researcher;
                }
            }
        ]
    },
    //单个个股正文行业最新
    "zw_indsneweast_stock": {
        config: [
            {
                width: 180,
                th: function name(v) {
                    return '标题';
                },
                td: function (v) {
                    var title = utils_1["default"].txtLeft(v.title, 24, true);
                    return "<a href=\"zw_industry.jshtml?encodeUrl=" + v.encodeUrl + ("\">" + title + "</a>");
                }
            },
            {
                th: function name(v) {
                    return '评级';
                },
                td: function (v) {
                    var emRatingName = v.emRatingName ? v.emRatingName : '';
                    return "" + emRatingName;
                }
            },
            {
                th: function name(v) {
                    return '报告日期';
                },
                td: function (v) {
                    var publishDate = v.publishDate ? (v.publishDate).substring(5, 11) : '';
                    return publishDate;
                }
            }
        ]
    },
    "zw_orgneweast_stock": {
        config: [
            {
                width: 180,
                th: function name(v) {
                    return '标题';
                },
                td: function (v) {
                    var title = utils_1["default"].txtLeft(v.title, 24, true);
                    return "<a href=\"zw_industry.jshtml?encodeUrl=" + v.encodeUrl + ("\">" + title + "</a>");
                }
            },
            {
                th: function name(v) {
                    return '评级';
                },
                td: function (v) {
                    var emRatingName = v.emRatingName ? v.emRatingName : '';
                    return "" + emRatingName;
                }
            },
            {
                th: function name(v) {
                    return '报告日期';
                },
                td: function (v) {
                    var publishDate = v.publishDate ? (v.publishDate).substring(5, 11) : '';
                    return publishDate;
                }
            }
        ]
    },
    "zw_stockneweast_stock": {
        config: [
            {
                width: 180,
                th: function name(v) {
                    return '标题';
                },
                td: function (v) {
                    var title = utils_1["default"].txtLeft(v.title, 24, true);
                    return "<a href=\"zw_stock.jshtml?encodeUrl=" + v.encodeUrl + ("\">" + title + "</a>");
                }
            },
            {
                th: function name(v) {
                    return '评级';
                },
                td: function (v) {
                    var emRatingName = v.emRatingName ? v.emRatingName : '';
                    return "" + emRatingName;
                }
            },
            {
                th: function name(v) {
                    return '报告日期';
                },
                td: function (v) {
                    var publishDate = v.publishDate ? (v.publishDate).substring(5, 11) : '';
                    return publishDate;
                }
            }
        ]
    },
    //个股研报正文  ：热门行业评级一览
    "zw_indshotstockpj": {
        theadfix: {
            orgGrade_6: function (v) {
                return '机构投资评级（近六个月）';
            }
        },
        config: [
            {
                width: 50,
                th: function name(v) {
                    return '名称';
                },
                td: function (v) {
                    return "<a href=\"http://data.eastmoney.com/report/" + v.code + (".html\">" + v.name + "</a>");
                }
            },
            {
                width: 50,
                th: function name(v) {
                    return '涨跌幅';
                },
                td: function (v) {
                    var zdf = v.zdf;
                    var span = '';
                    // span = zdf == '-' ? span = zdf : String(zdf).indexOf('-')>-1 ? span = '<span class="green">' + zdf + '%</span>' : span = '<span class="red">' + zdf + '%</span>';
                    if (zdf > 0) {
                        span = '<span class="red">' + zdf + '%</span>';
                    }
                    else if (zdf < 0) {
                        span = '<span class="green">' + zdf + '%</span>';
                    }
                    else if (zdf == 0) {
                        span = '<span>0.00%</span>';
                    }
                    else if (zdf == '-') {
                        span = '<span>-</span>';
                    }
                    return span;
                    // return '<span class="gghqspan" data-hqtype="zdf" data-market="'+v.market+'" data-code="' + v.stockCode + '"></span>'
                }
            },
            {
                width: 40,
                th: function name(v) {
                    return '研报数';
                },
                td: function (v) {
                    // return !!v.total ? `<a href="">` + v.total+`</a>` :''
                    return v.total !== '' ? v.total : '';
                }
            },
            {
                th: function name(v) {
                    return '买入';
                },
                theadfix: 'orgGrade_6',
                td: function (v) {
                    return v.rateBuy;
                }
            },
            {
                th: function name(v) {
                    return '增持';
                },
                theadfix: 'orgGrade_6',
                td: function (v) {
                    return v.rateIncrease;
                }
            },
            {
                th: function name(v) {
                    return '中性';
                },
                theadfix: 'orgGrade_6',
                td: function (v) {
                    return v.rateNeutral;
                }
            },
            {
                th: function name(v) {
                    return '减持';
                },
                theadfix: 'orgGrade_6',
                td: function (v) {
                    return v.rateReduce;
                }
            },
            {
                th: function name(v) {
                    return '卖出';
                },
                theadfix: 'orgGrade_6',
                td: function (v) {
                    return v.rateSellout;
                }
            }
        ]
    },
    //个股正文：机构一致看多个股 :和其他正文的看多分开处理
    "zwstock_mutiplestock": {
        config: [
            {
                th: function name(v) {
                    return '名称';
                },
                td: function (v) {
                    return "<a href=\"http://data.eastmoney.com/report/" + v.stockCode + (".html\">" + v.stockName + "</a>");
                }
            },
            {
                th: function name(v) {
                    return '研报';
                },
                td: function (v) {
                    return "<a href=\"singlestock.jshtml?stockcode=" + v.stockCode + "&market=" + v.market + "\" class=\"\">\u8BE6\u7EC6</a>";
                }
            },
            {
                th: function name(v) {
                    return '看多<br>家数';
                },
                td: function (v) {
                    return v.ratekanduo;
                }
            },
            {
                th: function name(v) {
                    return '最高<br>目标价';
                },
                td: function (v) {
                    return Number(v.aimPriceT).toFixed(2);
                }
            },
            {
                th: function name(v) {
                    return '最低<br>目标价';
                },
                td: function (v) {
                    return Number(v.aimPriceL).toFixed(2);
                }
            },
            {
                th: function name(v) {
                    return '现价';
                },
                td: function (v) {
                    return '<span class="gghqspan" data-hqtype="zxj" data-market=' + v.market + ' data-code="' + v.stockCode + '"></span>';
                }
            }
        ]
    }
};
exports["default"] = config;


/***/ }),

/***/ "./src/modules/datatable/dataurl.ts":
/*!******************************************!*\
  !*** ./src/modules/datatable/dataurl.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var utils_1 = __importDefault(__webpack_require__(/*! ../commonutil/utils */ "./src/modules/commonutil/utils.ts"));
/**
 * 行业研报和个股研报参数说明：
 * qType:必填，，0个股研报，1行业研报，2策略报告，3宏观研究，4券商晨会
 * reportType研报类型，不查询填*或不带该字段  个股研报是2 行业研报是3(可不要)
 *
 *  */
var dataurl = {
    "industry": {
        url: 'report/list?cb=?',
        params: {
            industryCode: '*',
            pageSize: 50,
            industry: '*',
            rating: '*',
            ratingChange: '*',
            beginTime: '',
            endTime: '',
            pageNo: 1,
            fields: "",
            qType: 1
        },
        node_params: function () {
            return {
                industryCode: '*',
                pageSize: 50,
                industry: '*',
                rating: '',
                ratingchange: '*',
                beginTime: utils_1["default"].getDateStr(-2, 0, 0),
                endTime: utils_1["default"].getDateStr(0, 0, 0),
                pageNo: 1,
                fields: '',
                qType: 1,
                orgCode: '',
                code: '*',
                rcode: ''
            };
        }
    },
    // code=*&reportType=2&beginTime=20101101&endTime=2019-12-02%2011:44:44&start=0&rows=1&delay=365&cb=showData&qType=0
    "stock": {
        url: 'report/list?cb=?',
        params: {
            industryCode: '*',
            pageSize: 50,
            industry: '*',
            rating: '*',
            ratingChange: '*',
            beginTime: '',
            endTime: '',
            pageNo: 1,
            fields: "",
            qType: 0 //必填，0标识查询个股研报，1标识行业研报
        },
        node_params: function () {
            return {
                industryCode: '*',
                pageSize: 50,
                industry: '*',
                rating: '',
                beginTime: utils_1["default"].getDateStr(-2, 0, 0),
                endTime: utils_1["default"].getDateStr(0, 0, 0),
                pageNo: 1,
                fields: '',
                qType: 0,
                ratingChange: '',
                orgCode: '',
                code: '*',
                rcode: ''
            };
        }
    },
    "profitforecast": {
        url: 'report/predic?cb=?',
        params: {
            dyCode: '*',
            pageNo: 1,
            pageSize: 50,
            fields: '',
            beginTime: '',
            endTime: ''
        },
        node_params: function () {
            return {
                dyCode: '*',
                hyCode: '*',
                gnCode: '*',
                marketCode: '*',
                pageNo: 1,
                pageSize: 50,
                fields: '',
                beginTime: utils_1["default"].getDateStr(-2, 0, 0),
                endTime: utils_1["default"].getDateStr(0, 0, 0),
                sort: 'count,desc'
            };
        }
    },
    //indexnewreport  //首页:公司研究：最新研报：取的是个股研报前五条
    "indexnewreport": {
        url: 'report/list?cb=?',
        params: {
            industryCode: '*',
            pageSize: 5,
            industry: '*',
            rating: '*',
            ratingchange: '*',
            //reportType: 2, //研报类型，不查询填*或不带该字段  个股研报是2 行业研报是3
            // isNew:'002',
            beginTime: '',
            endTime: '',
            pageNo: 1,
            fields: "",
            qType: 0 //必填，0标识查询个股研报，1标识行业研报
        },
        node_params: function () {
            return {
                industryCode: '*',
                pageSize: 5,
                industry: '*',
                rating: '*',
                ratingchange: '*',
                beginTime: utils_1["default"].getDateStr(-2, 0, 0),
                endTime: utils_1["default"].getDateStr(0, 0, 0),
                pageNo: 1,
                fields: "",
                qType: 0 //必填，0标识查询个股研报，1标识行业研报
            };
        }
    },
    //industryresearch 首页行业研究
    "industryresearch": {
        url: 'report/list?cb=?',
        params: {
            industryCode: '*',
            pageSize: 5,
            industry: '*',
            rating: '*',
            ratingchange: '*',
            columnCode: "002002",
            //reportType: 3, //研报类型，不查询填*或不带该字段  个股研报是2 行业研报是3
            beginTime: utils_1["default"].getDateStr(-2, 0, 0),
            endTime: utils_1["default"].getDateStr(0, 0, 0),
            pageNo: 1,
            fields: "",
            qType: 1
        },
        node_params: function () {
            return {
                industryCode: '*',
                pageSize: 5,
                industry: '*',
                rating: '*',
                ratingchange: '*',
                columnCode: "002002",
                //reportType: 3, //研报类型，不查询填*或不带该字段  个股研报是2 行业研报是3
                beginTime: '',
                endTime: '',
                pageNo: 1,
                fields: "",
                qType: 1
            };
        }
    },
    //indexylyc 首页盈利预测
    "indexylyc": {
        url: 'report/predic?cb=?',
        params: {
            dyCode: '*',
            pageNo: 1,
            pageSize: 5,
            fields: '',
            beginTime: '',
            endTime: ''
        },
        node_params: function () {
            return {
                dyCode: '*',
                pageNo: 1,
                pageSize: 5,
                fields: '',
                beginTime: utils_1["default"].getDateStr(-2, 0, 0),
                endTime: utils_1["default"].getDateStr(0, 0, 0)
            };
        }
    },
    //首页宏观研究indexmacresearch
    "indexmacresearch": {
        url: 'report/jg?cb=?',
        params: {
            pageSize: 5,
            beginTime: '',
            endTime: '',
            pageNo: 1,
            fields: "",
            qType: 3 // 必填，2策略报告，3宏观研究，4券商晨会
        },
        node_params: function () {
            return {
                pageSize: 5,
                beginTime: '',
                endTime: '',
                pageNo: 1,
                fields: "",
                qType: 3 // 必填，2策略报告，3宏观研究，4券商晨会
            };
        }
    },
    //首页新股研究  indexnewstock
    "indexnewstock": {
        url: 'report/newStockList?cb=?',
        params: {
            pageSize: 5,
            beginTime: '',
            endTime: '',
            pageNo: 1,
            fields: "",
            qType: 4 // 必填，2策略报告，3宏观研究，4券商晨会
        },
        node_params: function () {
            return {
                pageSize: 5,
                beginTime: '',
                endTime: '',
                pageNo: 1,
                fields: "",
                qType: 4 // 必填，2策略报告，3宏观研究，4券商晨会
            };
        }
    },
    //首页策略报告
    "indexstrategyreport": {
        url: 'report/jg?cb=?',
        params: {
            pageSize: 5,
            beginTime: '',
            endTime: '',
            pageNo: 1,
            fields: "",
            qType: 2 // 必填，2策略报告，3宏观研究，4券商晨会
        },
        node_params: function () {
            return {
                pageSize: 5,
                beginTime: '',
                endTime: '',
                pageNo: 1,
                fields: "",
                qType: 2 // 必填，2策略报告，3宏观研究，4券商晨会
            };
        }
    },
    //首页券商晨会 indexbroker
    "indexbroker": {
        url: 'report/jg?cb=?',
        params: {
            pageSize: 5,
            beginTime: '',
            endTime: '',
            pageNo: 1,
            fields: "",
            qType: 4 // 必填，2策略报告，3宏观研究，4券商晨会
        },
        node_params: function () {
            return {
                pageSize: 5,
                beginTime: '',
                endTime: '',
                pageNo: 1,
                fields: "",
                qType: 4 // 必填，2策略报告，3宏观研究，4券商晨会
            };
        }
    },
    //首页东财分析师  eastmoneyanalyst
    "eastmoneyanalyst": {
        url: '',
        params: {}
    },
    //新股研报
    "newstock": {
        //以下是更换的新接口i
        url: 'report/newStockList?cb=?',
        params: {
            pageSize: 50,
            beginTime: '',
            endTime: '',
            pageNo: 1,
            fields: "",
            qType: 4 // 必填，2策略报告，3宏观研究，4券商晨会
        },
        node_params: function () {
            return {
                pageSize: 50,
                beginTime: utils_1["default"].getDateStr(-2, 0, 0),
                endTime: utils_1["default"].getDateStr(0, 0, 0),
                pageNo: 1,
                fields: "",
                qType: 4 // 必填，2策略报告，3宏观研究，4券商晨会
            };
        }
    },
    //宏观研报 
    "macresearch": {
        url: 'report/jg?cb=?',
        params: {
            pageSize: 50,
            beginTime: '',
            endTime: '',
            pageNo: 1,
            fields: "",
            qType: 3 // 必填，2策略报告，3宏观研究，4券商晨会
        },
        node_params: function () {
            return {
                orgCode: '',
                author: '',
                pageSize: 50,
                beginTime: utils_1["default"].getDateStr(-2, 0, 0),
                endTime: utils_1["default"].getDateStr(0, 0, 0),
                pageNo: 1,
                fields: "",
                qType: 3 // 必填，2策略报告，3宏观研究，4券商晨会
            };
        }
    },
    //策略报告 
    "strategyreport": {
        url: 'report/jg?cb=?',
        params: {
            pageSize: 50,
            beginTime: '',
            endTime: '',
            pageNo: 1,
            fields: "",
            qType: 2 // 必填，2策略报告，3宏观研究，4券商晨会
        },
        node_params: function () {
            return {
                pageSize: 50,
                beginTime: utils_1["default"].getDateStr(-2, 0, 0),
                endTime: utils_1["default"].getDateStr(0, 0, 0),
                pageNo: 1,
                fields: "",
                qType: 2 // 必填，2策略报告，3宏观研究，4券商晨会
            };
        }
    },
    //券商晨报 
    "brokerreport": {
        url: 'report/jg?cb=?',
        params: {
            pageSize: 50,
            beginTime: '',
            endTime: '',
            pageNo: 1,
            fields: "",
            qType: 4 // 必填，2策略报告，3宏观研究，4券商晨会
        },
        node_params: function () {
            return {
                pageSize: 50,
                beginTime: utils_1["default"].getDateStr(-2, 0, 0),
                endTime: utils_1["default"].getDateStr(0, 0, 0),
                pageNo: 1,
                fields: "",
                qType: 4 // 必填，2策略报告，3宏观研究，4券商晨会
            };
        }
    },
    //机构发布研报：国盛证券发布研报
    "orgpublish": {
        url: 'report/dg?cb=?',
        params: {
            pageNo: 1,
            pageSize: 50,
            author: '*',
            orgCode: '',
            beginTime: '',
            endTime: '',
            // qType:0
            qType: ''
            // beginTime: util.GetDayStr(2),
            // endTime: util.GetDayStr(0)
        }
    },
    //作者个人 
    "personalpublish": {
        url: 'report/dg?cb=?',
        params: {
            pageNo: 1,
            pageSize: 50,
            author: '',
            orgCode: '',
            beginTime: '',
            endTime: '',
            // qType:0
            qType: ""
        }
    },
    //单个个股 
    "singlestock": {
        url: 'report/list?cb=?',
        params: {
            pageNo: 1,
            pageSize: 50,
            code: '*',
            industryCode: '*',
            industry: '*',
            rating: '*',
            ratingchange: '*',
            beginTime: '',
            endTime: '',
            fields: "",
            qType: 0 //必填，0标识查询个股研报，1标识行业研报
        }
    },
    //策略报告正文：策略报告
    "zw_stratyge": {
        url: 'report/jg?cb=?',
        params: {
            pageSize: 5,
            beginTime: '',
            endTime: '',
            pageNo: 1,
            fields: "",
            qType: 2 // 必填，2策略报告，3宏观研究，4券商晨会
        }
    },
    //策略报告正文：最新研究报告
    "zw_neweast": {
        url: 'report/dg?cb=?',
        params: {
            pageNo: 1,
            pageSize: 5,
            author: '*',
            orgCode: '*',
            qType: '*',
            beginTime: '',
            endTime: ''
        }
    },
    //策略报告正文：机构一致看多个股：取盈利预测接口
    "zw_mutiplestock": {
        url: 'report/predic?cb=?',
        params: {
            hyCode: '*',
            dyCode: '*',
            gnCode: '*',
            marketCode: '*',
            pageNo: 1,
            pageSize: 15,
            fields: '',
            beginTime: '',
            endTime: '',
            sort: 'kanduo,desc'
        }
    },
    //策略报告正文：热门行业追踪:行业研报接口
    "zw_hotindustry": {
        url: 'report/list?cb=?',
        params: {
            industryCode: '*',
            pageSize: 15,
            industry: '*',
            rating: '*',
            ratingchange: '*',
            beginTime: '',
            endTime: '',
            pageNo: 1,
            fields: "",
            qType: 1 //必填，0个股研报，1行业研报，2策略报告，3宏观研究，4券商晨会
        }
    },
    // 行业研报正文：文中涉及到的个股
    "zw_industry_stock": {
        url: 'report/list?cb=?',
        params: {
            code: '',
            industryCode: '*',
            pageSize: 5,
            industry: '*',
            rating: '*',
            ratingchange: '*',
            beginTime: '',
            endTime: '',
            pageNo: 1,
            fields: "",
            qType: 0 //必填，0标识查询个股研报，1标识行业研报
        }
    },
    //行业研报正文 ：所在行业研究报告
    "zw_indsneweast": {
        url: 'report/list?cb=?',
        params: {
            industryCode: '*',
            pageSize: 5,
            industry: '*',
            rating: '*',
            ratingchange: '*',
            beginTime: '',
            endTime: '',
            pageNo: 1,
            fields: "",
            qType: 1
        }
    },
    //行业研报正文 ：所在行业热门个股评级一览
    "zw_indshotstock": {
        url: 'report/predic?cb=?',
        params: {
            hyCode: '*',
            dyCode: '*',
            gnCode: '*',
            marketCode: '*',
            pageNo: 1,
            pageSize: 15,
            fields: '',
            beginTime: '',
            endTime: ''
        }
    },
    //行业研报正文 ：所在行业个股未来3年盈利预测
    "zw_indsstockforecast": {
        url: 'report/predic?cb=?',
        params: {
            hyCode: '*',
            dyCode: '*',
            gnCode: '*',
            marketCode: '*',
            pageNo: 1,
            pageSize: 15,
            fields: '',
            beginTime: '',
            endTime: '',
            sort: 'thisYearEps,desc'
        }
    },
    //行业研报正文  ：行业个股财务指标排行榜
    "zw_indggcw_table": {
        url: '',
        params: {}
    },
    //行业研报正文 ：热门行业追踪
    "zw_indshotindustry": {
    // url: 'report/list?cb=?',
    // params: {
    //   industryCode: '*',
    //   pageSize: 15,
    //   industry: '*',//行业
    //   rating: '*',
    //   ratingchange: '*',//评级变化，不查询填*或不带该字段
    //   beginTime: '',
    //   endTime: '',
    //   pageNo: 1,
    //   fields: "",
    //   qType: 1       //必填，0个股研报，1行业研报，2策略报告，3宏观研究，4券商晨会
    // }
    },
    //宏观研究正文
    "zw_macsearch": {
        url: 'report/jg?cb=?',
        params: {
            pageSize: 5,
            beginTime: '',
            endTime: '',
            pageNo: 1,
            fields: "",
            qType: 3 // 必填，2策略报告，3宏观研究，4券商晨会
        }
    },
    //券商晨会正文
    "zw_broker": {
        url: 'report/jg?cb=?',
        params: {
            pageSize: 5,
            beginTime: '',
            endTime: '',
            pageNo: 1,
            fields: "",
            qType: 4 // 必填，2策略报告，3宏观研究，4券商晨会
        }
    },
    "zw_neweastbroker": {
        url: 'report/dg?cb=?',
        params: {
            pageNo: 1,
            pageSize: 5,
            author: '*',
            orgCode: '*',
            qType: '*',
            beginTime: '',
            endTime: ''
        }
    },
    //单个个股正文 :行业最新
    "zw_indsneweast_stock": {
        url: 'report/list?cb=?',
        params: {
            industryCode: '*',
            pageSize: 5,
            industry: '*',
            rating: '*',
            ratingchange: '*',
            beginTime: '',
            endTime: '',
            pageNo: 1,
            fields: "",
            qType: 1
        }
    },
    "zw_orgneweast_stock": {
        url: 'report/list?cb=?',
        params: {
            industryCode: '*',
            pageSize: 5,
            orgCode: '',
            industry: '*',
            rating: '*',
            ratingChange: '*',
            beginTime: utils_1["default"].getDateStr(-2, 0, 0),
            endTime: utils_1["default"].getDateStr(0, 0, 0),
            pageNo: 1,
            fields: "",
            qType: 0 //0个股1行业
        }
        // url: 'report/dg?cb=?',
        // params: {
        //   pageNo: 1,//页码数
        //   pageSize: 5,//每页条数
        //   author: '*',//作者 例：11000175403.潘红敏
        //   orgCode: '', //机构代码 
        //   beginTime: '',
        //   endTime: '',
        //   qType: ''
        // }
    },
    //单个个股的最新  zw_stockneweast_stock
    "zw_stockneweast_stock": {
        url: 'report/list?cb=?',
        params: {
            code: '',
            industryCode: '*',
            pageSize: 5,
            industry: '*',
            rating: '*',
            ratingchange: '*',
            beginTime: '',
            endTime: '',
            pageNo: 1,
            fields: "",
            qType: 0 //0个股1行业
        }
    },
    //个股研报正文 ：所在行业热门个股评级一览
    "zw_indshotstockpj": {
        url: 'report/predic?cb=?',
        params: {
            hyCode: '*',
            dyCode: '*',
            gnCode: '*',
            marketCode: '*',
            pageNo: 1,
            pageSize: 15,
            fields: '',
            beginTime: '',
            endTime: ''
        }
    },
    //个股正文：机构一致看多个股：取盈利预测接口  
    "zwstock_mutiplestock": {
        url: 'report/predic?cb=?',
        params: {
            hyCode: '*',
            dyCode: '*',
            gnCode: '*',
            marketCode: '*',
            pageNo: 1,
            pageSize: 15,
            fields: '',
            beginTime: '',
            endTime: '',
            sort: 'kanduo,desc'
        }
    }
};
exports["default"] = dataurl;


/***/ }),

/***/ "./src/modules/datatable/index.ts":
/*!****************************************!*\
  !*** ./src/modules/datatable/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * 数据表格模块
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var webconfig = __webpack_require__(/*! ../../../config/web.js */ "./config/web.js");
var dataurl_1 = __importDefault(__webpack_require__(/*! ./dataurl */ "./src/modules/datatable/dataurl.ts"));
var dataconfig_1 = __importDefault(__webpack_require__(/*! ./dataconfig */ "./src/modules/datatable/dataconfig.ts"));
var pager_1 = __importDefault(__webpack_require__(/*! ../pager */ "./src/modules/pager/index.ts"));
/**
 * 三种排序类型的切换
 * @param thistype
 */
function getSortType(thistype) {
    var backtype = '';
    switch (thistype) {
        case 'default':
            backtype = 'desc';
            break;
        case 'desc':
            backtype = 'asc';
            break;
        case 'asc':
            backtype = 'default';
            break;
    }
    return backtype;
}
/**
 * 判断是否需要第一层thead
 * @param config
 */
function isFixThead(config) {
    var back = false;
    config.config.forEach(function (v) {
        if (v.theadfix != undefined) {
            back = true;
        }
    });
    return back;
}
/**
 * 计算接下来有几个相同的theadfix
 * @param config
 * @param configindex
 */
function getSameTheadFix(config, configindex) {
    if (configindex >= config.length - 1) {
        return 1;
    }
    var count = 1;
    var theadfix_val = config[configindex].theadfix;
    for (var index = configindex + 1; index < config.length; index++) {
        if (theadfix_val == config[index].theadfix) {
            count++;
        }
        else {
            break;
        }
    }
    return count;
}
var datatable = /** @class */ (function () {
    function datatable(options) {
        this.table_type = '';
        this.div_id = '';
        this.thissort = ''; //排序字段
        this.this_sort_type = 'default'; //排序类型
        this.thisindex = 1; //当前页数
        this.enabled_pager = true; //是否翻页
        this.pager_id = '';
        this.tablepager = null; //分页示例
        this.floathead = false; //是否开启头部固顶
        this.tableclass = 'table-model';
        this.curSortItem = '';
        this.curSortParam = '';
        this.onShowComplete = null;
        this.initsearch = false;
        this.loadscroll = false;
        this.loadingImg = false;
        this.initdata = false;
        this.initdataLab = 'initdata'; //该字段为首页缓存在页面赋值的字段,默认'initdata'
        this.initdataone = false;
        this.table_type = options.table_type;
        this.div_id = options.div_id;
        this.enabled_pager = options.enabled_pager != undefined ? options.enabled_pager : true; //是否开启翻页功能
        this.pager_id = options.pager_id;
        this.floathead = options.floathead != undefined ? options.floathead : false; //默认false
        this.tableclass = options.tableclass != undefined ? options.tableclass : 'table-model';
        this.onShowComplete = options.onShowComplete || null;
        this.loadscroll = options.loadscroll || false;
        this.loadingImg = options.loadingImg || false;
        this.initdata = options.initdata || false;
        this.initdataLab = options.initdataLab || 'initdata';
        this.initdataone = options.initdataone || false;
        var initParams = options.initParams || false;
        if (initParams) {
            this.search(initParams);
        }
        else {
            this.init();
        }
        if (this.floathead) {
            var _this_1 = this;
            setTimeout(function () {
                _this_1.makeFloatHead();
            }, 1000);
        }
    }
    datatable.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this;
            return __generator(this, function (_a) {
                _this = this;
                _this.showTable({});
                return [2 /*return*/];
            });
        });
    };
    datatable.prototype.showTable = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this, loadhtml, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _this = this;
                        $('#' + _this.div_id).css({ 'position': 'relative' });
                        if (_this.loadingImg) {
                            loadhtml = '<div class="table-loading"><img src="/../newstatic/images/loading.gif"></img></div>';
                            $('#' + _this.div_id).append(loadhtml);
                        }
                        ;
                        return [4 /*yield*/, this.getData(options)];
                    case 1:
                        data = _a.sent();
                        $('#' + this.div_id).empty().append(this.makeTable(data));
                        if (this.onShowComplete) {
                            this.onShowComplete();
                        }
                        ;
                        $('.table-loading').css({ 'display': 'none !importannt' });
                        return [2 /*return*/];
                }
            });
        });
    };
    datatable.prototype.getData = function (options) {
        var _a;
        var _this = this;
        var params = dataurl_1["default"][this.table_type].params;
        if (options.sort != undefined) {
            var sortobj = options.sort;
            var nextsort = getSortType(this.this_sort_type);
            this.this_sort_type = nextsort;
            params = $.extend(params, (_a = {},
                _a[sortobj[nextsort].sortkey] = sortobj[nextsort].value,
                _a));
            //console.log(params)
        }
        if (options.search) {
            params = $.extend(params, options.search);
        }
        if (options.pager) {
            params = $.extend(params, {
                pageNo: options.pager
            });
        }
        return this.getDataAjax(params);
    };
    datatable.prototype.getDataAjax = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            //ajax请求抽出
            function getDataInfos() {
                try {
                    return $.ajax({
                        url: url,
                        type: 'GET',
                        timeout: 5000,
                        jsonpCallback: rnd,
                        dataType: 'jsonp',
                        data: params
                    });
                }
                catch (error) {
                    return [];
                }
            }
            var _this, rnd, url, getdatafunction, onecache, dtd;
            var _this_1 = this;
            return __generator(this, function (_a) {
                _this = this;
                rnd = 'datatable' + Math.floor(Math.random() * 10000000 + 1);
                url = webconfig.getWebPath('dataurl') + dataurl_1["default"][this.table_type].url;
                getdatafunction = null;
                if (this.initdata) {
                    this.initdata = false;
                    onecache = (function () {
                        if (window.location.search.length > 1) { //判断url?后面是否带有参数
                            return true;
                        }
                        else {
                            return false;
                        }
                    })();
                    if (this.initdataone && onecache) { //如果initdataone&&onecache 则走缓存逻辑:为了处理有些页面带参数和不带参数(首次请求走接口)
                        getdatafunction = getDataInfos();
                    }
                    else {
                        dtd = $.Deferred();
                        getdatafunction = dtd.resolve(window[this.initdataLab]); //抓取页面缓存的数据initdata
                    }
                }
                else { //如不需要缓存逻辑 直接走接口
                    getdatafunction = getDataInfos();
                }
                return [2 /*return*/, getdatafunction.then(function (v) {
                        if (_this_1.enabled_pager) {
                            _this.pager(v.hits, params.pageNo);
                            if (v.data && v.data != [] && v.TotalPage > 1 && v.data.length > 0) {
                                $('#' + _this_1.pager_id).show();
                            }
                            else {
                                $('#' + _this_1.pager_id).hide();
                            }
                        }
                        return v;
                    })];
            });
        });
    };
    ;
    //生成表格头部
    datatable.prototype.makeTableHead = function (data) {
        var _this_1 = this;
        var _this = this;
        //表格头部
        var table_html_thead = $("<thead></thead>");
        var thead_tr1 = $('<tr></tr>');
        var thead_tr2 = $('<tr></tr>');
        var need_theadfix = isFixThead(dataconfig_1["default"][this.table_type]); //判断是否需要第一层thead
        var ctheadfix = ''; //当前的theadfix
        dataconfig_1["default"][this.table_type].config.forEach(function (configitem, index) {
            var thead_th = $('<th></th>');
            if (configitem.width != undefined) {
                thead_th.attr('width', configitem.width + 'px');
            }
            if (configitem.paramname != undefined) { //给当前排序标签添加name
                thead_th.attr('data-name', configitem.paramname);
            }
            //排序
            if (configitem.sort != undefined) {
                var sorthtml_1 = $('<a target="_self" href="javascript:;">' + configitem.th({ data: data }) + '</a>');
                //给头部th 加icon
                if (configitem.icons != undefined) {
                    sorthtml_1.append('<span class="icon icon_' + configitem.icons.name + ' vbottom" title="' + configitem.icons.title + '"></span>');
                }
                var defaultsortType_1 = configitem.defaultsortType; //默认排序类型
                if (defaultsortType_1 != undefined && !_this.curSortParam) { //默认排序只执行第一次
                    if (defaultsortType_1 == 'asc') {
                        sorthtml_1.append('<span class="icon icon_asc sorticon"></span>');
                    }
                    else if (defaultsortType_1 == 'desc') {
                        sorthtml_1.append('<span class="icon icon_desc sorticon"></span>');
                    }
                }
                ;
                var sortnamename = configitem.paramname;
                if (sortnamename && _this.curSortParam == sortnamename) { //判断是否是当前排序字段
                    if (_this_1.this_sort_type == 'asc') {
                        sorthtml_1.append('<span class="icon icon_asc sorticon"></span>');
                    }
                    else if (_this_1.this_sort_type == 'desc') {
                        sorthtml_1.append('<span class="icon icon_desc sorticon"></span>');
                    }
                    //控制浮动表头的样式切换 
                    if (_this.floathead) {
                        var floatTableTh = $('#' + _this.div_id + 'float').find('th');
                        floatTableTh.each(function (index, el) {
                            if ($(this).data('name') == _this.curSortParam) {
                                $(this).find('a').empty().append(sorthtml_1.clone(true));
                            }
                            else {
                                $(this).find('.sorticon').remove();
                            }
                        });
                    }
                    ;
                }
                ;
                thead_th.append(sorthtml_1);
                sorthtml_1.on('click', function () {
                    if (_this.curSortParam != $(this).parent().data('name')) {
                        _this.this_sort_type = 'default';
                    }
                    ; //如果不是当前排序字段，则将排序类型初始化
                    _this.curSortParam = $(this).parent().data('name'); //存储全局 记录当前排序字段
                    if (defaultsortType_1) { //处理带默认排序的排序类型
                        _this.this_sort_type = defaultsortType_1;
                        configitem.defaultsortType = false;
                        defaultsortType_1 = false;
                    }
                    _this.showTable({
                        sort: configitem.sort,
                        pager: 1
                    });
                });
            }
            else {
                thead_th.append(configitem.th({
                    data: data
                })); //整个传入，具体地方具体处理
                //给头部th 加icon
                if (configitem.icons != undefined) {
                    thead_th.append('<span class="icon icon_' + configitem.icons.name + ' vbottom" title="' + configitem.icons.title + '"></span>');
                }
            }
            //是否多级头部处理 
            if (need_theadfix) {
                if (configitem.theadfix != undefined) {
                    //thead_tr2.append(thead_th)
                    if (configitem.theadfix != ctheadfix) {
                        var fixcount = getSameTheadFix(dataconfig_1["default"][_this_1.table_type].config, index);
                        var theadfixth = $('<th colspan="' + fixcount + '">' + dataconfig_1["default"][_this_1.table_type].theadfix[configitem.theadfix](data) + '</th>');
                        //thead_th.attr('colspan', fixcount)
                        ctheadfix = configitem.theadfix;
                        thead_tr1.append(theadfixth);
                    }
                    thead_tr2.append(thead_th);
                    //thead_tr1.append(thead_th)
                }
                else {
                    thead_th.attr('rowspan', 2);
                    thead_tr1.append(thead_th);
                }
            }
            else {
                thead_tr1.append(thead_th);
            }
        });
        if (need_theadfix) {
            table_html_thead.append(thead_tr1).append(thead_tr2);
        }
        else {
            table_html_thead.append(thead_tr1);
        }
        return table_html_thead;
    };
    ;
    datatable.prototype.makeTable = function (data) {
        var _this_1 = this;
        var _this = this;
        var table_html = $('<table class=' + this.tableclass + '><thead></thead><tbody></tbody></table>');
        var table_html_thead = _this.makeTableHead(data);
        $('thead', table_html).replaceWith(table_html_thead);
        if (data && data.data != undefined && data.data.length > 0) {
            data.data.forEach(function (v, index) {
                v.index = index + Number(data.pageNo ? (data.pageNo - 1) * 50 : '');
                var tr = $('<tr></tr>');
                //表格内容
                dataconfig_1["default"][_this_1.table_type].config.forEach(function (configitem) {
                    var td = $('<td></td>');
                    td.html(configitem.td(v));
                    tr.append(td);
                });
                $('tbody', table_html).append(tr);
            });
        }
        else {
            var len = dataconfig_1["default"][this.table_type].config.length;
            var tr = $('<tr><td colspan=' + len + ' class="none">暂无数据</td></tr>');
            $('tbody', table_html).append(tr);
        }
        return table_html;
    };
    datatable.prototype.pager = function (sum, currentPage) {
        var _this = this;
        if (_this.tablepager == null) {
            _this.tablepager = new pager_1["default"]({
                pagerid: this.pager_id,
                currentpage: currentPage ? currentPage : 1,
                pagesize: 50,
                allcount: sum,
                href: '',
                onClick: function (index) {
                    _this.goPager(index);
                }
            });
        }
        else {
            _this.tablepager.ops.allcount = sum;
            _this.tablepager.ops.currentpage = currentPage ? currentPage : 1;
            _this.tablepager.show();
        }
        // _this.tablepager.show()
    };
    datatable.prototype.goPager = function (toindex) {
        return __awaiter(this, void 0, void 0, function () {
            var _top;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //是否开启加载滚动
                        if (this.loadscroll) {
                            _top = $('.framecontent').offset().top;
                            $("html,body").animate({ "scrollTop": _top });
                        }
                        return [4 /*yield*/, this.showTable({
                                pager: toindex
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    datatable.prototype.search = function (searchobj) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showTable({
                            search: searchobj
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //生成浮动表头
    datatable.prototype.makeFloatHead = function () {
        var _this = this;
        $('#' + this.div_id + 'float').empty();
        var floatTable = $('<div id="' + this.div_id + 'float" class="table-float-head"><table class="floathead table-model" style="margin-top:0;width:865px"><thead></thead></table></div>');
        var _thead = $('#' + this.div_id + ' table thead');
        $('thead', floatTable).append($('#' + this.div_id + ' table thead').clone(true));
        $('tr', _thead).find('th').each(function (index, el) {
            $('tr', floatTable).find('th').eq(index).width($(el).width());
        });
        $('#' + this.div_id).before(floatTable);
        $(window).scroll(function () {
            var _tableheight = $('#' + _this.div_id).height();
            var _offsettop = $('#' + _this.div_id).offset().top;
            var _scrollheight = $(window).scrollTop();
            var floathtml = $('#' + _this.div_id + 'float');
            if (_scrollheight > _offsettop) {
                floathtml.css({ 'display': 'block' });
                if (_scrollheight > (_offsettop + _tableheight) - 50) {
                    floathtml.css({ 'display': 'none' });
                }
            }
            else {
                floathtml.css({ 'display': 'none' });
            }
        });
    };
    ;
    return datatable;
}());
exports["default"] = datatable;


/***/ }),

/***/ "./src/modules/getbkinfo/index.ts":
/*!****************************************!*\
  !*** ./src/modules/getbkinfo/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
/**
 * 获取板块数据  ：目前三种020地域板块，007概念板块，016行业板块
 *
 * */
var webconfig = __webpack_require__(/*! ../../../config/web */ "./config/web.js");
var rnd = 'showData' + Math.floor(Math.random() * 10000000 + 1);
exports["default"] = {
    hyInfo: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, $.ajax({
                        url: webconfig.getWebPath('dataurl') + 'report/bk?bkCode=016&cb=?',
                        type: 'GET',
                        jsonpCallback: rnd,
                        dataType: 'jsonp'
                    })];
            });
        });
    },
    gnInfo: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, $.ajax({
                        url: webconfig.getWebPath('dataurl') + 'report/bk?bkCode=007&cb=?',
                        type: 'GET',
                        jsonpCallback: rnd,
                        dataType: 'jsonp'
                    })];
            });
        });
    },
    dyInfo: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, $.ajax({
                        url: webconfig.getWebPath('dataurl') + 'report/bk?bkCode=020&cb=?',
                        type: 'GET',
                        jsonpCallback: rnd,
                        dataType: 'jsonp'
                    })];
            });
        });
    }
};


/***/ }),

/***/ "./src/modules/pager/index.ts":
/*!************************************!*\
  !*** ./src/modules/pager/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var pagerbox = /** @class */ (function () {
    function class_1(opts) {
        var _this = this;
        this.pageshownum = 5;
        this.target = "";
        var defaults = {
            pagerid: '',
            currentpage: 1,
            pagesize: 0,
            allcount: 0,
            href: '',
            onClick: null
        };
        this.ops = $.extend(defaults, opts);
        if (!this.ops.pagerid)
            return;
        this.div = $('#' + this.ops.pagerid);
        var formhtml = $("<div class=\"gotopage\"><form target=\"_self\"><span class='tab'>\u8F6C\u5230</span><input class='ipt' type='text' id=\"gotopageindex\"><input type='submit' class='btn' value='Go'></form></div>");
        formhtml.on('submit', function name() {
            var gotopageindex = 1;
            var totalpage = Math.ceil(_this.ops.allcount / _this.ops.pagesize);
            try {
                gotopageindex = parseInt($.trim($('#gotopageindex', formhtml).val().toString()));
            }
            catch (error) {
            }
            //如果超过最大页数
            if (totalpage < gotopageindex) {
                gotopageindex = totalpage;
            }
            _this.changePage(gotopageindex);
            return false;
        });
        this.div.append('<div class="pagerbox"></div>').append(formhtml);
        this.bind();
        this.show();
    }
    ;
    class_1.prototype.changePage = function (curPage) {
        var _this = this;
        if (!!_this.ops.href) {
            // console.log(this.ops.href)       
            return false;
        }
        else if (this.ops.onClick) {
            _this.ops.onClick(curPage);
        }
    };
    ;
    class_1.prototype.show = function () {
        var _this = this;
        var pageshownum = _this.pageshownum;
        var totalPage = 0;
        totalPage = Math.ceil(this.ops.allcount / this.ops.pagesize);
        var currentpage = _this.ops.currentpage;
        var hrefStr = _this.ops.href ? _this.ops.href : 'javascript: ;';
        var target = _this.target ? _this.target : '_self';
        var leftStr = "";
        var rightStr = "";
        var allStr = "";
        if (pageshownum <= 0)
            pageshownum = 5;
        var LRNum = Math.ceil((pageshownum - 1) / 2);
        // var totalPage = this.totalPage;
        var Li = 0, Rj = 0;
        //需要展示的页数和当前页逻辑处理
        for (var i = LRNum; i >= 1; i--) {
            if (currentpage - i >= 1) {
                leftStr += "<a target=" + target + " href=" + hrefStr + " data-page=" + (currentpage - i) + ">" + (currentpage - i) + "</a>";
                Li += 1;
            }
        }
        for (var j = 1; j <= LRNum; j++) {
            if (currentpage + j <= totalPage) {
                rightStr += "<a target=" + target + " href=" + hrefStr + " data-page=" + (currentpage + j) + ">" + (currentpage + j) + "</a>";
                Rj += 1;
            }
        }
        //总页数小于/大于显示页数时处理
        if (totalPage < pageshownum)
            pageshownum = totalPage;
        if ((Li + Rj) < (pageshownum - 1)) {
            if (currentpage <= pageshownum / 2 + 1) {
                for (var j = currentpage + Rj + 1; j <= pageshownum; j++) {
                    rightStr += "<a target=" + target + " href=" + hrefStr + " data-page=" + j + ">" + j + "</a>";
                }
            }
            else {
                for (var i = (currentpage - Li - 1); i > totalPage - pageshownum; i--) {
                    leftStr = "<a target=" + target + " href=" + hrefStr + " data-page=" + i + ">" + i + "</a>" + leftStr;
                }
            }
        }
        if (totalPage > pageshownum) {
            if (currentpage > (pageshownum + 1) / 2) {
                if (currentpage <= pageshownum) {
                    leftStr = "<a target=" + target + " href=" + hrefStr + " data-page='1'>1</a>" + "<a href=" + hrefStr + " target=" + target + "  data-page=" + 1 + ">...</a>" + leftStr;
                }
                else {
                    leftStr = "<a target=" + target + " href=" + hrefStr + " data-page='1'>1</a>" + "<a href=" + hrefStr + " target=" + target + "  data-page=" + (currentpage - 5) + ">...</a>" + leftStr;
                }
                // leftStr = "<a target=" + target + " href=" + hrefStr + " data-page='1'>1</a>" + "<a href=" + hrefStr + " target=" + target + "  data-page=" + (currentpage -5) +">...</a>" + leftStr;
            }
            if (currentpage <= totalPage - (pageshownum + 1) / 2) {
                if ((totalPage - currentpage) < pageshownum) {
                    rightStr += "<a target=" + target + " href=" + hrefStr + " data-page=" + (totalPage) + ">...</a>" + "<a href=" + hrefStr + " target=" + target + " data-page=" + totalPage + ">" + totalPage + "</a>";
                }
                else {
                    rightStr += "<a target=" + target + " href=" + hrefStr + " data-page=" + (currentpage + 5) + ">...</a>" + "<a href=" + hrefStr + " target=" + target + " data-page=" + totalPage + ">" + totalPage + "</a>";
                }
                //rightStr += "<a target=" + target + " href=" + hrefStr + " data-page=" + (currentpage+5)+">...</a>" + "<a href=" + hrefStr + " target=" + target + " data-page=" + totalPage+">" + totalPage + "</a>";
            }
        }
        //上一页
        var prevPage = "";
        var pre = currentpage - 1;
        if (pre < 1) {
            pre = 1;
        }
        prevPage = _this.ops.href ? _this.ops.href : 'javascript: ;';
        if (pre == 1) {
            //prevPage = '';
        }
        else {
            // prevPage = "_" + pre;
            // if (!!this.ops.href) {
            //     prevPage = "" + pre;
            // }
        }
        //下一页
        var nextPage = "";
        var next = currentpage + 1;
        if (next > totalPage) {
            next = totalPage;
        }
        nextPage = _this.ops.href ? _this.ops.href : 'javascript: ;';
        if (next == 1) {
            //nextPage = '';
        }
        else {
            // nextPage = "_" + next;
            // if (!!this.ops.href) { 
            //     nextPage = "" + next;
            // }
        }
        //上一页下一页及指定页数跳转
        if (currentpage > 1) {
            allStr = "<a target=" + target + " href=" + prevPage + " data-page=" + pre + ">上一页</a> ";
        }
        allStr += leftStr + "<a class='active' data-page=" + currentpage + ">" + currentpage + "</a>" + rightStr;
        if (currentpage < totalPage) {
            allStr += " <a target=" + target + " href=" + nextPage + " data-page=" + next + ">下一页</a>";
        }
        $('.pagerbox', this.div).empty().append(allStr);
    };
    class_1.prototype.bind = function () {
        var _this = this;
        $('#' + this.ops.pagerid).on('click', 'a', function () {
            var curPage = $(this).data('page');
            _this.changePage(curPage);
        });
    };
    return class_1;
}());
exports["default"] = pagerbox;


/***/ }),

/***/ "./src/modules/user/index.js":
/*!***********************************!*\
  !*** ./src/modules/user/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 用户信息
 */

var cookie = __webpack_require__(/*! ../cookie/ */ "./src/modules/cookie/index.js");

/**
 * 用户
 */
var user = {
    /**
     * 获取用户信息
     */
    get: function(){
        if (cookie.get('ut') && cookie.get('ct') && cookie.get('uidal')) {
            
            //获取加v信息
            var jiav = {vtype:null, state: null, name: ''};
            if (cookie.get('vtpst') && cookie.get('vtpst') != '|') {
                var jiavarr = cookie.get('vtpst').split('|');
                if( jiavarr.length > 1 ){
                    //console.info(typeof jiavarr[0]);
                    if (jiavarr[1] == "0" || jiavarr[1] == "3") {
                        switch (jiavarr[0]) {
                            case "301":
                                jiav.vtype = 1;
                                jiav.name = '理财师';
                                break;
                            case "302":
                                jiav.vtype = 2;
                                jiav.name = '非理财师';
                                break;
                            case "303":
                                jiav.vtype = 3;
                                jiav.name = '企业';
                                break;
                            default:
                                break;
                        }
                    }

                    switch (jiavarr[1]) {
                        case "0":
                            jiav.state = 0; //审核通过
                            break;                        
                        case "1":
                            jiav.state = 11; //审核未通过
                            break;
                        case "2":
                            jiav.state = 12; //审核中
                            break;
                        case "3":
                            jiav.state = 13; //加v用户修改审核
                            break;
                        case "8":
                            jiav.state = 18; //加v用户修改审核
                            break;
                        case "9":
                            jiav.state = 19; //加v用户修改审核
                            break;
                        default:
                            break;
                    }
                    
                    //console.info(jiav);

                }
            }
            
            return {
              id: cookie.get('uidal').substring(0,16),
              nick: cookie.get('uidal').substring(16),
              jiav: jiav
            };
        }
        return null; 
    },
    /**
     * 退出登录
     * @param  {function} 退出之后回调
     */
    logOut: function (callback) {
        var date = new Date();
        document.cookie = "pi=;path=/;domain=eastmoney.com;expires=" + date.toGMTString();
        document.cookie = "ct=;path=/;domain=eastmoney.com;expires=" + date.toGMTString();
        document.cookie = "ut=;path=/;domain=eastmoney.com;expires=" + date.toGMTString();
        document.cookie = "uidal=;path=/;domain=eastmoney.com;expires=" + date.toGMTString();
        if (callback) {
            callback();
        }
    },
    isLogin: function (){
        if( this.get() ){
            return true;
        }
        else{
            return false;
        }
    },
    gotoLogin: function(){
        var loginurl = 'https://passport2.eastmoney.com/pub/login?backurl=' + encodeURIComponent(self.location.href)
        self.location = loginurl
        // window.open(loginurl)
    }
};

module.exports = user;





/***/ })

/******/ });
//# sourceMappingURL=stock.js.map