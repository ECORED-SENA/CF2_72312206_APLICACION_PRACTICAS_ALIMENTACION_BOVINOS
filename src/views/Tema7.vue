<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 7
        h1 Planes de contingencia y mejora continua

      Separador
      //- Inicio Tema7.1
      .row
        #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.1 Situaciones que requieren medidas de contingencia

      Separador
      //- Inicio Tema7.2
      .row
        #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.2 Acciones de respuesta ante eventos que afectan la alimentación bovina

      Separador
      //- Inicio Tema7.3
      .row
        #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.3 Estrategias para garantizar la continuidad del suministro de alimentos y agua

      Separador
      //- Inicio Tema7.4
      .row
        #t_7_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.4 Registros y seguimiento de las acciones implementadas

      Separador
      //- Inicio Tema7.5
      .row
        #t_7_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.5 Evaluación y mejora continua del programa de alimentación

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
