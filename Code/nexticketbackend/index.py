from flask import Flask,template_rendered,request
from flask_cors import CORS
from src.controlador.controlador import *
app = Flask(__name__)

CORS(app)
@app.route('/registro',methods=['POST'])
def crear_persona():
    ingresa=controlador_registro()
    ingresa.enviardatos(request.json)
    ver=ingresa.guardar()
    if (ver==True):
        return '{"validez":"True"}'

    return '{"validez":"False"}'


@app.route('/login', methods=['POST'])
def login_persona():
    print("login")
    insio = controlador_inisio_sesion()
    insio.enviar(request.json)
    ver = insio.confirmacion()

    resultado = {"Tipo_persona": ver}
    cadena_json = json.dumps(resultado)
    return cadena_json


@app.route ('/cambia',methods=['POST'])
def cambia_rol():
    cambia=controlador_cambiar_rol()
    cambia.enviar(request.json)
    print(request.json)
    ver=cambia.camabiar_rol_guardan()
    if (ver==True):
        return '{"validez":"True"}'

    return '{"validez":"False"}'


@app.route ('/existencia',methods=['POST'])
def verifica_email():
    controla=verifica_Email(request.json)
    #controlamos la existencnia del Email
    if (controla):
        #envia true si exite
        return {"validez":"True","Nombre":controla[0][1],"Email":controla[0][3],"Rol":controla[0][7]}
    else:
        return '{"validez":"False"}'


@app.route ('/eliminar',methods=['POST'])
def eliminar_personas():
    try :
        eliminar_person=controlador_eleminar_usuario()
        eliminar_person.enviar(request.json)
        eliminar_person.eliminar()
        return {"validez":"True"}
    except:
        return {"validez":"False"}


@app.route('/generar_personas',methods=['GET'])
def genera_person():
    base=genera_personas_1()
    return base

@app.route('/generar_eventos_encargado',methods=['POST'])
def generar_ventos():
    eventosp=generar_venetos1()
    eventosp.enviar(request.json)
    resultado=eventosp.buscar()
    return resultado
    
    

if __name__ == '__main__':
    app.run(debug=True)