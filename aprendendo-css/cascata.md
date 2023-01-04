# A cascata (cascading)

A escolha browser de qual regra aplicar, caso haja regras para o mesmo elemento.

* Seu estilo é lido de cima para baixo.

São levado em consideração 3 fatores

1. Origem do estilo
2. Especificidade
3. Importância


### Origem do estilo

inline > tag style > tag link

### Especificidade

É um cálculo matemático, onde cada tipo de seletor e origem do estilo possuem valores a serem considerados.

0. Universal selector, combinators e negation pseudo-class (:not())
1. Element type selector e pseudo-elements (::before, ::after)
10. Classes e attribute selectors ([type="radio"])
100. ID selector
1000. Inline

### A regra !import

* cuidade, evite o uso
* não é considerado uma boa prática
* quebre o floxo natural da cascata


# At rules

* Está relacionado ao comportamento de CSS
* Começa com o sinal de `@` seguindo do identificador e valor


## Exemplos comuns

- @import       /* incluir um CSS externo */

- @media        /* regras condicionais para dispositivos */

- @font-face     /* fontes externas */

- @keyframes     /* animation */


```CSS
@import "http://local.com/style.css";

@media (min-width: 500px) {
    /* rules here */
}

@font-face {
    /* rules here */
}

@keyframes nameofanimation {
    /* rules here */
}


# Shorthand

* junção de propriedades
* resumindo
* legível

```CSS

{
    /* background properties */
    background-color: #000;
    background-image: url(images/bg.gif);
    background-repeat: no-repeat;
    background-position: left top;

    /* background shorthand */
    background: #000 url(images/bg.gif) no-repeat left top;

    /* font properties */
    font-style: italic;
    font-weight: bold;
    font-size: 8em;
    line-heighr: 1.2;
    font-family: Arial, sans-serif;

    /* font shorhand */
    font: italic bold .8em/1,2 Arial, sans-serif;
}

````

## Detalhes

* Não irá considerar propriedades anteriores 
* Valores não espacíficados irão assumir o valor padrão
* Geralmente a ordem descrita não importa  mas, se houver muitas propriedades com valores semelhantes , poderemos encontar problemas

