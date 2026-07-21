<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Buenas prácticas de alimentación
      .row.justify-content-center.align-items-stretch.mb-2.g-0.mb-3(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img1.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-2.d-flex.align-items-center.p-4.p-lg-5
          p.mb-0 Las buenas prácticas de alimentación (BPA) son el conjunto de procedimientos, medidas de manejo y acciones de control orientadas a garantizar que los bovinos reciban alimentos y agua suficientes, inocuos y de calidad, de acuerdo con sus requerimientos nutricionales y productivos. Como componente esencial de las buenas prácticas ganaderas (BPG), buscan mejorar la salud, el bienestar animal, la productividad y la rentabilidad de la explotación, al tiempo que promueven la sostenibilidad ambiental y la producción de alimentos seguros para el consumo humano.
      p(data-aos="fade-left") Su implementación requiere una adecuada planificación, el suministro oportuno de los recursos alimenticios y la evaluación continua de los resultados obtenidos. Los principales componentes involucrados en la gestión alimentaria bovina se describen a continuación:
      //- Inicio Accordion
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3 
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img2.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Planificación nutricional")
                  p.mb-4 Consiste en diseñar programas de alimentación según la edad, el peso, el estado fisiológico y el nivel productivo de los animales. Contribuye a cubrir los requerimientos nutricionales y a mejorar la productividad y la eficiencia alimenticia del hato.
              .row(titulo="Producción y manejo de forrajes")
                  p.mb-4 Busca garantizar una fuente constante y sostenible de alimento mediante el establecimiento y mantenimiento de pasturas, bancos de proteína y sistemas silvopastoriles. Reduce costos de producción y favorece la sostenibilidad ambiental.
              .row(titulo="Selección de materias primas")
                  p.mb-4 Implica escoger ingredientes con adecuada calidad nutricional e inocuidad. Previene enfermedades asociadas con la alimentación y mejora el desempeño productivo.
              .row(titulo="Compra y recepción de insumos")
                  p.mb-4 Comprende la verificación de la calidad, procedencia e inocuidad de los alimentos adquiridos. Asegura la trazabilidad y el cumplimiento de los requisitos sanitarios.
              .row(titulo="Transporte de alimentos")
                  p.mb-4 Tiene como finalidad evitar el deterioro o la contaminación durante la movilización de los insumos. Reduce pérdidas y riesgos sanitarios.
              .row(titulo="Almacenamiento y conservación")
                  p.mb-4 Pretende preservar la calidad de los alimentos mediante prácticas adecuadas de manejo. Disminuye pérdidas económicas y evita la proliferación de agentes contaminantes.
      //- Fin Accordion
      //- Inicio Accordion
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Preparación y mezcla de raciones")
                  p.mb-4 Consiste en elaborar dietas balanceadas ajustadas a los requerimientos del hato. Favorece la eficiencia productiva y el mantenimiento de la condición corporal.
              .row(titulo="Distribución del alimento")
                  p.mb-4 Garantiza el suministro oportuno, suficiente y equitativo entre los animales. Reduce la competencia y promueve la uniformidad productiva.
              .row(titulo="Suministro de agua")
                  p.mb-4 Asegura una provisión continua de agua limpia y de buena calidad. Resulta indispensable para la hidratación y el adecuado funcionamiento fisiológico.
              .row(titulo="Evaluación del consumo")
                  p.mb-4 Permite controlar el consumo real de alimento y agua. Facilita la detección oportuna de desviaciones nutricionales o sanitarias.
              .row(titulo="Seguimiento productivo")
                  p.mb-4 Consiste en monitorear indicadores relacionados con la producción, la condición corporal y la reproducción. Facilita la toma de decisiones técnicas.
              .row(titulo="Registro y trazabilidad")
                  p.mb-4 Comprende la documentación de los procesos asociados con la alimentación. Favorece el control interno y el cumplimiento de auditorías y requisitos normativos.
          .col-lg-3 
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img3.png", alt="").img400.m-auto
      //- Fin Accordion
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img4.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 En conjunto, estas acciones permiten optimizar la productividad, mejorar el bienestar animal, garantizar la inocuidad de los productos de origen bovino y fortalecer la sostenibilidad de los sistemas ganaderos. Desde el punto de vista fisiológico, la alimentación debe asegurar el aporte adecuado de energía, proteína, fibra, minerales, vitaminas y agua para satisfacer las necesidades de mantenimiento, crecimiento, reproducción, gestación, lactancia y producción de carne.
      p(data-aos="fade-left") Asimismo, las buenas prácticas de alimentación tienen como finalidad prevenir riesgos que puedan afectar la salud de los animales, el desempeño productivo y la inocuidad de los productos obtenidos. La correcta selección, conservación, manejo y suministro de los alimentos contribuye a disminuir la aparición de problemas sanitarios y nutricionales. Los principales riesgos asociados con la alimentación bovina pueden sintetizarse de la siguiente manera:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t3/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Contaminación microbiológica
                p Corresponde a la presencia de bacterias, virus, hongos o parásitos en los alimentos o el agua. Puede ocasionar enfermedades infecciosas, afectar la inocuidad de los productos de origen animal y generar problemas sanitarios en el hato.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Contaminación química
                p Se relaciona con residuos de plaguicidas, fertilizantes, medicamentos veterinarios o metales pesados. Sus consecuencias incluyen intoxicaciones y alteraciones metabólicas con repercusiones en la salud animal y humana.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Presencia de micotoxinas
                p Hace referencia a toxinas producidas por hongos en alimentos mal almacenados o con exceso de humedad. Puede provocar disminución del consumo, inmunosupresión, alteraciones reproductivas y reducción de la producción.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Deficiencias nutricionales
                p Se originan por dietas insuficientes o desequilibradas en nutrientes esenciales. Sus efectos comprenden bajo crecimiento, disminución de la producción, pérdida de condición corporal y fallas reproductivas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Desequilibrios metabólicos
                p Son consecuencia de excesos o deficiencias de nutrientes en la dieta. Pueden manifestarse mediante acidosis ruminal, cetosis, hipocalcemia, alcalosis y otros trastornos digestivos y metabólicos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Problemas digestivos
                p Se asocian con cambios bruscos en la alimentación o con la utilización de alimentos de baja calidad. Generan alteraciones ruminales, diarreas y un menor aprovechamiento de los nutrientes.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Intoxicaciones alimentarias
                p Se producen por el consumo de plantas tóxicas, sustancias químicas o alimentos deteriorados. Pueden ocasionar enfermedades agudas, intoxicaciones severas e incluso la muerte del animal.
      //- Fin Slideshow
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-12.col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-6.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 Las buenas prácticas de alimentación se relacionan directamente con la primera de las cinco libertades del bienestar animal, la cual establece que los animales deben permanecer libres de hambre, sed y malnutrición.
        .col-12.col-md-12.col-lg-5.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t3/img5.png", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .bg-color-5.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 En consecuencia, los sistemas bovinos deben garantizar el acceso permanente a alimentos suficientes, nutritivos y de calidad, así como a agua limpia y fresca en cantidades adecuadas. Además, es necesario promover condiciones que eviten la competencia excesiva, el estrés y la exclusión de animales subordinados durante el consumo.
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-lg-7.order-2.order-lg-2.bg-color-4(data-aos="fade-right")          
          p.p-3.mb-0 La aplicación de estas medidas contribuye a:
            ul.lista-ul.color-vinotinto-custom.mb-0.ps-4.pb-0
              li.d-flex
                .fas.fa-carrot.me-3
                span Mejorar el bienestar animal.
              li.d-flex
                .fas.fa-carrot.me-3
                span Incrementar la productividad y la rentabilidad del sistema ganadero.
              li.d-flex
                .fas.fa-carrot.me-3
                span Reducir enfermedades relacionadas con la alimentación.
              li.d-flex
                .fas.fa-carrot.me-3
                span Fortalecer el cumplimiento de las buenas prácticas ganaderas en Colombia.
              li.d-flex
                .fas.fa-carrot.me-3
                span Favorecer la sostenibilidad del sistema productivo.
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0.text-center
            img(src='@/assets/curso/temas/t3/img6.png' style="width: 650px").m-auto                
      p(data-aos="fade-left") Las buenas prácticas de alimentación también promueven la adopción de estrategias sostenibles orientadas a mejorar la eficiencia de la producción bovina, optimizar el uso de los recursos disponibles y fortalecer la capacidad de adaptación frente a las variaciones climáticas y económicas. Entre las principales estrategias implementadas se encuentran las siguientes:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t3/tarjeta02_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Sistemas silvopastoriles
                p Consisten en la integración de árboles, arbustos forrajeros y pasturas dentro del sistema productivo. Proporcionan sombra, mejoran el confort térmico, favorecen la biodiversidad y contribuyen a la captura de carbono.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Bancos de proteína
                p Corresponden al establecimiento de especies forrajeras de alto contenido proteico para complementar la dieta. Favorecen la ganancia de peso, la producción de leche y la eficiencia reproductiva.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Conservación de forrajes
                p Comprende la aplicación de técnicas como el ensilaje, la henificación y el henolaje. Garantiza la disponibilidad de alimento durante épocas críticas y contribuye a estabilizar la producción.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Pastoreo racional
                p Implica el manejo adecuado de los períodos de ocupación y descanso de los potreros. Optimiza el aprovechamiento del forraje y mejora la eficiencia productiva del hato.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Alimentación alternativa
                p Se basa en el aprovechamiento de subproductos agroindustriales y recursos locales disponibles en la explotación. Reduce los costos de alimentación y fortalece la sostenibilidad económica del sistema.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Uso eficiente del agua
                p Incluye medidas orientadas a garantizar el acceso permanente al recurso y disminuir los desperdicios. Favorece la hidratación de los animales y protege las fuentes hídricas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta02_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Protección de los recursos naturales
                p Comprende acciones dirigidas a la conservación responsable del suelo, el agua, la vegetación y la biodiversidad. Disminuye el impacto ambiental y fortalece la sostenibilidad de la actividad ganadera.
      //- Fin Slideshow
      p(data-aos="fade-left") La implementación articulada de estas estrategias fortalece la sostenibilidad de los sistemas ganaderos, mejora el bienestar de los bovinos, incrementa la eficiencia productiva y favorece el cumplimiento de las buenas prácticas ganaderas exigidas por la normativa colombiana. En consecuencia, contribuye al desarrollo de una ganadería más competitiva, rentable, ambientalmente sostenible y socialmente responsable.      
      Separador
      //- Inicio Tema3.1
      .row
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Principios
      p(data-aos="fade-left") Las buenas prácticas de alimentación (BPA) se fundamentan en principios técnicos, nutricionales, sanitarios, ambientales, económicos y de bienestar animal que orientan todas las actividades relacionadas con la alimentación bovina. Su aplicación permite garantizar sistemas productivos eficientes, seguros y sostenibles, en concordancia con los lineamientos de las buenas prácticas ganaderas (BPG). Los principios que orientan la gestión alimentaria bovina son los siguientes:
      //- Inicio Accordion
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3 
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img7.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Suficiencia nutricional")
                  p.mb-4 Todo bovino debe recibir una alimentación suficiente y equilibrada, ajustada a sus requerimientos específicos según la edad, el peso corporal, el estado fisiológico, el nivel de producción, la condición corporal, el estado sanitario y el objetivo productivo. La dieta debe aportar cantidades adecuadas de energía, proteína, fibra, minerales, vitaminas y agua para favorecer el mantenimiento, el crecimiento, la reproducción y la expresión del potencial productivo del animal. Además, debe ajustarse periódicamente de acuerdo con los cambios productivos y las condiciones ambientales de la explotación.
              .row(titulo="Calidad nutricional")
                  p.mb-4 Los alimentos suministrados deben presentar una adecuada composición nutricional, buena digestibilidad y elevada palatabilidad. La eficiencia alimentaria depende no solo de la cantidad de nutrientes presentes, sino también de la capacidad del animal para aprovecharlos. El uso de forrajes de buena calidad, suplementos apropiados y estrategias como la suplementación estratégica, los sistemas silvopastoriles y los bancos de proteína contribuye a mejorar el consumo voluntario, la producción, la fertilidad y la respuesta inmunitaria.
              .row(titulo="Inocuidad alimentaria")
                  p.mb-4 Los alimentos y el agua deben permanecer libres de contaminantes físicos, químicos y biológicos, como hongos, micotoxinas, bacterias patógenas, metales pesados, residuos de plaguicidas, materiales extraños y otras sustancias tóxicas. Su cumplimiento exige prácticas adecuadas de almacenamiento, conservación y manejo, reduciendo riesgos sanitarios y fortaleciendo la seguridad alimentaria y la salud pública.
              .row(titulo="Disponibilidad permanente")
                  p.mb-4 Los bovinos deben disponer de acceso continuo y suficiente al alimento y al agua, de acuerdo con sus necesidades nutricionales y productivas. La restricción alimentaria puede ocasionar estrés, pérdida de condición corporal, disminución del desempeño productivo, alteraciones metabólicas y problemas de comportamiento. Por ello, es indispensable garantizar un acceso equitativo que evite la competencia excesiva y los periodos prolongados sin alimentación o hidratación.
      //- Fin Accordion
      //- Inicio Accordion
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Bienestar animal")
                  p.mb-4 La alimentación constituye uno de los pilares del bienestar animal, al permitir satisfacer necesidades básicas relacionadas con la ausencia de hambre, sed y malnutrición. Asimismo, debe evitarse la competencia excesiva y el estrés asociado con el consumo. Los comederos y bebederos deben ser suficientes, accesibles y mantenerse en adecuadas condiciones higiénicas. Este principio está respaldado por las Resoluciones ICA 067449 de 2020, 068167 de 2020 y 115708 de 2021.
              .row(titulo="Sostenibilidad ambiental")
                  p.mb-4 La producción de alimentos para bovinos debe desarrollarse mediante prácticas orientadas a conservar los recursos naturales y reducir el impacto ambiental. La implementación de sistemas silvopastoriles, bancos de proteína, medidas de conservación de suelos, protección hídrica, uso racional de fertilizantes y aprovechamiento de subproductos favorece la biodiversidad, optimiza el uso del agua y fortalece la resiliencia frente a la variabilidad climática.
              .row(titulo="Eficiencia productiva")
                  p.mb-4 La alimentación debe orientarse al aprovechamiento eficiente de los recursos nutricionales y económicos disponibles. Una adecuada planificación contribuye a mejorar la conversión alimenticia, incrementar la producción de leche, favorecer la ganancia de peso, optimizar la fertilidad y fortalecer la rentabilidad del sistema ganadero mediante el seguimiento permanente de los resultados productivos.
              .row(titulo="Trazabilidad")
                  p.mb-4 Todos los procesos relacionados con la alimentación deben registrarse de forma clara, organizada y verificable. La documentación de la adquisición de insumos, su almacenamiento, preparación y suministro facilita la identificación de fallas, la evaluación de resultados, el cumplimiento de requisitos normativos y el desarrollo de auditorías y certificaciones. Además, fortalece el control sanitario y contribuye a garantizar la inocuidad de los productos de origen animal destinados al consumo humano.
          .col-lg-3 
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img8.png", alt="").img400.m-auto                  
      //- Fin Accordion
      p(data-aos="fade-left") La aplicación integrada de estos principios permite orientar la toma de decisiones relacionadas con la alimentación bovina, fortalecer el bienestar animal, optimizar la productividad y favorecer el cumplimiento de los requisitos establecidos para las buenas prácticas ganaderas en Colombia. De esta manera, se promueve una producción más eficiente, segura, sostenible y socialmente responsable.
      Separador
      //- Inicio Tema3.2
      .row
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Características
      .row.justify-content-center.align-items-stretch.mb-2.mb-3(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img9.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-2.d-flex.align-items-center.p-4.p-lg-5
          p.mb-0 Las buenas prácticas de alimentación (BPA) presentan características que permiten su implementación de manera organizada, eficiente y verificable dentro de las explotaciones bovinas. Estas características favorecen el cumplimiento de los objetivos nutricionales, productivos, sanitarios, ambientales y de bienestar animal establecidos por las buenas prácticas ganaderas (BPG).
      p(data-aos="fade-left") Una de sus principales particularidades es que deben desarrollarse a partir de una adecuada planificación. La alimentación no debe responder a decisiones improvisadas, sino a una programación técnica basada en las necesidades de los animales y en la disponibilidad de recursos de la explotación. Este proceso considera aspectos como la oferta de forrajes, las épocas climáticas, los inventarios alimenticios, las categorías animales y los objetivos productivos, permitiendo anticiparse a periodos de escasez y garantizar la continuidad del suministro. Las principales características de las BPA son las siguientes:   
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t3/tarjeta03_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Planificadas
                p La alimentación debe responder a una programación técnica previamente diseñada, ajustada a los requerimientos nutricionales de los animales y a la disponibilidad de recursos de la explotación. Una adecuada planificación optimiza el uso de los insumos, facilita la preparación ante épocas críticas y garantiza la continuidad del suministro alimenticio.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Preventivas
                p Su enfoque busca evitar problemas nutricionales, sanitarios y productivos antes de que ocurran. Contribuyen a reducir enfermedades metabólicas, trastornos digestivos, pérdidas económicas y riesgos sanitarios, favoreciendo la salud y la condición corporal del hato.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Integrales
                p Comprenden todas las etapas relacionadas con la alimentación, desde la producción o adquisición de los insumos hasta la evaluación de los resultados obtenidos. Su aplicación permite ejercer un control completo sobre el sistema alimentario.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Sistemáticas
                p Se desarrollan mediante procedimientos organizados, estandarizados y repetibles. Esto promueve la uniformidad de las actividades, disminuye errores y facilita la capacitación del personal encargado del manejo alimenticio.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Medibles
                p Los resultados pueden evaluarse mediante indicadores objetivos, como el consumo de alimento, la producción de leche, la ganancia de peso, la conversión alimenticia o la condición corporal. Esta información facilita la toma de decisiones y los ajustes oportunos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Documentadas
                p Todas las actividades deben registrarse de manera clara y organizada. Los registros fortalecen la trazabilidad, facilitan auditorías y respaldan los procesos de certificación en buenas prácticas ganaderas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Adaptables
                p Deben ajustarse a las condiciones particulares de cada sistema productivo, considerando factores como el clima, la región, el tipo de explotación y los recursos disponibles. Esta flexibilidad mejora la eficiencia y la pertinencia de las medidas implementadas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_8.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Sostenibles
                p Procuran el equilibrio entre productividad, bienestar animal y protección ambiental. Promueven estrategias como sistemas silvopastoriles, bancos de proteína, conservación de forrajes y uso responsable de los recursos naturales.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_9.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Verificables
                p Su cumplimiento puede comprobarse mediante inspecciones, auditorías y revisión de registros. Esto favorece el control interno, la mejora continua y el cumplimiento de los requisitos establecidos por la normativa vigente.
      //- Fin Slideshow
      p(data-aos="fade-left") La aplicación conjunta de estas características fortalece la organización del sistema alimentario, mejora la eficiencia de los procesos y facilita el cumplimiento de los estándares exigidos para una producción bovina segura y responsable.
      Separador
      //- Inicio Tema3.3
      .row
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Normativa aplicable
      p(data-aos="fade-left") Las buenas prácticas de alimentación en Colombia se encuentran integradas al marco de las buenas prácticas ganaderas y son reguladas principalmente por el Instituto Colombiano Agropecuario (ICA). Estas disposiciones buscan garantizar la inocuidad de los alimentos, la salud animal, el bienestar de los bovinos, la sostenibilidad ambiental y la calidad de los productos destinados al consumo humano. Las principales disposiciones relacionadas con la alimentación bovina son las siguientes:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t3/tarjeta04_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Resolución ICA 067449 de 2020
                p Establece los requisitos para la certificación en buenas prácticas ganaderas en predios productores de leche. Exige disponibilidad permanente de agua limpia y suficiente, alimentación acorde con los requerimientos nutricionales, manejo higiénico de alimentos e insumos, registros de alimentación y suplementación, almacenamiento seguro, protección de fuentes hídricas y prevención de contaminaciones físicas, químicas y biológicas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta04_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Resolución ICA 068167 de 2020
                p Define los requisitos para la certificación en buenas prácticas ganaderas en predios destinados a la producción de carne bovina y bufalina. Incluye lineamientos relacionados con alimentación segura y balanceada, manejo sanitario del agua y los alimentos, trazabilidad de los procesos, protección ambiental y conservación de la inocuidad de la carne.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta04_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Resolución ICA 115708 de 2021
                p Complementa los lineamientos de bienestar animal en los sistemas de producción pecuaria. Destaca la obligación de garantizar acceso permanente al agua, disponibilidad suficiente de alimento, prevención del hambre y la sed, reducción de factores de estrés y condiciones adecuadas de manejo y confort para los animales.
      //- Slideshow
      .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img10.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Además de estas disposiciones, las buenas prácticas de alimentación se articulan con otros instrumentos orientados a fortalecer la sostenibilidad y la calidad de la producción ganadera. Entre ellos se incluyen la legislación sobre inocuidad alimentaria, la normativa ambiental para la protección de los recursos naturales, los programas de sostenibilidad ganadera, los lineamientos sobre bienestar animal, los sistemas de aseguramiento de la calidad, los programas de trazabilidad pecuaria y las directrices relacionadas con la conservación de las fuentes hídricas y el manejo adecuado de residuos.
      p(data-aos="fade-left") El cumplimiento de este marco normativo contribuye a mejorar la competitividad de las explotaciones bovinas, facilita los procesos de certificación, fortalece la confianza del consumidor y promueve una producción responsable, sostenible y alineada con los principios de bienestar animal y buenas prácticas ganaderas.
      

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
