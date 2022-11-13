import { TabPanel } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import React from 'react';

const PanelLinks = ({ content }: { content: Array<{ id: number; label: string; href: string }> }) => {
  const links = content.map((entry) => (
    <a key={entry.id} href={entry.href} target='_blank' rel='noreferrer'>
      <Button variant='accent'>{entry.label}</Button>
    </a>
  ));
  return <TabPanel>{links}</TabPanel>;
};

export default PanelLinks;
