<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Agua
      p(data-aos="fade-left") El agua es el nutriente más importante en la producción bovina, debido a que participa en todos los procesos fisiológicos del organismo, entre ellos la digestión, la fermentación ruminal, el transporte de nutrientes, la regulación de la temperatura corporal y la eliminación de desechos metabólicos. En los bovinos adultos representa entre el 55 % y el 70 % del peso corporal, mientras que en los animales jóvenes puede superar el 75 %.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Dado que la leche contiene aproximadamente un 87 % de agua, las vacas lactantes presentan elevados requerimientos hídricos. Por esta razón, cualquier disminución en su consumo afecta directamente la producción, la ganancia de peso, la reproducción y el estado general de salud de los animales.
      .row.mb-5.justify-content-center.align-items-start
        .col-12.col-sm-9.col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0.text-center
            img(src='@/assets/curso/temas/t2/img2.png' style="width: 650px").m-auto
        .col-12.col-lg-6.order-2.order-lg-1(data-aos="fade-right")
          p.bg-color-5.p-4 Además de su función nutricional, el agua constituye un elemento fundamental para el bienestar animal y la sostenibilidad de los sistemas productivos. El acceso permanente a agua limpia, fresca y de buena calidad contribuye a reducir el estrés térmico, favorecer el consumo de alimento y mejorar el desempeño productivo.          
          p.p-4.mb-0 En este sentido, las buenas prácticas ganaderas (BPG) y las Resoluciones ICA 067449 de 2020, 068167 de 2020 y 115708 de 2021 establecen la obligación de garantizar su disponibilidad continua, así como la protección de las fuentes hídricas. De igual manera, estrategias como los sistemas silvopastoriles, la conservación de cuencas y el uso eficiente del recurso hídrico fortalecen una ganadería más sostenible, rentable y comprometida con el bienestar de los bovinos.
      Separador
      //- Inicio Tema2.1
      .row
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Características
      p(data-aos="fade-left") El agua destinada al consumo animal debe reunir condiciones físicas, químicas, microbiológicas y sanitarias que permitan preservar la salud de los bovinos y garantizar la inocuidad de los productos de origen animal. Las principales características que deben verificarse se describen a continuación.
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t2/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Limpieza
                p Debe estar libre de residuos orgánicos, excretas, lodos, restos de alimento y otros materiales extraños. Esta condición reduce la proliferación de bacterias, hongos, algas y parásitos capaces de afectar la salud animal y disminuir el consumo voluntario.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Transparencia
                p Debe presentar apariencia clara y ausencia de partículas suspendidas. La turbidez puede indicar contaminación orgánica, presencia de sedimentos o proliferación de microorganismos que comprometen la calidad del agua.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Olor
                p Debe ser completamente inodora. Los olores desagradables pueden evidenciar contaminación microbiológica o la presencia de sustancias químicas que reducen el consumo.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Sabor
                p Debe resultar aceptable para los animales. Las alteraciones ocasionadas por sales, minerales o contaminantes disminuyen la palatabilidad y pueden afectar la productividad.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Temperatura
                p En condiciones tropicales, los bovinos prefieren agua fresca entre 15 °C y 25 °C. Esta característica influye sobre el consumo, el confort y la regulación térmica; temperaturas elevadas incrementan el riesgo de estrés calórico.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Disponibilidad permanente
                p Debe existir suministro continuo durante las veinticuatro horas del día. Su cumplimiento evita la deshidratación, la disminución del consumo de alimento, el estrés y las pérdidas productivas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Accesibilidad
                p Los animales deben acceder fácilmente a los puntos de abastecimiento. Esto reduce la competencia, evita desplazamientos excesivos y favorece el consumo adecuado de todos los individuos del hato.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_8.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Inocuidad
                p El agua debe estar libre de contaminantes físicos, químicos y microbiológicos. Esta condición protege la salud animal y contribuye a la inocuidad de los productos destinados al consumo humano.
      //- Fin Slideshow
      p La verificación periódica de estas características debe complementarse con programas de limpieza y mantenimiento de los bebederos, como parte de las medidas preventivas contempladas en las buenas prácticas ganaderas.
      Separador
      //- Inicio Tema2.2
      .row
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Calidad del agua
      p(data-aos="fade-left") La calidad del agua constituye uno de los aspectos más relevantes dentro de los programas de alimentación, bienestar animal y buenas prácticas ganaderas, debido a su influencia directa sobre la salud y el desempeño de los bovinos. Un agua de buena calidad favorece:
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-12.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
            ul.lista-ul.color-vinotinto-custom.mb-0
              li.d-flex
                .fas.fa-carrot.me-3
                span Mayor consumo de alimento.
              li.d-flex
                .fas.fa-carrot.me-3
                span Mejor digestibilidad de los nutrientes.
              li.d-flex
                .fas.fa-carrot.me-3
                span Mayor producción de leche.
              li.d-flex
                .fas.fa-carrot.me-3
                span Mayor ganancia diaria de peso.
              li.d-flex
                .fas.fa-carrot.me-3
                span Mejor fertilidad.
              li.d-flex
                .fas.fa-carrot.me-3
                span Menor incidencia de enfermedades.
              li.d-flex
                .fas.fa-carrot.me-3
                span Mayor eficiencia productiva.
              li.d-flex
                .fas.fa-carrot.me-3
                span Mejor bienestar animal.
        .col-12.col-md-12.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t2/img3.png", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .bg-color-4.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 La calidad del agua destinada al consumo animal debe evaluarse a partir de parámetros físicos, químicos y microbiológicos, complementados con medidas orientadas a la protección de las fuentes hídricas. La valoración periódica de estos aspectos permite identificar riesgos potenciales, prevenir problemas sanitarios y garantizar condiciones adecuadas para la salud, el bienestar y la productividad de los bovinos.
      p(data-aos="fade-left") Las características físicas del agua constituyen los primeros indicadores de calidad y permiten identificar alteraciones que pueden afectar su aceptación por parte de los animales y su aptitud para el consumo. Su evaluación periódica facilita la detección temprana de posibles fuentes de contaminación y contribuye a mantener condiciones adecuadas de hidratación y bienestar animal.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
              //- Inicio Tabla
              .row.justify-content-center
                .col-md-auto.col-lg-12
                  .titulo-sexto.color-acento-contenido.mb-3
                    h5 Tabla 1.
                    span  Calidad física del agua
                  .tabla-a
                    table
                      thead
                        tr
                          th(style="width: 20%") Parámetro
                          th(style="width: 40%") Descripción
                          th(style="width: 40%") Impacto en bovinos y el sistema productivo
                      tbody
                        tr
                          td Color
                          td El agua debe ser transparente e incolora.
                          td Cambios pueden indicar contaminación o presencia excesiva de minerales.
                        tr
                          td Olor
                          td Debe ser neutro y sin olores extraños.
                          td Alteraciones sugieren contaminación o procesos de fermentación.
                        tr
                          td Sabor
                          td Debe resultar aceptable para los animales.
                          td Influye directamente sobre el consumo voluntario.
                        tr
                          td Temperatura
                          td Condiciona el consumo y la regulación térmica.
                          td Afecta la hidratación y el confort animal.
                        tr
                          td Turbidez
                          td Presencia de partículas suspendidas.
                          td Puede indicar contaminación orgánica o inorgánica.
              //- FinTabla
      p(data-aos="fade-left") La composición química del agua influye directamente sobre el consumo, el metabolismo y el desempeño productivo de los bovinos. Por esta razón, es necesario controlar aquellos componentes cuya presencia en concentraciones inadecuadas pueda comprometer la salud animal o disminuir la eficiencia del sistema productivo.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
              //- Inicio Tabla
              .row.justify-content-center
                .col-md-auto.col-lg-12
                  .titulo-sexto.color-acento-contenido.mb-3
                    h5 Tabla 2.
                    span  Calidad química del agua
                  .tabla-a
                    table
                      thead
                        tr
                          th(style="width: 20%") Parámetro
                          th(style="width: 40%") Descripción
                          th(style="width: 40%") Impacto en bovinos y el sistema productivo
                      tbody
                        tr
                          td pH
                          td Determina el nivel de acidez o alcalinidad.
                          td Desequilibrios pueden afectar el metabolismo y el consumo.
                        tr
                          td Sales disueltas totales
                          td Corresponden a la concentración total de sales.
                          td Niveles elevados reducen el consumo y favorecen trastornos digestivos.
                        tr
                          td Nitratos y nitritos
                          td Generalmente asociados con fertilizantes y excretas.
                          td Pueden ocasionar intoxicaciones graves.
                        tr
                          td Sulfatos
                          td Minerales presentes de forma natural o por contaminación.
                          td Su exceso puede generar diarreas y bajo desempeño productivo.
                        tr
                          td Cloruros
                          td Sales minerales presentes en el agua.
                          td Modifican la palatabilidad.
                        tr
                          td Hierro y manganeso
                          td Minerales naturales del recurso hídrico.
                          td Alteran el sabor, el color y la calidad general.
                        tr
                          td Dureza total
                          td Concentración de calcio y magnesio.
                          td Influye en la aceptación del agua.
              //- FinTabla
      p(data-aos="fade-left") La evaluación microbiológica permite determinar la presencia de microorganismos asociados con contaminación ambiental o fecal. Este análisis es fundamental para prevenir enfermedades, proteger la salud del hato y garantizar la inocuidad de los productos de origen animal.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
              //- Inicio Tabla
              .row.justify-content-center
                .col-md-auto.col-lg-12
                  .titulo-sexto.color-acento-contenido.mb-3
                    h5 Tabla 3.
                    span  Calidad microbiológica del agua
                  .tabla-a
                    table
                      thead
                        tr
                          th(style="width: 20%") Parámetro
                          th(style="width: 40%") Descripción
                          th(style="width: 40%") Impacto en bovinos y el sistema productivo
                      tbody
                        tr
                          td Coliformes totales
                          td Indicadores de contaminación ambiental.
                          td Evidencian deficiencias higiénicas.
                        tr
                          td Coliformes fecales
                          td Asociados con contaminación por excretas.
                          td Representan un alto riesgo sanitario.
                        tr
                          td <i>Escherichia coli</i>
                          td Indicador de contaminación fecal reciente.
                          td Incrementa el riesgo de enfermedades infecciosas.
                        tr
                          td <i>Salmonella spp</i>
                          td Bacteria patógena.
                          td Puede ocasionar pérdidas sanitarias y productivas.
                        tr
                          td Otros microorganismos
                          td Bacterias, virus o protozoarios presentes según las condiciones locales.
                          td Su impacto depende del contexto epidemiológico y sanitario.
              //- FinTabla
              p.mt-5(data-aos="fade-left") La conservación de las fuentes de abastecimiento constituye una estrategia esencial para mantener la disponibilidad y calidad del recurso hídrico. La implementación de medidas preventivas reduce el riesgo de contaminación y favorece la sostenibilidad ambiental de los sistemas de producción bovina.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
              //- Inicio Tabla
              .row.justify-content-center
                .col-md-auto.col-lg-12
                  .titulo-sexto.color-acento-contenido.mb-3
                    h5 Tabla 4.
                    span  Protección de las fuentes hídricas
                  .tabla-a
                    table
                      thead
                        tr
                          th(style="width: 20%") Parámetro
                          th(style="width: 40%") Descripción
                          th(style="width: 40%") Impacto en bovinos y el sistema productivo
                      tbody
                        tr
                          td Cercado de nacimientos
                          td Protección física de las fuentes de abastecimiento.
                          td Evita la contaminación directa por los animales.
                        tr
                          td Protección de quebradas
                          td Conservación de cuerpos de agua superficiales.
                          td Mantiene la calidad y disponibilidad del recurso.
                        tr
                          td Bosques ribereños
                          td Conservación de la vegetación en las riberas.
                          td Reduce la erosión y limita el aporte de contaminantes.
                        tr
                          td Manejo de residuos
                          td Disposición adecuada de desechos.
                          td Previene la contaminación hídrica.
                        tr
                          td Control de vertimientos
                          td Regulación de descargas contaminantes.
                          td Protege la calidad del agua.
                        tr
                          td Protección de humedales
                          td Conservación de ecosistemas acuáticos.
                          td Favorece el equilibrio ecológico.
                        tr
                          td Sistemas silvopastoriles
                          td Integración de árboles y pasturas.
                          td Mejora la infiltración y disminuye la erosión.
                        tr
                          td Áreas de recarga hídrica
                          td Conservación de zonas de infiltración.
                          td Contribuye a garantizar la disponibilidad futura del recurso.
              //- FinTabla              
      p(data-aos="fade-left") La evaluación integral de estos parámetros y la implementación de medidas de protección contribuyen a preservar la calidad del recurso hídrico, fortalecer el bienestar animal y favorecer sistemas bovinos más eficientes, sostenibles y alineados con las buenas prácticas ganaderas.
      Separador
      //- Inicio Tema2.3
      .row
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.3 Requerimientos según la etapa productiva
      p(data-aos="fade-left") Los requerimientos de agua dependen de múltiples factores relacionados con el animal, el ambiente y el sistema de producción. Entre los más importantes se encuentran la edad, el peso corporal, el nivel de producción de leche, el estado fisiológico, la temperatura ambiental, el tipo de alimentación, la humedad relativa, la actividad física y el estado sanitario. De acuerdo con la etapa productiva, las necesidades hídricas presentan variaciones significativas.
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
          TabsC.color-acento-contenido
            .py-3.py-md-4(titulo="Terneros")
              .row.align-items-center
                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/t2/tarjeta01_1.png')
                .col-md-6.mb-4.mb-md-0
                  h4 Terneros
                  p Deben tener acceso al agua desde los primeros días de vida, ya que su consumo favorece el desarrollo del rumen y estimula la ingestión temprana de alimentos sólidos. El consumo aproximado oscila entre <b>5 y 20 litros diarios.</b>
            .py-3.py-md-4(titulo="Novillas en crecimiento")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t2/tarjeta01_2.png')
                .col-md-6
                  h4 Novillas en crecimiento
                  p El agua es indispensable para sostener el desarrollo corporal y favorecer la preparación reproductiva. Su consumo aproximado se encuentra entre <b>20 y 40 litros diarios.</b>
            .py-3.py-md-4(titulo="Vacas secas")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t2/tarjeta01_3.png')
                .col-md-6
                  h4 Vacas secas
                  p Requieren mantener una adecuada hidratación para conservar sus funciones fisiológicas y prepararse para el siguiente ciclo productivo. El consumo aproximado varía entre <b>40 y 60 litros diarios.</b>
            .py-3.py-md-4(titulo="Vacas lactantes")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t2/tarjeta01_4.png')
                .col-md-6
                  h4 Vacas lactantes
                  p Presentan los mayores requerimientos debido a la elevada demanda asociada con la producción de leche. Por cada litro de leche producido pueden requerirse entre <b>3 y 5 litros adicionales de agua</b>, alcanzando consumos aproximados de <b>60 a 120 litros diarios o más.</b>
            .py-3.py-md-4(titulo="Bovinos de ceba")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t2/tarjeta01_5.png')
                .col-md-6
                  h4 Bovinos de ceba
                  p El consumo depende del peso corporal, el tipo de dieta suministrada y las condiciones climáticas. En términos generales, el consumo aproximado oscila entre <b>30 y 70 litros diarios.</b>
      //- Cierres Pestanas horizontales
      .row.mb-5.justify-content-center.align-items-start
        .col-12.col-sm-9.col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0.text-center
            img(src='@/assets/curso/temas/t2/img4.png' style="width: 650px").m-auto
        .col-12.col-lg-6.order-2.order-lg-1.bg-color-4(data-aos="fade-right")          
          p.p-3.mb-0 Estas cantidades corresponden a valores aproximados y pueden modificarse según las condiciones específicas de cada explotación. Diversos factores influyen sobre el patrón de consumo hídrico de los bovinos, entre ellos:
            ul.lista-ul.color-vinotinto-custom.mb-0.ps-4.pb-1
              li.d-flex
                .fas.fa-carrot.me-3
                span Temperatura ambiental
              li.d-flex
                .fas.fa-carrot.me-3
                span Humedad relativa
              li.d-flex
                .fas.fa-carrot.me-3
                span Radiación solar
              li.d-flex
                .fas.fa-carrot.me-3
                span Tipo de dieta
              li.d-flex
                .fas.fa-carrot.me-3
                span Contenido de sal en los alimentos
              li.d-flex
                .fas.fa-carrot.me-3
                span Nivel productivo
              li.d-flex
                .fas.fa-carrot.me-3
                span Estado sanitario
              li.d-flex
                .fas.fa-carrot.me-3
                span Disponibilidad de sombra
              li.d-flex
                .fas.fa-carrot.me-3
                span Distancia hacia los bebederos
      p(data-aos="fade-left") La presencia de árboles en sistemas silvopastoriles contribuye a disminuir el estrés térmico y favorece patrones de consumo más estables, especialmente durante períodos de altas temperaturas.
      Separador
      //- Inicio Tema2.4
      .row
        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.4 Manejo y suministro
      p(data-aos="fade-left") El manejo adecuado del agua constituye una de las responsabilidades fundamentales dentro de los sistemas de producción bovina, debido a su impacto sobre la salud, el bienestar animal y la productividad del hato. Para garantizar un suministro eficiente del recurso hídrico, deben considerarse los siguientes aspectos:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-3
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                 img(src='@/assets/curso/temas/t2/tarjeta03_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ubicación de los bebederos
                p Los puntos de abastecimiento deben situarse en lugares estratégicos que faciliten el acceso de todos los animales y reduzcan desplazamientos innecesarios.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta03_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Limpieza de bebederos
                p La limpieza frecuente evita la acumulación de sedimentos, algas y microorganismos patógenos. Se recomienda establecer cronogramas periódicos de lavado y desinfección.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta03_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Protección de fuentes de abastecimiento
                p Las fuentes naturales deben protegerse frente a excretas, agroquímicos, fertilizantes, combustibles, residuos sólidos y el ingreso de animales enfermos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta03_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Monitoreo del consumo
                p El registro del consumo permite identificar tempranamente problemas sanitarios, nutricionales o relacionados con el manejo. Reducciones repentinas pueden constituir indicadores iniciales de enfermedad o estrés.
      //- Fin Slideshow
      p(data-aos="fade-left") El acceso permanente a agua limpia constituye una de las libertades fundamentales reconocidas internacionalmente dentro del bienestar animal. En consecuencia, los bovinos deben mantenerse libres de sed, deshidratación y restricciones que limiten el aprovechamiento del recurso hídrico.
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-lg-6.order-2.order-lg-2(data-aos="fade-right")          
          p.p-3.mb-0 En el marco de las buenas prácticas ganaderas (BPG), la gestión del agua debe incorporar procedimientos orientados a la prevención, el control y la sostenibilidad ambiental. Entre las acciones más relevantes se encuentran:
            ul.lista-ul.color-vinotinto-custom.mb-0.ps-4.pb-1.bg-color-4.p-4
              li.d-flex
                .fas.fa-carrot.me-3
                span Inventario de fuentes hídricas.
              li.d-flex
                .fas.fa-carrot.me-3
                span Evaluación periódica de la calidad del agua.
              li.d-flex
                .fas.fa-carrot.me-3
                span Programas de limpieza de bebederos.
              li.d-flex
                .fas.fa-carrot.me-3
                span Registros de mantenimiento.
              li.d-flex
                .fas.fa-carrot.me-3
                span Medidas de protección ambiental.
              li.d-flex
                .fas.fa-carrot.me-3
                span Planes de contingencia frente a sequías.
              li.d-flex
                .fas.fa-carrot.me-3
                span Protocolos de ahorro y uso eficiente del agua.
        .col-12.col-sm-9.col-lg-6.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0.text-center
            img(src='@/assets/curso/temas/t2/img5.png' style="width: 650px").m-auto                
      p(data-aos="fade-left") La adecuada gestión del recurso hídrico favorece la productividad, fortalece la sostenibilidad ambiental, promueve el bienestar animal y contribuye al cumplimiento de la normativa vigente aplicable a la producción bovina en Colombia.
</template>

<script>
export default {
  name: 'Tema2',
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
