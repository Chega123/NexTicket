from src.servicios.consulta_personas import servicio_personas
from src.servicios.consultas_eventos import servicio_eventos
from src.model.persona import person
import json



class controlador_registro:
    def __init__(self):
        self.datos = {}
        self.verificado = False
        
    def enviardatos(self, datos_json):
        try:
            self.datos =datos_json
        except json.JSONDecodeError as e:
            print(f"Error al cargar JSON: {e}")
 #Verificar(MET-08)
    def verifica(self):
        email = self.datos["Email"]
        if email:
            resultado =servicio_personas.verifica_user(email)
            return resultado
        else:
            return []
#Guardar(MET-09)
    def guardar(self):
        verificador = self.verifica()
        if verificador:
            return False
        else:
            print(self.datos["Numero"])

            persona1=person(0,self.datos["Nombres"],self.datos["Rol"],self.datos["Apellidos"],self.datos["Email"],self.datos["Telefono"],self.datos["Contraseña"], self.datos["Fecha_Nacimiento"],self.datos["Tipo"],self.datos["Numero"])
           
            resultado=servicio_personas.inserta_user(persona1)
            return True



class controlador_inisio_sesion:
    def __init__(self):
        self.datos={}
     
    def enviar(self,datos_json):
        try:
            self.datos = datos_json
        except json.JSONDecodeError as e:
            print(f"Error al cargar JSON: {e}") 
    #Veridicar MET-10
    def veridicar(self):
        resultado=[]
        print(self.datos)
        email=self.datos["Email"]
        contrasena=self.datos["Contrasena"]
        resultado=servicio_personas.verifica_user_contrsana(email,contrasena)
        return resultado
#Confirmar MET-11
    def confirmacion(self):
        verificador=self.veridicar()
        print(verificador)
        print(verificador)
        if(verificador):
            if(verificador[0][2]=="usuario"):
                return "usuario"
            elif(verificador[0][2]=="administrador"):
                return "administrador"
            elif(verificador[0][2]=="encargado"):
                return "encargado"
        else:
            return "False"
        return "False"



class controlador_cambiar_rol():
    def __init__(self):
        self.datos={}
        #Enviar MET-12
    def enviar(self,datos_json):
        try:
            self.datos = datos_json
        except json.JSONDecodeError as e:
            print(f"Error al cargar JSON: {e}") 
    #Verifica MET-13
    def verifica(self):
        email = self.datos["Email"]
        if email:
            resultado=servicio_personas.verifica_user(email)
            return resultado
        else:
            return []


# camabiar_rol_guardian MET-14
    def camabiar_rol_guardan(self):
        verificador = self.verifica()
        email = self.datos["Email"]


        rol=self.datos["Rol"]
        if verificador:
            if (rol!= verificador[0][7]):
                elima=servicio_personas.elimiar_user(email)
                if (rol=="usuario"):
                    persona1=person(0,verificador[0][1],rol,verificador[0][3],verificador[0][4],verificador[0][5],verificador[0][6],verificador[0][7],verificador[0][8],verificador[0][9])
                    resultado=servicio_personas.inserta_user(persona1)
                elif(rol=="encargado"):
                    resultado=servicio_personas.crea_encargado(verificador)
                    
                elif(rol=="administrador"):
                    resultado=servicio_personas.crea_administrador(verificador)
                else:
                    return False
                return True
            return False
        else:
            return False
    #Verifica Email MET-15
def verifica_Email(datajson):
    datos=datajson
    email=datos["Email"]
    resultados=servicio_personas.verifica_user(email)
    if (resultados):
        return resultados
    else:
        return []

class controlador_eleminar_usuario():
    def __init__(self) :
        
        self.data={}
    def enviar(self,datajson):
        self.data=datajson
        #Eliminar MET-16
    def eliminar(self):
        print(self.data)
        datos=self.data["Personas"]

        for emails in datos:
            resultado=servicio_personas.elimiar_user(emails["Email"])


class generar_venetos1():
    def __init__(self):
        self.datos={}

    def enviar(self,data):
        self.datos=data
#buscar MET-17
    def buscar(self):
        
        verifica=servicio_personas.verifica_user(self.datos["email"])
        eventos=servicio_personas.genera_veventos_e(verifica[0][0])
        eventosreturn={"eventos":[]}
        columnas=["id_evento","nombre","descripcion"]
        for dato in eventos:
            evento = dict(zip(columnas, dato))
            eventosreturn["eventos"].append(evento)
        return  eventosreturn    
    
class controlador_crear_ubicacion():
    def __ini__(self):
        self.datos={}
    def enviar(self,datosjs):
        self.datos=datosjs
        #Crear ubicacion MET-18
    def crear_ubicacion(self):
        ubicaicon1=servicio_eventos.agregar_ubicacion_consulta(self.datos)
        ubicacion={"id_ubicacion":ubicaicon1[0]}
        return ubicacion    

class controlador_crear_plantilla():
    def __ini__(self):
        self.datos={}
    def enviar(self,datosjs):
        self.datos=datosjs
    def crear_ubicacion(self):
        plantilla1=servicio_eventos.consulta_genrar_plantilla(self.datos)
        plantilla={"id_ubicacion":plantilla1[0]}
        return plantilla

class crear_evento:

    def __init__(self):
        self.datos={}

    def enviar(self,data):
        self.datos=data





#Generar plantillas(MET-20)
def genera_plantillas(id):
    plantillas=servicio_eventos.consulta_genrar_plantilla(id)
    plantilla_s={"plantillas":[]}
    columnas=["id_plantilla","nombre","turno","categoria_edad"]
    for dato in plantillas:
        e = dict(zip(columnas, dato))
        plantilla_s["plantillas"].append(e)
    return   plantilla_s
    
#Generar Ubicaciones MET-21
def generar_ubicaciones():
    ubicacion_lista=servicio_eventos.consultar_ubicacion_encargado(id)
    ubicaciones={"ubicaion":[]}
    columnas=["id_ubicacion","pais","departamento","direccion"]
    for dato in ubicacion_lista:
        e = dict(zip(columnas, dato))
        ubicaciones["ubicaion"].append(e)
    return   ubicaciones
# genera personas MET-22
def genera_personas_1():
    resultado=servicio_personas.generar_user()
    return resultado
