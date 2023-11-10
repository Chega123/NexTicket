import psycopg2
import psycopg2.extras

def obtener():
    
    conn = psycopg2.connect(
    database="nexticket",
    user="postgres",
    password="next123",
    host="localhost",
    port="5432"
    )
    return conn
