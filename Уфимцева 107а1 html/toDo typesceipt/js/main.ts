function addNote() {
  const list = document.getElementById("noteList") as HTMLDivElement;
  const noteInput = (document.getElementById("noteInput") as HTMLInputElement).value;
  const date = new Date().toLocaleDateString();

  const newNote = document.createElement("div");
  newNote.classList.add("note");
  const paragraph = document.createElement("p");
  const button = document.createElement("button");
  const sub = document.createElement("sub");

  paragraph.innerText = noteInput;
  button.innerHTML = "<span>&#10006;</span>";
  sub.innerText = date;

  button.onclick = function () {
    list.removeChild(newNote);
    list.removeChild(sub); // Удаляем дату при удалении заметки
  };

  newNote.appendChild(paragraph);
  newNote.appendChild(button);
  list.appendChild(newNote);
  list.appendChild(sub);

  document.getElementById("noteInput").value = "";
}

function addDefaultNotes() {
  for (let i = 1; i <= 3; i++) {
    const list = document.getElementById("noteList") as HTMLDivElement;
    const newNote = document.createElement("div");
    newNote.classList.add("note");
    const paragraph = document.createElement("p");
    const button = document.createElement("button");
    const sub = document.createElement("sub");

    paragraph.innerText = i.toString();
    button.innerHTML = "<span>&#10006;</span>";
    sub.innerText = new Date().toLocaleDateString();

    button.onclick = function () {
      list.removeChild(newNote);
      list.removeChild(sub);
    };

    newNote.appendChild(paragraph);
    newNote.appendChild(button);
    list.appendChild(newNote);
    list.appendChild(sub);
  }
}

window.onload = addDefaultNotes;
