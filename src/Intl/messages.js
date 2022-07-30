import {LOCALES} from "./locales";
import {Header} from "./messages/header"

export const MESSAGES = {
    [LOCALES.RUSSIAN]:{
        ...Header[LOCALES.RUSSIAN]
    },
    [LOCALES.KYRGYZ]:{
        ...Header[LOCALES.KYRGYZ]
    },
    [LOCALES.ENGLISH]:{
        ...Header[LOCALES.ENGLISH]
    }
}