import PropTypes from 'prop-types';

import { Form, ButtonContainer } from './styles';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Name" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Email" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Phone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="instagram">instagram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
