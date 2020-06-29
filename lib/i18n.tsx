import { ReactNode, createContext, useState, useRef, useEffect } from 'react';
import rosetta from 'rosetta';
// import rosetta from 'rosetta/debug';

const i18n = rosetta();

export const defaultLanguage = 'en';
export const languages = ['es', 'en'];
export const contentLanguageMap: {
  [key: string]: any;
} = { es: 'es-AR', en: 'en-US' };

export type i18nType = {
  activeLocale: string;
  locale(lang: string, dict?: object): void;
  t<X extends Record<string, any> | any[]>(
    key: string | (string | number)[],
    params?: X,
    lang?: string
  ): string;
  languages: string[];
};

const defaultContext: i18nType = {
  activeLocale: defaultLanguage,
  locale(lang = defaultLanguage, dict = contentLanguageMap) {
    return;
  },
  t(key = '', ...args) {
    return '';
  },
  languages
};

export const I18nContext = createContext(defaultContext);

// default language
i18n.locale(defaultLanguage);

type i18nProps = {
  children: ReactNode;
  locale: string;
  lngDict: string[];
};

export default function I18n({
  children,
  locale,
  lngDict
}: i18nProps): JSX.Element {
  const [activeDict, setActiveDict] = useState(() => lngDict);
  const activeLocaleRef = useRef(locale || defaultLanguage);
  const [, setTick] = useState(0);
  const firstRender = useRef(true);

  // for initial SSR render
  if (locale && firstRender.current === true) {
    firstRender.current = false;
    i18n.locale(locale);
    i18n.set(locale, activeDict);
  }

  useEffect(() => {
    if (locale) {
      i18n.locale(locale);
      i18n.set(locale, activeDict);
      activeLocaleRef.current = locale;
      // force rerender
      setTick(tick => tick + 1);
    }
  }, [locale, activeDict]);

  const i18nWrapper = {
    activeLocale: activeLocaleRef.current,
    t: (key: string, ...args: any): any => i18n.t(key, ...args),
    locale: (l: string, dict?: any): void => {
      i18n.locale(l);
      activeLocaleRef.current = l;
      if (dict) {
        i18n.set(l, dict);
        setActiveDict(dict);
      } else {
        setTick(tick => tick + 1);
      }
    },
    languages
  };

  return (
    <I18nContext.Provider value={i18nWrapper}>{children}</I18nContext.Provider>
  );
}
