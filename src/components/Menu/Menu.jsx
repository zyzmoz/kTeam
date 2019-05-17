import React from 'react';
import { withRouter} from 'react-router-dom';
import Link from './Link';
import './Menu.css';

const Menu = (props) => {
  const {pathname } = props.location;
  return (
    <div className="menu">
      <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <Link to="/" title="Dashboard" pathname={pathname} />
        <Link to="/users" title="Usuários" pathname={pathname} />
      </div>
    </div>
  );
};


export default withRouter(Menu);