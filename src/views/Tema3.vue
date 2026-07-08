<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Buenas Prácticas de Alimentación

      Separador
      //- Inicio Tema3.1
      .row
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Planificación nutricional

      Separador
      //- Inicio Tema3.2
      .row
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Producción y manejo de forrajes

      Separador
      //- Inicio Tema3.3
      .row
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Selección de materias primas

      Separador
      //- Inicio Tema3.4
      .row
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.4 Compra y recepción de insumos          

      Separador
      //- Inicio Tema3.5
      .row
        #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.5 Transporte de alimentos

      Separador
      //- Inicio Tema3.6
      .row
        #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.6 Almacenamiento y conservación

      Separador
      //- Inicio Tema3.7
      .row
        #t_3_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.7 Preparación y suministro de raciones

      Separador
      //- Inicio Tema3.8
      .row
        #t_3_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.8 Higiene y bioseguridad en la alimentación

      Separador
      //- Inicio Tema3.9
      .row
        #t_3_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.9 Registros y trazabilidad

      Separador
      //- Inicio Tema3.10
      .row
        #t_3_10.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.10 Monitoreo y evaluación del programa de alimentación

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
