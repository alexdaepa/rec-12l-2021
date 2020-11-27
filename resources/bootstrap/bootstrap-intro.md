### Bootstrap

O Bootstrap é uma framework CSS open source utilizada para facilitar o desenvolvimento de aplicações Web.

Bastante útil para estilizar elementos como botões, links, etc.

É também bastante utilizado para criar facilmente layouts responsivos (adaptados aos diferentes tamanhos de ecrã).

**Toda a documentação relativa ao Bootstrap pode ser acedida em https://getbootstrap.com/docs/4.5/getting-started/introduction/.**

#### Utilização

Para começar a utilizar Bootstrap nos documentos HTML, basta incluir a seguinte instrução dentro da tag <head>:
  
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">


#### Grid System

O Bootstrap utiliza um sistema de 12 colunas dentro de cada linha(aceder a https://getbootstrap.com/docs/4.0/layout/grid/).
Desta forma, é possível indicar os tamanhos exatos dos elementos contidos dentro de uma divisão de forma simples.

![Grid System](https://miro.medium.com/max/2342/1*6frm0pq5VjPcc71EqH7cKw.png)

Se forem introduzidas numa linha duas colunas que ocupem 6 espaços cada uma, 
qualquer outra coluna que seja introduzida será passada para baixo (porque 6+6 já ocupa toda a grelha daquela linha).
#### Conceitos

Os conceitos importantes a reter são os seguintes:
- **Container**

  Representa um contentor, no qual colocamos rows e columns.
- **Row**

  Representa uma linha na página, que pode ter qualquer altura/largura.
- **Column**

  Representa uma coluna que, normalmente, está contida dentro de uma row.
- **Sizes**
  
  Os sizes correspondem aos tamanhos que serão atribuídos às colunas.
  - **xs** (para telemóveis - ecrãs menores que 768px)
  - **sm** (para tablets - ecrãs iguais ou maiores que 768px)
  - **md** (para pequenos portáteis - ecrãs iguais ou maiores que 992px)
  - **lg** (para portáteis ou desktops - ecrãs iguais ou maiores que 1200px)

O mecanismo de grid resume-se a isto. Dentro de cada row existem X columns sob as quais definimos o seu tamanho.

Para concretizar qualquer um destes conceitos apenas o indicamos na classe do elemento (uma divisão) que estamos a utilizar:

    <div class="container">Um container</div>
    <div class="row">Uma row</div>
    <div class="column">Uma coluna</div>
    
Para definir o tamanho de uma coluna:


    <div class="column-xs-6">Uma coluna</div>
    <div class="column-xs-6">Uma coluna</div>

O valor indicado à frente do tamanho **xs** indica quantas colunas aquela coluna irá ocupar.

#### Exemplo


    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          Primeira coluna
        </div>
        <div class="col-sm-4">
          Segunda coluna
        </div>
        <div class="col-sm-4">
          Terceira coluna
        </div>
      </div>
    </div>
    
Cada uma das colunas ocupará 4 colunas totalizando as 12 colunas da row.


    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          Primeira coluna
        </div>
        <div class="col-sm-3">
          Segunda coluna
        </div>
        <div class="col-sm-3">
          Terceira coluna
        </div>
      </div>
    </div>
    
A primeira coluna ocupa metade da row (6 colunas) e as restantes ocupam 3 colunas cada uma.
