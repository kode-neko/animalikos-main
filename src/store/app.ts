import {atom, PrimitiveAtom} from 'jotai';
import { Color } from '../model';

const appColor: PrimitiveAtom<string> = atom(Color.BLUE as string);
const appLoading: PrimitiveAtom<boolean> = atom(false);
const appLang: PrimitiveAtom<string> = atom('en');

export {
  appColor,
  appLoading,
  appLang
};