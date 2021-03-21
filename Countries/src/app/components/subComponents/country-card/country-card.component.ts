import { Component, OnInit ,Input} from '@angular/core';
import { Country } from '../../../CountryApi';



@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent  {
  @Input()
  country?: Country;

}