import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testapp';

  addAnimation(){
    let indicator=$('#indicator');
    if (indicator.hasClass('add-animation')) {
      indicator.removeClass('add-animation');
    }else{
    indicator.addClass('add-animation');
  }
  }
  move(e){
    if (e.target.id=='id1') {
    $("#indicator").animate({left: "10px"});      
    }
    if (e.target.id=='id2') {
      $("#indicator").animate({left: "200px"});      
      }
    if (e.target.id=='id3') {
      $("#indicator").animate({left: "350px"});      
    }
    if (e.target.id=='id4') {
      $("#indicator").animate({left: "550px"});      
      }
    if (e.target.id=='id5') {
      $("#indicator").animate({left: "700px"});      
    }
    if (e.target.id=='button') {
      $("#indicator").animate({left: "100px"});      
    }
  }
}
