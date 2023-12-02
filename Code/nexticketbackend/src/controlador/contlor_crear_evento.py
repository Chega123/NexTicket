# se crea un evento con el formato 
#json:variable={evento:{nombre:string,descripcion:string,plantilla_id_plantilla:int,id_persona},
#actividad=[{actividad_data:{nombre:string,hora_fin:timestamp without time zone,horario_inicio:timestamp without time zone,id_ubicacion:int},materiales:[{nombre:string,descripcion:string,cantidad:int,precio:float},{...},...],expositor:[{nombre:string, apellido:string,cargo:string},{..},...]},{...},...]}
from src.servicios.consultas_eventos import servicio_eventos
class controla_crear_evento_completo:
    def _init__(self):
        self.data={}
    def obtener(self,datos):
        self.data=datos
    def crear(self):
        #agregar evento general
        evento=self.data["evento"]
        evento2=servicio_eventos.agregar_evento(evento)
        evento2=evento2[0][0]
        actividades=self.data["actividad"]

        for i in actividades:
            #agrgar actividad
            i["actividad_data"]["id_actividad"]=evento2
            actividad_crear=i["actividad_data"]
            actividad1=servicio_eventos.agregar_actividad( actividad_crear)
            #falta agegar id actividad a expositor y encargado 
            actividad1=actividad1[0][0]
            #falta agegar id actividad a expositor y encargado 
            materiales=i["materiales"]
            for j in i[materiales]:
                #insert
                j["id_actividad"]=actividad1
                material=servicio_eventos.agregar_materiales(j)
            expositores=i["expositor"]
            for u in expositores:
                #agregar_expositor
                u["actividad_id_actividad"]= actividad1
                expositor=servicio_eventos.agregar_expositor(u)
        #agregamos los paquetes    
        paquetes=self.data["paquetes"]

        for t in paquetes:
            datas_p=t["paquete_data"]
            datas_p["actividad_id_actividad"]=evento2
            
            paquete=servicio_eventos.agregar_paquetes(datas_p)
            paquete=paquete[0][0]
            minipaquete=  paquetes["descripcion"] 
            for y in minipaquete:
                y["paquete_id_paquete"]=paquete;
                agrega=servicio_eventos.agregar_paquete_nombre_descripcion(y)
        dato={"id_persona":evento["id_pesona"],"id_evento":evento2}  
        has_evento=servicio_eventos.agregar_evento_has_encargado(dato)
