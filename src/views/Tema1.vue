<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Alimento
      .row.justify-content-center.align-items-stretch.mb-4
        .col-12.col-lg-9.order-2.order-lg-1(data-aos="fade-right")
          p El alimento es toda sustancia natural, transformada o suplementada que aporta a los bovinos los nutrientes necesarios para su mantenimiento, crecimiento, reproducción y producción de leche o carne. Gracias a su sistema digestivo rumiante, estos animales pueden transformar forrajes y recursos vegetales ricos en fibra en productos de alto valor biológico.
          .row.g-3.align-items-stretch.mb-3            
            .col-12.col-md-5.d-flex
              figure.mb-0.w-100
                img.h-100.w-100(src="@/assets/curso/temas/t1/img1.png", alt="", style="object-fit: cover; border-radius: 4px;")                            
            .col-12.col-md-7.d-flex
              .p-4.w-100.h-100.bg-color-2
                p Por esta razón, la alimentación constituye uno de los factores más importantes de la producción ganadera, debido a que influye directamente en la productividad, la salud, la eficiencia reproductiva y la rentabilidad de la explotación. La calidad y disponibilidad de los alimentos son determinantes para garantizar el bienestar animal y el adecuado desempeño productivo. Una nutrición deficiente puede ocasionar pérdida de peso, disminución de la producción, alteraciones reproductivas y mayor susceptibilidad a enfermedades.
          p En este contexto, las Buenas Prácticas Ganaderas y las Resoluciones ICA 067449 de 2020, 068167 de 2020 y 115708 de 2021 promueven el suministro de alimentos suficientes, inocuos y de calidad. Además, fomentan la implementación de estrategias sostenibles que contribuyan al uso eficiente de los recursos y al fortalecimiento de sistemas ganaderos más resilientes.
        .col-12.col-sm-8.col-md-6.col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0.d-flex.align-items-center.justify-content-center(data-aos="zoom-in")
          figure.mb-0.w-100.text-center
            img.img-fluid(src="@/assets/curso/temas/t1/img2.png", alt="", style="max-width: 100%;")
      Separador
      //- Inicio Tema1.1
      .row
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Tipos de alimentos
      p(data-aos="fade-left") Los alimentos utilizados en bovinos pueden clasificarse según su composición nutricional y la función que cumplen dentro de la dieta. Esta organización facilita la formulación de raciones balanceadas capaces de satisfacer los requerimientos de cada etapa productiva. A continuación, se presentan los principales tipos de alimentos empleados en la alimentación bovina.
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t1/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Forrajes
                p Constituyen la base de la alimentación bovina en Colombia y representan la principal fuente de fibra efectiva necesaria para el adecuado funcionamiento del rumen. Pueden consumirse mediante pastoreo o suministrarse a través de sistemas de corte y acarreo. Incluyen pastos naturales, pastos mejorados, leguminosas forrajeras y arbustos forrajeros. Entre las especies más utilizadas se encuentran <i>Brachiaria spp., Panicum maximum, Cynodon spp., Pennisetum purpureum</i> y diversas leguminosas tropicales. Su calidad nutricional depende de factores como la especie vegetal, la fertilidad del suelo, la disponibilidad de agua, el manejo agronómico y la edad de cosecha.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Sistemas silvopastoriles
                p Integran árboles, arbustos forrajeros, pasturas y animales dentro de una misma unidad productiva. Además de aportar recursos alimenticios, proporcionan sombra, disminuyen el estrés calórico, favorecen el confort animal y contribuyen a la conservación del suelo, la protección de fuentes hídricas y la captura de carbono. Entre las especies utilizadas se encuentran <i>Leucaena leucocephala, Gliricidia sepium</i> (matarratón), <i>Tithonia diversifolia</i> (botón de oro) y <i>Erythrina spp</i>.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Bancos de proteína
                p Corresponden a áreas establecidas con especies vegetales de alto contenido proteico destinadas a complementar la alimentación, especialmente durante períodos de escasez forrajera o cuando los pastos presentan bajos niveles nutricionales. Su finalidad es incrementar el aporte de proteína de la dieta, mejorar la digestibilidad de los forrajes y aumentar la eficiencia productiva. Entre las especies empleadas se encuentran <i>Leucaena leucocephala, Gliricidia sepium, Tithonia diversifolia, Morus alba</i> y <i>Cratylia argentea</i>.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Alimentos conservados
                p Permiten almacenar nutrientes para garantizar la disponibilidad de alimento durante épocas de baja oferta de pasturas, particularmente en períodos de sequía. Comprenden heno, ensilaje, henolaje y forrajes deshidratados. El ensilaje elaborado a partir de maíz, sorgo, caña de azúcar y pastos de corte constituye una estrategia ampliamente utilizada para mantener la estabilidad productiva durante todo el año.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Concentrados energéticos
                p Aportan elevadas cantidades de energía en pequeñas porciones de alimento. Son especialmente importantes en vacas de alta producción, animales en crecimiento acelerado y sistemas intensivos. Incluyen maíz, sorgo, melaza, yuca y diversos subproductos agroindustriales. Su utilización requiere un manejo técnico adecuado para prevenir alteraciones digestivas y trastornos metabólicos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Concentrados proteicos
                p Suministran aminoácidos esenciales necesarios para la formación y reparación de tejidos, el desarrollo muscular, la producción de leche y el mantenimiento de funciones fisiológicas. Entre las fuentes más utilizadas se encuentran la torta de soya, la harina de algodón, la harina de canola y la harina de girasol. Estos suplementos contribuyen a balancear dietas basadas en forrajes tropicales con limitaciones proteicas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Suplementos minerales y vitamínicos
                p Participan en múltiples procesos metabólicos relacionados con el crecimiento, la reproducción, la respuesta inmunitaria y la producción animal. Incluyen sales mineralizadas, bloques multinutricionales, premezclas minerales y vitaminas. Su suministro adecuado previene deficiencias nutricionales y favorece el desempeño productivo del hato.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_8.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Alimentación alternativa
                p Consiste en el aprovechamiento de recursos locales y subproductos agroindustriales para complementar o sustituir parcialmente los alimentos convencionales. Su implementación contribuye a reducir costos de producción, incrementar la sostenibilidad y fortalecer la resiliencia de los sistemas ganaderos frente a fenómenos climáticos. Entre los recursos más utilizados en Colombia se encuentran la caña de azúcar, la melaza, el palmiste, la pulpa de café, el bagazo cervecero, la cascarilla de arroz, la yuca, los residuos hortícolas, el botón de oro, el matarratón y la leucaena. Su incorporación debe realizarse a partir de una evaluación nutricional previa que garantice la salud animal y la productividad.                                                                                
      //- Fin Slideshow
      p(data-aos="fade-left") La selección de los alimentos debe responder a las condiciones ambientales, la disponibilidad de recursos y los objetivos productivos de cada explotación. Una adecuada combinación de estas alternativas favorece el equilibrio nutricional de los bovinos, mejora la eficiencia de los sistemas de producción y contribuye al desarrollo de una ganadería más sostenible y competitiva.
      Separador
      //- Inicio Tema1.2
      .row
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Suministro de alimentos
      p(data-aos="fade-left") A continuación, se presenta un video sobre el suministro de alimentos en bovinos, en el que se analizan los principios y estrategias nutricionales que garantizan una alimentación adecuada, promueven el bienestar animal y contribuyen a la eficiencia de los sistemas de producción ganadera.
      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      Separador
      //- Inicio Tema1.3
      .row
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Características físicas de los alimentos
      p(data-aos="fade-left") La evaluación de las características físicas permite determinar la calidad y aptitud de los alimentos destinados a bovinos. Estos atributos influyen directamente sobre el consumo voluntario, la digestibilidad y el aprovechamiento de los nutrientes, por lo que su revisión periódica contribuye a prevenir problemas sanitarios y pérdidas productivas. A continuación, se presentan las principales características físicas que deben considerarse durante la selección y suministro de alimentos.
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t1/tarjeta02_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Color
                p Debe corresponder al característico de cada alimento. Cambios anormales pueden indicar deterioro, contaminación o fermentaciones inadecuadas, permitiendo identificar posibles alteraciones de calidad o pérdida de inocuidad.                    
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Olor
                p Debe ser agradable y propio del alimento. Olores ácidos, pútridos o asociados con mohos evidencian deterioro y facilitan la detección temprana de alimentos no aptos para el consumo animal.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Textura
                p Debe favorecer el consumo y el adecuado proceso digestivo. Influye en la aceptación del alimento y en la eficiencia de utilización de los nutrientes.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Humedad
                p Debe mantenerse dentro de niveles apropiados para garantizar su conservación. Los excesos de humedad favorecen el crecimiento de hongos y bacterias que afectan la inocuidad del alimento.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Tamaño de partícula
                p Condiciona los procesos de rumia, salivación y digestibilidad. Un tamaño adecuado favorece la salud ruminal y mejora el aprovechamiento nutricional.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Palatabilidad
                p Corresponde al grado de aceptación del alimento por parte del animal y determina el consumo voluntario y, en consecuencia, el desempeño productivo.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ausencia de contaminantes
                p El alimento debe estar libre de hongos, micotoxinas, tierra, plásticos, metales, vidrios y residuos químicos. Esta condición garantiza la inocuidad del alimento y el cumplimiento de las Buenas Prácticas Ganaderas (BPG).
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_8.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Integridad física
                p El alimento debe conservar una apariencia acorde con su estado normal, sin evidencias de compactación excesiva, presencia de cuerpos extraños o deterioro visible. Su evaluación contribuye a mantener la calidad del producto y a prevenir riesgos para la salud animal.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_9.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Estado de conservación
                p Debe reflejar condiciones adecuadas de almacenamiento y manejo, evitando fermentaciones indeseadas o procesos avanzados de descomposición. Su verificación permite asegurar la aptitud del alimento para el consumo y reducir pérdidas productivas.
      //- Fin Slideshow
      p(data-aos="fade-left") La valoración sistemática de estas características constituye una medida preventiva para asegurar la calidad de los alimentos suministrados. Su aplicación contribuye a proteger la salud de los bovinos, optimizar la respuesta productiva y fortalecer el cumplimiento de los criterios de inocuidad exigidos en los sistemas ganaderos.
      Separador
      //- Inicio Tema1.4
      .row
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.4 Importancia en la producción animal
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-12.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 La alimentación constituye uno de los componentes estratégicos de la producción bovina, ya que condiciona el desempeño técnico, económico y sanitario de la explotación. Una adecuada planificación alimentaria permite satisfacer los requerimientos nutricionales de los animales en cada etapa productiva, optimizar el uso de los recursos disponibles y contribuir al bienestar del hato.
        .col-12.col-md-12.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t1/img3.png", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .bg-color-4.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 Su importancia se refleja en múltiples indicadores productivos y reproductivos. La disponibilidad de dietas balanceadas favorece una mayor producción de leche y carne, incrementa la ganancia diaria de peso y mejora la eficiencia reproductiva. Asimismo, contribuye al mantenimiento de una adecuada condición corporal, fortalece la respuesta inmunitaria y promueve una mayor longevidad productiva de los animales.
      p(data-aos="fade-left") Con el fin de sintetizar los principales efectos de la alimentación sobre la producción animal, a continuación, se describen sus repercusiones en distintos componentes del sistema ganadero:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width.mt-5
              .px-4.px-md-5.pb-md-3             
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-8.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-6 col-lg-6")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta03_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Producción de leche
                            p Favorece la síntesis láctea y contribuye a mantener la persistencia de la producción y la calidad composicional de la leche.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta03_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Producción de carne
                            p Optimiza el crecimiento y la deposición de tejido muscular, mejorando el rendimiento productivo de los animales destinados al engorde.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta03_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Ganancia diaria de peso
                            p Incrementa la eficiencia en la conversión de nutrientes y permite alcanzar los objetivos de crecimiento en menor tiempo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta03_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Eficiencia reproductiva
                            p Mejora la fertilidad, favorece la expresión del celo, reduce intervalos reproductivos y contribuye al éxito de la gestación.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta03_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Salud animal
                            p Fortalece el sistema inmunológico y disminuye la susceptibilidad a enfermedades asociadas con deficiencias nutricionales.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta03_6.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Longevidad productiva
                            p Ayuda a conservar una adecuada condición corporal y favorece una vida útil más prolongada dentro del sistema productivo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta03_7.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Rentabilidad económica
                            p Incrementa la eficiencia técnica, optimiza el aprovechamiento de los recursos y mejora la relación entre costos e ingresos.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t1/img4.png', style="width: 500px", data-aos="zoom-in").m-auto
              //- Fin Carrusel
      .row.justify-content-center.align-items-stretch.mb-4
        .col-12.col-lg-9.order-2.order-lg-1(data-aos="fade-right")
          p Por el contrario, una nutrición deficiente puede generar consecuencias negativas tanto para los animales como para la explotación. Entre ellas se encuentran la pérdida de condición corporal, la disminución de la producción, la aparición de trastornos metabólicos, los problemas reproductivos y el incremento de los costos asociados a tratamientos sanitarios y medidas correctivas.
          .row.g-3.align-items-stretch.mb-3
            .col-12.col-md-5.d-flex
              figure.mb-0.w-100
                img.h-100.w-100(src="@/assets/curso/temas/t1/img1.png", alt="", style="object-fit: cover; border-radius: 4px;")
            .col-12.col-md-7.d-flex
              .p-4.w-100.h-100.bg-color-2
                p Además de sus efectos sobre la productividad, la alimentación desempeña un papel determinante en la sostenibilidad de la ganadería. Los sistemas que incorporan estrategias como la conservación de forrajes, el establecimiento de bancos de proteína, la implementación de sistemas silvopastoriles y el aprovechamiento responsable de recursos alimenticios alternativos presentan mayores niveles de eficiencia productiva y una mejor capacidad de adaptación frente a la variabilidad climática.
          p Desde el enfoque de las Buenas Prácticas Ganaderas (BPG) y del bienestar animal, la alimentación constituye uno de los pilares fundamentales para el desarrollo de sistemas productivos sostenibles, rentables y socialmente responsables. Una adecuada planificación del suministro de nutrientes permite garantizar la disponibilidad permanente de alimento, mejorar la calidad de vida de los bovinos y fortalecer la competitividad de la ganadería colombiana en un contexto de creciente exigencia productiva y ambiental.
        .col-12.col-sm-8.col-md-6.col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0.d-flex.align-items-center.justify-content-center(data-aos="zoom-in")
          figure.mb-0.w-100.text-center
            img.img-fluid(src="@/assets/curso/temas/t1/img6.png", alt="", style="max-width: 100%;")





</template>

<script>
export default {
  name: 'Tema1',
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
