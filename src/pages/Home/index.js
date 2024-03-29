import { Link } from 'react-router-dom';

import {
  Container, Header, InputSearchContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/delete.svg';
// import Modal from '../../components/Modal';
// import Loader from '../../components/Loader';

export default function Home() {
  return (
    <Container>
      {/* <Loader> */}
      {/* <Modal danger /> */}

      <InputSearchContainer>
        <input type="text" placeholder="Search by name..." />
      </InputSearchContainer>

      <Header>
        <strong>3 contacts</strong>
        <Link to="/new" className="btn-new">New contact</Link>
      </Header>

      <Header>
        <button className="sort-button" type="button">
          <span>Name</span>
          <img src={arrow} alt="Arrow" />
        </button>
      </Header>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Jaqueline Natsue</strong>
            <small>twitter</small>
          </div>
          <p>jaqueline_natsue@gmail.com</p>
          <p>(47)99182-8291</p>
        </div>
        <div className="actions">
          <Link to="/edit/1">
            <img src={edit} alt="Edit button" />
          </Link>
          <button type="button">
            <img src={trash} alt="Delete button" />
          </button>
        </div>
      </Card>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Victor Lapa</strong>
            <small>twitter</small>
          </div>
          <p>victor_lapa@gmail.com</p>
          <p>(47)99182-8291</p>
        </div>
        <div className="actions">
          <Link to="/">
            <img src={edit} alt="Edit button" />
          </Link>
          <button type="button">
            <img src={trash} alt="Delete button" />
          </button>
        </div>
      </Card>

      {/* </Loader> */}
    </Container>
  );
}
