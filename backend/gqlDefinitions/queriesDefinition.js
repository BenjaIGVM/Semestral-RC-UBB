const { gql } = require('apollo-server');

const typeDefs = gql`

type Query {
    #Carrera
    all_carreras: [Carrera]!
    buscarCarrera(id: ID!): Carrera

    #Chat
    all_chats: [Chat]!
    buscarChat(id: ID!): Chat
    buscarFriendChat(users: [ID!]!): Chat
    getLastMsgChats(chats:[ID!]!): [Chat]

    #Grupo
    all_grupos: [Grupo]!
    buscarGrupo(buscar: String!): [Grupo]
    buscarGrupoId(id: ID!): Grupo
    buscarGrupoUsuario(usuario: ID!): [Grupo]
    buscarGrupoAdmin(admin: ID!): [Grupo]

    #Mensaje
    all_mensajes: [Mensaje]!
    buscarMensaje(buscar: String!): [Mensaje]
    buscarMensajeId(id: ID!): Mensaje
    buscarMensajeUsuario(usuario: ID!): [Mensaje]
    buscarMensajeHora(hora: Date!): [Mensaje]
    
    #Opcion
    all_opciones: [Opcion]!
    buscarOpcion(buscar: String!): [Opcion]
    buscarOpcionId(id: ID!): Opcion
    buscarOpcionUsuario(usuario: ID!): [Opcion]

    #Publicacion
    all_publicaciones: [Publicacion]!
    buscarPublicacion(buscar: String!): [Publicacion]
    buscarPublicacionId(id: ID!): Publicacion
    buscarPublicacionUsuario(usuario: ID!): [Publicacion]
    buscarPublicacionHora(hora: Date!): [Publicacion]
    buscarPublicacionGrupo(grupo: ID!, skip: Int): [Publicacion]
    feedRecomendations(usuario: ID!): [Publicacion]
    feedFriends(usuario: ID!): [Publicacion]

    #Tags
    all_tags: [Tag]
    buscarTag(id: ID!): Tag
    buscarTagNombre(nombre: String!): Tag
    
    #Usuario
    all_usuarios: [Usuario]!
    buscarUsuario(buscar: String!): [Usuario]
    buscarUsuarioId(id: ID!): Usuario
    logOut(id: ID!): Usuario
    buscarUsuarioCorreo(correo: String!): [Usuario]
    buscarUsuarioCarrera(carrera: ID!): [Usuario]
    gruposUsuario(id: ID!): [Grupo]


    #Votacion
    all_votaciones: [Votacion]!
    buscarVotacion(buscar: String!): [Votacion]
    buscarVotacionId(id: ID!): Votacion
    buscarVotacionUsuario(usuario: ID!): [Usuario]
    buscarVotacionPublicacion(publicacion: ID!): [Publicacion]
    #buscarVotacionResultados(id: ID!): [Votacion]

    #BuscarHorario
    buscarHorarioUsuario(usuario: ID!): [Horario]
    enviarCorreoUsuario(usuario: ID!): [Horario]

    #archivos
    all_archivos: [Archivo]!
    buscarArchivoId(id: ID!): Archivo

    #aaaaa
    descUsuario(token:String!):Usuario

    #Calendario
    all_eventos: [Calendario]!
    buscarEventoId(id: ID!): Calendario
    buscarEventoUsuario(creador: ID!): [Calendario]

    #Reporte
    all_reportes: [Reporte]!
    buscarReporte(buscar: String!): [Reporte]
    buscarReporteId(id: ID!): Reporte
    buscarReporteUsuario(usuario: ID!): [Reporte]
    buscarReporteTipo(tipo: String!): [Reporte]
    buscarReporteFecha(fecha: String, fechaInicio: String, fechaFin: String): [Reporte]
    buscarReporteEstado(estado: String!): [Reporte]

    #idAdmin
    obtenerIdAdmin(id: ID!): idAdmin
    all_idAdmin: [idAdmin]
    verifyAdmin(idAdmin: String!): idAdmin
}
`

module.exports = typeDefs;
