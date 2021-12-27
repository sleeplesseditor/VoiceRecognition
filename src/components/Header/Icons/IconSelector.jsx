import * as React from 'react';

import { ReactComponent as ArrowIcon } from './arrow-back-outline.svg';
import { ReactComponent as DisplayIcon } from './eye-outline.svg';
import { ReactComponent as DrawIcon } from './pencil-outline.svg';
import { ReactComponent as LanguageIcon } from './language-outline.svg';
import { ReactComponent as ShapesIcon } from './shapes-outline.svg';
import { ReactComponent as TextIcon } from './text-outline.svg';

const getIcon = (icon) => {
  const iconSelection = {
      arrowIcon: () => <ArrowIcon />,
      displayIcon: () => <DisplayIcon />,
      drawIcon: () => <DrawIcon />,
      languageIcon: () => <LanguageIcon />,
      shapesIcon: () => <ShapesIcon />,
      textIcon: () => <TextIcon />,
      default: () => null
  }

  return (iconSelection[icon] || iconSelection.default)()
}

export const IconSelector = (icon) => {
    const iconClass = getIcon(icon);
    return (
      <>
        {iconClass}
      </>
    );
};