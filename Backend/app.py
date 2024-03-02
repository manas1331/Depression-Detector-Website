from flask import Flask, render_template, redirect, request, session, url_for
import re
from hashlib import sha256
import os
import threading
from pyngrok import ngrok
from pymongo import MongoClient

client = MongoClient("mongodb+srv://Rahul:Vid24Siv@myfirstcluster.gmr3a.mongodb.net/?retryWrites=true&w=majority")
db=client["HEALTH_HACKS"]
users = db["users"]
contacts = db["contacts"]

os.environ["FLASK_DEBUG"] = "development"
port = 5000

app = Flask(__name__)
ngrok.set_auth_token("2cTqZ40Esa1XYycw883DFQ3FkXS_4TMM2qM28xDcJekSLTZz6")
public_url = ngrok.connect(5000).public_url
print("NGROK ", public_url)
app.secret_key='password'

def llm(msg):
  user_prompt = msg
  text_generation_pipeline = pipeline(task = "text-generation", model = model, tokenizer = tokenizer, max_length = 300)
  model_answer = text_generation_pipeline(f"[INST] {user_prompt} [/INST]")
  return model_answer[0]['generated_text']


@app.route('/register', methods=['POST'])
def register():
    username = request.form['username']
    email = request.form['email']
    password = request.form['password']

    if not re.match(r'[^@]+@[^@]+\.[^@]+', email):
        print('Invalid email address')
        return redirect(url_for('home'))

    elif not username or not password or not email:
        print('Please fill out all the form fields')
        return redirect(url_for('home'))

    else:
        account = users.find_one({'username': username})
        if account:
            print('User with the specified username already exists.')
            return redirect(url_for('home'))

        hashed_password = sha256(password.encode()).hexdigest()
        user = {'username': username, 'password': hashed_password, 'email': email}
        users.insert_one(user)
        return redirect(url_for('home'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        account = users.find_one({'username': username})
        if account:
            hashed_password = sha256(password.encode()).hexdigest()
            if account['password'] == hashed_password:
                session['loggedin'] = True
                session['id'] = str(account['_id'])
                session['username'] = account['username']
                print("Session ", session)
                return redirect(url_for('home'))

        print('Invalid user credentials')
        return redirect(url_for('login'))
    else:
        return render_template('login.html')
@app.route('/contact', methods=['POST','GET'])
def contact():
   if request.method == "POST":
       email = request.form['email']
       phone = request.form['phone']
       feedback = request.form['feedback']
       contacts.insert_one({email: email, phone: phone, feedback: feedback})
       return redirect(url_for("home"))
   return render_template("contact.html")

@app.route('/helpline')
def services():
    return render_template("services.html")

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/chatbot', methods=['GET', 'POST'])
def chatbot():
    if request.method == 'POST':
        msg = request.form['msg']
        response = llm(msg)
        print(response)
        return render_template('chatbot.html', response=response)
    return render_template('chatbot.html')

@app.route('/')
def home():
    return render_template('home.html')

if __name__ == '__main__':
    app.run(debug=True)

threading.Thread(target=app.run, kwargs={"use_reloader": False}).start()
