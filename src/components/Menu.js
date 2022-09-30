import { NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <div className="menu">
      <ul>
        <li><NavLink to="/home" className={({ isActive }) => (isActive ? "active-link" : undefined)}>Home</NavLink></li>
        <li><NavLink to="/add" className={({ isActive }) => (isActive ? "active-link" : undefined)}>Add Techno</NavLink></li>
        <li><NavLink to="/list" className={({ isActive }) => (isActive ? "active-link" : undefined)}>All Technos</NavLink></li>
      </ul>
    </div>
  )
}
