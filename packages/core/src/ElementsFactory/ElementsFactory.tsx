import React from 'react';
import { Elements, ElementType } from './interfaces';

import { FeButton } from '../elements/Button/FeButton';
import { FeGrid } from '../elements/Grid/FeGrid';
import { FeIcon } from '../elements/Icon/FeIcon';
import { FeLoader } from '../elements/Loader/FeLoader';
import { FePopup } from '../elements/Popup/FePopup';
import { FeCheckbox } from '../elements/Checkbox/FeCheckbox';
import { FeTag } from '../elements/Tag/FeTag';

export const fronteggElements: Partial<Elements> = {
  Loader: FeLoader,
  Tag: FeTag,
  Button: FeButton,
  Grid: FeGrid,
  Icon: FeIcon,
  Popup: FePopup,
  Checkbox: FeCheckbox,
};


export class ElementsFactory {
  private static instance: ElementsFactory;
  private elements: Elements | null = null;

  private constructor() {}

  private static getInstance(): ElementsFactory {
    if (!ElementsFactory.instance) {
      ElementsFactory.instance = new ElementsFactory();
    }
    return ElementsFactory.instance;
  }

  public static setElements = (elements?: Partial<Elements>) => {
    ElementsFactory.getInstance().elements = {
      ...fronteggElements,
      ...elements,
    } as any;
  };

  public static getElement = <P extends ElementType>(type: P): Elements[P] => {
    const { elements } = ElementsFactory.getInstance();
    if (!elements) {
      throw Error('You must pass UI Library to FronteggProvider');
    }

    return elements[type];
  };
}
