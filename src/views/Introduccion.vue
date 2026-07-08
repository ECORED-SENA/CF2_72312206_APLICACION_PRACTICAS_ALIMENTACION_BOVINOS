<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p(data-aos="fade-left") La alimentación constituye uno de los pilares fundamentales de la producción bovina, debido a su influencia directa sobre la salud, el bienestar, la reproducción y el desempeño productivo de los animales. La adecuada selección y suministro de alimentos y agua permiten satisfacer los requerimientos nutricionales de cada etapa productiva, favoreciendo la eficiencia y sostenibilidad de los sistemas ganaderos.
      .row.justify-content-center.align-items-stretch.mb-2.g-0(data-aos="fade-right")
        .col-lg-5.d-flex
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/temas/intro/img1.png', alt='', style="object-fit: cover;")
        .col-lg-7.bg-color-2.d-flex.align-items-center.p-4.p-lg-5
          p.mb-0 En este componente formativo se abordan los principios relacionados con el manejo integral de la alimentación bovina, incluyendo las características de los alimentos y del agua, las Buenas Prácticas de Alimentación, la bioseguridad y las estrategias orientadas a garantizar el bienestar animal. Asimismo, se destacan los procedimientos de seguimiento y control necesarios para fortalecer la inocuidad y la calidad de los procesos productivos.
      p(data-aos="fade-left") El estudio de estos contenidos permitirá comprender la importancia de implementar programas de alimentación técnicamente planificados, apoyados en registros, medidas preventivas y planes de contingencia que faciliten la toma de decisiones y la mejora continua. De esta manera, se promueve una ganadería más eficiente, competitiva y comprometida con la sostenibilidad ambiental y el cumplimiento de la normativa vigente.
</template>
<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
