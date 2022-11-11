import React from 'react';

const navLinks = [
  { label: 'Nav 1', href: '#', id: 1 },
  { label: 'Nav 2', href: '#', id: 2 },
  { label: 'Nav 3', href: '#', id: 3 },
  { label: 'Nav 4', href: '#', id: 4 },
];

const Header = () => {
  const navigation = navLinks.map((entry) => (
    <a href={entry.href} key={entry.id}>
      <button className='bg-white text-black px-4 py-2 hover:text-gray-500'>{entry.label}</button>
    </a>
  ));

  return <div className='w-full bg-white flex flex-row align-center justify-center'>{navigation}</div>;
};

export default Header;
