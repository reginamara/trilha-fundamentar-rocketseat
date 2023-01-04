# Introdução

## O que significa CSS?

* Cascading Style Sheet
* Código para criar estilos no html
* HTML é uma estrutura, e o CSS é a beleza
* Não é uma línguagem de programação
* É uma línguagem style Sheet

# Comentérios

* Não irá afetar o seu código
* Ajuda a lembrar blocos de códigos
* Ajuda outros a entenderem
* Nunca esqueça de fechar um comentério aberto

Comentérios começam com `/* ` e termina com `*/`

/* Básico */
/* -------------------------------------------- */

body {
    font: 1em/150% Heveltica, Arial, Sans-serif;
    padding: 1em;
    margin: 0 auto;
    max-width: 33em
}

@media (min-width: 70em) {
    /* exemplo de comentário */
    body {
        font-size: 130%;
    }
}

h1 {font-size: 1.5em;}

/* Elmentos especiais */
/* --------------------------------------- */
div p, #id:first-line {
    background-color: red;
    border-radius: 3px;
}

div p {
    margin: 0:
    padding: 1em;
}

div p + p {
    padding-to: 0;
}
````

* Você poderá usar para desabilitar partes do seu código

```CSS

/*.special {
    color: red;
}*/

p {
    color; blue;
}
```