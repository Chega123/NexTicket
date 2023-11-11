import psycopg2
import psycopg2.extras

def obtener():
    
    conn = psycopg2.connect(
    database="nexticked",
    user="postgres",
    password="berly9579",
    host="localhost",
    port="5432"
    )
    return conn
