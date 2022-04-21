import ntplib
from time import ctime
from time import sleep
# c = ntplib.NTPClient()
# response = c.request('europe.pool.ntp.org', version=3)
# ctime(response.tx_time)

counter = 0

while counter < 1 :
    c = ntplib.NTPClient()
    response = c.request('europe.pool.ntp.org', version=3)
    ctime(response.tx_time)
    print(ctime(response.tx_time))
    sleep(1)