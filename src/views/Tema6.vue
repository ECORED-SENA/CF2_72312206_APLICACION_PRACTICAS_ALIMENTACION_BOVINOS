<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Seguimiento y evaluación de la alimentación bovina
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-12.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-5.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 El seguimiento y la evaluación de la alimentación bovina comprenden el conjunto de actividades orientadas a medir, analizar e interpretar la respuesta de los animales frente a los programas nutricionales implementados en la explotación. Este proceso permite determinar si las estrategias alimenticias están cumpliendo los objetivos establecidos y facilita la toma de decisiones para optimizar la productividad, fortalecer el bienestar animal y mejorar la eficiencia del sistema productivo.
        .col-12.col-md-12.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t6/img1.png", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .bg-color-6.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 El análisis permanente de la información obtenida contribuye a identificar oportunamente problemas nutricionales, sanitarios o de manejo, así como a establecer medidas correctivas que favorezcan el mejoramiento continuo de los programas de alimentación. De igual manera, constituye un componente esencial de las Buenas Prácticas Ganaderas (BPG), al respaldar la trazabilidad, la gestión técnica y el cumplimiento de la normatividad vigente.
      Separador
      //- Inicio Tema6.1
      .row
        #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.1 Parámetros alimenticios
      p(data-aos="fade-left") A continuación, se presenta un pódcast sobre el consumo de alimento y agua en bovinos, destacando su importancia como indicador del estado nutricional, el bienestar animal y la eficiencia productiva dentro de los sistemas de producción ganadera.
      //- Inicio Podcast
      .container-fluid.tarjeta.tarjeta--blanca.px-0.mb-2(data-aos="fade-left")
        .row.g-0.align-items-stretch
          .col-12.col-lg-7.mb-3.mb-lg-0.d-flex
            .p-4.p-md-5.bg-custom-dark-teal.w-100.rounded-4.d-flex.align-items-center
              .row.g-3.align-items-center.w-100
                .col-md-5.text-center.mb-4.mb-md-0
                  img.img-fluid(src="@/assets/curso/temas/bg/podcast.svg" style="max-width: 200px;")
                .col-md-7.ps-md-4
                  h2.mb-3.fw-bold(style="color:#FFF") Pódcast
                  .tarjeta.bg-white.p-3.shadow-sm.border-lemon
                    h5.mb-3.fw-bold Consumo de alimento y agua en bovinos
                    TarjetaAudio.color-primario(
                      texto="" 
                      :audio="podcast1"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")                      
          .col-12.col-lg-5.d-flex.ps-lg-4
            figure.mb-0.w-100
              img.h-100.w-100(src='@/assets/curso/temas/t6/img2.png' alt='' style="object-fit: cover;")
      //- Fin Podcast
      Separador
      //- Inicio Tema6.2
      .row
        #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.2 Requerimientos nutricionales
      .row.justify-content-center.align-items-stretch.mb-4
        .col-12.col-sm-8.col-md-6.col-lg-3.order-1.order-lg-1.mb-4.mb-lg-0.d-flex.align-items-center.justify-content-center(data-aos="zoom-in")
          figure.mb-0.w-100.text-center
            img.img-fluid(src="@/assets/curso/temas/t6/img3.png", alt="", style="width: 400px;")
        .col-12.col-lg-9.order-2.order-lg-2(data-aos="fade-right")
          p Los requerimientos nutricionales corresponden a la cantidad de nutrientes que necesita un animal para desarrollar adecuadamente sus funciones vitales y productivas. Estos varían según la edad, el peso corporal, el estado fisiológico, el nivel de producción, la condición corporal y las condiciones ambientales.
          .row.g-3.align-items-stretch.mb-3
            .col-12.col-md-7.d-flex
              .p-4.w-100.h-100.bg-color-3
                p La dieta debe aportar <b>energía, proteína, fibra, minerales, vitaminas y agua</b> en cantidades suficientes para garantizar el bienestar y la productividad. Las vacas lactantes requieren mayores cantidades de nutrientes que las vacas secas, mientras que los animales en crecimiento necesitan aportes que favorezcan el desarrollo muscular y óseo.
            .col-12.col-md-5.d-flex
              figure.mb-0.w-100
                img.h-100.w-100(src="@/assets/curso/temas/t6/img4.png", alt="", style="object-fit: cover; border-radius: 4px;")                
          p Los sistemas sostenibles promueven el uso de pasturas mejoradas, bancos de proteína y sistemas silvopastoriles para complementar los requerimientos nutricionales y reducir la dependencia de concentrados comerciales.
      Separador
      //- Inicio Tema6.3
      .row
        #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.3 Factores que afectan el consumo
      p(data-aos="fade-left") El consumo de alimento puede variar debido a factores propios del animal, del alimento, del ambiente y del manejo. La comprensión de estas variables permite implementar estrategias que favorezcan la estabilidad del consumo y el desempeño productivo.
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-8.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-6 col-lg-6 col-md-6 col-12")                        
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t6/tarjeta01_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Animal
                            p.text-start Aspectos como edad, peso, raza y estado sanitario modifican las necesidades nutricionales y la capacidad de ingestión.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t6/tarjeta01_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Alimento
                            p.text-start La calidad, digestibilidad, sabor y textura determinan la aceptación y el aprovechamiento del alimento.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t6/tarjeta01_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Ambiente
                            p.text-start La temperatura, la humedad y la radiación solar pueden generar estrés térmico y disminuir el consumo voluntario.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t6/tarjeta01_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Manejo
                            p.text-start La disponibilidad de agua, el espacio de comedero y la frecuencia de suministro facilitan o limitan el acceso al alimento.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t6/tarjeta01_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Bienestar animal
                            p.text-start La disponibilidad de sombra, el confort y la reducción del estrés favorecen patrones de consumo más estables.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t6/img5.png', style="width: 500px", data-aos="zoom-in").m-auto
              //- Fin Carrusel
            p(data-aos="fade-left") Los sistemas silvopastoriles contribuyen significativamente a mejorar el bienestar animal mediante la provisión de sombra, la reducción de la temperatura ambiental y la disponibilidad de forraje adicional, factores que favorecen un mayor consumo voluntario.
      Separador
      //- Inicio Tema6.4
      .row
        #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.4 Evaluación e interpretación de resultados
      p(data-aos="fade-left") La evaluación de los parámetros alimenticios permite determinar si los programas nutricionales están cumpliendo los objetivos establecidos. Para ello, se utilizan mediciones periódicas del consumo, la producción, el peso corporal, la condición corporal y la eficiencia alimenticia.
      .row.mb-5.justify-content-center.align-items-start
        .col-12.col-sm-9.col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0.text-center
            img(src='@/assets/curso/temas/t6/img6.png' style="width: 650px").m-auto
        .col-12.col-lg-6.order-2.order-lg-1(data-aos="fade-right")
          p.bg-color-2.p-4 La información obtenida debe registrarse y analizarse de forma continua para identificar posibles desviaciones y aplicar medidas correctivas oportunamente. Esta práctica forma parte de los requisitos de las Buenas Prácticas Ganaderas y de los sistemas de aseguramiento de la calidad.
          p.mb-0 Cuando los indicadores se encuentran dentro de los rangos esperados, se considera que la dieta está cubriendo adecuadamente los requerimientos nutricionales. Por el contrario, disminuciones en el consumo, pérdida de peso, baja producción de leche o deterioro de la condición corporal pueden indicar deficiencias nutricionales, problemas sanitarios o fallas de manejo. La correcta interpretación de los resultados permite implementar acciones orientadas a mejorar la productividad, reducir costos y fortalecer el bienestar animal.
      Separador
      //- Inicio Tema6.5
      .row
        #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.5 Indicadores de alimentación
      p(data-aos="fade-left") Los indicadores de alimentación son herramientas utilizadas para medir el desempeño nutricional de los animales y evaluar la eficacia de los programas alimenticios implementados en la explotación.
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
                          img(src='@/assets/curso/temas/t6/tarjeta02_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Consumo de materia seca
                            p Evalúa la ingestión real de nutrientes y orienta ajustes en la dieta.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta02_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Producción de leche
                            p Permite medir la respuesta productiva del animal o del lote.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta02_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Ganancia diaria de peso
                            p Valora el crecimiento y la eficiencia del sistema.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta02_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Conversión alimenticia
                            p Determina la relación entre alimento consumido y producto obtenido.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta02_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Condición corporal
                            p Evalúa el estado nutricional y energético del animal.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta02_6.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Consumo de agua
                            p Permite verificar condiciones adecuadas de hidratación y bienestar.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta02_7.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Costos de alimentación
                            p Facilita el análisis de la rentabilidad del programa nutricional.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t6/img7.png', style="width: 500px", data-aos="zoom-in").m-auto                
            p(data-aos="fade-left") El seguimiento de estos indicadores permite detectar problemas oportunamente y mejorar la toma de decisiones dentro de la explotación.
      Separador
      //- Inicio Tema6.6
      .row
        #t_6_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.6 Métodos de seguimiento
      p(data-aos="fade-left") El seguimiento alimenticio consiste en recopilar información periódica relacionada con la alimentación, el consumo y los resultados productivos. La información obtenida permite establecer tendencias y evaluar la evolución de los animales a lo largo del tiempo.
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width.mt-5
              .px-4.px-md-5.pb-md-3             
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-8.mb-3.mb-lg-0.order-lg-1
                      SlyderF(columnas="col-xl-6 col-lg-6")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta03_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Observación directa
                            p Permite valorar el comportamiento alimenticio y detectar alteraciones en el consumo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta03_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Registros alimenticios
                            p Facilitan el control de las cantidades suministradas y consumidas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta03_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Pesaje de animales
                            p Evalúa el crecimiento y la ganancia de peso mediante mediciones periódicas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta03_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Evaluación de la condición corporal
                            p Permite valorar el estado nutricional del animal.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta03_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Control de la producción láctea
                            p Determina el rendimiento productivo y su relación con la alimentación.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta03_6.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Inventarios alimenticios
                            p Verifican la disponibilidad de recursos y favorecen la planificación.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta03_7.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Evaluación de la calidad del agua
                            p Permite controlar condiciones sanitarias y garantizar el bienestar animal.
                    .col-lg-4.order-lg-2.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t6/img8.png', style="width: 500px", data-aos="zoom-in").m-auto                
            Separador
            //- Inicio Tema6.7
            .row
              #t_6_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 6.7 Control de procesos
            .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-left")
              .bloque-texto-g__img(
                :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t6/img9.png')})` }")
              .bloque-texto-g__texto.p-4
                p.mb-0 El control de procesos consiste en verificar que todas las actividades relacionadas con la alimentación se desarrollen correctamente y de acuerdo con los procedimientos establecidos. Este control incluye el manejo de praderas, bancos de proteína, sistemas silvopastoriles, suplementación, almacenamiento de alimentos, conservación de forrajes, suministro de agua y manejo de comederos y bebederos. Las Buenas Prácticas Ganaderas exigen que estas actividades sean monitoreadas permanentemente para prevenir riesgos sanitarios, nutricionales y ambientales.
            p(data-aos="fade-left") Como parte de este proceso, es necesario verificar periódicamente los resultados obtenidos y compararlos con los objetivos definidos dentro del plan de alimentación. Para ello, se analizan indicadores relacionados con la producción de leche, la ganancia de peso, la condición corporal, la eficiencia reproductiva y el consumo de alimento. Cuando los resultados no cumplen las metas propuestas, deben identificarse las causas y establecerse acciones de mejora orientadas a optimizar el desempeño del sistema productivo.
      .row.mb-5.justify-content-center.align-items-start
        .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0.text-center
            img(src='@/assets/curso/temas/t6/img10.png' style="width: 470px").m-auto
        .col-12.col-lg-7.order-2.order-lg-1.bg-color-6.p-4(data-aos="fade-right")          
          p.mb-0 Con el fin de facilitar la toma de decisiones, se presentan algunas situaciones frecuentes y las medidas que pueden implementarse para corregirlas oportunamente: 
            ul.lista-ul.color-vinotinto-custom.mb-0.ps-4.pb-1
              li.d-flex.mt-3
                .fas.fa-carrot.me-3
                span <b>Bajo consumo de alimento:</b> revisar la calidad del forraje y ajustar la dieta suministrada. 
              li.d-flex
                .fas.fa-carrot.me-3
                span <b>Pérdida de peso:</b> evaluar posibles deficiencias nutricionales e incrementar la suplementación cuando sea necesario. 
              li.d-flex
                .fas.fa-carrot.me-3
                span <b>Baja producción de leche:</b> reformular las raciones para corregir desequilibrios energéticos o proteicos. 
              li.d-flex
                .fas.fa-carrot.me-3
                span <b>Deterioro de la condición corporal:</b> incrementar la oferta alimenticia y revisar el acceso al alimento. 
              li.d-flex
                .fas.fa-carrot.me-3
                span <b>Desperdicio de alimento:</b> mejorar el manejo y diseño de los comederos. 
              li.d-flex
                .fas.fa-carrot.me-3
                span <b>Bajo consumo de agua:</b> verificar la calidad del agua y las condiciones de acceso a los bebederos. 
              li.d-flex
                .fas.fa-carrot.me-3
                span <b>Estrés térmico:</b> implementar estrategias de mitigación, como sistemas silvopastoriles que proporcionen sombra y confort.
      p(data-aos="fade-left") La información derivada del control de procesos permite ajustar oportunamente los programas de alimentación, optimizar el uso de los recursos disponibles y fortalecer la productividad, el bienestar animal y la sostenibilidad de los sistemas bovinos.
</template>

<script>
import podcast1 from '@/assets/curso/temas/audio/podcast1.mp3'
export default {
  name: 'Tema6',
  data: () => ({
    podcast1,
    mostrarIndicadorTarjetaAudio: true,
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

