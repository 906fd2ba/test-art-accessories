export interface Locale {
    id: string
    name: string
}

export type LocaleStrings = Record<string, string>;
export type LocaleList = Record<string, LocaleStrings>;

export const locales: Locale[] = [
    {
        id: 'ru',
        name: 'Русский',
    },
    {
        id: 'en',
        name: 'English (US)',
    },
    {
        id: 'fr',
        name: 'Français',
    },
];

export const [ defaultLocale ] = locales;

export default (defList: LocaleList = {}) => {
    const locale: Ref<Locale> = useState('locale', () => defaultLocale);

    const getLocalizedString = (prop: string, list: LocaleList = defList): string => {
        const val = list[locale.value.id]?.[prop];
        const [ _, fallback ] = Object.entries(list).find(([ _, loc ]) => loc[prop]) || [];
        return val ?? fallback?.[prop] ?? '';
    };

    return {
        locale,
        locales,
        defaultLocale,
        getLocalizedString,
    };
}
