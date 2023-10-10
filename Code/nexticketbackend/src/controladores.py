import psycopg2
import psycopg2.extras
import json

conn = psycopg2.connect(
    database="Personas",
    user="postgres",
    password="berly9579",
    host="localhost",
    port="5432"
)

BD_U = conn.cursor()

class controlador_registro:
    def __init__(self, cont1):
        self.datos = {}
        self.verificado = False
        self.BD = cont1

    def enviardatos(self, datos_json):
        try:
            self.datos =datos_json
        except json.JSONDecodeError as e:
            print(f"Error al cargar JSON: {e}")

    def verifica(self):
        email = self.datos["Email"]
        if email:
            consulta_sql = f'SELECT * FROM "Persona" WHERE "Email" = \'{email}\''
            self.BD.execute(consulta_sql)
            resultados = self.BD.fetchall()
            return resultados
        else:
            return []

    def guardar(self):
        verificador = self.verifica()
        if verificador:
            return False
        else:
            insert_sql_usuario = 'INSERT INTO "Documentos" ("Tipo", "Numero" ) VALUES ( %s,%s) RETURNING "ID"'
            valores_usuario = (
                self.datos["Tipo"],
                self.datos["Numero"]
            )

            self.BD.execute(insert_sql_usuario, valores_usuario)
            id_persona = BD_U.fetchone()[0] 
            conn.commit() 


            insert_sql_usuario = 'INSERT INTO "Usuario" ("Nombres", "Apellidos", "Email", "Telefono","Contraseña", "Fecha_Nacimiento", "Rol","Sexo","documento_id") VALUES ( %s,%s, %s, %s, %s, %s, %s,%s,%s) RETURNING "ID"'
            
            valores_usuario = (
                self.datos["Nombres"],
                self.datos["Apellidos"],
                self.datos["Email"],
                self.datos["Telefono"],
                self.datos["Contraseña"],
                self.datos["Fecha_Nacimiento"],
                self.datos["Rol"],
                self.datos["Sexo"],
                id_persona
                
            )
            
            self.BD.execute(insert_sql_usuario, valores_usuario)
            id_persona = BD_U.fetchone()[0] 
            conn.commit() 
            return True
            

class controlador_inisio_sesion:
    def __init__(self,con1):
        self.datos={}
        self.BD=con1

    def enviar(self,datos_json):
        try:
            self.datos = datos_json
        except json.JSONDecodeError as e:
            print(f"Error al cargar JSON: {e}") 

    def veridicar(self):
        resultado=[]
        print(self.datos)
        email=self.datos["Email"]
        contrasena=self.datos["Contrasena"]
        consulta_sql = f'SELECT * FROM "Persona" WHERE "Email" = \'{email}\' AND  "Contraseña" =  \'{contrasena}\''
        self.BD.execute(consulta_sql)
        resultado = self.BD.fetchall()
        return resultado

    def confirmacion(self):
        verificador=self.veridicar()
        print(verificador)
        print(verificador)
        if(verificador):
            if(verificador[0][7]=="Usuario"):
                return "Usuario"
            elif(verificador[0][7]=="Administrador"):
                return "Administrador"
            elif(verificador[0][7]=="Encargado"):
                return "Encargado"
        else:
            return "False"
#ejemplo de entrada{Email:****,Rol:***}
class controlador_cambiar_rol():
    def __init__(self,con1):
        self.datos={}
        self.BD=con1
    def enviar(self,datos_json):
        try:
            self.datos = datos_json
        except json.JSONDecodeError as e:
            print(f"Error al cargar JSON: {e}") 

    def verifica(self):
        email = self.datos["Email"]
        if email:
            consulta_sql = f'SELECT * FROM "Persona" WHERE "Email" = \'{email}\''
            self.BD.execute(consulta_sql)
            resultados = self.BD.fetchall()
            return resultados
        else:
            return []
        
    def camabiar_rol_guardan(self):
        verificador = self.verifica()
        email = self.datos["Email"]

        rol=self.datos["Rol"]
        if verificador:
            if (rol!= verificador[0][7]):
                print(email)
                self.BD.execute('DELETE FROM "Persona" WHERE "Email" = %s', (email,))
                conn.commit()
                if (rol=="Usuario"):
                    insert_sql_usuario = 'INSERT INTO "Usuario" ("Nombres", "Apellidos", "Email", "Telefono","Contraseña", "Fecha_Nacimiento", "Rol","Sexo","documento_id") VALUES ( %s,%s, %s, %s, %s, %s, %s,%s,%s) RETURNING "ID"'
            
                    valores_usuario = (
                        verificador[0][1],verificador[0][2],verificador[0][3],verificador[0][4],verificador[0][5],verificador[0][6],"Usuario",verificador[0][8],verificador[0][9]
                    ) 
                    self.BD.execute(insert_sql_usuario, valores_usuario)
                    conn.commit() 

                elif(rol=="Encargado"):
                    insert_sql_usuario = 'INSERT INTO "Encargado" ("Nombres", "Apellidos", "Email", "Telefono","Contraseña", "Fecha_Nacimiento", "Rol","Sexo","documento_id") VALUES ( %s,%s, %s, %s, %s, %s, %s,%s,%s) RETURNING "ID"'
            
                    valores_usuario = (
                        verificador[0][1],verificador[0][2],verificador[0][3],verificador[0][4],verificador[0][5],verificador[0][6],"Encargado",verificador[0][8],verificador[0][9]
                    ) 
                    self.BD.execute(insert_sql_usuario, valores_usuario)
                    conn.commit() 

                elif(rol=="Administrador"):
                    insert_sql_usuario = 'INSERT INTO "Administrador" ("Nombres", "Apellidos", "Email", "Telefono","Contraseña", "Fecha_Nacimiento", "Rol","Sexo","documento_id") VALUES ( %s,%s, %s, %s, %s, %s, %s,%s,%s) RETURNING "ID"'
            
                    valores_usuario = (
                        verificador[0][1],verificador[0][2],verificador[0][3],verificador[0][4],verificador[0][5],verificador[0][6],"Administrador",verificador[0][8],verificador[0][9]
                    ) 
                    self.BD.execute(insert_sql_usuario, valores_usuario)
                    conn.commit() 
                else:
                    return False
                return True
            return False
        else:
            return False
       


def verifica_Email(datajson):
    datos=datajson
    email=datos["Email"]
    consulta_sql = f'SELECT * FROM "Persona" WHERE "Email" = \'{email}\''
    BD_U.execute(consulta_sql)
    resultados = BD_U.fetchall()
    if (resultados):
        return resultados
    else:
        return []
        

    
class controlador_eleminar_usuario():
    def __init__(self,db) :
        self.BD=db
        self.data={}
    def enviar(self,datajson):
        self.data=datajson
        
    def eliminar(self):
        print(self.data)
        datos=self.data["Personas"]

        for emails in datos:
            self.BD.execute('SELECT "documento_id" FROM "Persona" WHERE "Email" = %s', (emails["Email"],))
            documento_id = self.BD.fetchone() 
            self.BD.execute('DELETE FROM "Persona" WHERE "Email" = %s', (emails["Email"],))
            conn.commit()  
            self.BD.execute('DELETE FROM "Documentos" WHERE "ID" = %s', (documento_id,))
            conn.commit()
def genera_personas_1():
    rol="Usuario"
    consulta = f'SELECT "Nombres","Email","Rol" FROM "Persona" WHERE "Rol"=\'{rol}\''
    BD_U.execute(consulta)
    resultados = BD_U.fetchall()
    columnas=["Nombre","Email","Rol"]
    resultado_json=[]
    for fila in resultados:
        resultado_json.append(dict(zip(columnas, fila)))
    return resultado_json