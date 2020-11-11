## 功能列表
1. 获取所有个股信息: stockCode, stockName
2. 获取所有板块信息: bkCode, fubkCode, bkName, publishCode, firstLetter
3. 获取个股研报
4. 获取行业板块研报
5. 获取宏观研究报告
6. 获取券商晨会报告
7. 获取策略报告

## 链接拼接方法
1. 获取报告地址：
    url = 'http://pdf.dfcfw.com/pdf/H3_' + str(report_info['infoCode']) + '_1.pdf'
