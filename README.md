# BanTADS Front

FrontEnd do projeto final da disciplina de "Desenvolvimento de Aplicações Corporativas" da UFPR

## Tecnologias usadas
    - Angular

## Módulos
    - Admin
    - Client
    - Manager
## Pastas de organização
    OBS: caso a pasta esteja dentro de um módulo, os conteúdos dela só serão usados para o módulo e seus filhos

#### components
    Componentes Angular que podem ser usados em uma view para incluir um elemento html que se repete algumas vezes
#### entities
    Representações de objetos do mundo real no sistema, terão atributos e métodos ligados a services

#### layout
    Parecida com a pasta components, porém aqui estarão os principais components do layout do sistema, serão usados em praticamente todas as telas.

#### views
    Também são componentes, porém representam as telas do projeto, duas views não devem ser chamadas ao mesmo tempo, e uma view não deve chamar outra dentro dela.

## Rotas
    Cada módulo terá um arquivo nomeado `nome_do_modulo-routing.module.ts` de rotas com as rotas referentes aquele módulo apenas.
    
    Foi escolhido trabalhar com as rotas dessa maneira pois permite maior organização, um arquivo de rotas menor e que os componentes não precisem ter em seus nomes o nome do módulo também (o que acabaria por descartar a ideia de separar os componentes em módulos).

    (basta copiar o já existente para cliente, trocar os nomes e importar no módulo que se está trabalhando)

## Documentação oficial
    Para detalhes sobre como utilizar o Angular confira a documentação [aqui](https://angular.io/cli)

## Rodar como desenvolvedor
    Utilizar o comando `ng serve` irá rodar o servidor em `http://localhost:4200/` (se a porta estiver ocupada irá escolher outra, mas ele sempre avisa qual porta está sendo utilizada)