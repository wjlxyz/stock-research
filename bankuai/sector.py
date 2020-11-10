import json
from datetime import datetime

import requests


def get_sector_info(sector):
    today = datetime.now().timestamp()
    url = 'http://reportapi.eastmoney.com/report/bk' \
          '?bkCode=' \
          + str(sector) \
          + '&cb=' \
          + '&_=' + str(today)
    resp = requests.get(url).text
    data = json.loads(resp)
    print(data)
    return data


# 020
def get_all_region_sector():
    get_sector_info('020')


# 016
def get_all_industry_sector():
    get_sector_info('016')


# 007
def get_all_concept_sector():
    get_sector_info('007')


if __name__ == '__main__':
    get_all_region_sector()
    get_all_industry_sector()
    get_all_concept_sector()
