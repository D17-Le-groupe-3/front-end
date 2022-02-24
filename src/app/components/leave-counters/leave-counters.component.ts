import { LeaveCountersService } from './../../services/leave-counters.service';
import { Component, OnInit } from '@angular/core';
import { LeaveCounters } from 'src/app/models';

@Component({
  selector: 'app-leave-counters',
  templateUrl: './leave-counters.component.html',
  styleUrls: ['./leave-counters.component.scss']
})
export class LeaveCountersComponent implements OnInit {

  leaveCounters!: LeaveCounters;
  constructor(private leaveCountersService: LeaveCountersService) {
    this.leaveCountersService.getLeaveCounterByEmployee(2).subscribe({
      next: (lCounters) => this.leaveCounters = lCounters,
      error: (e) => console.log(e)
    });
  }

  ngOnInit(): void {
  }

}
