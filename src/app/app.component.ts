import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table/table-data-source';
import { MachintestService } from './Services/machintest.service';
// import  *  as  data  from  '../assets/dummydata.json';

/**
 * @title Table with selection
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'machine-test-app';
  displayedColumns: string[] = ['checkbox','name', 'email', 'gender', 'address','dob'];
  // selection = new SelectionModel<PeriodicElement>(true, []);
  // displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  // selection = new SelectionModel<PeriodicElement>(true, []);
  dataSource = [];
  constructor(
    private machineService: MachintestService,
  ) { }


  ngOnInit(): void {
    // console.log('getJsonData', this.getJsonData);
    this.getJsonData();
  }

  getJsonData() {
    this.machineService.getAllData().subscribe((res: any) => {
      this.dataSource = res.data.dummyData;
      // console.log('res', this.dataSource);
    })

  }


  /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  // masterToggle() {
  //   this.isAllSelected() ?
  //       this.selection.clear() :
  //       this.dataSource.data.forEach(row => this.selection.select(row));
  // }

}
