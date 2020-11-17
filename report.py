import json
from datetime import datetime

import requests

report_list = []


def get_all_bk_code(bkCode='016'):
    today = datetime.now().timestamp()
    url = 'http://reportapi.eastmoney.com/report/bk?bkCode=' + bkCode + '&_=' + str(today)
    resp = requests.get(url).text
    data = json.loads(resp)
    all_bk_info = data['data']
    print(all_bk_info)
    return all_bk_info


def get_single_trades_info(bk_code='737', from_date=None):
    today = datetime.now().timestamp()
    from_date = '2020-11-01'
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
            '&rcode=&_=' + str(today)
    # qType: 必填，0标识查询个股研报，1标识行业研报，3 标识宏观研究报告
    resp = requests.get(url).text
    data = json.loads(resp)['data']
    print(data)
    return data


def get_single_report(report_info):
    url = 'http://pdf.dfcfw.com/pdf/H3_' + str(report_info['infoCode']) + '_1.pdf'
    print('%s: %s' % (report_info['title'], url))
    report = {'title': report_info['title'], 'url': url}
    report_list.append(report)
    with open('data/reports/reports.json', 'a') as file:
        file.write('{' + 'title' + report_info['title'] + '; url:' + url + '}\n')


def get_all_report():
    bk_list = ['020', '016', '007']
    for bk in bk_list:
        all_bk_info = get_all_bk_code(bk)
        for e in all_bk_info:
            bk_list = get_single_trades_info(e['bkCode'])
            for info in bk_list:
                get_single_report(info)


if __name__ == '__main__':
    get_all_report()
