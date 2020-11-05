import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  lat = 51.678418;
  lng = 7.809007;
  
  constructor(private router: Router,private toastr: ToastrService) { }
  Name: string = '';
  
  ngOnInit(): void {
  }
  
//   showToaster(){
//     this.toastr.success("Succesfuly sent")
// }
// showToaster(){
//   this.toastr.success("Succesfuly sent")
// }
// errorToastr(){
//   this.toastr.error("warning")
// }

validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  var d = document.forms["myForm"]["femail"].value;
  var t = document.forms["myForm"]["fphone"].value;

  if (x == "") {
    // alert("Name must be filled out");
    this.toastr.error("Name must be filled")
    return false;
  }
   else if (d == "") {
      // alert("Email must be filled");
      this.toastr.error("Email must be filled")
      return false;
  }
  else if (t =="" ){
    // alert("Phone Number must be filled");
    this.toastr.error("Phone number must be filled")
    return false;
  }
 
  else{
      this.toastr.success("Successfuly Submitted")
  }

}

}
