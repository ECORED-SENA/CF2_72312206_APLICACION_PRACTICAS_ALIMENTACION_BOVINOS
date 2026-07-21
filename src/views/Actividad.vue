<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Manejo integral de la alimentación bovina bajo buenas prácticas ganaderas',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> identificar los conceptos clave relacionados con la alimentación bovina, el manejo del agua, las buenas prácticas ganaderas y la sostenibilidad productiva.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué se entiende por alimento en la producción bovina?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Toda sustancia destinada únicamente al engorde de bovinos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Toda sustancia que aporta nutrientes para mantenimiento y producción.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Todo producto industrial utilizado en alimentación animal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Toda mezcla empleada exclusivamente en vacas lactantes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es la principal fuente de fibra efectiva para el funcionamiento del rumen?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los suplementos vitamínicos comerciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los concentrados energéticos procesados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los forrajes consumidos por los bovinos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Los bloques multinutricionales comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué característica presentan los sistemas silvopastoriles?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Integran exclusivamente animales y concentrados industriales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Funcionan únicamente en explotaciones intensivas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentan la dependencia de insumos externos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Integran árboles, pasturas y animales en producción.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál es la finalidad principal de los bancos de proteína?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir completamente el uso de forrajes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Disminuir el consumo voluntario del ganado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Complementar la dieta con alto aporte proteico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Incrementar el contenido de agua corporal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué estrategia permite almacenar nutrientes para épocas de escasez?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El uso exclusivo de suplementos minerales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La eliminación del pastoreo racional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La reducción del consumo hídrico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La utilización de alimentos conservados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué característica física del alimento ayuda a detectar fermentaciones inadecuadas?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La disponibilidad permanente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El olor propio del alimento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La edad del animal consumidor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La condición reproductiva del hato.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es uno de los efectos de una adecuada alimentación bovina?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminuir la eficiencia reproductiva del hato.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementar la aparición de enfermedades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Favorecer la producción de leche y carne.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir la longevidad productiva animal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es el nutriente más importante en la producción bovina?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La proteína vegetal suplementaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los minerales traza esenciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los concentrados energéticos comerciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El agua para consumo animal.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué característica debe tener el agua destinada al consumo bovino?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presentar olores fuertes característicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantener partículas suspendidas visibles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estar libre de contaminantes peligrosos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Contener residuos orgánicos aprovechables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué parámetro microbiológico indica contaminación fecal reciente?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los sulfatos presentes en el agua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La dureza total del recurso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los cloruros disueltos naturalmente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La presencia de <i>Escherichia coli.</i>',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué categoría animal presenta mayores requerimientos de agua?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los terneros recién nacidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las novillas en crecimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las vacas lactantes en producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los bovinos de reemplazo temprano.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué acción favorece el manejo adecuado del agua?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Restringir el acceso a los bebederos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ubicar los bebederos en sitios inaccesibles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar la limpieza periódica programada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Realizar limpieza frecuente de bebederos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué son las buenas prácticas de alimentación?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Medidas orientadas únicamente al control económico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Actividades exclusivas para sistemas intensivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Procedimientos que garantizan alimentos inocuos y suficientes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Normas destinadas solo a vacas lecheras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué riesgo se asocia con alimentos mal almacenados?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El incremento de la biodiversidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La disminución del estrés térmico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La mejora del bienestar animal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La presencia de micotoxinas perjudiciales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Cuál es uno de los principios de las BPA?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir permanentemente el acceso al agua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar el registro de actividades alimenticias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Garantizar la inocuidad alimentaria del sistema.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar la evaluación de resultados productivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué característica presentan las BPA?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Son improvisadas y ocasionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No requieren documentación alguna.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Impiden adaptaciones regionales necesarias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Deben ser planificadas y organizadas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué resolución establece requisitos para predios productores de leche?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La Resolución ICA 115708 de 2021.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La Resolución ICA 068167 de 2020.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las normas internacionales de comercio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La Resolución ICA 067449 de 2020.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es la finalidad del registro de suministro de alimentos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la trazabilidad del proceso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Controlar únicamente costos sanitarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir el número de animales registrados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registrar cantidades y responsables del suministro.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué objetivo tienen los planes de alimentación?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar desperdicios alimenticios del sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Limitar el bienestar de los bovinos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Satisfacer requerimientos nutricionales del hato.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir la evaluación del desempeño productivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Qué permite el seguimiento y evaluación alimenticia?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar las desviaciones nutricionales detectadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar el uso de registros técnicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Disminuir la productividad del sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Realizar ajustes para mejorar continuamente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
