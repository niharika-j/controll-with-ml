# controll-with-ml
Hides comments on YouTube using a model trained to detect trolls. This is a project for the course Human-AI Interaction at Carnegie Mellon University.

## Setup

To install the extension in Chrome-

1. Download ZIP file of project.
2. Extract the folder. There are two folders inside- 'extension' and 'server'.
3. Open Chrome. Go to chrome://extensions
4. Enable developer mode using toggle in top-right corner.
5. Click 'Load Unpacked' button.
6. Choose the 'extension' folder from the extracted folder.

To start the server-

1. Open Terminal. Change directory to server folder.
2. Run the following command to start server-
``FLASK_APP=server.py flask run``
