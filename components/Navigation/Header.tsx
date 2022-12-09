import React from 'react';
import { Tabs, TabList, TabPanels, Tab, HStack, Button, Heading, Text } from '@chakra-ui/react';
import PanelLinks from './PanelLinks';
import { tabLinks, navLinks } from '../../data/navigationLinks';
import { FullWidthContainer, ResponsiveContainer } from '../Containers';

const Nav = ({ navLinks }: { navLinks: Array<{ id: number; label: string; href: string }> }) => {
  // const [isMobile] = useMediaQuery('(max-width: 640px)');
  const links = navLinks.map((entry) => (
    <a key={entry.id} href={entry.href} target='_blank' rel='noreferrer'>
      <Button variant='link'>{entry.label}</Button>
    </a>
  ));

  return (
    <HStack py={[4, 10]} justify='space-between'>
      {/* <Image
        src={isMobile ? '/mobile-logo.svg' : '/logo.svg'}
        alt={'Logo Image'}
        width={isMobile ? 50 : 100}
        height={isMobile ? 50 : 100}
      /> */}
      <HStack alignItems='flex-end' spacing={10}>
        <Heading as={'h1'} fontSize={['lg', '2xl', '4xl']}>
          Zins-runter
        </Heading>
        <Text as='b' fontSize={['md', 'xl', 'xl']}>
          Das ist kein Versprechen - sondern unsere Motivation!
        </Text>
      </HStack>
      <HStack px={4} spacing={8}>
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
        <Tabs>
          <TabList>{tabs}</TabList>
          <TabPanels>{tabPanels}</TabPanels>
        </Tabs>
      </ResponsiveContainer>
    </FullWidthContainer>
  );
};

export default Header;
