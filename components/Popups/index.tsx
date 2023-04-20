import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import AGB from 'pages/agb';
import Datenschutz from 'pages/datenschutz';
import * as React from 'react';
import Newsletter from './Newsletter';
import Reprasentatives from './Reprasentatives';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  popupContent: string;
}

const Popup = ({ isOpen, onClose, popupContent }: Props) => {
  const { isOpen: _isOpen, onClose: _onClose } = useDisclosure();

  let displayed = null;
  switch (popupContent) {
    case 'Datenschutz':
      displayed = <Datenschutz isPopup={true} />;
      break;
    case 'AGB':
      displayed = <AGB isPopup={true} />;
      break;
    case 'Newsletter':
      displayed = <Newsletter />;
      break;
    case 'Repräsentatives Zins-Beispiel':
      displayed = <Reprasentatives isOpen={isOpen} />;
      break;
    default:
      displayed = null;
  }

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size='xl' scrollBehavior='inside'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{popupContent}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={4} overflowWrap='break-word'>
          {displayed}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Popup;
