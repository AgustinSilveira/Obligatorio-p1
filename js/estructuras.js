class Usuario {    https://prod.liveshare.vsengsaas.visualstudio.com/join?9F640763544B086ED3CB35005943372BB0AD
    static idUsuario = 10;
    constructor(nombreDeUsuario, password, nombreDelPerro, tamañoPerro, rol, nombrePaseador, cupos) {
        this.Id = Usuario.idUsuario++;
        this.NombreDeUsuario = nombreDeUsuario;
        this.Password = password;
        this.NombreDelPerro = nombreDelPerro;
        this.TamañoPerro = tamañoPerro;
        this.Rol = rol;
        this.NombrePaseador = nombrePaseador;
        this.Cupos = cupos;
    }
}
// https://prod.liveshare.vsengsaas.visualstudio.com/join?61B693D9463CFB1072B8061C38AA41486C5A
class Sistema {
    constructor() {
        this.LogeadoId = null;
        this.LogeadoRol = null;
        this.HayLogeado = false;
        this.Usuarios = new Array(); //lista clientes
        this.PrecargarDatos(); //lista paseadores
    }

AltaUsuario(_usuario) {
    this.Usuarios.push(_usuario);
    return _usuario;
}

ListaDeClientes(){// devuelve la lista de usuarios, es un metodo. para no ir directamente a la lista 
        return this.Usuarios;
}


ValidarDatosLogin(usu,pass) {
    for (let usuario of this.Usuarios) {
        if(usuario.NombreDeUsuario == usu && usuario.Password == pass){
            return true;
        }
     // validar campos de texto vacios   
    }   return false
}


ValidarDatosRegister(usu,pass,nomPerro,tipo) {
    
    if (usu === "" || pass === "" || nomPerro === "" || tipo === "-1"){
        return "faltan datos"
    }return true
}

MostrarPaseadoresCompatibles(tipoPerro) {
    for (let clientes of this.Usuarios) {
        switch(tipoPerro){
        case 'chico':
        return ['chico', 'mediano']; // Paseadores sin perros grandes
      case 'mediano':
        return ['chico', 'mediano', 'grande']; // Paseadores con cualquier perro
      case 'grande':
        return ['mediano', 'grande']; // Paseadores sin perros chicos
      default:
    }
}

}


MostrarListaPendiente(cliente) {}

MostrarListaCompleta(cliente){}

MostrarContrataciones(paseadores){}

MostrarContratosAceptados(paseadores){}









PrecargarDatos () {
   let u1 = this.AltaUsuario(new Usuario("1", "Juan6", "Juan12345","","", "paseador", "Juan", "9"))
   let u2 = this.AltaUsuario(new Usuario("2", "Lucas2", "Lucas12345","","", "paseador", "Lucas", "6"))
   let u3 = this.AltaUsuario(new Usuario("3","Julieta13", "Julieta12345","","", "paseador", "Julieta", "7"))
   let u4 = this.AltaUsuario(new Usuario("4", "Gabriel123", "Gabriel12345","","", "paseador", "Gabriel", "9"))
   let u5 = this.AltaUsuario(new Usuario("5", "Martin5", "Martin12345","","", "paseador", "Martin", "9"))

}

}







