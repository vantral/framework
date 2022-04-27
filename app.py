from flask import Flask, render_template, request, redirect, url_for, send_file, make_response
import pandas as pd
import requests
import re
import time
import os

app = Flask(__name__)


@app.route('/')
def main_page():
    session_ad = requests.get('http://adyghe.web-corpora.net/adyghe_corpus/get_word_fields').cookies.get('session')
    session_evk = requests.get('https://gisly.net/corpus/get_word_fields').cookies.get('session')
    resp = make_response(render_template('query_area.html'))
    resp.set_cookie('session_ad', session_ad)
    resp.set_cookie('session_evk', session_evk)
    return resp

@app.route('/get_word_fields')
def empty():
    return ''


@app.route('/search_sent')
def search():
    base_ad = 'http://adyghe.web-corpora.net/adyghe_corpus/search_sent?'
    base_evk = 'https://gisly.net/corpus/search_sent?'
    query = request.url.split('search_sent?', maxsplit=1)[1]
    session_ad = request.cookies.get('session_ad')
    session_evk = request.cookies.get('session_evk')
    return requests.get(base_ad + query, cookies={'session': session_ad}).text + requests.get(base_evk + query, cookies={'session': session_evk}).text


@app.route('/search_sent/<page>')
def pagination(page):
    base_ad = 'http://adyghe.web-corpora.net/adyghe_corpus/search_sent/'
    base_evk = 'https://gisly.net/corpus/search_sent/'
    session_ad = request.cookies.get('session_ad')
    session_evk = request.cookies.get('session_evk')
    return requests.get(base_ad + page, cookies={'session': session_ad}).text + requests.get(base_evk + page, cookies={'session': session_evk}).text

if __name__ == '__main__':
    app.run()