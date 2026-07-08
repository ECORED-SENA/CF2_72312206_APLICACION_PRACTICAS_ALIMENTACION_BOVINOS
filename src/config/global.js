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
            titulo: 'Características del agua para consumo animal',
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
            titulo: 'Manejo y suministro del agua',
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
            titulo: 'Planificación nutricional',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Producción y manejo de forrajes',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Selección de materias primas',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Compra y recepción de insumos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Transporte de alimentos',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Almacenamiento y conservación',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Preparación y suministro de raciones',
            hash: 't_3_7',
          },
          {
            numero: '3.8',
            titulo: 'Higiene y bioseguridad en la alimentación',
            hash: 't_3_8',
          },
          {
            numero: '3.9',
            titulo: 'Registros y trazabilidad',
            hash: 't_3_9',
          },
          {
            numero: '3.10',
            titulo: 'Monitoreo y evaluación del programa de alimentación',
            hash: 't_3_10',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Bienestar animal asociado a la alimentación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Principios de bienestar animal',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Las cinco libertades',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Manejo humanitario durante la alimentación',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Factores que afectan el bienestar animal',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Bioseguridad e inocuidad en la alimentación bovina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Medidas de bioseguridad',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Prevención de contaminación de alimentos y agua',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Manejo de residuos alimenticios',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Registros, seguimiento y mejora continua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Registros del programa de alimentación',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Evaluación del consumo y desempeño productivo',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Acciones correctivas y preventivas',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Planes de contingencia',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Planes de contingencia y mejora continua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Situaciones que requieren medidas de contingencia',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo:
             
              'Acciones de respuesta ante eventos que afectan la alimentación bovina',
            hash: 't_7_2',
          },
          {
            numero:
              '7.3',
            titulo:
              'Estrategias para garantizar la continuidad del suministro de alimentos y agua',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Registros y seguimiento de las acciones implementadas',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo: 'Evaluación y mejora continua del programa de alimentación',
            hash: 't_7_5',
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
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Líder del Ecosistema',
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
          nombre: '',
          cargo: '',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: '',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
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
