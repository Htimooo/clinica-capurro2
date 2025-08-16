import implantes from "../assets/implantes.png";

export const tratamientosList = [
  {
    id: 1,
    name: "Odontología Preventiva",
    ruta:'odontologia-preventiva',
    details: [
      "Limpieza dental",
      "Aplicación de flour",
      "Sellantes de fosas y fisuras",
      "Tratamiento de bruxísmo",
    ],
    icon: "../assets/periodoncia.png",
    resumen: "La odontología preventiva es una rama clave de la odontología enfocada en prevenir enfermedades bucales y problemas dentales antes de que aparezcan o se agraven. Esta disciplina promueve prácticas como el cepillado y uso del hilo dental diario, visitas regulares al dentista para limpiezas y revisiones, y la aplicación de tratamientos preventivos como sellantes dentales y fluoruro. Además, la odontología preventiva se centra en la educación del paciente, enseñando la importancia de una dieta saludable y una buena higiene oral. El objetivo es mantener la salud bucal a largo plazo, reduciendo la necesidad de intervenciones más invasivas y costosas en el futuro. La odontología preventiva es esencial para conservar una sonrisa saludable y funcional durante toda la vida.",
    blogs:[1,2,3]
  },
  {
    id: 2,
    name: "Prótesis dentales",
    ruta:'protesis-dentales',
    details: [
      "Prótesis parciales removibles",
      "Prótesis completas removibles",
      "Prótesis fijas",
    ],
    icon: "../assets/protesis-implante.png",
    resumen:
      " Una prótesis dental es un dispositivo diseñado para reemplazar uno o más dientes perdidos, restaurando la funcionalidad y estética de la boca. Existen varios tipos de prótesis dentales, que pueden ser fijas o removibles.  Las prótesis removibles incluyen dentaduras completas, que sustituyen todos los dientes de una arcada, y dentaduras parciales, que reemplazan algunos dientes y se sujetan a los dientes naturales restantes. Las prótesis fijas, como los puentes dentales y los implantes dentales, están cementadas o insertadas quirúrgicamente en el hueso maxilar para ofrecer una solución más permanente. Los materiales utilizados en las prótesis dentales varían desde acrílico, metal y porcelana hasta zirconia y resina compuesta. Cada material tiene sus propias ventajas en términos de durabilidad, estética y costo. El proceso para obtener una prótesis dental implica varias etapas, desde la evaluación inicial y toma de impresiones hasta la colocación y ajustes finales. El cuidado adecuado de las prótesis dentales, incluyendo una buena higiene bucal y visitas regulares al dentista, es crucial para asegurar su longevidad y funcionalidad. ",
 blogs:[1,2,3]
 },

  {
    id: 3,
    name: "Odontología estética",
    ruta:'odontologia-estetica',
    details: ["Blanquemiento dental", "Carillas", "Jacket", "Coronas"],
    icon: "../assets/blanqueamiento.png",
    resumen: "La odontología estética se enfoca en mejorar la apariencia de los dientes, encías y la sonrisa en general. Este campo incluye una variedad de tratamientos diseñados para corregir imperfecciones, como blanqueamiento dental para eliminar manchas y aclarar los dientes, carillas de porcelana para cubrir desgastes o deformaciones, y ortodoncia estética que alinea los dientes de manera discreta. Además, los procedimientos de remodelación de encías pueden equilibrar el contorno gingival, mejorando la proporción y simetría de la sonrisa. La elección del tratamiento depende de las necesidades específicas del paciente, con un enfoque en lograr resultados naturales y armoniosos. La odontología estética no solo mejora la apariencia, sino que también puede contribuir a la funcionalidad y la salud bucal, ofreciendo una sonrisa más atractiva y una mayor confianza en uno mismo.",
    blogs:[1,2,3]
  },
  {
    id: 4,
    name: "Endodoncia",
    ruta:'endodoncia',
    details: ["Tratamiento de conducto"],
    icon: "../assets/tratamiento-conducto.png",
    resumen: "La endodoncia es una especialidad odontológica que trata el interior del diente, específicamente el tejido pulpar. Este procedimiento, comúnmente conocido como tratamiento de conducto, se realiza cuando la pulpa dental se inflama o infecta debido a caries profundas, lesiones o fracturas. Durante la endodoncia, se extrae la pulpa dañada, se limpia y desinfecta el conducto radicular, y se sella con un material biocompatible. Este tratamiento permite conservar el diente afectado, evitando su extracción y manteniendo su función en la boca. La endodoncia es crucial para aliviar el dolor y prevenir infecciones más graves, como los abscesos. Con un cuidado adecuado, los dientes tratados con endodoncia pueden durar toda la vida, preservando la salud bucal y la estructura dental.",
    blogs:[1,2,3]
  },
  {
    id: 5,
    name: "Ortodoncia",
    ruta:'ortodoncia',
    details: ["Brackets", "Alienadores"],
    icon: "../assets/brackets.png",
    resumen: "La ortodoncia es la rama de la odontología que se encarga de corregir la alineación y mordida de los dientes. Utiliza aparatos como brackets y alineadores transparentes para mover los dientes a su posición ideal. Los tratamientos de ortodoncia no solo mejoran la estética de la sonrisa, sino que también optimizan la funcionalidad masticatoria y facilitan la higiene bucal, reduciendo el riesgo de caries y enfermedades periodontales. La ortodoncia es adecuada para niños, adolescentes y adultos, y puede corregir problemas como dientes torcidos, maloclusión, y espacios excesivos entre los dientes. Un tratamiento exitoso en ortodoncia no solo resulta en una sonrisa más atractiva, sino también en una boca más sana y funcional. En Ecodental, te ofrecemos tratamientos de ortodoncia con atención personalizada, tecnología de última generación y un equipo especializado que te acompaña en cada etapa del proceso. Ya sea que prefieras brackets tradicionales o alineadores estéticos, en Ecodental encontrás una solución adaptada a tus necesidades. Contactanos hoy mismo por WhatsApp o completando el formulario de contacto y comenzá tu camino hacia una sonrisa saludable y funcional.",
    blogs:[1,2,3]
  },
  {
    id: 6,
    name: "Ortopedia",
    ruta:'ortopedia',
    details: ["Aparatos removibles"],
    icon: "../assets/brackets-invisibles.png",
    resumen: "La ortopedia dentofacial es una especialidad odontológica que se centra en guiar el desarrollo de los huesos faciales y las estructuras dentales en niños y adolescentes. Utiliza aparatos especiales, como expansores y máscaras faciales, para corregir discrepancias óseas y mejorar la alineación de la mandíbula y los dientes. Este enfoque es clave en edades tempranas, cuando los huesos aún están en crecimiento, permitiendo prevenir o corregir problemas antes de que se establezcan de forma permanente. La ortopedia dentofacial no solo mejora la función masticatoria y la estética facial, sino que también facilita futuros tratamientos de ortodoncia. Este tratamiento temprano puede reducir la necesidad de procedimientos más complejos en la adultez.",
    blogs:[1,2,3]
  },
  { id: 7, 
    name: "Implantes", 
    ruta:'implantes',
    details: [], 
    icon: "../assets/implantes.png",
    resumen:"Los implantes dentales son una solución permanente para reemplazar dientes perdidos. Consisten en un tornillo de titanio que se inserta quirúrgicamente en el hueso maxilar, actuando como una raíz artificial. Sobre este implante se coloca una corona que imita la apariencia y función de un diente natural. Los implantes dentales son altamente duraderos y proporcionan una base estable para masticar y hablar con normalidad. Además de restaurar la estética de la sonrisa, los implantes ayudan a prevenir la pérdida ósea en la mandíbula, que ocurre cuando falta un diente. Son una opción popular por su larga duración, con un cuidado adecuado pueden durar toda la vida, ofreciendo una solución eficaz y de aspecto natural para la pérdida dental." ,
    blogs:[1,2,3],
  },
    {
    id: 8,
    name: "Extracciones dentales",
    ruta:'extracciones-dentales',
    details: ["Simples", "Con cirugía"],
    icon: "../assets/extracciones.png",
    resumen: "Las extracciones dentales son procedimientos en los que se retira un diente de su cavidad en el hueso maxilar. Se realizan cuando un diente está dañado irreparablemente por caries, infección, o fractura, o en casos donde hay una superpoblación dental, como con las muelas del juicio. El procedimiento puede ser simple o quirúrgico, dependiendo de la complejidad del caso. Las extracciones son necesarias para evitar infecciones, aliviar el dolor o prevenir problemas más graves en la boca. Después de la extracción, es fundamental seguir las indicaciones del dentista para una correcta cicatrización y evitar complicaciones. Aunque puede parecer un procedimiento invasivo, las extracciones dentales son a menudo esenciales para mantener la salud bucal a largo plazo.",  
    blogs:[1,2,3]
  },
];
