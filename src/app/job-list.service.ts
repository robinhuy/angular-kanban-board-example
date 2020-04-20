import { Injectable } from "@angular/core";
import { JobList } from "src/app/job-list.model";

@Injectable({
  providedIn: "root",
})
export class JobListService {
  jobLists: JobList[] = [
    {
      name: "To do",
      jobs: ["Get to work", "Pick up groceries", "Go home", "Fall asleep"],
    },
    {
      name: "Doing",
      jobs: [
        "Get up",
        "Brush teeth",
        "Take a shower",
        "Check e-mail",
        "Walk dog",
      ],
    },
  ];

  updateLocalStorage(): void {
    if (window && window.localStorage) {
      window.localStorage.setItem("jobLists", JSON.stringify(this.jobLists));
    }
  }

  getJobLists(): JobList[] {
    if (window && window.localStorage) {
      this.jobLists = JSON.parse(window.localStorage.getItem('jobLists')) || [];
    }

    return this.jobLists;
  }

  addNewJob(listIndex: number, jobName: string): boolean {
    this.jobLists[listIndex].jobs.push(jobName);

    this.updateLocalStorage();

    return true;
  }

  addNewList(listName: string): boolean {
    this.jobLists.push({
      name: listName,
      jobs: [],
    });

    this.updateLocalStorage();

    return true;
  }

  deleteJob(listIndex: number, jobIndex: number): boolean {
    if (this.jobLists[listIndex]) {
      this.jobLists[listIndex].jobs.splice(jobIndex, 1);

      this.updateLocalStorage();

      return true;
    }

    return false;
  }

  deleteList(listIndex: number): boolean {
    if (this.jobLists[listIndex]) {
      this.jobLists.splice(listIndex, 1);

      this.updateLocalStorage();

      return true;
    }

    return false;
  }
}
