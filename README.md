# Entrega: Acessores Getters e Setters

## Introdução

Se for preciso, volte para a aula _Acessores Getters e Setter para Objetos_ e veja como utilizar os acessores em um objeto de classe. Aqui está um exemplo:

```javascript
class Dog {
  constructor(name, breed, isGoodBoy) {
    this._name = name;
    this._breed = breed;
    this._isGoodBoy = isGoodBoy;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}
```

## Tarefa

### Passo 1

Normalmente, quando criamos um objeto os dados digitados não vêm padronizados. Seguindo o exemplo, crie uma classe usando função construtora e métodos para cadastro de uma pessoa.

O objeto deve conter os seguintes dados:

- Nome
- Data de nascimento
- CPF
- Telefone
- Celular
- Estuda: deve ser um booleano

Você precisará utilizar os _GETTERS_ e _SETTERS_ para formatar e retornar os atributos da seguinte forma:

- Nome: primeira letra de cada nome em maiúscula;
  - Valor de entrada: pedro silva;
  - Valor atribuido para o objeto: Pedro Silva

Para os campos númericos, remover os caracteres não númericos antes de atribuir os valores para o objeto:

- CPF:
  - Valor de entrada: "000.000.000-00"
  - Valor atribuído a propriedade do objeto: "00000000000"
  - Quando o valor for chamado, deve ser retornado o valor com a máscara do CPF: "000.000.000-00"
- Telefone e Celular:
  - Valor de entrada: "(00)1111-2222"
  - Valor atribuído a propriedade do objeto: "0011112222"
  - Mas quando o valor for chamado, deve ser rtornado o valor com a máscara do telefone: "(00)1111-2222"
- PIS:
  - Valor de entrada: "123.1234.123-1"
  - Valor atribuído a propriedade do objeto: "12312341231"
  - Quando o atributo for chamado, deve ser retornado o valor com a máscara do PIS: "123.1234.123-1"

### Passo 2

No repositório que você baixou já terá uma estrutura básica de um projeto. No <code>index.html</code> tem um formulário com os campos para a criação do objeto.

Agora, o que você precisará fazer é pegar os dados digitados nos campos do formulário e apresentar os dados na tela, logo abaixo do formulário.

Utilize sua criatividade e mude a estilização do formulário e crie um layout bacana para apresentar os dados digitados no formulário.

**Importante!**

Lembre-se que quando enviamos formulários o comportamento padrão é de recarrgar a página. E para interromper este comportamento, podemos utilizar o `preventDefault`
Para mais informações, acesse a
[documentação do preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault).

## Envio

Faça o push do código para o seu repositório GitHub e implemente-o GitHub pages. No Canvas, por favor, envie sua url do GitHub Pages: (ex: https://nomedeusuario.github.io/<nome_do_projeto>) e envie o link do seu repositório nos comentários. Deixe o link do seu repositório como internal.
