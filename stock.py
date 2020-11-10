# -*- coding: utf-8 -*-
import json

import requests


def get_sh_stock_list():
    sh = []
    url = 'http://91.push2.eastmoney.com/api/qt/clist/get' \
          '?pn=1' \
          '&pz=10000' \
          '&po=1' \
          '&np=1' \
          '&ut=bd1d9ddb04089700cf9c27f6f7426281' \
          '&fltt=2' \
          '&invt=2' \
          '&fid=f3' \
          '&fs=m:1+t:2,m:1+t:23' \
          '&fields=f12,f14'
    sh_stock = []
    with requests.Session() as s:
        sh_list = s.get(url)
        sh_data = json.loads(sh_list.content)['data']['diff']
        for d in sh_data:
            s = {'id': str(d['f12']), 'name': d['f14']}
            sh_stock.append(s)
    print(sh_stock)
    return sh_stock


def get_sz_stock_list():
    sz = []
    url = 'http://91.push2.eastmoney.com/api/qt/clist/get' \
          '?pn=1' \
          '&pz=10000' \
          '&po=1' \
          '&np=1' \
          '&ut=bd1d9ddb04089700cf9c27f6f7426281' \
          '&fltt=2' \
          '&invt=2' \
          '&fid=f3' \
          '&fs=m:0+t:6,m:0+t:13,m:0+t:80' \
          '&fields=f12,f14'
    sz_stock = []
    with requests.Session() as s:
        sz_list = s.get(url)
        sz_data = json.loads(sz_list.content)['data']['diff']
        for d in sz_data:
            s = {'id': str(d['f12']), 'name': d['f14']}
            sz_stock.append(s)
    print(sz_stock)
    return sz_stock


if __name__ == '__main__':
    get_sh_stock_list()
    get_sz_stock_list()
