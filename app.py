from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Dummy admin credentials
admin_credentials = {'username': 'admin', 'password': '1234'}

# Sample information about ITI and Computer Centre
iti_info = "Vinayak ITI College provides vocational training in various trades. We have a state-of-the-art Computer Centre equipped with the latest technology."

@app.route('/')
def index():
    return render_template('index.html', iti_info=iti_info)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        if username == admin_credentials['username'] and password == admin_credentials['password']:
            # Redirect to the homepage with admin privileges
            return redirect(url_for('index'))

    return render_template('login.html', error='Invalid credentials')

if __name__ == '__main__':
    app.run(debug=True)
  
