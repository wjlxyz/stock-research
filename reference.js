/**
 * 行业研报和个股研报参数说明：
 * qType:必填，，0个股研报，1行业研报，2策略报告，3宏观研究，4券商晨会
 * reportType研报类型，不查询填*或不带该字段  个股研报是2 行业研报是3(可不要)
 *
 *
 **/
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

var production = {
    dataurl: function(){
        return '//reportapi.eastmoney.com/'
    },
    quoteurl: function(){
        return '//push2.eastmoney.com/'
    },
    quotehisurl: function(){
        return '//push2his.eastmoney.com/'
    },
    dcfmurl: function(){
        return '//dcfm.eastmoney.com/'
    },
    datacenter: function(){
        return '//datacenter.eastmoney.com/'
    },
    datainterface: function(){
        return '//datainterface.eastmoney.com/'
    },
    datainterface3:function(){
        return '//datainterface3.eastmoney.com/'
    },
    soapi: function(){
        return '//searchapi.eastmoney.com/'
    },
    cmsdataapi: function(){
        return '//cmsdataapi.eastmoney.com/'
    },
    url: function(){
        return ''
    }
}



