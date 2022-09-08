import requests

# 添加和风天气的APIKey
my_key = ""

url_api_weather = "https://devapi.qweather.com/v7/weather/"

# 城市对应code
url_api_geo = "https://geoapi.qweather.com/v2/city/"


def get_city_weather(city_name: str = '郑州', day: str = '3d', now: bool = False):
    get_geo_url = url_api_geo + 'lookup?location=' + city_name + '&key=' + my_key
    try:
        location = requests.get(get_geo_url).json()['location'][0]
        if now:
            get_weather_url = url_api_weather + 'now?location=' + location['id'] + '&key=' + my_key
            weather_info = requests.get(get_weather_url).json()
            return weather_info
        else:
            get_weather_url = url_api_weather + day + '?location=' + location['id'] + '&key=' + my_key
            weather_info = requests.get(get_weather_url).json()
            return weather_info
    except:
        pass


