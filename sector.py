import json
from datetime import datetime

import requests

region_sector = {}
industry_sector = {}
concept_sector = {}


def get_sector_info(sector):
    today = datetime.now().timestamp()
    url = 'http://reportapi.eastmoney.com/report/bk' \
          '?bkCode=' \
          + str(sector) \
          + '&cb=' \
          + '&_=' + str(today)
    resp = requests.get(url).text
    data = json.loads(resp)['data']
    print(data)
    return data


# 020
def get_all_region_sector():
    region_sector = get_sector_info('020')
    return region_sector


# 016
def get_all_industry_sector():
    industry_sector = get_sector_info('016')
    return industry_sector


# 007
def get_all_concept_sector():
    concept_sector = get_sector_info('007')
    return concept_sector


if __name__ == '__main__':
    get_all_region_sector()
    get_all_industry_sector()
    get_all_concept_sector()
