import React, { FC } from 'react';
import { IconProps, Icon } from '@chakra-ui/react';

export const AddIcon: FC = (props: IconProps) => (
  <Icon
    fill='#000000'
    version='1.1'
    id='Add_1'
    xmlns='http://www.w3.org/2000/svg'
    //   width='15px'
    //   height='30px'
    viewBox='0 0 24 24'
    focusable='false'
    {...props}
  >
    <g>
      <g>
        <path
          fill='currentColor'
          d='M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z'
        ></path>
      </g>
    </g>
  </Icon>
);
