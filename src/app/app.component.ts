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
  numberOfTeams: number | '' = '';
  teams: string[][] = [];

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
  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
  }

  generateTeams() {
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMessage = 'Invalid number';
      return;
    }

    if (this.members.length < this.numberOfTeams) {
      this.errorMessage = 'Not enough members';
      return;
    }
    this.errorMessage = '';
    const allMembers = [...this.members];

    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const memberSelected = allMembers.splice(randomIndex, 1)[0];
        if (!memberSelected) break;
        if (this.teams[i]) {
          this.teams[i].push(memberSelected);
        } else {
          this.teams[i] = [memberSelected];
        }
      }
    }
    console.log(this.teams);
    this.members = [];
    this.numberOfTeams = '';
  }
}
