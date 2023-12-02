import json
from src.DB.base_datos import obtener

class servicio_personas():
    @classmethod
    #Verificar user MET-23
    def verifica_user(cls, email):
        base_d = obtener()
        consulta=base_d.cursor()

        consulta_sql = f'SELECT * FROM "persona" WHERE "email" = \'{email}\''
        consulta.execute(consulta_sql)
        resultados = consulta.fetchall()
        base_d.close()
        return resultados
    
    @classmethod
    # Insertar User MET-24
    def inserta_user(cls, persona):
        
            base_d = obtener()
            consulta=base_d.cursor()
            print (persona.numero_documento)

            insert_sql_usuario = 'INSERT INTO "persona" ("nombre",  "rol","apellido","email", "telefono","contrasena", "fecha_nacimiento","tipo_documento","numero_documento") VALUES ( %s,%s, %s, %s, %s, %s, %s,%s,%s) '
                
            valores_usuario = (
                persona.nombre,
                persona.rol,
                persona.apellido,
                persona.email,
                persona.telefono,
                persona.contrasena,
                persona.fecha_nacimiento,
                persona.tipo_documento,
                persona.numero_documento
                    
            )
            consulta.execute(insert_sql_usuario, valores_usuario)
            base_d.commit()
            base_d.close()
            return True
        
    
    @classmethod
    #Verificar user contraseña(MET-25)
    def verifica_user_contrsana(cls, email,contrasena):
        base_d = obtener()
        consulta=base_d.cursor()

        consulta_sql = f'SELECT * FROM "persona" WHERE "email" = \'{email}\' AND  "contrasena" =  \'{contrasena}\''
        consulta.execute(consulta_sql)
        resultados = consulta.fetchall()
        base_d.close()
        return resultados

    @classmethod
    #Eliminar user MET-26
    def elimiar_user(cls, email):
        
            base_d = obtener()
            consulta=base_d.cursor()
            consulta.execute('DELETE FROM "persona" WHERE "email" = %s', (email,))
            base_d.commit()
            base_d.close()
            return True
        
        
    @classmethod
    #crear encargado MET-27
    def crea_encargado(cls,usuario ):
        
            base_d = obtener()
            consulta=base_d.cursor()
            insert_sql_usuario = 'INSERT INTO "persona" ("nombre",  "rol","apellido","email", "telefono","contrasena", "fecha_nacimiento","tipo_documento","numero_documento") VALUES ( %s,%s, %s, %s, %s, %s, %s,%s,%s) '
            valores_usuario = (
                usuario[0][1],"encargado",usuario[0][3],usuario[0][4],usuario[0][5],usuario[0][6],usuario[0][7],usuario[0][8],usuario[0][9]
                )
            consulta.execute(insert_sql_usuario, valores_usuario)
            base_d.commit()
            base_d.close()
            return True
        

    @classmethod
    #crear administrador MET-28
    def crea_administrador(cls,usuario ):
        try:
            base_d = obtener()
            consulta=base_d.cursor()
            insert_sql_usuario = 'INSERT INTO "persona" ("nombre",  "rol","apellido","email", "telefono","contrasena", "fecha_nacimiento","tipo_documento","numero_docuemnto") VALUES ( %s,%s, %s, %s, %s, %s, %s,%s,%s) RETURNING "ID"'
            valores_usuario = (
                usuario[0][1],"administrador",usuario[0][3],usuario[0][4],usuario[0][5],usuario[0][6],usuario[0][7],usuario[0][8],usuario[0][9]
                )
            consulta.execute(insert_sql_usuario, valores_usuario)
            base_d.commit()
            base_d.close()
            return True
        except:
            return False
    @classmethod
    #Generar user MET-29
    def generar_user(cls):
        base_d = obtener()
        consulta1=base_d.cursor()
        rol="usuario"
        consulta = f'SELECT "nombre","email","rol" FROM "persona" WHERE "rol"=\'{rol}\''
        consulta1.execute(consulta)
        resultados = consulta1.fetchall()
        columnas=["Nombre","Email","Rol"]
        resultado_json=[]
        for fila in resultados:
            resultado_json.append(dict(zip(columnas, fila)))
        return resultado_json
    

    #cambiar rol MET-30
    @classmethod 
    def cambia_roll(cls,data):     
        base_d = obtener()
        consulta = base_d.cursor()

           
        update_sql_rol = 'UPDATE "persona" SET "rol" = %s WHERE "id_persona" = %s'
    
  
        consulta.execute(update_sql_rol, (data["rol"],data["id_persona"] ))
        base_d.commit()

        base_d.close()
