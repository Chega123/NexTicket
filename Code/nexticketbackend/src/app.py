from flask import Flask,template_rendered,request
from flask_cors import CORS
from controladores import *

app = Flask(__name__)
CORS(app)
@app.route ('/registro',methods=['POST'])
def crear_persona():
    ingresa=controlador_registro(BD_U)
    ingresa.enviardatos(request.json)
    ver=ingresa.guardar()
    if (ver==True):
        return '{"validez":"True"}'

    return '{"validez":"False"}'

@app.route ('/login',methods=['POST'])
def login_persona():
    insio=controlador_inisio_sesion(BD_U)
    insio.enviar(request.json)
    ver=insio.confirmacion()
    
    resultado = {"Tipo_persona": ver}
    cadena_json = json.dumps(resultado)
    return  cadena_json

@app.route ('/cambia',methods=['POST'])
def cambia_rol():
    cambia=controlador_cambiar_rol(BD_U)
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
        return '{"validez":"True"}'
    else:
        return '{"validez":"False"}'


@app.route ('/eliminar',methods=['POST'])
def eliminar_personas():
    eliminar_person=controlador_eleminar_usuario(BD_U)
    eliminar_person.enviar(request.json)
    eliminar_person.eliminar()
    return {"validez":"True"}
    
if __name__ == '__main__':

    app.run(debug=True)