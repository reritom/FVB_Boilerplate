from application import app
import os

app.run('0.0.0.0', port=os.getenv('WEBAPP_PORT'))
