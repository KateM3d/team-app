import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'team-app';

  newMemberName: string = '';
  members: string[] = [];
  errorMessage = '';

  onInput(member: string) {
    this.newMemberName = member;
    console.log(this.newMemberName);
  }

  addNewMember() {
    if (!this.newMemberName) {
      this.errorMessage = 'Ooops! Something went wrong!';
      return;
    }
    this.errorMessage = '';
    this.members.push(this.newMemberName);
    this.newMemberName = '';
    console.log(this.members);
  }
}
