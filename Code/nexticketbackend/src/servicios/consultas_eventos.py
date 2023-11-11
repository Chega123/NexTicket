import json
from src.DB.base_datos import obtener

class servicio_eventos():
    
    
    @classmethod
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
       