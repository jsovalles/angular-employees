# angular-employees
Proyecto en Angular con conexión REST a Spring Boot para un listado y creación de empleados

Vista previa en GitHub Pages [aquí](https://jsovalles.github.io/angular-employees/employees).

**Se necesita de Docker Compose para la sección de Back-end, las instrucciones se encuentran [aquí](https://github.com/jsovalles/spring-boot-employees)**

## Instalación/Despliegue

Se descarga el proyecto desde GitHub y después se realiza los siguientes comandos
```
ng build

ng serve -o
```
Después de que el comando termine de desplegar automáticamente se abre la página en el navegador determinado 

## Despliegue en GitHub Pages
```
ng add angular-cli-ghpages

ng build

ng deploy --base-href=https://jsovalles.github.io/angular-employees/
```

## Desarrollado en

* [Angular](https://angular.io/s) - Front-End Framework
* TypeScript, JavaScript, HTML5 y CSS
