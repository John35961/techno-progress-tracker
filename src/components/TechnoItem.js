export default function TechnoItem({ techno, handleDeleteTechno }) {

  return (
    <div key={techno.id} className="card">
      <div className="card-item">
        <h2>{techno.name}</h2>
      </div>
      <div className="card-item">
        <small className="card-item-title">Category</small>
        <p>{techno.category}</p>
      </div>
      <div className="card-item">
        <small className="card-item-title">Description</small>
        <p>{techno.description}</p>
      </div>
      <div className="footer">
        <button className="btn-delete" onClick={() => handleDeleteTechno(techno.id)}>Delete</button>
      </div>
    </div>
  )
}
