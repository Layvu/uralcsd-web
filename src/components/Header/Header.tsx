import React from 'react';

import { HeaderUI } from '@components/ui/Header';

interface HeaderProps {
  onMenuToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return <HeaderUI onMenuToggle={onMenuToggle} />;
};
