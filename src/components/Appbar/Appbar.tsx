import { NavLink } from 'react-router-dom';
import { Route } from '../../types/routes';

interface AppbarProps {
  routes: Route[];
}

const Appbar = ({ routes = [] }: AppbarProps) => (
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <NavLink
          to={routes[0].to}
          className="navbar-brand"
        >
          Home
        </NavLink>
      </div>
      <ul className="nav navbar-nav">
        {
          routes.map(({ to, name }: Route) => (
            <li>
              <NavLink
                key={name}
                to={to}
                style={({ isActive }: any) => (
                  isActive
                    ? {
                      textDecoration: 'none',
                      color: 'red',
                    }
                    : {}
                )}
              >
                {name}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </div>
  </nav>
);

export default Appbar;
