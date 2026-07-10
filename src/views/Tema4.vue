<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Medición, pesaje y registros en la alimentación bovina
      .row.mb-5.justify-content-center.align-items-start
        .col-12.col-sm-9.col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0.text-center
            img(src='@/assets/curso/temas/t4/img1.png' style="width: 650px").m-auto
        .col-12.col-lg-6.order-2.order-lg-1(data-aos="fade-right")
          p.bg-color-2.p-4 La gestión técnica de la alimentación bovina requiere herramientas que permitan cuantificar recursos, evaluar el desempeño productivo y documentar la información obtenida durante el proceso. En este contexto, las unidades de medida, las técnicas de pesaje y los registros constituyen elementos complementarios que favorecen la planificación, el control y la toma de decisiones dentro de la explotación ganadera.
          p.p-4.mb-0 El manejo preciso de estas herramientas contribuye a optimizar el uso de los recursos disponibles, fortalecer la eficiencia de los sistemas productivos y garantizar la trazabilidad de las actividades relacionadas con la alimentación animal. Con el fin de facilitar la comprensión de las principales medidas empleadas en ganadería, se presentan a continuación sus características y aplicaciones más relevantes.
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t4/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Unidades de volumen
                p Permiten cuantificar la capacidad o el espacio ocupado por líquidos, alimentos y materiales utilizados en la alimentación bovina. Son fundamentales para calcular el almacenamiento y suministro de agua, melaza, suplementos líquidos, ensilajes y otros insumos alimenticios. Entre las unidades más utilizadas se encuentran el litro (L), el mililitro (mL), el metro cúbico (m³) y el centímetro cúbico (cm³).
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Unidades de peso
                p Se utilizan para determinar la cantidad de alimento suministrado, el peso corporal de los animales y la producción obtenida en la explotación. Entre las más empleadas se encuentran el gramo (g), el kilogramo (kg) y la tonelada (t). Estas medidas permiten formular raciones, calcular ganancias de peso y evaluar la eficiencia productiva.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Unidades de área
                p Son fundamentales para la planificación y manejo de praderas, bancos de proteína, sistemas silvopastoriles y áreas destinadas a la producción de forrajes. Las medidas más utilizadas corresponden al metro cuadrado (m²), la hectárea (ha) y, en algunos contextos, la fanegada.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Técnicas y métodos de pesaje
                p Incluyen el uso de básculas electrónicas, básculas mecánicas, plataformas ganaderas y cintas zoométricas. Su aplicación permite monitorear el crecimiento, ajustar programas de alimentación e identificar oportunamente problemas sanitarios o productivos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Pesaje de animales y alimentos
                p Constituye una práctica esencial dentro de las Buenas Prácticas Ganaderas. En los animales, permite evaluar el crecimiento, la condición corporal y la respuesta a los programas nutricionales; en los alimentos, facilita el control de inventarios, la formulación precisa de raciones y la determinación del consumo real.
      //- Fin Slideshow
      .row.justify-content-center.align-items-stretch.mb-4
        .col-12.col-lg-9.order-2.order-lg-1(data-aos="fade-right")
          p La información obtenida mediante estas mediciones adquiere mayor valor cuando es organizada y analizada de manera sistemática mediante registros técnicos. Los registros de alimentación, consumo y producción constituyen el conjunto de documentos físicos o digitales utilizados para recopilar, organizar, almacenar y analizar información relacionada con la nutrición, el suministro de alimentos, el consumo de nutrientes y los resultados productivos obtenidos en la explotación bovina.
          .row.g-3.align-items-stretch.mb-3            
            .col-12.col-md-5.d-flex
              figure.mb-0.w-100
                img.h-100.w-100(src="@/assets/curso/temas/t4/img2.png", alt="", style="object-fit: cover; border-radius: 4px;")                            
            .col-12.col-md-7.d-flex
              .p-4.w-100.h-100.bg-color-5
                p Estos registros forman parte fundamental de las Buenas Prácticas Ganaderas (BPG), ya que permiten mantener un control permanente de las actividades alimenticias y productivas del predio, facilitando la toma de decisiones técnicas, económicas y sanitarias. Además, constituyen una herramienta indispensable para garantizar la trazabilidad de los procesos y demostrar el cumplimiento de los requisitos establecidos en las Resoluciones ICA 067449 de 2020, 068167 de 2020 y 115708 de 2021.
          p La información registrada permite evaluar la eficiencia de los programas nutricionales, identificar problemas oportunamente, controlar los costos de producción y verificar que los animales reciben una alimentación adecuada de acuerdo con sus requerimientos fisiológicos y productivos. Para que los registros sean útiles y confiables, deben reunir determinadas características.
        .col-12.col-sm-8.col-md-6.col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0.d-flex.align-items-center.justify-content-center(data-aos="zoom-in")
          figure.mb-0.w-100.text-center
            img.img-fluid(src="@/assets/curso/temas/t4/img3.png", alt="", style="max-width: 100%;")      
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-lg-7.order-2.order-lg-2(data-aos="fade-right")
            ul.lista-ul.color-vinotinto-custom.mb-0.ps-4.pb-1.bg-color-4.p-4
              li.d-flex
                .fas.fa-carrot.me-3
                span <b>Claridad:</b> facilita la interpretación y consulta de la información registrada. 
              li.d-flex
                .fas.fa-carrot.me-3
                span <b>Exactitud:</b> garantiza que los datos consignados correspondan a la realidad observada. 
              li.d-flex
                .fas.fa-carrot.me-3
                span <b>Oportunidad:</b> favorece el registro inmediato de las actividades, reduciendo omisiones. 
              li.d-flex
                .fas.fa-carrot.me-3
                span <b>Continuidad:</b> permite realizar seguimiento histórico a los animales y a la explotación. 
              li.d-flex
                .fas.fa-carrot.me-3
                span <b>Verificabilidad:</b> posibilita comprobar la información mediante soportes y evidencias. 
              li.d-flex
                .fas.fa-carrot.me-3
                span <b>Trazabilidad:</b> facilita conocer el historial de alimentación y producción de cada lote o animal. 
              li.d-flex
                .fas.fa-carrot.me-3
                span <b>Utilidad técnica:</b> genera información relevante para evaluar la eficiencia alimenticia, productiva y económica del sistema.
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0.text-center
            img(src='@/assets/curso/temas/t4/img4.png' style="width: 650px").m-auto                            
      p(data-aos="fade-left") En conjunto, las mediciones, el pesaje y los registros constituyen herramientas esenciales para el control técnico de la alimentación bovina. Su adecuada implementación fortalece la trazabilidad, mejora la toma de decisiones y favorece sistemas ganaderos más eficientes, sostenibles y alineados con los principios de las Buenas Prácticas Ganaderas y el bienestar animal.
      Separador
      //- Inicio Tema4.1
      .row
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.1 Tipos de registros
      p(data-aos="fade-left") Dentro de una explotación bovina pueden implementarse diferentes registros orientados al control, seguimiento y evaluación de los procesos alimenticios y productivos.
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
                          img(src='@/assets/curso/temas/t4/tarjeta02_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Registro de suministro de alimentos
                            p Permite controlar el tipo de alimento ofrecido, las cantidades suministradas, la fecha, la categoría animal y el responsable de la actividad, garantizando orden y trazabilidad.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta02_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Registro de consumo de alimentos
                            p Facilita evaluar la eficiencia alimenticia mediante el seguimiento del consumo diario, por lote o categoría animal, e identificar cambios en los patrones de ingestión.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta02_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Registro de suplementación
                            p Permite verificar el aporte adicional de nutrientes mediante el control del uso de sales mineralizadas, bloques multi nutricionales y suplementos energéticos o proteicos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta02_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Registro de agua
                            p Favorece el seguimiento de las fuentes de abastecimiento, la limpieza de bebederos, los análisis de calidad y las actividades de mantenimiento.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta02_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Registro de inventario de alimentos
                            p Controla existencias, entradas, salidas, fechas de compra, vencimientos y pérdidas, evitando desabastecimientos y desperdicios.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta02_6.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Registro de peso corporal
                            p Permite evaluar el crecimiento, la evolución del peso y la eficiencia alimenticia de los animales.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta02_7.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Registro de producción de leche
                            p Facilita analizar el rendimiento productivo y la relación entre alimentación y producción láctea.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta02_8.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Registro reproductivo
                            p Relaciona indicadores reproductivos con el estado nutricional y la condición corporal del hato.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta02_9.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Registro sanitario
                            p Permite analizar el impacto de la nutrición sobre la salud mediante el seguimiento de enfermedades metabólicas, trastornos digestivos, morbilidad y mortalidad.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t4/img5.png', style="width: 500px", data-aos="zoom-in").m-auto                
            p(data-aos="fade-left") El uso articulado de estos registros proporciona una visión integral del comportamiento del sistema productivo y facilita la identificación de oportunidades de mejora.
      Separador
      //- Inicio Tema4.2
      .row
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.2 Recolección y diligenciamiento de la información
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-12.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-6.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 La calidad de los registros depende directamente de la forma en que se recopilan y consignan los datos. Por ello, el diligenciamiento debe realizarse diariamente por personal capacitado, utilizando formatos previamente establecidos por la empresa ganadera. La información debe registrarse de manera clara, legible, cronológica y sin alteraciones.
        .col-12.col-md-12.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t4/img6.png", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .bg-color-5.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 Durante la recolección de datos es importante incluir aspectos como la fecha del registro, la identificación del animal, el lote o grupo productivo, el tipo de actividad realizada, la cantidad de alimento suministrado, la cantidad consumida, la producción obtenida y cualquier observación relevante que contribuya a interpretar adecuadamente la información.
      p(data-aos="fade-left") Actualmente, muchas explotaciones utilizan herramientas digitales, aplicaciones móviles y programas de gestión ganadera que facilitan el almacenamiento, procesamiento y análisis de los datos. Asimismo, las Buenas Prácticas Ganaderas recomiendan conservar los registros durante los periodos establecidos por la normatividad vigente para facilitar auditorías, inspecciones y procesos de certificación.
      Separador
      //- Inicio Tema4.3
      .row
        #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.3 Análisis, interpretación y aplicación en la toma de decisiones
      p(data-aos="fade-left") La principal finalidad de los registros consiste en transformar la información recopilada en decisiones orientadas a mejorar la eficiencia productiva y el bienestar animal. El análisis de los datos permite identificar tendencias, detectar problemas nutricionales, evaluar el desempeño de los programas alimenticios y determinar si los objetivos productivos están siendo alcanzados. Para este propósito, se emplean diversos indicadores que aportan información relevante sobre el comportamiento del sistema:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t4/tarjeta03_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Consumo de materia seca
                p Evalúa la cantidad real de nutrientes ingeridos por los animales y permite ajustar las estrategias alimentarias.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta03_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Conversión alimenticia
                p Relaciona el alimento consumido con la producción obtenida, permitiendo valorar la eficiencia del sistema.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta03_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ganancia diaria de peso
                p Mide el crecimiento y el desempeño productivo en programas de levante y ceba.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta03_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Producción de leche por animal
                p Facilita evaluar el rendimiento individual o por lote y la respuesta a los programas nutricionales.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta03_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Costo por kilogramo producido
                p Determina la eficiencia económica del sistema alimenticio y orienta decisiones financieras.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta03_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Condición corporal
                p Refleja el estado nutricional y energético de los animales.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta03_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Eficiencia reproductiva
                p Permite relacionar el estado nutricional con la fertilidad y el comportamiento reproductivo del hato.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta03_8.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Mortalidad y morbilidad
                p Indican el impacto de la alimentación sobre la salud y estabilidad del sistema productivo.
      //- Fin Slideshow
      .row.justify-content-center.align-items-stretch.mb-4
        .col-12.col-sm-8.col-md-6.col-lg-3.order-1.order-lg-1.mb-4.mb-lg-0.d-flex.align-items-center.justify-content-center(data-aos="zoom-in")
          figure.mb-0.w-100.text-center
            img.img-fluid(src="@/assets/curso/temas/t4/img7.png", alt="", style="width: 255px;")
        .col-12.col-lg-9.order-2.order-lg-2(data-aos="fade-right")
          p La interpretación adecuada de estos indicadores permite ajustar las raciones alimenticias según los requerimientos reales, modificar programas de suplementación, mejorar el manejo de praderas, implementar bancos de proteína, fortalecer sistemas silvopastoriles, optimizar el uso del agua, reducir los costos de alimentación e incrementar la productividad del sistema ganadero.
          .row.g-3.align-items-stretch.mb-3
            .col-12.col-md-5.d-flex
              figure.mb-0.w-100
                img.h-100.w-100(src="@/assets/curso/temas/t4/img8.png", alt="", style="object-fit: cover; border-radius: 4px;")
            .col-12.col-md-7.d-flex
              .p-4.w-100.h-100.bg-color-5
                p Desde el enfoque de bienestar animal, los registros permiten detectar de manera temprana situaciones de hambre, desnutrición, pérdida de condición corporal, disminución del consumo de agua o alteraciones productivas que puedan comprometer la salud de los bovinos. Esto facilita intervenciones oportunas que mejoran el bienestar y reducen el riesgo de enfermedades.
          p Por esta razón, los registros de alimentación, consumo y producción constituyen una herramienta esencial para la gestión integral de la empresa ganadera, el cumplimiento de las Buenas Prácticas Ganaderas, la certificación sanitaria, la sostenibilidad ambiental y el mejoramiento continuo de los sistemas bovinos modernos.
</template>

<script>
export default {
  name: 'Tema4',
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
