import { format } from 'date-fns';

export default class TodoConstructor {
  constructor({
    title,
    description,
    dueDate = new Date(),
    priority = '1',
    note = '',
    project = 'none',
  }) {
    this.title = String(title);
    this.description = String(description);
    this.dueDate = new Date(dueDate);
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
    if (index > 0 && index <= 3) {
      this.priority = Number(index);
    }
  }

  changeNote(newNote) {
    this.note = String(newNote);
  }

  deleteTodo() {
    this.deleted = true;
  }
}
