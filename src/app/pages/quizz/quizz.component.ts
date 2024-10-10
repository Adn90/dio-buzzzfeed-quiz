import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { QuizzService } from './services/quizz-service.service';
import { Quizz } from './services/quizz';
import { Results } from './services/results';
import { firstValueFrom, Observable } from 'rxjs';
import { LoadingComponent } from "../../components/loading/loading.component";


@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [
    CommonModule,
    LoadingComponent
],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.scss'
})
export class QuizzComponent implements OnInit {
  hasFinished: boolean = false;
  quiz: Quizz = new Quizz();
  quizResult: Results = new Results();
  
  score: number = 0;
  questionsLoaded: number = 0;
  readonly numberOfQuestions = 5;

  obsarvableTest$: Observable<Results[]> = new Observable<Results[]>;

  loading: boolean = true;

  constructor(private quizzService: QuizzService) {}
  
  async ngOnInit() {
    await this.loadQuizQuestion();
  }

  async loadQuizQuestion() {
    try {
      this.loading = true;
      let data = await firstValueFrom(this.quizzService.getQuizz());
      this.quiz = this.quizzService.mountQuizQuestions(data);
      this.quizResult = this.quiz.results[0];
      this.questionsLoaded += 1;
    } catch (error) {
      this.loadingSpin();
      console.log(error)
    } finally {
      this.loadingSpin();
    }
  }

  async questionSelected(selected: string) {
    if (selected == this.quizResult.correct_answer) {
      this.score += 1;
    }
    if (this.questionsLoaded == this.numberOfQuestions) {
      this.hasFinished = true;
      return;
    }
    await this.loadQuizQuestion();
  }

  loadingSpin() {
    // api returns error upon many uses
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
