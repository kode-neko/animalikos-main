import {atom, PrimitiveAtom} from 'jotai';

const appColor: PrimitiveAtom<string> = atom('');
const appLoading: PrimitiveAtom<boolean> = atom(false);
const appLang: PrimitiveAtom<string> = atom('en');

export {
  appColor,
  appLoading,
  appLang
};