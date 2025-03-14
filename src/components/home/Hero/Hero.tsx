import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import LanguageContext from '../../../context/LanguageContext'
import styles from './Hero.module.scss'

const Hero = () => {
    const { t } = useContext(LanguageContext)
    const router = useRouter()
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    // Detect the current theme
    useEffect(() => {
        // Initial theme detection
        const detectTheme = () => {
            const dataTheme = document.documentElement.getAttribute('data-theme')
            setTheme(dataTheme === 'dark' ? 'dark' : 'light')
        }

        // Detect initial theme
        detectTheme()

        // Set up a mutation observer to detect theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (
                    mutation.type === 'attributes' &&
                    mutation.attributeName === 'data-theme'
                ) {
                    detectTheme()
                }
            })
        })

        observer.observe(document.documentElement, { attributes: true })

        // Clean up the observer on component unmount
        return () => observer.disconnect()
    }, [])

    return (
        <section className={styles.container}>
            <div>
                <h2>{t.home_hero.name}</h2>
                <h1>
                    {t.home_hero.title_start}{' '}
                    <span className="gradientText">
                        {t.home_hero.title_highlight}
                    </span>{' '}
                    {t.home_hero.title_end}
                </h1>
                <p>
                    {t.home_hero.subtitle_start}{' '}
                    <strong>{t.home_hero.subtitle_highlight}</strong>{' '}
                    {t.home_hero.subtitle_end}
                </p>
                <div className={styles.buttons}>
                    <button
                        onClick={() => router.push('/#pricing')}
                        aria-label="View pricing"
                    >
                        {t.home_hero.button_left}
                    </button>
                    <button
                        onClick={() =>
                            window.open('https://discord.gg/cMY4xKRrW4')
                        }
                        aria-label="Join Discord"
                    >
                        {t.home_hero.button_right}
                    </button>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image
                    priority
                    src={theme === 'dark' ? '/hero-dark.svg' : '/hero.svg'}
                    alt="Hero illustration"
                    objectFit="contain"
                    layout="fill"
                />
            </div>
        </section>
    )
}

export default Hero
