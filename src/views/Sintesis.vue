<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .row.mb-5
        .col-12.ps-3(style="border-left: 10px solid #39A900;") 
          h3.mb-1 Aplicación de prácticas de alimentación en bovinos
          p.mb-0 
            | Síntesis:             
            | manejo integral de la alimentación bovina bajo Buenas Prácticas Ganaderas (BPG) y sostenibilidad productiva
      p.mt-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.

      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="Diagrama sobre manejo integral de la alimentación bovina bajo buenas prácticas ganaderas (BPG) y sostenibilidad productiva, con apartados de alimentación bovina, agua para consumo animal, buenas prácticas de alimentación, bienestar animal, bioseguridad e inocuidad, seguimiento y control, contingencia y mejora continua, y sostenibilidad productiva, organizados mediante categorías y subtemas relacionados con nutrición, manejo, prevención, monitoreo y uso eficiente de los recursos.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
