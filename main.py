from flask import Flask, session, redirect, render_template, url_for
import some_forms
app = Flask(__name__)
app.config = ['SECRET_KEY'] = 'f$f2jFf#3AL3$^+s;'

@app.route('/')
def index():
	return render_template('index.html')
