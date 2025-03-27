# TP1-FORMULARIO-WICNUDEL-KALIK
## Diseño de la interfaz  
 Utilizamos HTML y CSS para estructurar y estilizar el formulario. Se aplicaron colores modernos y diseño con flexbox

## Validaciones implementadas  
 **Nombre completo**: mínimo 3 caracteres
 **Email**: formato válido con regex
 **Contraseña**: mínimo 8 caracteres, al menos una letra y un número  
 **Confirmar contraseña**: debe coincidir con la anterior  
 **Mensajes de error y éxito**: se muestran en tiempo real

## Desafíos enfrentados y soluciones  
 **Inputs sobresaliendo del contenedor** → Se solucionó con `box-sizing: border-box;`  
 **Validaciones en tiempo real** → Se implementaron eventos `input` y `blur` en JavaScript 
