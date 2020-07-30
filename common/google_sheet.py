from __future__ import print_function

import os.path
import pickle
import time

from google.auth.transport.requests import Request
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

from common import utils
from common import zhihu_spider

# If modifying these scopes, delete the file token.pickle.
SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
# SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']

# The ID and range of a sample spreadsheet.
SAMPLE_SPREADSHEET_ID = '1Pu6JC4yMSXkBYQSzZ2BRT1h1eHiaFzVZqPQ64GVuaUM'
sheet = None


# 获取 google sheet 对象
def get_sheet():
    global sheet

    creds = None
    module_path = os.path.dirname(__file__)
    # The file token.pickle stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists(module_path + '/token.pickle'):
        with open(module_path + '/token.pickle', 'rb') as token:
            creds = pickle.load(token)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                module_path + '/credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open(module_path + '/token.pickle', 'wb') as token:
            pickle.dump(creds, token)

    service = build('sheets', 'v4', credentials=creds)

    # Call the Sheets API
    sheet = service.spreadsheets()


# 更新知乎问题的阅读量
# 更新知乎回答的排名和点赞数
def update_zhihu_data():
    get_sheet()
    result = sheet.values().get(spreadsheetId=SAMPLE_SPREADSHEET_ID, range='监控管理!A2:Z').execute()
    values = result.get('values', [])
    if not values:
        print('No data found.')
    else:
        for idx, row in enumerate(values):
            # if len(row) < 1:
            #     continue

            # 修改最后更新时间
            values = [[time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())]]
            body = {'values': values}
            sheet.values().update(
                spreadsheetId=SAMPLE_SPREADSHEET_ID, range='监控管理!U{}'.format(idx + 2), valueInputOption="RAW",
                body=body).execute()

    get_sheet()
    result = sheet.values().get(spreadsheetId=SAMPLE_SPREADSHEET_ID, range='监控管理!A2:Z').execute()
    values = result.get('values', [])
    if not values:
        print('No data found.')
    else:

        for idx, row in enumerate(values):
            # if idx > 0:
            #     continue

            # print(row)
            if len(row) < 1:
                continue

            qid = row[0]

            if qid is None or qid == '':
                continue

            # 更新问题的数据（浏览量、点赞数、新增浏览数）
            q_name, q_view, q_answer = zhihu_spider.get_view_and_answer_num(qid)

            # 更新浏览量、点赞数
            values = [[q_name, q_view, q_answer]]
            body = {'values': values}
            result = sheet.values().update(
                spreadsheetId=SAMPLE_SPREADSHEET_ID, range='监控管理!C{0}:F{0}'.format(idx + 2), valueInputOption="RAW",
                body=body).execute()
            print('qid:{1} {0} cells updated.'.format(result.get('updatedCells'), qid))

            # 更新新增浏览数据
            last_update_time = str(row[20])
            today_date = time.strftime("%Y-%m-%d", time.localtime())
            yesterday_all_view, today_view, day3_view, day7_view = row[12], row[13], row[14], row[15]
            day1, day2, day3, day4, day5, day6 = row[6], row[7], row[8], row[9], row[10], row[11]
            if last_update_time.startswith(today_date):  # 没有到新的一天
                if yesterday_all_view != '':
                    today_view = int(q_view) - int(yesterday_all_view)  # 更新今日阅读数
                if day1 != '' and day2 != '':
                    day3_view = today_view + utils.str_to_int(day1, 0) + utils.str_to_int(day2, 0)  # 更新三日阅读数
                if day1 != '' and day2 != '' and day3 != '' and day4 != '' and day5 != '' and day6 != '':
                    day7_view = today_view + utils.str_to_int(day1, 0) + utils.str_to_int(day2, 0) \
                                + utils.str_to_int(day3, 0) + utils.str_to_int(day4, 0) \
                                + utils.str_to_int(day5, 0) + utils.str_to_int(day6, 0)  # 更新七日阅读数
            else:  # 到了新的一天
                if yesterday_all_view == '':
                    yesterday_all_view = q_view
                else:
                    the_day_before_yesterday_all_view = yesterday_all_view
                    yesterday_all_view = q_view
                    day1, day2, day3, day4, day5, day6 = int(yesterday_all_view) - int(
                        the_day_before_yesterday_all_view), day1, day2, day3, day4, day5
                    today_view = 0  # 更新今日阅读数
                    if day1 != '' and day2 != '':
                        day3_view = today_view + utils.str_to_int(day1, 0) + utils.str_to_int(day2, 0)  # 更新三日阅读数
                    if day1 != '' and day2 != '' and day3 != '' and day4 != '' and day5 != '' and day6 != '':
                        day7_view = today_view + utils.str_to_int(day1, 0) + utils.str_to_int(day2, 0) \
                                    + utils.str_to_int(day3, 0) + utils.str_to_int(day4, 0) \
                                    + utils.str_to_int(day5, 0) + utils.str_to_int(day6, 0)  # 更新七日阅读数

            values = [[day1, day2, day3, day4, day5, day6, yesterday_all_view, today_view, day3_view, day7_view]]
            body = {'values': values}
            result = sheet.values().update(
                spreadsheetId=SAMPLE_SPREADSHEET_ID, range='监控管理!G{0}:P{0}'.format(idx + 2), valueInputOption="RAW",
                body=body).execute()
            print('qid:{1} view data {0} cells updated.'.format(result.get('updatedCells'), qid))

            # 更新问题下我的回答的数据（排名、点赞数）
            aid = row[16]

            if aid is None or aid == '':
                continue

            # 爬取知乎问题的答案排名
            rank, like = zhihu_spider.get_rank_and_like(qid, aid)

            # 更新排名、点赞数
            values = [[rank, like]]
            body = {'values': values}
            result = sheet.values().update(
                spreadsheetId=SAMPLE_SPREADSHEET_ID, range='监控管理!S{0}:T{0}'.format(idx + 2), valueInputOption="RAW",
                body=body).execute()
            print('qid:{1} aid:{2} {0} cells updated.'.format(result.get('updatedCells'), qid, aid))


def read_test():
    get_sheet()
    result = sheet.values().get(spreadsheetId=SAMPLE_SPREADSHEET_ID, range='链接管理!A2:C').execute()
    values = result.get('values', [])

    if not values:
        print('No data found.')
    else:
        print('名称, 链接')
        for row in values:
            print('%s, %s' % (row[1], row[2]))


def write_test():
    get_sheet()

    values = [
        [
            "test1"
        ],
        # Additional rows ...
    ]
    body = {
        'values': values
    }
    result = sheet.values().update(
        spreadsheetId=SAMPLE_SPREADSHEET_ID, range='监控管理!B6', valueInputOption="RAW", body=body).execute()
    print('{0} cells updated.'.format(result.get('updatedCells')))


if __name__ == '__main__':
    # read_test()
    # write_test()
    update_zhihu_data()
