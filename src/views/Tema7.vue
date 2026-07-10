<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 7
        h1 Evaluación del cumplimiento y mejora continua
      p(data-aos="fade-left") La evaluación del cumplimiento y la mejora continua constituyen procesos fundamentales dentro de los sistemas de producción bovina orientados por las Buenas Prácticas de Alimentación (BPA) y las Buenas Prácticas Ganaderas (BPG). Su propósito es verificar que las actividades planificadas se ejecuten de manera adecuada, eficiente y conforme a la normatividad vigente, al tiempo que promueven la optimización permanente de los procesos productivos.
      .row.mb-5.justify-content-center.align-items-start
        .col-12.col-sm-9.col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0.text-center
            img(src='@/assets/curso/temas/t6/img6.png' style="width: 650px").m-auto
        .col-12.col-lg-6.order-2.order-lg-1(data-aos="fade-right")
          p.bg-color-2.p-4 La información obtenida debe registrarse y analizarse de forma continua para identificar posibles desviaciones y aplicar medidas correctivas oportunamente. Esta práctica forma parte de los requisitos de las Buenas Prácticas Ganaderas y de los sistemas de aseguramiento de la calidad.
          p.mb-0 Cuando los indicadores se encuentran dentro de los rangos esperados, se considera que la dieta está cubriendo adecuadamente los requerimientos nutricionales. Por el contrario, disminuciones en el consumo, pérdida de peso, baja producción de leche o deterioro de la condición corporal pueden indicar deficiencias nutricionales, problemas sanitarios o fallas de manejo. L      
      Separador
      //- Inicio Tema7.1
      .row
        #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.1 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

      Separador
      //- Inicio Tema7.2
      .row
        #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.2 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

      Separador
      //- Inicio Tema7.3
      .row
        #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.3 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

      Separador
      //- Inicio Tema7.4
      .row
        #t_7_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.4 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

      Separador
      //- Inicio Tema7.5
      .row
        #t_7_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.5 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

</template>

<script>
export default {
  name: 'Tema7',
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
