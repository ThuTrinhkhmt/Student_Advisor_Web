import './NavTea.css'
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

function NavTea() {
    return (
        <Fragment>
        <nav id="Nav_Platform">
        <ul>
          <li>
            <Link to="/Tea">
              <i className="ti-home"></i> Trang chủ
            </Link>
          </li>
          <li>
            <Link to="/classListTea">
              <i className="ti-layers"></i> Danh sách lớp học
            </Link>
          </li>
          <li>
            <Link to="/AppealAnnounce">
              <i className="ti-check-box"></i> TBao phúc khảo
            </Link>
          </li>
          <li>
            <Link to="/informationTea">
              <i className="ti-user"></i> Thông tin GV
            </Link>
          </li>
        </ul>
      </nav>
          </Fragment>
    )
}

export default NavTea