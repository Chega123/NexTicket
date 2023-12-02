import json
from src.DB.base_datos import obtener

class servicio_eventos():
    
    
    @classmethod
    #Agregar Ubicacion consulta MET-31
    def agregar_ubicacion_consulta(cls, datos):
        base_d = obtener()
        consulta=base_d.cursor()
        insert_sql_usuario = 'INSERT INTO "ubicacion" ("pais",  "departamento","direccion","aforo", "tamaño","id_encargado") VALUES ( %s,%s, %s, %s,%s,%s) RETURNING *'
        valores = (
        datos["pais"],datos["departamento"],datos["direccion"],datos["aforo"],datos["tamaño"],datos["id_encargado"]
                )
        consulta.execute(insert_sql_usuario, valores)
        ubicacion= consulta.fetchone()
        base_d.commit()
        base_d.close()
        return ubicacion
    

    @classmethod
    #Agregar plantilla consulta MET-32
    def agregar_plantilla_consulta(cls, datos):
        base_d = obtener()
        consulta=base_d.cursor()
        
        insert_sql_usuario = 'INSERT INTO "plantilla" ("nombre",  "ingreso_libre","turno","categoria_edad", "encargado_id_persona","permitir_invitaciones") VALUES ( %s,%s, %s, %s,%s,%s) RETURNING *'
        bit1=True
        bit2=True
        if (datos["ingreso_libre"]==0):
            bit1=False
        if(datos["permitir_invitaciones"]==0):
            bit2=False
        valores = (

        datos["nombre"],bit1,datos["turno"],datos["categoria_edad"],datos["encargado_id_persona"],bit2
                )
        consulta.execute(insert_sql_usuario, valores)
        ubicacion= consulta.fetchone()
        base_d.commit()
        base_d.close()
        return ubicacion
    
    @classmethod

    # Generar eventos mostrar MET-33
    def genera_veventos_e(cls,id):
        base_d = obtener()
        consulta=base_d.cursor()
    
        sql = f"""
        SELECT e.id_evento, e.nombre, e.descripcion
        FROM encargado_has_evento ee
        INNER JOIN evento e ON ee.evento_id = e.id_evento
        WHERE ee.encargado_id = {id};
        """
        consulta.execute(sql)
        resultados = consulta.fetchall()

        print(resultados)
        base_d.close()

        return resultados
    
    @classmethod
    #Consultar ubicacion encargado MET-34
    def consultar_ubicacion_encargado(cls,id):
        base_d = obtener()
        consulta=base_d.cursor()
    
        sql = f"""
        SELECT id_ubicacion,pais,departamento,direccion
        FROM  ubicacion
        WHERE id_encargado= {id};
        """
        consulta.execute(sql)
        resultados = consulta.fetchall()

        print(resultados)
        base_d.close()

        return resultados
        
    @classmethod
    #consulta generar plantilla MET-35 
    def consulta_genrar_plantilla(cls,id):
        base_d = obtener()
        consulta=base_d.cursor()
    
        sql = f"""
        SELECT id_plantilla,nombre,turno,categoria_edad
        FROM  plantilla
        WHERE encargado_id_persona= {id};
        """

        consulta.execute(sql)
        resultados = consulta.fetchall()

        print(resultados)
        base_d.close()

        return resultados
    @classmethod
    #agregar evento:crear un evento en la tabla evento MET-36
    def agregar_evento(cls,datos):
        base_d = obtener()
        consulta=base_d.cursor()
        insert_sql_usuario = 'INSERT INTO "evento" ("nombre",  "descripcion","plantilla_id_plantilla") VALUES ( %s,%s, %s) RETURNING *'
        valores = (
        datos["nombre"],datos["descripcion"],datos["plantilla_id_plantilla"]
                )
        consulta.execute(insert_sql_usuario, valores)
        ubicacion= consulta.fetchone()
        base_d.commit()
        base_d.close()
        return ubicacion
    @classmethod
#agregar actividad:crear un evento MET-37
    def agregar_actividad(cls,datos):
        base_d = obtener()
        consulta=base_d.cursor()
        insert_sql_usuario = 'INSERT INTO "actividad" ("nombre", "horario_fin", "horario_inicio", "evento_id_evento", "id_ubicacion") VALUES (%s, %s, %s, %s, %s) RETURNING *'
        valores = (
        datos["nombre"],datos["horario_foin"],datos["horario_inicio"],datos["evento_id_evento"],datos["id_ubicacion"]
                )
        consulta.execute(insert_sql_usuario, valores)
        ubicacion= consulta.fetchone()
        base_d.commit()
        base_d.close()
        return ubicacion
    @classmethod
#agregar  expositor en actividad MET-38
    def agregar_expositor(cls, datos):
        base_d = obtener()
        consulta=base_d.cursor()
        
        insert_sql_usuario = 'INSERT INTO "expositor" ("nombre",  "apellido","cargo","actividad_id_actividad" ) VALUES ( %s,%s, %s, %s) RETURNING *'
        
        valores = (

        datos["nombre"],datos["apellido"],datos["cargo"],datos["id_actividad"]
                )
        consulta.execute(insert_sql_usuario, valores)
        expositor=consulta.fetchone()
        base_d.commit()
        base_d.close()
        return expositor
    @classmethod
#agregar materiales en actividad MET-38
    def agregar_materiales(cls, datos):
        base_d = obtener()
        consulta=base_d.cursor()
        
        insert_sql_usuario ='INSERT INTO "materiales" ("nombre",  "descripcion","cantidad","id_actividad","precio" ) VALUES ( %s,%s, %s, %s,%s) RETURNING *'
        
        valores = (
        datos["nombre"],datos["descripcion"],datos["cantidad"],datos["id_actividad"],datos["precio"]
                )
        consulta.execute(insert_sql_usuario, valores)
        materiales=consulta.fetchone()
        base_d.commit()
        base_d.close()
        return materiales
    @classmethod
#agregar_Paquetes MET-39
    def agregar_paquetes(cls, datos):
        base_d = obtener()
        consulta=base_d.cursor()
        
        insert_sql_usuario ='INSERT INTO "paquete" (  "precio","actividad_id_actividad","nombre_general", ) VALUES ( %s,%s, %s) RETURNING *'
        
        valores = (
        datos["precio"],datos["actividad_id_actividad"],datos["nombre_general"]
                )
        consulta.execute(insert_sql_usuario, valores)
        paquete=consulta.fetchone()
        base_d.commit()
        base_d.close()
        return paquete
    @classmethod
#agregar_ paquete_nombre_descripcion MET-40
    def agregar_paquete_nombre_descripcion(cls, datos):
        base_d = obtener()
        consulta=base_d.cursor()
        
        insert_sql_usuario ='INSERT INTO "paquete_nombre_descripcion" ("descripcion","paquete_id_paquete","nombre") VALUES ( %s,%s, %s) RETURNING *'
        
        valores = (
        datos["descripcion"],datos["paquete_id_paquete",datos["nombre"],]
                )
        consulta.execute(insert_sql_usuario, valores)
        paquete_nombre=consulta.fetchone()
        base_d.commit()
        base_d.close()
        return paquete_nombre
    @classmethod
#agregar_tabla_evento_has_encargado MET-40
    def agregar_evento_has_encargado(cls, datos):
        base_d = obtener()
        consulta=base_d.cursor()
        
        insert_sql_usuario ='INSERT INTO "encargado_has_evento" ("encargado_id_persona",  "evento_id_evento", ) VALUES ( %s,%s) RETURNING *'
        
        valores = (
        datos["id_persona"],datos["id_evento"]
                )
        consulta.execute(insert_sql_usuario, valores)
        e_e=consulta.fetchone()
        base_d.commit()
        base_d.close()
        return e_e