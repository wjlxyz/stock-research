import json
from datetime import datetime

import requests


def get_mac_research_report():
    url = 'https://pdf.dfcfw.com/pdf/H3_AP202011101427998404_1.pdf?1605035404000.pdf'
    # 最新宏观研究报告
    url1 = 'http://reportapi.eastmoney.com/report/jg?cb=datatable9075202&pageSize=5&beginTime=&endTime=&pageNo=1&fields=&qType=3&orgCode=80055521&_=1605007898254'
    # 华泰期货最新研究报告
    url2 = 'http://reportapi.eastmoney.com/report/dg?cb=datatable3403732&pageNo=1&pageSize=5&author=*&orgCode=80055521&qType=*&beginTime=&endTime=&_=1605007898255'
    # 机构一致看多个股
    url3 = 'http://reportapi.eastmoney.com/report/predic?cb=datatable786163&hyCode=*&dyCode=*&gnCode=*&marketCode=*&pageNo=1&pageSize=15&fields=&beginTime=&endTime=&sort=kanduo%2Cdesc&_=1605007898256'
    # 热门行业追踪
    url4 = 'http://push2.eastmoney.com/api/qt/clist/get?pn=1&pz=15&po=1&np=1&fltt=2&invt=2&cb=jQuery112305760949366119386_1605007898257&fid=f3&fs=m%3A90+t%3A2&fields=f12%2Cf13%2Cf14%2Cf3%2Cf128&_=1605007898258'

def get_all_mac_research():
    today = datetime.now().timestamp()
    url = 'http://reportapi.eastmoney.com/report/jg?pageSize=50&qType=3'
    resp = requests.get(url).text
    data = json.loads(resp)
    print(data)


if __name__ == '__main__':
    get_all_mac_research()
