import { useState } from 'react';
import PropTypes from 'prop-types';

import { Form, ButtonContainer } from './styles';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import isEmailValid from '../../utils';
import useErrors from '../../hooks/useErrors';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const { setError, removeError, getErrorMessageByFieldName } = useErrors();

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Name is required.' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'Email is invalid.' });
    } else {
      removeError('email');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input value={name} placeholder="Name" onChange={handleNameChange} error={getErrorMessageByFieldName('name')} />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input value={email} placeholder="Email" onChange={handleEmailChange} error={getErrorMessageByFieldName('email')} />
      </FormGroup>

      <FormGroup>
        <Input value={phone} placeholder="Phone" onChange={(event) => setPhone(event.target.value)} />
      </FormGroup>

      <FormGroup>
        <Select value={category} onChange={(event) => setCategory(event.target.value)}>
          <option value="">Category</option>
          <option value="instagram">Instagram</option>
          <option value="linkedin">Linkedin</option>
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
