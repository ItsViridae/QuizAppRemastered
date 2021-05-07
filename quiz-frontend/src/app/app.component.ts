import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz } from './quiz'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public localAllQuizzes;
  public quizResponse;
  public localMulti_Choice_Answers;
  constructor(private http: HttpClient) {    
    //Rest API Call
    // Observable = this.http.get('http://MyRestApi.com/MyRestEndpoint');
    // this.http.get<Quiz>('http://localhost:3000/quizzes').subscribe(
    //   apiResponse => {
    //     this.localResponse = apiResponse;
    //   });

      this.http.get<Quiz>('https://quiz-app-415.herokuapp.com/quizzes', { observe:'response'}).subscribe( 
        res => { 
          console.log(res);          
          let response = res.body;  
          this.localAllQuizzes = response;
          this.localMulti_Choice_Answers = response.MultipleChoice_Multi_Question1;
    });

  }
  title = 'quiz-frontend';
}
