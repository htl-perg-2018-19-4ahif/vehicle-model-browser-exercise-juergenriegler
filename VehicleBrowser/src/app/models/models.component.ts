import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface IModel {
  id: number;
  year: number;
  make: string;
  model: string;
  hasDetails: number;
}

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {

  host =  'https://vehicle-data.azurewebsites.net'
  years: Observable<number[]> = null;
  selectedYear: number = null;

  makes: Observable<string[]> = null;
  selectedMake: string = null;

  models: Observable<IModel[]> = null;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.years = this.httpClient
      .get<number[]>(`${this.host}/api/years`);
    this.makes = this.httpClient
      .get<string[]>(`${this.host}/api/makes`);
  }

  refreshModels() {
    if(this.selectedMake !== null && this.selectedYear !== null) {
      this.models = this.httpClient
        .get<IModel[]>(`${this.host}/api/models?make=${this.selectedMake}&year=${this.selectedYear}`);
        console.log(`${this.selectedMake}, ${this.selectedYear}`);
    }
    else if(this.selectedMake !== null) {
      this.models = this.httpClient
        .get<IModel[]>(`${this.host}/api/models?make=${this.selectedMake}`);
        console.log(`${this.selectedMake}, ${this.selectedYear}`);
    }
    else if(this.selectedYear !== null) {
      this.models = this.httpClient
        .get<IModel[]>(`${this.host}/api/models?year=${this.selectedYear}`);
        console.log(`${this.selectedMake}, ${this.selectedYear}`);
    }
    else {
      this.models = this.httpClient
        .get<IModel[]>(`${this.host}/api/models`);
        console.log(`${this.selectedMake}, ${this.selectedYear}`);
    }
  }


}
