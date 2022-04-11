import React from 'react';
import { Button } from 'react-bootstrap';

const renderSubmitButton = ({onClick, isDisabled, text}) => (
  <Button
    variant="primary"
    onClick={onClick}
    disabled={isDisabled}
  >{text}</Button>
)


export default renderSubmitButton;