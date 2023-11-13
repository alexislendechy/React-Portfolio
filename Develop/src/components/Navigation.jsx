import {NavLink} from 'react-router-dom';

const links = [
  {path: '/Hone', label: "Hone"},
  {path: '/AboutMe', label: "About Me"},
  {path: '/Portfolio', label: "Portfolio"},
  {path: '/Resume', label: "Resume"},
  {path: '/Contact', label: "Contact"},
];

const Navigation = () => {
  return (
   <ul>
    {links.map((link) => (
      <li>
        <NavLink> to={link.path} {link.label} </NavLink>
      </li>
    ))}
   </ul>
  );
};

export default Navigation;
