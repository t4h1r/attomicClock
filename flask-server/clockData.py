from distutils.log import debug
import ntplib
from time import ctime
from flask import Flask

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    c = ntplib.NTPClient()
    response = c.request('europe.pool.ntp.org', version=3)
    ctime(response.tx_time)
    dictionary = dict()
    dictionary['time'] = ctime(response.tx_time)
    return dictionary

if __name__ =='__main__':
    app.run(debug=True)

## I have created a dictonary which will be recognised as json on the frontend. This will allow me to extract the time 
