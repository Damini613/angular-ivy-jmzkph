import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  college = '';
  branch = '';

  submitDetails(name, college, branch) {
    this.name = name;
    this.college = college;
    this.branch = branch;
    alert('Your response has been submitted successfully');
  }
}
