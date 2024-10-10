import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map, Observable } from 'rxjs';
import { Quizz } from './quizz';
import { Results } from './results';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {
  
  private readonly apiUrl = "https://opentdb.com/api.php?amount=1&category=15&difficulty=easy&type=multiple";

  constructor(private http: HttpClient) { }

  getQuizz(): Observable<Quizz> {
    return this.http.get<Quizz>(this.apiUrl);
  }

  mountQuizQuestions(quiz: Quizz): Quizz {
    quiz.results.forEach(q => {
      q.questions = [q.correct_answer, ...q.incorrect_answers];
      q.questions.sort();
    });
    return quiz;
  }

  getQuizz2(): Observable<Results[]> {
    return this.http.get<Quizz>(this.apiUrl).pipe(
      map(m => { return m.results })
    )
  }
}
