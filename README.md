# attomicClock
Repository for the atomic clock project from QA

Software you should have installed on your machine 
-Python 
-Node.js

To setup backend (Python)

1. Create a new terminal 
2. Navigate to the flask-server directory 

-On Windows 
-- run command 'python -m venv venv'
-- run command './venv/Scripts/activate' 
If you encouter an error related to the activate.ps1 file 
-- run command 'Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass'
-- then rerun './venv/Scripts/activate'

-On Mac 
-- run command 'python3 -m venv venv'
-- run command './source venv/bin/activate'

3. Install ntplib

-On Windows
 -- run command 'pip install ntplib'

-On Mac
 -- run command 'pip3 install ntplib' 

4. Install Flask 

-On Windows
-- run command 'pip install Flask'

-On Mac 
-- run command 'pip3 install Flask'

5. run the clockData python file

-On Windows 
-- run command 'python clockData.py'

On Mac 
-- run command 'python3 clockData.py'


To set up frontend (React)

1. Open a new terminal 

2. run command 'cd react-frontend/react-app'

3. run 'npm install' 

4. run 'npm start'
