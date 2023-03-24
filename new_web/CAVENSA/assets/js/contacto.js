function boton(){
    if(document.getElementById('enviar').getAttribute('disabled')){
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: '¡Debe llenar correctamente los campos para poder enviar un mensaje, su mensaje debe ser mayor a 60 caracteres!'
      })
    }
  }

  
    
      function enviarMail(){
        Email.send({
          SecureToken : "747fff1d-3d9b-4b6a-a5e7-75052eec29c6 ",
          To : 'manoloquerales14@gmail.com',
          From : "cavensacontacto1@gmail.com",
          Subject : document.getElementById('subject').value + document.getElementById('name').value + " desde la página de CAVENSA",
          Body : "Nombre: " + document.getElementById('name').value
          + "<br> Email: " + document.getElementById('email').value
          + "<br> Mensaje: " + document.getElementById('message').value
        })
        if(message){
           Swal.fire({
            icon: 'success',
            title: 'Correcto...',
            text: '¡El mensaje fue enviado con éxito, gracias por contactarte con nosotros. Pronto te responderemos.'
          })
        }else{
           Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El mensaje no pudo ser enviado, por favor intente de nuevo más tarde...'
          })
        }
      }          
      


  function validacion(){

      if(document.getElementById('name').value ==="" || document.getElementById('email').value ==="" || document.getElementById('message').value ==="" || document.getElementById('message').value.length < 60){
        document.getElementById('enviar').setAttribute('disabled', 'true');
      }else{
        document.getElementById('enviar').removeAttribute('disabled');
      }
      
      
    }    
    
    
    const myModal = document.querySelector('#solicitar')

    myModal.addEventListener('hidden.bs.modal', event => {
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";
    })

  function titulo(value){
    if(value == 'precios'){
        document.getElementById('tituloModal').innerHTML = 'Solicitar lista de precios'
        if(document.getElementById('producto').value == "esparragoE"){
          document.getElementById('subject').value = 'Mensaje de solicitud de lista de precios de los Esp. Doble Rosca Estándar por '
        }else{
          if(document.getElementById('producto').value == "esparragoS"){
            document.getElementById('subject').value = 'Mensaje de solicitud de lista de precios de los Esp. Doble Rosca Sobremedida por '
          }else{
            if(document.getElementById('producto').value == "tornillo"){
              document.getElementById('subject').value = 'Mensaje de solicitud de lista de precios de los Tornillos por '
            }else{
              if(document.getElementById('producto').value == "cono"){
                document.getElementById('subject').value = 'Mensaje de solicitud de lista de precios de los Conos por '
              }else{
                if(document.getElementById('producto').value == "tuerca"){
                  document.getElementById('subject').value = 'Mensaje de solicitud de lista de precios de las Tuercas por '
                }else{
                  if(document.getElementById('producto').value == "guiaResorte"){
                    document.getElementById('subject').value = 'Mensaje de solicitud de lista de precios de las Guias de Resorte por '
                  }else{
                    if(document.getElementById('producto').value == "torreBujia"){
                      document.getElementById('subject').value = 'Mensaje de solicitud de lista de precios de las Torres de Bujia por '
                    }
                  }
                }
              }
            }
          }
        }
    }else{
        if(value == 'medidas'){
            document.getElementById('tituloModal').innerHTML = 'Solicitar lista de medidas'
            if(document.getElementById('producto').value == "esparragoE"){
              document.getElementById('subject').value = 'Mensaje de solicitud de lista de medidas de los Esp. Doble Rosca Estándar por '
            }else{
              if(document.getElementById('producto').value == "esparragoS"){
                document.getElementById('subject').value = 'Mensaje de solicitud de lista de medidas de los Esp. Doble Rosca Sobremedida por '
              }else{
                if(document.getElementById('producto').value == "tornillo"){
                  document.getElementById('subject').value = 'Mensaje de solicitud de lista de medidas de los Tornillos por '
                }else{
                  if(document.getElementById('producto').value == "cono"){
                    document.getElementById('subject').value = 'Mensaje de solicitud de lista de medidas de los Conos por '
                  }else{
                    if(document.getElementById('producto').value == "tuerca"){
                      document.getElementById('subject').value = 'Mensaje de solicitud de lista de medidas de las Tuercas por '
                    }else{
                      if(document.getElementById('producto').value == "guiaResorte"){
                        document.getElementById('subject').value = 'Mensaje de solicitud de lista de medidas de las Guias de Resorte por '
                      }else{
                        if(document.getElementById('producto').value == "torreBujia"){
                          document.getElementById('subject').value = 'Mensaje de solicitud de lista de medidas de las Torres de Bujia por '
                        }
                      }
                    }
                  }
                }
              }
            }
        }else{
          if(value == 'pavonado'){
            document.getElementById('tituloModal').innerHTML = 'Solicitar información del servicio de pavonado'
            document.getElementById('subject').value = 'Mensaje de solicitud de información del servicio de pavonado por '
          }else{
            if(value == 'galvanizado'){
              document.getElementById('tituloModal').innerHTML = 'Solicitar información del servicio de galvanizado'
              document.getElementById('subject').value = 'Mensaje de solicitud de información del servicio de galvanizado por '
            }else{
              if(value == 'mecanizado'){
                document.getElementById('tituloModal').innerHTML = 'Solicitar información del servicio de mecanizado'
                document.getElementById('subject').value = 'Mensaje de solicitud de información del servicio de mecanizado por '
              }
            }
          }
        }
    }
  }






