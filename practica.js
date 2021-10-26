new Vue({
   //Especificar la zona de actuacion de Vue
  el:"#miPagina",

  // Esta seccion de VUE sirve para declarar Variables
  // Y constantes.
  data:{
   mensaje:'HOLA MUNDO CRUEL again',
   nombre:'',
   genero:'',
   editando:0,
   indice:0,
   buscar:'',
   
   Propietarios:[{nombre:'Juan',apellido paterno:'Chale',apellido materno:'Perez','Genero:Masculino'},
               {nombre:'Noe',apellido paterno:'May',apellido materno:'Pool',Genero:'Masculino'},
               {nombre:'Angeles',apellido paterno:'Medina',apellido materno:'Chale',Genero:'Femenino'}
            ],

   Generos:[
               {clave:1,nombre:'Masculino'},
               {clave:2,nombre:'Femenino'}
            ],


  },

  // Este objeto permite crear funciones y/o procedimeintos 
  methods:{


   agregarPropietario:function(){

      if(this.nombre && this.apellido paterno && this.apellido materno && this.genero){
      // Construimos un objeto de tipo propietario para insertar en el array
      var unPropietario={nombre:this.nombre,apellido paterno:this.apellido paterno,
         apellido materno:this.apellido materno,genero:this.genero};

      // Agrego un objeto propietario
      this.Propietario.push(unPropietario);
      this.limpiarHtml();

      //enviamos el foco al primer componente al html/nombre de la mascota, se debe agregar a todas las interfaces
      this.$refs.nombre.focus();

      //aca agregamos el mensaje de exito
      Swal.fire({
         position: 'center',
         icon: 'success',
         title: 'Se ha guardado exitosamente',
         showConfirmButton: false,
         timer: 2000
       })
   }
   else{
      Swal.fire({
         position: 'top end',
         icon:'error',
         title: 'Debe capturar todo los datos',
         showConfirmButton: false,
         timer: 2000
      });
   }},

   limpiarHtml:function(){
     this.nombre='';
     this.apellido paterno='';
     this.apellido materno='';
     this.genero=';'
        },

   eliminarPropietario:function(pos){
      var pregunta=confirm('¿Esta seguro que desea eliminar?');
      if(pregunta)
        //console.Log('voy a eliminar: ' + pos);
      this.propietario.splice(pos,1);
      //else
        //console.Log('se arrepintio: ' + pos);
   },


   editarPropietario:function(pos){
      this.nombre=this.propietarios[pos].nombre;
      this.apellido paterno=this.propietarios[pos].apellido paterno;
      this.apellido materno=this.propietarios[pos].apellido materno;
      this.genero=this.propietarios[pos].genero;
      this.editando=1;
      this.indice=pos;
   },
   
   cancelar:function(){
      this.limpiarHtml();
      this.editando=0;
   },
   //modifico los valores del array de objetos
   guardarEdicion:function(){
      this.propietarios[this.indice].nombre=this.nombre;
      this.propietarios[this.indice].apellido paterno=this.apellido paterno;
      this.propietarios[this.indice].apellido materno=this.apellido materno;
      this.propietarios[this.indice].genero=this.genero;
   //limpiamos los componentes html e indicamos que terminamos de editar, activando el boton agregar/azul
      this.limpiarHtml();
      this.editando=0;
   },

   editarPropietario:function(pos){
      this.nombre=this.propietarios[pos].nombre;
      this.apellido paterno=this.propietarios[pos].apellido paterno;
      this.apellido materno=this.propietarios[pos].apellido materno;
      this.genero=this.propietarios[pos].genero;
      this.editando=1;
      this.indice=pos;

   }
   
  },
  // FIN DE METHODS

  //Seccion para calcular valor automaticamente
  computed:{
   numeroPropietarios:function(){
      var num=0;
      num=this.propietarios.length;
      return num;
   },
   filtroPropietario:function(){
      return this.propietarios.filter((propietario)=>{
         return propietario.nombre.toLowerCase().match(this.buscar.toLowerCase().trim()) || 
               propietario.genero.toLowerCase().match(this.buscar.toLowerCase().trim())
      });
   }         
  }


});