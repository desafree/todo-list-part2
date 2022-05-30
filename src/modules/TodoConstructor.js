import { format } from "date-fns";

export default class TodoConstructor {
  constructor({
    title,
    description,
    dueDate = format(new Date(), "eeee"),
    priority = "1",
    note = "",
    project = "none",
  }) {
    this.title = String(title);
    this.description = String(description);
    this.dueDate = dueDate;
    this.priority = Number(priority);
    this.note = String(note);
    this.checklist = false;
    this.project = String(project);
    this.deleted = false;
  }

  toggleChecklist() {
    this.checklist = !this.checklist;
  }

  changePriority(index) {
    this.priority = Number(index);
  }

  changeNote(newNote) {
    this.note = String(newNote);
  }

  deleteTodo() {
    this.deleted = true;
  }
}
