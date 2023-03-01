import Formular from '@/components/Formular';
import Partners from '@/components/SealsAndPartners/Partners';
import React from 'react';

const FormularPage = () => {
  return (
    <>
      <Formular />
      <Partners cards={false} />
    </>
  );
};

export default FormularPage;
