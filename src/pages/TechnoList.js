import TechnoItem from "../components/TechnoItem";

export default function TechnoList({ technos, handleDeleteTechno }) {
  if (technos.length === 0) {
    return (
      <p>No techno yet!</p>
    )
  }
  return (
    <div className="techno-list">
      <h1>All {technos.length} Technos</h1>
      <div>
        {
          technos.map(techno => (
            <TechnoItem techno={techno} key={techno.id} handleDeleteTechno={handleDeleteTechno}></TechnoItem>
          ))
        }
      </div>
    </div>
  )
}
