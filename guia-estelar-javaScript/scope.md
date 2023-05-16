# Scope

* Escopo determina a visibilidade de alguma variável no JS


# Block Statement (declaração de bloco)
```js

// Vamos iniciar um bloco
{
    // aqui dentro é u bloco e posso colocar qualquer código
} // aqui fechamos o bloco
```

O bloco, também criará um novo escopo. Chamamos de `block-scoped`


## var
```js
// Var é global e poderá funcionar fora de um escopo de bloco.
obs: no 'var' acontece o hoisting

console.log('> existe x antes do bloco?', x)
{
    var x = 0
}

console.log('> existe x depois do bloco?', x)
```

## Let e Const
```js
// const e let são locais e só funcionam no espaço onde foram criada.
console.log('> existe y antes do bloco?', y)
{
    let y = 0
}

console.log('> existe x depois do bloco', y)
```