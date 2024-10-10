<h1 align="center">
  Buzzfeed Quiz
</h1>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=Tipo&message=Desafio&color=8257E5&labelColor=000000" alt="Desafio" />
</p>

Um quiz construído em Angular 18 no estilo do buzzfeed, utilizando a API do open trivia database com perguntas sobre jogos. Bootcamp Deal - Spring Boot e Angular (17+)

O projeto foi elaborado [nesse vídeo](https://youtu.be/SsWZ4O9iWuo).

## Tecnologias
 
- [Angular](https://angular.dev/)

## Práticas adotadas

- SOLID
- API REST

## API Endpoints

Para fazer as requisições HTTP abaixo, foi utilizada a ferramenta [Thunder Client](https://www.thunderclient.com/):

```
GET https://opentdb.com/api.php?amount=1&category=15&difficulty=easy&type=multiple

Status: 200 OK
Size: 265 Bytes
Time: 428 ms

{
  "response_code": 0,
  "results": [
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Entertainment: Video Games",
      "question": "In the 2002 video game &quot;Kingdom Hearts&quot;, how many Keyblades are usable?",
      "correct_answer": "18",
      "incorrect_answers": [
        "13",
        "16",
        "15"
      ]
    }
  ]
}
```