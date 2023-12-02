from src.servicios.consulta_personas import servicio_personas
from src.servicios.consultas_eventos import servicio_eventos
from src.model.persona import person
import json


#clase que controla registro class_1
class controlador_registro:
    def __init__(self):
        self.datos = {}
        self.verificado = False
     #metodo_guarda los datos EN VARIBALE  para registro ctrc-1
    def enviardatos(self, datos_json):
        try:
            self.datos =datos_json
        except json.JSONDecodeError as e:
            print(f"Error al cargar JSON: {e}")
    #VERIFICA LA EXISTENCIA ctrc-2
    def verifica(self):
        email = self.datos["Email"]
        if email:
            resultado =servicio_personas.verifica_user(email)
            return resultado
        else:
            return []
    #GUARDA EN LA BASE DE DATOS ctrc-3
    def guardar(self):
        verificador = self.verifica()
        if verificador:
            return False
        else:
            print(self.datos["Numero"])

            persona1=person(0,self.datos["Nombres"],self.datos["Rol"],self.datos["Apellidos"],self.datos["Email"],self.datos["Telefono"],self.datos["Contraseña"], self.datos["Fecha_Nacimiento"],self.datos["Tipo"],self.datos["Numero"])
           
            resultado=servicio_personas.inserta_user(persona1)
            return True


#class_2
class controlador_inisio_sesion:
    def __init__(self):
        self.datos={}
     
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
        resultado=servicio_personas.verifica_user_contrsana(email,contrasena)
        print(resultado)
        return resultado

    def confirmacion(self):
        verificador=self.veridicar()
        print(verificador)
        print(verificador)
        if(verificador):
            return {'id_persona':verificador[0][0],"Tipo_persona":verificador[0][2]}


#class_3
class controlador_cambiar_rol():
    def __init__(self):
        self.datos={}
        
    def enviar(self,datos_json):
        try:
            self.datos = datos_json
        except json.JSONDecodeError as e:
            print(f"Error al cargar JSON: {e}") 

    def verifica(self):
        email = self.datos["Email"]
        if email:
            resultado=servicio_personas.verifica_user(email)
            return resultado
        else:
            return []


    #class_3
    def camabiar_rol_guardan(self):
        verificador = self.verifica()
        email = self.datos["Email"]


        rol=self.datos["Rol"]
        if verificador:
            if (rol!= verificador[0][2]):
                data={"id_persona":verificador[0],"rol":rol}
                if (rol=="usuario"):                  
                    resultado=servicio_personas.cambia_roll(data)
                elif(rol=="encargado"):
                    resultado=servicio_personas.cambia_roll(data)
                    
                elif(rol=="administrador"):
                    resultado=servicio_personas.cambia_roll(data)
                else:
                    return False
                return True
            return False
        else:
            return False
 #def_4 verifica email   
def verifica_Email(datajson):
    datos=datajson
    email=datos["Email"]
    resultados=servicio_personas.verifica_user(email)
    if (resultados):
        return resultados
    else:
        return []
 #class_5 elimina usuarios 
class controlador_eleminar_usuario():
    def __init__(self) :
        
        self.data={}
    def enviar(self,datajson):
        self.data=datajson
        
    def eliminar(self):
        print(self.data)
        datos=self.data["Personas"]

        for emails in datos:
            resultado=servicio_personas.elimiar_user(emails["Email"])

 #class_6 genera eventos
class generar_venetos1():
    def __init__(self):
        self.datos={}

    def enviar(self,data):
        self.datos=data

    def buscar(self):
        verifica=servicio_personas.verifica_user(self.datos["email"])
        eventos=servicio_personas.genera_veventos_e(verifica[0][0])
        eventosreturn={"eventos":[]}
        columnas=["id_evento","nombre","descripcion"]
        for dato in eventos:
            evento = dict(zip(columnas, dato))
            eventosreturn["eventos"].append(evento)
        return  eventosreturn    
 #class_7 se crea aubicacion    
class controlador_crear_ubicacion():
    def __ini__(self):
        self.datos={}
    def enviar(self,datosjs):
        self.datos=datosjs
    def crear_ubicacion(self):
        ubicaicon1=servicio_eventos.agregar_ubicacion_consulta(self.datos)
        ubicacion={"id_ubicacion":ubicaicon1[0]}
        return ubicacion    
#class_8 se crea plantilla de evento 
class controlador_crear_plantilla():
    def __ini__(self):
        self.datos={}
    def enviar(self,datosjs):
        self.datos=datosjs
    def crear_plantilla(self):
        plantilla1=servicio_eventos.consulta_genrar_plantilla(self.datos)
        plantilla={"id_ubicacion":plantilla1[0]}
        return plantilla






#def_9 generamos las plantillas de encargado especifico 
def genera_plantillas(id):
    plantillas=servicio_eventos.consulta_genrar_plantilla(id)
    plantilla_s={"plantillas":[]}
    columnas=["id_plantilla","nombre","turno","categoria_edad"]
    for dato in plantillas:
        e = dict(zip(columnas, dato))
        plantilla_s["plantillas"].append(e)
    return   plantilla_s
#def_10 generamos las ubicaciones de encargado especifico 
def generar_ubicaciones(id):
    ubicacion_lista=servicio_eventos.consultar_ubicacion_encargado(id)
    ubicaciones={"ubicaion":[]}
    columnas=["id_ubicacion","pais","departamento","direccion"]
    for dato in ubicacion_lista:
        e = dict(zip(columnas, dato))
        ubicaciones["ubicaion"].append(e)
    return   ubicaciones

def genera_personas_1():
    resultado=servicio_personas.generar_user()
    return resultado
