import React, { useState } from "react";

function CreateArea(props) {
  const [item, setItem] = useState({ title: "", content: "" });
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setItem((prevItem) => {
      return {
        ...prevItem,
        [name]: value
      };
    });
    // console.log(item);
  }
  return (
    <div>
      <form
        onSubmit={(event) => {
          props.onAdd(item);
          setItem({ title: "", content: "" });
          event.preventDefault();
        }}
      >
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={item.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          onChange={handleChange}
          value={item.content}
          rows="3"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
