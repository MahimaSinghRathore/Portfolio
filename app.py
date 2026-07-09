from flask import Flask, render_template, request, redirect, url_for, flash
import pymysql
import config

app = Flask(__name__)
app.secret_key = config.SECRET_KEY


# Database Connection
def get_connection():
    return pymysql.connect(
        host=config.MYSQL_HOST,
        user=config.MYSQL_USER,
        password=config.MYSQL_PASSWORD,
        database=config.MYSQL_DATABASE,
        cursorclass=pymysql.cursors.DictCursor
    )
@app.route("/")
def index():

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute("SELECT * FROM about LIMIT 1")
    about = cursor.fetchone()

    cursor.execute("SELECT * FROM skills")
    skills = cursor.fetchall()

    cursor.execute("SELECT * FROM projects")
    projects = cursor.fetchall()

    cursor.close()
    connection.close()

    return render_template(
        "index.html",
        about=about,
        skills=skills,
        projects=projects
    )
@app.route("/contact", methods=["POST"])
def contact():

    name = request.form["name"]
    email = request.form["email"]
    message = request.form["message"]

    connection = get_connection()
    cursor = connection.cursor()

    sql = """
    INSERT INTO messages(name,email,message)
    VALUES(%s,%s,%s)
    """

    cursor.execute(sql, (name, email, message))

    connection.commit()

    cursor.close()
    connection.close()

    flash("Message sent successfully!")

    return redirect(url_for("index"))
if __name__ == "__main__":
    app.run(debug=True)