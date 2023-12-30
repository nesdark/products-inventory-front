import { FaClockRotateLeft } from 'react-icons/fa6';
import { FaUserCircle } from 'react-icons/fa';
import { TbLogout2 } from 'react-icons/tb';
import { IoIosMenu } from 'react-icons/io';
import { RiShutDownLine } from 'react-icons/ri';
import { LuListPlus } from 'react-icons/lu';

import { Container } from './styles';
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { Link } from 'react-router-dom';
import { IconButton } from '../IconButton';

export function SideBar() {
  const { signOut } = useAuth();

  const [SideBarClass, setSideBarClass] = useState('expanded');
  const [userInfo, setUserInfo] = useState({});

  const SideBar = {
    toggle: function () {
      let newSideBarStatusClass = SideBarClass == 'expanded' ? '' : 'expanded';
      setSideBarClass(newSideBarStatusClass);
      console.log(SideBarClass);
    },
  };

  useEffect(() => {
    function fetchUserInfo() {
      setUserInfo(() =>
        JSON.parse(localStorage.getItem('@food-explorer:user'))
      );
    }
    fetchUserInfo();
  }, []);

  return (
    <Container className={SideBarClass}>
      <ul>
        <li>
          <button onClick={() => SideBar.toggle()} className="sidebar-opener">
            <IoIosMenu />
          </button>
        </li>
        <li>
          <button>
            <FaClockRotateLeft />
            <div
              className="legend"
              onClick={() => alert('Esta funcionalidad no esta lista')}
            >
              Histórico
            </div>
          </button>
        </li>
        <li>
          <button>
            <RiShutDownLine />
            <div
              className="legend"
              onClick={() => alert('Esta funcionalidad no esta lista')}
            >
              Cierre Diário
            </div>
          </button>
        </li>
        <li>
          <button>
            <LuListPlus />
            <div
              className="legend"
              onClick={() => alert('Esta funcionalidad no esta lista')}
            >
              Crear categoria
            </div>
          </button>
        </li>
      </ul>
      <div className="info">
        <button>
          <div
            className="profile"
            onClick={() => alert('Esta funcionalidad no esta lista')}
          >
            <FaUserCircle />
            <div className="legend">
              <span>{userInfo.name}</span>
              {userInfo.role}
            </div>
          </div>
        </button>
        <div className="log-out">
          <Link to="/">
            <IconButton icon={TbLogout2} size="32" onClick={signOut} />
          </Link>
        </div>
      </div>
    </Container>
  );
}
