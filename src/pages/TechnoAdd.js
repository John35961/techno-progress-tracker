import { useState } from 'react';

export default function TechnoAdd({ handleAddTechno }) {
  const emptyTechno = {
    name: '',
    category: '',
    description: ''
  }

  const [techno, setTechno] = useState(emptyTechno);

  function handleSubmit(event) {
    event.preventDefault();
    handleAddTechno(techno);
    setTechno(emptyTechno);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setTechno({ ...techno, [name]: value });
  }

  const placeholder = "I'd like to learn that new fancy JS framework..."

  return (
    <div className="techno-add">
      <h1>Add a new techno</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" name="name" id="name" value={techno.name} onChange={(event) => { handleChange(event) }} />
        <br />
        <label htmlFor="category">Techno:</label>
        <br />
        <select name="category" id="category" value={techno.category} onChange={(event) => { handleChange(event) }}>
          <option value="">Select a category</option>
          <option value="Front">Front</option>
          <option value="Back">Back</option>
          <option value="Fullstack">Fullstack</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <label htmlFor="description">Description:</label>
        <br />
        <textarea name="description" id="description" cols="30" rows="10" value={techno.description} onChange={(event) => { handleChange(event) }} placeholder={placeholder}></textarea>
        <br />
        <input type="submit" value="Add techno" className="btn" />
      </form>
    </div>
  )
}
