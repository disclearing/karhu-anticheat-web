import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import styles from './ThemeToggle.module.scss'

const ThemeToggle = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    useEffect(() => {
        // Check if theme is stored in localStorage
        const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
        if (storedTheme) {
            setTheme(storedTheme)
            document.documentElement.setAttribute('data-theme', storedTheme)
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // If no stored theme, check system preference
            setTheme('dark')
            document.documentElement.setAttribute('data-theme', 'dark')
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
        localStorage.setItem('theme', newTheme)
    }

    return (
        <button 
            className={styles.themeToggle} 
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
            {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
        </button>
    )
}

export default ThemeToggle 