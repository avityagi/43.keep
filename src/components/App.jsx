import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(item) {
    setNotes((prevNotes) => {
      return [...prevNotes, item];
    });
    // console.log(notes);
  }
  // console.log(notes);
  function onDelete(id) {
    console.log(id);
    setNotes((prevNotes) => {
      console.log(prevNotes);

      console.log(prevNotes);

      return prevNotes.filter((val, ind) => {
        return id !== ind;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            title={note.title}
            content={note.content}
            id={index}
            delete={onDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
