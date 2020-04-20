import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSnackBarModule,
  MatToolbarModule,
} from "@angular/material";

import { DragDropModule } from "@angular/cdk/drag-drop";
import { AddNewComponent } from "./add-new/add-new.component";
import { ListComponent } from "./list/list.component";
import { DialogConfirmDeleteComponent } from "./dialog-confirm-delete/dialog-confirm-delete.component";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddNewComponent,
    DialogConfirmDeleteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
  ],
  entryComponents: [DialogConfirmDeleteComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
