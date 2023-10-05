import { Component } from '@angular/core';
import { StartTextService } from 'src/app/shared/start-text.service';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.css'],
})
export class RecipeStartComponent {
  constructor(public StartTextService: StartTextService) {}
}
