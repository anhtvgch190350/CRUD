import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public employee: any[] = [
    { id: 1, name: 'Mr. Nice', email: 'India',age: 18 , salary: 2000},
    { id: 2, name: 'Narco' , email: 'USA', age: 19, salary: 3000},
    { id: 3, name: 'Bombasto' , email: 'UK', age: 20, salary: 4000},
    { id: 4, name: 'Celeritas' , email: 'Canada' ,age:22, salary: 5000},
    {  id: 5,name: 'Magneta' , email: 'Russia', age: 23, salary: 6000},
    { id: 6, name: 'RubberMan' , email: 'China', age: 99, salary: 7000},
    { id: 1, name: 'Mr. Nice', email: 'India',age: 18 , salary: 2000},
    { id: 2, name: 'Narco' , email: 'USA', age: 19, salary: 3000},
    { id: 3, name: 'Bombasto' , email: 'UK', age: 20, salary: 4000},
    { id: 4, name: 'Celeritas' , email: 'Canada' ,age:22, salary: 5000},
    {  id: 5,name: 'Magneta' , email: 'Russia', age: 23, salary: 6000},
    { id: 6, name: 'RubberMan' , email: 'China', age: 99, salary: 7000},
    { id: 1, name: 'Mr. Nice', email: 'India',age: 18 , salary: 2000},
    { id: 2, name: 'Narco' , email: 'USA', age: 19, salary: 3000},
    { id: 3, name: 'Bombasto' , email: 'UK', age: 20, salary: 4000},
    { id: 4, name: 'Celeritas' , email: 'Canada' ,age:22, salary: 5000},
    {  id: 5,name: 'Magneta' , email: 'Russia', age: 23, salary: 6000},
    { id: 6, name: 'RubberMan' , email: 'China', age: 99, salary: 7000},
    { id: 1, name: 'Mr. Nice', email: 'India',age: 18 , salary: 2000},
    { id: 2, name: 'Narco' , email: 'USA', age: 19, salary: 3000},
    { id: 3, name: 'Bombasto' , email: 'UK', age: 20, salary: 4000},
    { id: 4, name: 'Celeritas' , email: 'Canada' ,age:22, salary: 5000},
    {  id: 5,name: 'Magneta' , email: 'Russia', age: 23, salary: 6000},
    { id: 6, name: 'RubberMan' , email: 'China', age: 99, salary: 7000},
  ];
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
    salary: new FormControl(''),
  });

  edit(employee: Employee) {
    this.form = this.formBuilder.group({
      id: new FormControl(employee.id),
      //name: new FormControl(employee.name),
      name: [employee.name, [Validators.required,Validators.pattern('[a-zA-Z ]*') ]],
      salary: [employee.salary, [Validators.required, Validators.pattern("^[0-9]*$"),  Validators.min(1)]],
        age: [employee.age, [Validators.required, Validators.pattern("^[0-9]*$"),  Validators.min(1), Validators.max(99)]],
        email: [employee.email, [Validators.required, Validators.email]],
    });
    this.update = true;
  }
  submitted = false;
  update = false;
  id = 7;
  searchText: any;
  p: number = 1;


  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        name: ['', [Validators.required,Validators.pattern('[a-zA-Z ]*') ]],
        salary: ['', [Validators.required, Validators.pattern("^[0-9]*$"),  Validators.min(1)]],
        age: ['', [Validators.required, Validators.pattern("^[0-9]*$"),  Validators.min(1), Validators.max(99)]],
        email: ['', [Validators.required, Validators.email]],

      },
    );

  }



  onSave(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    const body = {
      id: this.id ++,
      name: this.form.value.name,
      salary: this.form.value.salary,
      email: this.form.value.email,
      age: this.form.value.age,
    }
    console.log(body);
    this.employee.unshift(body);
    this.onReset();

  }

  onUpdate(): void {
    let index = this.employee.findIndex(employee => employee.id === this.form.value.id);
    this.employee[index] = this.form.value;
    if (this.form.invalid) {
      return;
    }
    this.update = false;
    this.onReset();
    this.submitted = true;

  }

  get f() { return this.form.controls; }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }


  removeRow(id: number) {
    this.employee = this.employee.filter((u) => u.id !== id);
  }





};

interface Employee {
  id: number;
  name: string;
  salary: string;
  email: string;
  age: number,
}
