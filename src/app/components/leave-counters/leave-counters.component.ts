import {LeaveCountersService} from '../../services/leave-counters.service';
import {Component, OnInit} from '@angular/core';
import {LeaveCounters} from 'src/app/models';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-leave-counters',
  templateUrl: './leave-counters.component.html',
  styleUrls: ['./leave-counters.component.scss']
})
export class LeaveCountersComponent implements OnInit {

  leaveCounters!: LeaveCounters;

  constructor(private userService: UserService, private leaveCountersService: LeaveCountersService) {

    this.leaveCountersService.getLeaveCounterByEmployee(this.userService.user!.id).subscribe({
       next : (lCounters) => this.leaveCounters = lCounters,
      error : (e) => console.log(e)
    });
  }

  ngOnInit(): void {
  }

}
