
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

  // propiedad privada para que no puede ser accesada fuera de la  claseo servicio
  private heroes:Heroe[] = [
    {
    nombre: "BB-8",
    bio: "Droide astromecánico que operaba aproximadamente treinta años después de la Batalla de Endor. Era un droide unidad BB y en una misión a Jakku, donde su dueño, Poe Dameron, le guardó dentro el mapa estelar (al menos la parte que tenía Lor San Tekka) con el paradero de Luke Skywalker. La mayor parte de su cuerpo estaba formado por una esfera metálica que le permitía al droide poder rodar para desplazarse, era en su mayoría blanco con algunos tonos naranjas en su cuerpo, así como contar con un ocular negro.El droide perteneció al piloto Poe Dameron de la Resistencia, y era capaz de encajar en el zócalo droide de un caza estelar Ala-X T-70. Estuvo en el Ala-X T-70 durante la destrucción de la Base Starkiller. También se hizo gran amigo de Rey, una chatarrera de Jakku con la que vivió múltiples aventuras.",
    img: "assets/img/starwars-bb-8.png",
    aparicion: "2014-11-28"

  },
  {
    nombre: "Boba-Fett",
    bio: "Boba Fett fue un cazarrecompensas humano, y el clon del infame cazarrecompensas Jango Fett. Boba fue creado por los clonadores de Kamino y era físicamente idéntico a los soldados clon creados para el Gran Ejército de la República, aunque Boba fue inalterado y no creció aceleradamente como los demás clones. Criado como el hijo de Jango, Boba aprendió las habilidades de combate necesarias para algún día convertirse en cazarrecompensas por derecho propio.Jango fue asesinado durante la Batalla de Geonosis, que marcó el inicio de las Guerras Clon entre la República Galáctica y la Confederación de Sistemas Independientes. El joven Boba juró vengarse del Maestro Jedi Mace Windu, que había matado a Jango, y se unió a un grupo de cazarrecompensas entre los que se encontraban Aurra Sing y Bossk. Su complot para matar a Windu fracasó, y Boba se dio cuenta de que había ido demasiado lejos en sus ansias por asesinar al Maestro Jedi - pero juró nunca perdonar a Windu. Tras un breve tiempo en prisión, Boba formó un equipo de cazarrecompensas y emprendió diversas misiones.",
    img: "assets/img/starwars-boba-fett.png",
    aparicion: "1997-05-01"

  },
  {
    nombre: "C-3po",
    bio: "C-3PO, a veces deletreado Cetrespeó y referido a menudo simplemente como Trespeó, era un droide de protocolo unidad 3PO diseñado para interactuar con seres orgánicos, programado principalmente para la etiqueta y el protocolo. Hablaba con fluidez más de siete millones de formas de comunicación, y desarrolló una personalidad exigente y propensa a las preocupaciones a lo largo de sus muchas décadas de operación.",
    img: "assets/img/starwars-c-3po.png",
    aparicion: "1997-01-01"

  },
  {
    nombre: "Chewbacca",
    bio: "Chewbacca, llamado afectuosamente Chewie por sus amigos, fue un guerrero wookiee, un contrabandista y un luchador de resistencia que peleó en las Guerras Clon, la Guerra Civil Galáctica y el Conflicto Primera Orden-Resistencia. Fue criado en el planeta Kashyyyk y se convirtió en un líder militar.",
    img: "assets/img/starwars-chewbacca.png",
    aparicion: "1997-05-01"

  },
  {
    nombre: "Darth-Vader",
    bio: "Anakin Skywalker fue un humano sensible a la Fuerza que sirvió a la República Galáctica como Caballero Jedi y más tarde al Imperio Galáctico como el Lord Sith Darth Vader. Creído de haber sido concebido por la Fuerza, nació de Shmi Skywalker y pasó a residir en el planeta del Borde Exterior Tatooine cuando era niño, donde él y su madre fueron esclavos de la prominente señora del crimen Gardulla la Hutt hasta que pasaron a ser propiedad de un chatarrero local toydariano llamado Watto.Un ingeniero prodigioso, Skywalker construyó al droide de protocolo C-3PO usando piezas que había recolectado para ayudar a su madre. Poco después, durante la Crisis de Naboo, fue descubierto por el Maestro Jedi Qui-Gon Jinn y su aprendiz, Obi-Wan Kenobi, quienes lo liberaron de la esclavitud tras participar Skywalker en una exitosa carrera de vainas. Llevándolo ante la Orden Jedi, Jinn presentó a Skywalker como el Elegido de la Profecía Jedi, destinado a destruir a los Sith y traer el equilibrio a la Fuerza.",
    img: "assets/img/starwars-darth-vader.png",
    aparicion: "1940-06-01"

  },
  {
    nombre: "Stormtrooper",
    bio: "Los soldados de asalto fueron las tropas de asalto del Imperio Galáctico. Los ciudadanos se referían a ellos como Cabezas de cubo, un apodo despectivo inspirado en los cascos en forma de cubo de los soldados de asalto. Como miembros del Cuerpo de Soldados de asalto, una rama independiente que operaba bajo el Ejército Imperial, los soldados de asalto representaban la columna vertebral del Fuerzas Armadas Imperiales—entrenados para la obediencia total al mando jerárquico, así como la lealtad absoluta al Emperador Sheev Palpatine y al régimen Imperial. Los soldados de asalto fueron entrenados en Academias Imperiales, y usaron una variedad de armas.",
    img: "assets/img/starwars-stormtrooper.png",
    aparicion: "1962-08-01"

  },
  {
    nombre: "Yoda",
    bio: "Yoda un miembro masculino de una especie misteriosa, era un reverenciado Maestro Jedi que sirvió como Gran Maestro de la Orden Jedi en los últimos días de la República Galáctica. Era famoso dentro de la Orden por su sabiduría, poderes de la Fuerza y combate con sables de luz, y vivió durante casi 900 años. Su tiempo durante los últimos días de la Orden Jedi y más allá lo convirtió en una figura consecuente en la historia galáctica.",
    img: "assets/img/starwars-yoda.png",
    aparicion: "1974-11-01"

  },
  {
    nombre: "R2-D2",
    bio: "R2-D2, pronunciado Erredós Dedós y a menudo referido como Erredós, era un droide astromecánico de la serie R2 fabricado por Industrias Automaton que tenía una programación masculina. Era un droide inteligente y valiente que sirvio a una multitud de maestros a lo largo de su vida, y nunca recibió un borrado de memoria completo (aparte de un borrado mental parcial por Cad Bane durante la crisis de rehenes del Senado) ni ha recibido programación nueva, con estos factores desarrollo una actitud aventurera e independiente. A menudo se encontraba en momentos cruciales en la historia galáctica, y su valentía e ingenio a menudo salvaba a la galaxia una y otra vez.",
    img: "assets/img/starwars-r2-d2.png",
    aparicion: "1974-11-01"

  },

  {
    nombre: "Padmé Amidala",
    bio: "Padmé Amidala Naberrie, comúnmente conocida como Padmé Amidala fue una humana política que se convirtió en una de las principales voces para la paz y la diplomacia durante los últimos días de la República Galáctica. Ella saltó a la prominencia galáctica cuando la Federación de Comercio invadió y ocupó su planeta natal de Naboo, pasó a servir como una destacada miembro del Senado Galáctico durante la Guerra de los Clones, y se convirtió en la madre de la legendaria Princesa y General Leia Organa y el Maestro Jedi Luke Skywalker. Amidala fue elegida Reina de Naboo en la edad de catorce años, poco después de que ella se vio obligada a lidiar con la ocupación de la Federación de Comercio. Su determinación para liberar a su pueblo llevó a la remoción del Canciller Supremo Finis Valorum de la oficina, la elección del Senador de Naboo Sheev Palpatine—secretamente Darth Sidious, Señor Oscuro de los Sith—a la cancillería y la cadena de acontecimientos que provocaron el estallido de la Guerra de los Clones. Amidala luchó en la Batalla de Geonosis que desató la guerra, poco después se casó secretamente con el Caballero Jedi Anakin Skywalker. Pasó a ser una miembro destacada del Comité Leal que intentó lograr la paz entre la República y la Confederación de Sistemas Independientes. Sus esfuerzos eran a menudo polémicos en el Senado de la República, una institución que favoreció en gran parte la derrota de los Separatistas y la centralización del poder dentro de la Oficina del Canciller.",
    img: "assets/img/starwars-princess_amidala.png",
    aparicion:"1999-05-18"

  },

  {
    nombre: "Darth Maul",
    bio: "Darth Maul fue un zabrak dathomiriano y Lord Sith que vivió durante los últimos años de la República Galáctica. Maul nació de la madre Talzin y se crió como un Hermano de la Noche en Dathomir, antes de ser tomado por Darth Sidious como su aprendiz . Maul aprendió el arte del combate con sables láser y tomó una hoja doble de sable láser como sable de luz personal, convirtiéndose en un arma para ser utilizada en contra de la Orden Jedi. Durante la Invasión de Naboo por parte de la Federación de Comercio, que Palpatine había orquestado como parte de una trama Sith para hacerse cargo de la República y destruir a la Orden Jedi, Maul fue enviado a localizar a la reina Padmé Amidala, que había escapado de la custodia de la Federación y cuya captura era vital para los planes de invasión de Palpatine. Maul la localizó en Tatooine, donde luchó contra el Maestro Jedi Qui-Gon Jinn, revelándose los Sith a los Jedi por primera vez en un milenio. Después de que la reina y los Jedi volvieran a Naboo para hacer frente a la invasión, Maul una vez más se enfrentó a Jinn, así como a Obi-Wan Kenobi, en combate. El Lord Sith mató a Jinn, pero Kenobi fue capaz de derrotar a Maul, cortándolo por la mitad. Maul cayó en el pozo de un reactor aparentemente interminable.",
    img: "assets/img/starwars-darth_maul.png",
    aparicion:"1999-05-18"

  },
  {
    nombre: "El Emperador",
    bio: "Sheev Palpatine, también conocido como Darth Sidious, fue un humano sensible a la Fuerza que sirvió como el último Canciller de la República Galáctica y el primer Emperador del Imperio Galáctico. Fue un Señor Oscuro de los Sith que seguía la Regla de Dos, un antiguo principio de la Orden de los Lores Sith, y fue el Lord Sith más poderoso en la historia galáctica. Su vida entera como Sith fue la culminación de un plan de mil años para derrocar a la República y a la Orden Jedi desde dentro. Como Palpatine y como Sidious, el Lord Sith fue responsable de convertir la Crisis Separatista en un conflicto a escala galáctica, las Guerras Clon, que comenzó cuando la rebelde Confederación de Sistemas Independientes desafió a la República por el control de la galaxia. Nacido en 82 ABY en el planeta Naboo en el clan aristocrático de la Casa Palpatine, fue el hijo mayor de y heredero de los nobles Cosinga Palpatine y su esposa. Como estudiante en el Programa Legislativo Juvenil, el adolescente Palpatine fue descubierto por Darth Plagueis, un Lord Sith conocido públicamente como Hego Damask, el fundador de las influyentes Explotaciones Damask. Impresionado por el conocimiento, ambición e indiferencia por la moralidad del joven humano, Plagueis manipuló el miedo y el odio de Palpatine por su padre, hasta que su protegido cometió parricidio y asesinó a toda su familia. Huérfano a los diecisiete años, Palpatine se entregó a las enseñanzas de su nuevo Maestro y a los caminos del lado oscuro de la Fuerza. Durante este transcurso, Plagueis nombró a su aprendiz Sith como Darth Sidious. Al igual que su Maestro vivió una doble vida como magnate corporativo con el público y Lord Sith en secreto, Sidious también mantuvo su antigua identidad como fachada. Como Palpatine, Sidious sirvió por muchos años como embajador de Naboo. Aunque estuvo involucrado en numerosas actividades sospechosas, su reputación permaneció intachable por los escándalos. Cuando aún era un aprendiz Sith, Sidious a regañadientes se convirtió en el guardián de un zabrak dathomiriano sensible a la Fuerza conocido simplemente como Maul, cuya madre Hermana de la Noche deseaba evitar que su hijo viviese la vida de un Hermano de la Noche. Con el permiso de su propio Maestro, Sidious pudo entrenar al zabrak como un asesino Sith. Aunque Sidious denominó a su discípulo como Darth Maul y Señor Oscuro de los Sith, Maul nunca supo que su propio Maestro respondía a otro Maestro. Por lo tanto también desconocía que su estatus como un Lord Sith violaba la Regla de Dos. Plagueis y Sidious eran ambos excepcionalmente habilidosos en la Fuerza, siendo capaces de ocultar la oscuridad en ellos a incluso los miembros más poderosos de la Orden Jedi por décadas. La habilidad de Sidious de presentarse como un político honesto, mientras simultáneamente vivía como un Lord Sith en secreto, le permitió manipular muchas importantes figuras y eventos que contribuyeron al bloqueo de Naboo por la Federación de Comercio. En el comienzo de la crisis política, el Senado Galáctico eligió a Palpatine como Canciller Supremo. Con el poder ejecutivo de la República bajo el control de Palpatine, la primera fase del Gran Plan Sith se llevaba a cabo mientras los Jedi desconocían su verdadera identidad. ",
    img: "assets/img/starwars-the_emperor.png",
    aparicion:"2005-05-19"
  },
  {
    nombre:"Guardia Real",
    bio: "La Guardia Roja, llamada también los togas rojas por sus uniformes rojos, eran un grupo de Guardias especialmente entrenados para la protección del Canciller Supremo. Fueron creados por el mismo Palpatine previo y durante las Guerras Clon escogidos de entre los mejores Guardias del Senado. Con el surgimiento del Imperio Galáctico tuvieron unos cambios mínimos y se llamaron la Guardia Real del Emperador ",
    img: "assets/img/starwars-royal_guard.png",
    aparicion:"2002-05-16"
  }

  ];

  constructor() {
    console.log("Servicio listo para usar!!!");
  }

  // Creamos un metodo para obtener los personajes Star
  getHeroes():Heroe[]{
    return this.heroes;
  }

  getHeroe( idx: string ){
    return this.heroes[idx]; // .this: hace referencia los heroes
  }

  buscarHeroes( termino:string ):Heroe[]{

    let heroesArr:Heroe[] = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < this.heroes.length; i ++ ){

      let heroe = this.heroes[i];

      let nombre = heroe.nombre.toLowerCase();

      if( nombre.indexOf( termino ) >= 0  ){
        heroe.idx = i;
        heroesArr.push( heroe )
      }

    }

    return heroesArr;

  }


}

// Creamos una interfaz para que no se puedan insertar ningun heroe que no tenga las caracteristicas del JSON
export interface Heroe{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  idx?: number;
};
