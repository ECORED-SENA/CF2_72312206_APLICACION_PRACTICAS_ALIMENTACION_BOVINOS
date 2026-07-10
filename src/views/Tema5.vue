<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Planes de alimentación
      p(data-aos="fade-left") Los planes de alimentación son herramientas técnicas de planificación que permiten organizar, programar y controlar el suministro de alimentos y agua a los bovinos de acuerdo con sus requerimientos nutricionales, estado fisiológico, nivel productivo y objetivos de producción. Constituyen un conjunto de estrategias diseñadas para garantizar que los animales reciban una dieta equilibrada, suficiente y adecuada durante todas las etapas de su vida productiva.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Un plan de alimentación no se limita a determinar qué alimentos ofrecer a los animales. También comprende la evaluación de los recursos disponibles, la estimación de las necesidades nutricionales, la programación de suplementaciones, la conservación de forrajes, el manejo de pasturas y la organización de los recursos alimenticios a lo largo del año.
      .row.mb-5.justify-content-center.align-items-start
        .col-12.col-sm-9.col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0.text-center
            img(src='@/assets/curso/temas/t5/img2.png' style="width: 650px").m-auto
        .col-12.col-lg-6.order-2.order-lg-1(data-aos="fade-right")
          p En los sistemas bovinos modernos, los planes de alimentación son fundamentales para optimizar la productividad, mejorar la eficiencia alimenticia y reducir los costos de producción. Una adecuada planificación permite anticiparse a periodos de escasez de forraje, minimizar los efectos de los fenómenos climáticos y garantizar la disponibilidad permanente de nutrientes para los animales.
          p.bg-color-2.p-3 Las Buenas Prácticas Ganaderas establecen que la alimentación debe planificarse de forma técnica y documentada, asegurando que cada categoría animal reciba una dieta acorde con sus necesidades. Asimismo, las Resoluciones ICA 067449 de 2020, 068167 de 2020 y 115708 de 2021 resaltan la importancia de garantizar el acceso permanente a alimentos y agua de calidad como parte de los principios de bienestar animal.
          p.mb-0 La implementación de planes alimenticios también favorece la sostenibilidad de la explotación mediante el uso racional de los recursos naturales, la incorporación de sistemas silvopastoriles, el establecimiento de bancos de proteína, la conservación de forrajes y el aprovechamiento de fuentes alternativas de alimentación adaptadas a las condiciones locales.
      Separador
      //- Inicio Tema5.1
      .row
        #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.1 Objetivos
      p Los planes de alimentación persiguen objetivos que abarcan dimensiones nutricionales, productivas, económicas, sanitarias, ambientales y de gestión. Su adecuada planificación permite garantizar el bienestar animal y optimizar el desempeño de los sistemas bovinos.
      //- Inicio Accordion
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3 
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t5/img3.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Satisfacer los requerimientos nutricionales")
                  p.mb-4 Garantizar que los animales reciban los nutrientes necesarios para cubrir las necesidades de mantenimiento, crecimiento, reproducción, gestación, lactancia y producción de carne, favoreciendo la expresión de su potencial genético y mejores resultados productivos.
              .row(titulo="Optimizar el uso de los recursos alimenticios")
                  p.mb-4 Reducir desperdicios y mejorar la eficiencia en el aprovechamiento de forrajes, suplementos y concentrados disponibles en la finca, contribuyendo a disminuir los costos de producción y aumentar la rentabilidad del sistema.
              .row(titulo="Prevenir problemas nutricionales y sanitarios")
                  p.mb-4 Evitar alteraciones nutricionales, metabólicas y reproductivas derivadas de dietas deficientes o desbalanceadas, fortaleciendo el sistema inmunológico, reduciendo la incidencia de enfermedades y favoreciendo la longevidad productiva.
              .row(titulo="Garantizar el bienestar animal")
                  p.mb-4 Asegurar que los bovinos permanezcan libres de hambre, sed y malnutrición mediante el acceso permanente a alimento y agua en cantidades suficientes y de buena calidad.
              .row(titulo="Fortalecer la sostenibilidad ambiental")
                  p.mb-4 Promover prácticas como sistemas silvopastoriles, bancos de proteína, conservación de forrajes, pastoreo racional, uso eficiente del agua, aprovechamiento de subproductos agroindustriales y protección de los recursos naturales.
              .row(titulo="Facilitar la toma de decisiones")
                  p.mb-4 Realizar seguimiento a indicadores productivos, económicos y nutricionales que permitan efectuar ajustes oportunos y mejorar continuamente el sistema de alimentación.
      //- Fin Accordion
      Separador
      //- Inicio Tema5.2
      .row
        #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.2 Componentes
      p(data-aos="fade-left") Un plan de alimentación está conformado por diversos elementos que interactúan entre sí para garantizar una adecuada nutrición de los animales y el cumplimiento de los objetivos productivos del sistema bovino.
      //- Linea de tiempo
      .row.justify-content-center
        .col-lg-10
          PasosA.color-acento-contenido.mb-4(tipo="n")
            .row.align-items-center
              .col-12.col-lg
                h4 Paso 1. Diagnóstico inicial
                p Permite evaluar las condiciones generales de la explotación, incluyendo inventario animal, recursos forrajeros, infraestructura, fuentes de agua, condiciones climáticas y objetivos productivos, constituyendo la base para la planificación.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta01_1.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta01_2.png').img125
              .col-12.col-lg.text-start
                h4 Paso 2. Clasificación de los animales
                p Facilita la agrupación de los bovinos según edad, peso, estado fisiológico y nivel productivo para formular dietas ajustadas a las necesidades de cada categoría.
            .row.align-items-center
              .col-12.col-lg
                h4 Paso 3. Determinación de requerimientos nutricionales
                p Permite calcular las necesidades de energía, proteína, fibra, minerales, vitaminas y agua para garantizar una nutrición adecuada.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta01_3.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta01_4.png').img125
              .col-12.col-lg.text-start
                h4 Paso 4. Inventario de recursos alimenticios
                p Identifica las pasturas, bancos de proteína, ensilajes, henos, suplementos y recursos alternativos disponibles, favoreciendo una planificación basada en recursos reales.
            .row.align-items-center
              .col-12.col-lg
                h5 Paso 5. Planificación de pasturas
                p Organiza el manejo de potreros, tiempos de ocupación y descanso, capacidad de carga y manejo de praderas para optimizar la producción de forraje.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta01_5.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta01_6.png').img125
              .col-12.col-lg.text-start
                h4 Paso 6. Programa de suplementación
                p Define el tipo, cantidad, frecuencia y forma de suministro de suplementos energéticos, proteicos, minerales o vitamínicos para complementar la dieta.
            .row.align-items-center
              .col-12.col-lg
                h4 Paso 7. Programa de conservación de forrajes
                p Incorpora estrategias como ensilaje y henificación para garantizar alimento durante periodos de escasez.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta01_7.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta01_8.png').img125
              .col-12.col-lg.text-start
                h4 Paso 8.  Plan de abastecimiento de agua
                p Asegura la disponibilidad permanente de agua limpia y de calidad para mantener la hidratación, la salud y la productividad del hato.
            .row.align-items-center
              .col-12.col-lg
                h4 Paso 9. Sistema de registros
                p Documenta consumos, inventarios, producción, costos y resultados, facilitando el control y la trazabilidad.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta01_9.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta01_10.png').img125
              .col-12.col-lg.text-start
                h4 Paso 10. Programa de evaluación y seguimiento
                p Utiliza indicadores técnicos y económicos para valorar la eficacia del plan y promover la mejora continua.
      //- Linea de tiempo
      p(data-aos="fade-left") La articulación de estos componentes permite desarrollar estrategias alimentarias coherentes con las condiciones de cada explotación y con los objetivos definidos para el sistema productivo.
      Separador
      //- Inicio Tema5.3
      .row
        #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.3 Aplicación
      p La aplicación de un plan de alimentación debe realizarse de manera organizada, continua y adaptada a las condiciones específicas de cada sistema productivo. Inicialmente, se deben determinar las necesidades nutricionales de los animales según su categoría y objetivo productivo. Posteriormente, se evalúan los recursos alimenticios disponibles y se diseñan las dietas que permitan cubrir dichos requerimientos de forma eficiente.
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img4.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 En los sistemas de producción bovina colombianos, la base de la alimentación suele estar constituida por pasturas, las cuales pueden complementarse mediante bancos de proteína, sistemas silvopastoriles, suplementos minerales, concentrados y fuentes alternativas de alimentación, de acuerdo con las necesidades particulares de cada explotación.
      .row.mb-5.justify-content-center.align-items-start
        .col-12.col-sm-9.col-lg-6.order-2.order-lg-1.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0.text-center
            img(src='@/assets/curso/temas/t5/img2.png' style="width: 650px").m-auto
        .col-12.col-lg-6.order-2.order-lg-2(data-aos="fade-right")
          p Durante la ejecución del plan es necesario monitorear permanentemente el consumo de alimento y agua, la condición corporal, la producción de leche, la ganancia de peso y los indicadores reproductivos. Esta información permite verificar si los objetivos nutricionales están siendo alcanzados y realizar ajustes oportunos cuando sea necesario.
          p.bg-color-4.p-3 La aplicación también incluye la planificación de reservas alimenticias para épocas críticas mediante la producción de ensilajes, henos y otros alimentos conservados. Esta estrategia resulta especialmente importante en regiones afectadas por periodos prolongados de sequía o variaciones climáticas extremas.
          p.mb-0 Asimismo, los sistemas silvopastoriles y los bancos de proteína constituyen herramientas de gran importancia dentro de los planes de alimentación modernos, debido a que aumentan la disponibilidad de nutrientes, mejoran el bienestar animal mediante la provisión de sombra y contribuyen a la sostenibilidad ambiental de la explotación.
</template>

<script>
export default {
  name: 'Tema5',
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
