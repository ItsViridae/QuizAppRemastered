import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz } from './quiz'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public localResponse;
  public quizResponse;
  constructor(private http: HttpClient) {    
    //Rest API Call
    // Observable = this.http.get('http://MyRestApi.com/MyRestEndpoint');
    this.http.get<Quiz>('http://localhost:3000/quizzes').subscribe(
      apiResponse => {
        this.localResponse = apiResponse;
      });

      this.http.get<Quiz>('http://localhost:3000/quizzes', { observe:'response'}).subscribe( 
        res => { 
          console.log(res);          
          let response = res.body;  
          this.quizResponse = response;
    });

  }
  title = 'quiz-frontend';
}
