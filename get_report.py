import requests
import json
from datetime import datetime


def get_all_bk_code():
    today = datetime.now().timestamp()
    url = 'http://reportapi.eastmoney.com/report/bk?bkCode=016&_=' + str(today)
    resp = requests.get(url).text
    data = json.loads(resp)
    all_bk_info = data['data']
    print(all_bk_info)
    return all_bk_info


def get_single_trades_info(bk_code='737'):
    today = datetime.now().timestamp()
    from_date = '2019-12-01'
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
            'qType=3' \
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
    # resp = requests.get(url=url, stream=True)
    # with open('./reports/' + report_info['title'] + '.pdf', 'wb') as file:
    #     for data in resp.iter_content():
    #         file.write(data)


if __name__ == '__main__':
    all_bk_info = get_all_bk_code()
    for e in all_bk_info:
        print(e)
        single_trades_infos = get_single_trades_info()
        for info in single_trades_infos:
            get_single_report(info)
