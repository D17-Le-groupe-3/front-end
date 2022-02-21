import { Component, OnInit } from '@angular/core';
import { Leave } from 'src/app/models';
import { LeavesService } from 'src/app/services/leaves.service';

@Component({
  selector: 'app-display-leaves',
  templateUrl: './display-leaves.component.html',
  styleUrls: ['./display-leaves.component.scss']
})

export class DisplayLeavesComponent implements OnInit {
  displayedColumns: string[] = ['startDate', 'endDate', 'type', 'status', 'actions'];
  dataSource!: Leave[];
  htmlAction: any;
  //passer d'un type à un autre

  constructor(private leavesService: LeavesService) {
    this.leavesService.getLeavesByEmployee().subscribe(data => this.dataSource = data);
   }

  ngOnInit(): void {
  }
}
