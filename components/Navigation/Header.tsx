import React from 'react';
import { Tabs, TabList, TabPanels, Tab, useMediaQuery, HStack, Button } from '@chakra-ui/react';
import PanelLinks from './PanelLinks';
import { tabLinks, navLinks } from '../../data/navigationLinks';
import Image from 'next/image';
import { FullWidthContainer, ResponsiveContainer } from '../Containers';

const Nav = ({ navLinks }: { navLinks: Array<{ id: number; label: string; href: string }> }) => {
  const isMobile = useMediaQuery('600px');
  const links = navLinks.map((entry) => (
    <a key={entry.id} href={entry.href} target='_blank' rel='noreferrer'>
      <Button>{entry.label}</Button>
    </a>
  ));

  return (
    <HStack h={[50, 75]} justify='space-between'>
      <Image
        src={isMobile ? '/mobile-logo.svg' : '/logo.svg'}
        alt={'Logo Image'}
        width={isMobile ? 50 : 100}
        height={isMobile ? 50 : 100}
      />
      <HStack px={4}>
        {/* <SearchBar /> */}
        {links}
      </HStack>
    </HStack>
  );
};

const Header = () => {
  const tabs = tabLinks.map((entry) => <Tab key={entry.id}>{entry.label}</Tab>);
  const tabPanels = tabLinks.map((entry) => <PanelLinks key={entry.id} content={entry.content} />);

  return (
    <FullWidthContainer>
      <ResponsiveContainer>
        <Nav navLinks={navLinks} />
        <Tabs className=''>
          <TabList>{tabs}</TabList>
          <TabPanels>{tabPanels}</TabPanels>
        </Tabs>
      </ResponsiveContainer>
    </FullWidthContainer>
  );
};

export default Header;
