from flask import Flask,template_rendered,request
from flask_cors import CORS
from src.controlador.controlador import *
app = Flask(__name__)


CORS(app)


@app.route('/registro',methods=['POST'])
# Crear persona MET-01
def crear_persona():
    ingresa=controlador_registro()
    ingresa.enviardatos(request.json)
    ver=ingresa.guardar()
    if (ver==True):
        return '{"validez":"True"}'

    return '{"validez":"False"}'


@app.route('/login', methods=['POST'])
#Login persona MET-02
def login_persona():
    print("login")
    insio = controlador_inisio_sesion()
    insio.enviar(request.json)
    ver = insio.confirmacion()

    
    cadena_json = json.dumps(ver)
    return cadena_json


@app.route ('/cambia',methods=['POST'])
#Cambiar roles MET-03
def cambia_rol():
    cambia=controlador_cambiar_rol()
    cambia.enviar(request.json)
    print(request.json)
    ver=cambia.camabiar_rol_guardan()
    if (ver==True):
        return '{"validez":"True"}'

    return '{"validez":"False"}'


@app.route ('/existencia',methods=['POST'])

# Verificar email MET-04
def verifica_email():
    controla=verifica_Email(request.json)
    #controlamos la existencnia del Email
    if (controla):
        #envia true si exite
        return {"validez":"True","Nombre":controla[0][1],"Email":controla[0][4],"Rol":controla[0][2]}
    else:
        return '{"validez":"False"}'


@app.route ('/eliminar',methods=['POST'])
#Eliminar personas MET-05
def eliminar_personas():
    try :
        eliminar_person=controlador_eleminar_usuario()
        eliminar_person.enviar(request.json)
        eliminar_person.eliminar()
        return {"validez":"True"}
    except:
        return {"validez":"False"}


@app.route('/generar_personas',methods=['GET'])
# Generar Persona MET-06
def genera_person():
    base=genera_personas_1()
    return base

@app.route('/generar_eventos_encargado',methods=['POST'])
#Generar eventos(MET-07)
def generar_ventos():
    eventosp=generar_venetos1()
    eventosp.enviar(request.json)
    resultado=eventosp.buscar()
    return resultado
    
    
@app.route('/agregar_ubicacion',methods=['POST'])
#Agregar_ubicacion(MET-08)
def agrega_ubicacion():
    ubicacion_p=controlador_crear_ubicacion()
    ubicacion_p.enviar(request.json)
    resultado=ubicacion_p.crear_ubicacion()
    return resultado    

@app.route('/agregar_plantilla',methods=['POST'])
#Agregar_plantilla(MET-09)
def agrega_plantilla():
    plantilla_p=controlador_crear_plantilla()
    plantilla_p.enviar(request.json)
    resultado=plantilla_p.crear_plantilla()
    return resultado    

if __name__ == '__main__':
    app.run(debug=True)
