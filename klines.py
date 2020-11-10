import json

import requests


def get_single_stock_data(stock_id='300530'):
    url = 'http://17.push2his.eastmoney.com/api/qt/stock/kline/get' \
          '?secid=0.' + stock_id + \
          '&ut=fa5fd1943c7b386f172d6893dbfba10b' \
          '&fields1=f1,f2,f3,f4,f5,f6' \
          '&fields2=f51,f52,f53,f54,f55,f56,f57,f58,f59,f60,f61' \
          '&klt=101' \
          '&fqt=0' \
          '&end=20500101' \
          '&lmt=100000' \
          '&_=1604464122654 '
    with requests.Session() as s:
        stock_data = json.loads(s.get(url).content)
    print(stock_data)
    return stock_data


if __name__ == '__main__':
    get_single_stock_data()