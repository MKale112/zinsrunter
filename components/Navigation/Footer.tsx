import React from 'react';

const footerLinks = [
  { id: 1, label: 'Zinsrunter', href: '/' },
  { id: 2, label: 'Impressum', href: '/impressum' },
];

const Footer = () => {
  const items = footerLinks.map((entry) => (
    <a href={entry.href} target={entry.label !== 'Zinsrunter' ? '_blank' : '_self'}>
      <button className='border-0 px-4 py-2 bg-white text-gray-500' key={`${entry.label}${entry.id}`}>
        {entry.label}
      </button>
    </a>
  ));
  return <div className='w-full h-24 bg-white flex flex-col md:flex-row md:justify-center items-center'>{items}</div>;
};

export default Footer;
