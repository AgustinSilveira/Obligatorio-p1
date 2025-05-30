class Usuario {
    static idUsuario = 10;
    constructor(NombreDeUsuario, password, nombreDelPerro, TamañoPerro, rol, nombrePaseador, cupos) {
        this.Id = Usuario.idUsuario++;
        this.NombreDeUsuario = NombreDeUsuario;
        this.Password = password;
        this.NombreDelPerro = nombreDelPerro;
        this.TamañoPerro = TamañoPerro;
        this.Rol = rol;
        this.NombrePaseador = nombrePaseador;
        this.Cupos = cupos;
    }
}

class Sistema {
    constructor() {
        this.LogeadoId = null;
        this.LogeadoRol = null;
        this.HayLogeado = false;
        this.Usuarios = new Array();
        this.PrecargarDatos();
    }

AltaUsuario(_usuario) {
    this.Usuarios.push(_usuario)
    return _usuario
}


ValidarDatosLogin(usuario,pass) {
    
}

PrecargarDatos () {
   let u1 = this.AltaUsuario(new Usuario("1", "Juan6", "Juan12345","","", "paseador", "Juan", "9"))
   let u2 = this.AltaUsuario(new Usuario("2", "Lucas2", "Lucas12345","","", "paseador", "Lucas", "6"))
   let u3 = this.AltaUsuario(new Usuario("3","Julieta13", "Julieta12345","","", "paseador", "Julieta", "7"))
   let u4 = this.AltaUsuario(new Usuario("4", "Gabriel123", "Gabriel12345","","", "paseador", "Gabriel", "9"))
   let u5 = this.AltaUsuario(new Usuario("5", "Martin5", "Martin12345","","", "paseador", "Martin", "9"))

}

}










