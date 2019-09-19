
/*
1. Función que muestra y esconde la sección para hacer comentarios 
   al hacer click el botón 'Escribe una reseña'. 
   on click!
   (5 puntos)
*/


$( "#escribe_reseña" ).on('click', function(event)
{
  $("#seccion_comentario").removeClass('done')

})


/*
2. Cargar los comentarios de el archivo comentarios.xml o bien de 
  https://tc2026daw.github.io/instrucciones/misc/comentarios.xml 
  (función ajax, 25 puntos)
*/
$.ajax({
  url : 'https://tc2026daw.github.io/instrucciones/misc/comentarios.xml',
  type : 'GET',
  dataType : 'xml',
  success : function(data){
     // console.log(data)

      let newHtml = ''
      let newHtml2 =''
      $(data).find('comments').find('comment').each(function(){
          newHtml +=
          `
              <h4>
              ${$(this).find('name').text()}
              </h4>
          `
          newHtml+=getStarsSpans(parseInt($(this).find('stars').text()))
          newHtml +=
         ` <p>
              ${$(this).find('text').text()}
              </p>`
          console.log(parseInt($(this).find('stars').text()))
      })
      

      $('#seccion_reviews').append(newHtml)
  
  },
  error : function(errorMsg){
      console.log(errorMsg)
  }

})


/*
3. Funcion que apendiza el nuevo comentario al darle click a PUBLICAR
  on click!
  (función, 35 puntos)
  
*/
$( "#btn-publicar" ).click(function() {
  //$(#seccion_comentario).addClass("remove")
  console.log("hola2")
  var nombre = $('#nombre').val();
  var comentario = $('#comentario').val();
  var email = $('#email').val();
  let newHtml= ''
  if(nombre!='' && comentario !='' && email !='' && stars !=0)
  {
  newHtml +=
  `
      <h4>
      ${nombre}
      </h4>
  `
  newHtml+=getStarsSpans(stars)
  newHtml +=
      ` <p>
      ${comentario}
      </p>`

      $('#seccion_reviews').append(newHtml)
  }

});


/*
4. Funcion que limpia el nombre, el email y el div "#comentarios" al darle
   click en "btn-limpiar" con leyenda de "CANCELAR"
   on click!
  (5 puntos)
*/


/*
Funcion que recibe un numero de stars y regresa los 5 spans 
que simbolizan las estrellas del rating. por ejemplo:
let stars = 3;
let html = getStarsSpans(stars);

html = '
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
'
*/
function getStarsSpans(stars) {
  let new_html = '';
  for( let i = 0; i < stars; i++) {
    new_html += `
      <span class="fa fa-star checked"></span>
    `;
  }

  for ( let i = 0; i < 5 - stars; i++ ) {
    new_html += `
      <span class="fa fa-star"></span>
    `;
  }

  return new_html;
}


var stars= 0
  $('input[name$="rating"]').click(function() {
      stars =$(this).val()
          console.log(stars)
  });

$( "#btn-limpiar" ).on('click', function(event)
{
    let newHtml = ''
    $('#clean').html('');
    newHtml =
    `
    <div class="input-container">
    <input type="text" id="nombre" placeholder="Nombre">
    </div>
    <div class="input-container">
    <input type="text" id="email" placeholder="email">
    </div>
    <div class="input-container" >
    <input type="text" name="" id="comentario"  placeholder="Escribe Sobre Tu Experiencia">
    </div>

    `
    $('#clean').append(newHtml)

})