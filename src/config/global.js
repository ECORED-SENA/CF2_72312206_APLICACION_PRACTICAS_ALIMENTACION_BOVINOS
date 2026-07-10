export default {
  global: {
    Name: 'Manejo integral de la alimentación bovina bajo Buenas Prácticas Ganaderas (BPG) y sostenibilidad productiva',
    Description:
      'Este componente formativo permitió comprender la importancia de una adecuada alimentación bovina mediante el manejo eficiente de alimentos y agua, la aplicación de Buenas Prácticas Ganaderas, medidas de bioseguridad y estrategias de bienestar animal. Asimismo, destacó la relevancia de los registros, los planes de contingencia y la mejora continua para fortalecer la productividad, sostenibilidad y competitividad de los sistemas bovinos.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Alimento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de alimentos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Suministro de alimentos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Características físicas de los alimentos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Importancia en la producción animal',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Agua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Características',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Calidad del agua',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Requerimientos según la etapa productiva',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Manejo y suministro',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Buenas Prácticas de Alimentación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Principios',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Características',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Normativa aplicable',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Medición, pesaje y registros en la alimentación bovina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tipos de registros',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Recolección y diligenciamiento de la información',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Análisis, interpretación y aplicación en la toma de decisiones',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Planes de alimentación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Objetivos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Componentes',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Aplicación',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Seguimiento y evaluación de la alimentación bovina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Parámetros alimenticios',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Requerimientos nutricionales',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Factores que afectan el consumo',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Evaluación e interpretación de resultados',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Indicadores de alimentación',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Métodos de seguimiento',
            hash: 't_6_6',
          },
          {
            numero: '6.7',
            titulo: 'Control de procesos',
            hash: 't_6_7',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Evaluación del cumplimiento y mejora continua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Evaluación de las Buenas Prácticas de Alimentación',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Cumplimiento normativo',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Identificación de desviaciones y riesgos',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Acciones correctivas y de mejora',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo: 'Protocolos de actuación y gestión de contingencias',
            hash: 't_7_5',
          },
          {
            numero: '7.6',
            titulo: 'Evaluación de la mejora continua',
            hash: 't_7_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Alimentación bovina',
      significado:
        'Conjunto de prácticas destinadas a suministrar nutrientes y agua a los bovinos según sus necesidades.',
    },
    {
      termino: 'Forraje',
      significado:
        'Material vegetal utilizado como base de la dieta de los bovinos.',
    },
    {
      termino: 'Ensilaje',
      significado:
        'Método de conservación de forrajes mediante fermentación anaerobia.',
    },
    {
      termino: 'Banco de proteína',
      significado:
        'Área cultivada con especies forrajeras de alto contenido proteico para complementar la alimentación.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'Medidas preventivas orientadas a reducir el riesgo de ingreso y propagación de enfermedades.',
    },
    {
      termino: 'Bienestar animal',
      significado:
        'Condiciones que garantizan la salud física y mental de los animales, evitando sufrimiento y estrés.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'Condición que asegura que los alimentos y el agua no representen riesgos para la salud.',
    },
    {
      termino: 'Ración',
      significado:
        'Cantidad de alimento suministrada a un animal durante un periodo determinado.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad de registrar y hacer seguimiento a las actividades e insumos utilizados en el sistema productivo.',
    },
    {
      termino: 'Sistemas silvopastoriles',
      significado:
        'Sistemas de producción que integran árboles, pasturas y animales para mejorar la sostenibilidad y el bienestar animal.',
    },
  ],
  referencias: [
    {
      referencia:
        'Food and Agriculture Organization of the United Nations. (2021). Buenas prácticas ganaderas para la producción bovina de carne y leche. FAO.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2020). Resolución 067449 de 2020. Requisitos para obtener la certificación en Buenas Prácticas Ganaderas (BPG) en la producción primaria de bovinos y bufalinos. ICA.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2020). Resolución 068167 de 2020. Requisitos sanitarios y de inocuidad para explotaciones bovinas y bufalinas. ICA.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2023). Manual de Buenas Prácticas Ganaderas para bovinos. ICA.',
      link: '',
    },
    {
      referencia:
        'National Research Council. (2016). Nutrient requirements of beef cattle (8th rev. ed.). The National Academies Press.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06  <br> Responsable Ecosistema Virtual de Recursos Educativos Digitales  ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez ',
          cargo: 'Experto temático ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
        {
          nombre: 'Paola Alexandra Moya ',
          cargo: 'Evaluadora instruccional ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fredy Fabian Ortiz Segura',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Henry Alvarez Astudillo',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta ',
          cargo: 'Intérprete lenguaje de señas  ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura ',
          cargo: 'Intérprete lenguaje de señas ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
