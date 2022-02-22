import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Leave } from 'src/app/models';
import { LeavesService } from 'src/app/services/leaves.service';

@Component({
  selector: 'app-display-leaves',
  templateUrl: './display-leaves.component.html',
  styleUrls: ['./display-leaves.component.scss']
})

export class DisplayLeavesComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['startDate', 'endDate', 'type', 'status', 'actions'];
  dataSource = new MatTableDataSource<Leave>();

  constructor(private leavesService: LeavesService) {
    this.leavesService.getLeavesByEmployee().subscribe({
      next: (leaves) => this.dataSource.data = leaves,
      error: (e) => console.log(e)
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}
