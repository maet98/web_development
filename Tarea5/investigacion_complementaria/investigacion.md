## Investigacion Complementaria

### 1. Investigue a qué se le llama JavaScript no invasivo, no obstructivo o no intrusivo (unobtrusive JavaScript). Muestre un ejemplo.

JavaScript no obstructivo es un enfoque general para el uso de JavaScript en páginas web . Aunque el término no se define formalmente, sus principios básicos son generalmente entenderse que incluyen:

* La separación de la funcionalidad (la "capa de comportamiento") a partir de una página web estructura / contenido y la presentación
* Las mejores prácticas para evitar los problemas de programación tradicional JavaScript (como navegador inconsistencias y falta de escalabilidad )
* Mejora progresiva para apoyar los agentes de usuario pueden no soportar la funcionalidad avanzada JavaScript

### Ejemplo:

En vez de tener esto:

```html
<a href="popup.html" onclick="window.open('popup.html', 'width=400,height=450,resizable=yes')">Abrir popup</a> 
```

Es mejor tener:

```html
<a href="popup.html" id="mypopup">Abrir popup</a>

<script type="text/javascript">

   var x = getElementByID('mypopup');
   
   x.onclick = function() {
   
    window.open('popup.html', 'width=400,height=450,resizable=yes')
   
   }

</script> 
```

Ademas seria aun mejor tenerlo en un archivo separado la parte de la etiqueta script, ya que esta funcionalidad puede ser reutilizada en otro lugares.

### 2. Investigue qué es Null y undefined en JavaScript. 

El valor _null_ representa la ausencia de algun valor de objecto. Es parte de los valores primitivos del lenguaje javascript.

```javascript
function getVowels(str) {
  const m = str.match(/[aeiou]/gi);
  if (m === null) {
    return 0;
  }
  return m.length;
}

console.log(getVowels('sky'));
```

Mientras que _undefined_ es un tipo primitivo de javascript que representa que una variable que no haya sido asignada a un valor.

```javascript
function test(t) {
  if (t === undefined) {
    return 'Undefined value!';
  }
  return t;
}

let x;

console.log(test(x));
```

