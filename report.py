import json

import requests


def get_industry_report_list(industry_id='457'):
    url = 'http://reportapi.eastmoney.com/report/list' \
          '?beginTime=2018-11-04' \
          '&endTime=2020-11-04' \
          '&fields=orgCode,orgSName,sRatingName,encodeUrl,title,publishDate' \
          '&pageNo=2' \
          '&pageSize=100' \
          '&qType=1' \
          '&industryCode=' + industry_id \
          + '&_=1604486903881 '
    print(url)
    resp = requests.get(url).text
    data = json.loads(resp)
    print(data)
    return data


def get_all_industry_report(encode_url):
    url = 'http://pdf.dfcfw.com/pdf/H3_' + encode_url + '_1.pdf'
    print(url)


if __name__ == '__main__':
    get_industry_report_list()
