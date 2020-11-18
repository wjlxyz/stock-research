import requests
import json
from datetime import datetime

report_list = {}


def get_all_bk_code():
    today = datetime.now().timestamp()
    url = 'http://reportapi.eastmoney.com/report/bk?bkCode=016&_=' + str(today)
    resp = requests.get(url).text
    data = json.loads(resp)
    all_bk_info = data['data']
    # print(all_bk_info)
    return all_bk_info


def get_single_trades_info(bk_code='737', from_date='2020-11-01'):
    today = datetime.now().timestamp()
    end_date = datetime.now().strftime('%Y-%m-%d')
    url = 'http://reportapi.eastmoney.com/report/list' \
          '?industryCode=' + str(bk_code) \
          + '&pageSize=50' \
            '&industry=' \
            '&rating=' \
            '&ratingChange=*' \
            '&beginTime=' + from_date \
          + '&endTime=' + end_date \
          + '&pageNo=1' \
            '&fields=&' \
            'qType=0' \
            '&orgCode=' \
            '&rcode=' \
            '&_=' + str(today)
    # qType: 必填，0标识查询个股研报，1标识行业研报，3 标识宏观研究报告
    resp = requests.get(url).text
    data = json.loads(resp)['data']
    # print(data)
    return data


def get_single_report(report_info):
    url = 'http://pdf.dfcfw.com/pdf/H3_' + str(report_info['infoCode']) + '_1.pdf'
    report = {'股票名称': report_info['stockName'], '券商': report_info['orgName'], 'title': report_info['title'],
              'url': url}
    if report_list.__contains__(report_info['stockName']):
        report_list[report_info['stockName']].append(report)
    else:
        report_list[report_info['stockName']] = []
        report_list[report_info['stockName']].append(report)
    # print(report)
    # resp = requests.get(url=url, stream=True)
    # with open('./reports/' + report_info['title'] + '.pdf', 'wb') as file:
    #     for data in resp.iter_content():
    #         file.write(data)


def get_single_stock_report(stock_name='all', from_date=None):
    all_bk_info = get_all_bk_code()
    for e in all_bk_info:
        # print(e)
        single_trades_infos = get_single_trades_info(e['bkCode'], from_date)
        for info in single_trades_infos:
            # print(info)
            if stock_name == 'all':
                get_single_report(info)
            elif info['stockName'] == stock_name:
                get_single_report(info)
    # print(report_list)


if __name__ == '__main__':
    get_single_stock_report(from_date='2020-11-01')
    sorted(report_list, key=lambda report: len(report))
    print(report_list)
