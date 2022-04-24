import {
  Container, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/delete.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contacts</strong>
        <a href="/">New contact</a>
      </Header>

      <ListContainer>
        <header>
          <button className="sort-button" type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

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
            <a href="/">
              <img src={edit} alt="Edit button" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete button" />
            </button>
          </div>
        </Card>

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
            <a href="/">
              <img src={edit} alt="Edit button" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete button" />
            </button>
          </div>
        </Card>

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
            <a href="/">
              <img src={edit} alt="Edit button" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete button" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
