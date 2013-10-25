## Sinopse

Esta é a primeira versão de uma solução web multidispositivo para o 2º Concurso de Aplicativos para Dados Abertos do Ministério da Justiça. Nesta aplicação, consolidamos e apresentamos dados de acidentes de trânsito nas rodovias federais, a partir de bases de dados oficiais, fornecidas pelo próprio Ministério da Justiça. Buscamos facilitar a apresentação da informação, organizada em uma interface minimalista e de fácil utilização.

## Visualizando a aplicação em produção

Esta aplicação está hospedada temporiamente no endereço: http://rodovias.mindexs.com/. Faremos a migração desta aplicação para um domínio adequado assim que possível.

## Motivação

Acreditamos na importância do fornecimento de dados pelo Estado, permitindo uma maior interação entre Estado e sociedade. Acreditamos em design simples e intuitivo. Acreditamos na capacidade do Big Data na descoberta de informação a partir de dados brutos.

## Instalação

O requisito para instalação é um servidor web padrão. Nesta primeira versão, fizemos a carga e consolidação dos dados em bases MySQL. O resultado foi consolidado e transformado em gráficos gerados por JavaScript.
Iremos disponibilizar o código SQL para criação de views de consolidação de informação. Para visualizar esta aplicação, não será necessário configuração de um servidor de Banco de Dados.

## Referências e APIs

Para geração do template HTML utilizamos o Twitter Bootstrap, para permitir construção rápida de páginas web multidispositivo em um formato padronizado.

Foi utilizado o Google Charts API para geração de gráficos web, por meio de JavaScript.

## Contribuidores

Contribuiram para este projeto:
- Alexandre Saippa Cobuccio -> http://br.linkedin.com/pub/alexandre-saippa-cobuccio/8/879/297/
- Daniel Bastos Pereira -> http://br.linkedin.com/in/danielbastospereira
- Ícaro Ferracini da Silva -> ~~http://br.linkedin.com/in/icaroferracini
- Pedro Carneiro Rodrigues -> ~~http://br.linkedin.com/in/pedrocarneirorodrigues/en

## Licença

Esta aplicação utiliza a licença GNU Affero General Public License v3.0 (AGPL v3.0), disponível para consulta neste endereço: https://www.gnu.org/licenses/agpl-3.0.html.