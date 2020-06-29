import { useContext } from 'react';

import { I18nContext, i18nType } from '../lib/i18n';

export default function useTranslation(): i18nType {
  const i18n = useContext(I18nContext);
  return i18n;
}
