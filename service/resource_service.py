from dao import *

logger = logging.getLogger('wx')


def get_new_resource(user_id, resource_type):
    history_id = []
    logs = query_res_log_by_type(user_id, resource_type)
    for log in logs:
        history_id.append(log.resource_id)
    res = query_res_content_by_type(resource_type, history_id)
    return res


if __name__ == "__main__":
    print(get_new_resource(1, 1).content)
