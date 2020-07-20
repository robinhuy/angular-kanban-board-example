import { Component, Input } from "@angular/core";
import { JobListService } from "../job-list.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-add-new",
  templateUrl: "./add-new.component.html",
})
export class AddNewComponent {
  @Input() placeholder: string;
  @Input() listIndex: number;
  input: string = "";

  constructor(
    private jobListService: JobListService,
    private snackBar: MatSnackBar
  ) {}

  addNew() {
    // Do not add list or job with no name
    if (this.input.trim()) {
      // Add List
      if (this.listIndex === undefined) {
        this.jobListService.addNewList(this.input);

        this.snackBar.open("New List was created successfully!", "Dismiss", {
          duration: 2000,
        });
      } 
      // Add job
      else {
        this.jobListService.addNewJob(this.listIndex, this.input);

        this.snackBar.open("New Job was created successfully!", "Dismiss", {
          duration: 2000,
        });
      }

      this.input = "";
    }
  }
}
