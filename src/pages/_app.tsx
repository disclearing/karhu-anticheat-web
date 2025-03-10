import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import en from '../../languages/en'
import fi from '../../languages/fi'
import es from '../../languages/es'
import LanguageContext from '../context/LanguageContext'
import '../styles/_global.scss'

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
    const { locale } = router
    let t: typeof en
    switch (locale) {
        case 'en':
            t = en
            break
        case 'fi':
            t = fi
            break
        case 'es':
            t = es
            break
        default:
            t = en
    }

    return (
        <LanguageContext.Provider value={{ locale: locale || 'en', t: t }}>
            <Component {...pageProps} />
        </LanguageContext.Provider>
    )
}

export default MyApp
