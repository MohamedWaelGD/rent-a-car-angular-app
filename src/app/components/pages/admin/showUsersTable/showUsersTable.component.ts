import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showUsersTable',
  templateUrl: './showUsersTable.component.html',
  styleUrls: ['./showUsersTable.component.css']
})
export class ShowUsersTableComponent implements OnInit {

  users: any[] = [
    {
      id: 1,
      username: "Mohamed",
      email: "mohamed@email.co",
    },
    {
      id: 2,
      username: "Ahmed",
      email: "ahmed@email.co",
    },
    {
      id: 3,
      username: "Ali",
      email: "ali@email.co",
    },
    {
      id: 4,
      username: "Zakria",
      email: "zakria@email.co",
    },
    {
      id: 5,
      username: "Hesham",
      email: "hesham@email.co",
    },
    {
      id: 6,
      username: "Wael",
      email: "wael@email.co",
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
