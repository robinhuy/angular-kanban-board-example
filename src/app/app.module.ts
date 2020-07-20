import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatToolbarModule } from "@angular/material/toolbar";

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
