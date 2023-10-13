import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../shared/Services/employee.service';
import { Router } from '@angular/router';
import { UsersmapService } from '../../../shared/Services/usersmap.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports:[CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TableComponent implements OnInit{
//-------------------------------------Pegination blocks--------------------------------
currentPage = 1;
itemsPerPage = 3;
totalItems=0
//-------------------------------------


constructor(public EmpService:EmployeeService,
            private router:Router,
            private MapService: UsersmapService,
            private chd:ChangeDetectorRef
            ) {}

  ngOnInit(): void {
    this.EmpService.getAllUsers().subscribe(users =>{
      this.EmpService.LocalUserContainer=users;
      this.totalItems = this.EmpService.LocalUserContainer.length; 
      this.chd.detectChanges();
    })
  }


public getEmployee(){
this.EmpService.getAllUsers().subscribe(users =>{
  console.log(users);
})
}

public getUserById(id:any){
  this.EmpService.getUserById(parseInt(id as string)).subscribe(user =>{
    console.log(user);
  }
  )
}

public NavToUpdate(id:number | undefined, name:string, salary:number, age:number ){
  this.EmpService.CurrentAge=age;
  this.EmpService.CurrentName=name;
  this.EmpService.CurrentSalary=salary;
  this.EmpService.bottonLabel='Update';
  this.router.navigate(['/employees/Register/'],
                        {queryParams: {id:id} }
                        )
}

public DeleteObject(id:number | undefined){ 
  let newID = parseInt(id as unknown as string)

  this.EmpService.deleteUser(newID).subscribe();

  this.EmpService.getAllUsers().subscribe(users =>{
    this.EmpService.LocalUserContainer=users;
  })    
}
//-------------------------------------Pegination blocks--------------------------------
public getDataSlice() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  console.log(this.EmpService.LocalUserContainer.slice(startIndex, endIndex))
  
  return this.EmpService.LocalUserContainer.slice(startIndex, endIndex);
}

public goToPage(page: number) {
  this.currentPage = page;
}

public goToPreviousPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
  }
}

public goToNextPage() {
  if (this.currentPage < this.getTotalPages()) {
    this.currentPage++;
  }
}

public getPageNumbers() {
  const totalPages = this.getTotalPages();
  return Array.from({ length: totalPages }, (_, i) => i + 1);
}

public getTotalPages() {
  return Math.ceil(this.totalItems / this.itemsPerPage);
}



//-------------------------------------


}
