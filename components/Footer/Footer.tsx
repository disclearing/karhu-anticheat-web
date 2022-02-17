import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import LanguageContext from '../../context/LanguageContext'
import styles from './Footer.module.scss'

const Footer = () => {
    const { t } = useContext(LanguageContext)

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.flexContainer}>
                    <div>
                        <div className={styles.imgContainer}>
                            <Image
                                src="/logo.svg"
                                alt="Karhu Anticheat logo"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Accusamus sapiente vitae perspiciatis harum
                            nostrum, neque quisquam esse quaerat consectetur
                            nesciunt.
                        </p>
                    </div>
                    <div>
                        <h2>Links</h2>
                        <ul>
                            {t.footer.links.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.url}>{link.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2>Legal</h2>
                        <ul>
                            {t.footer.legal.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.url}>{link.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.credits}>
                    {t.footer.credits_build_by}
                    <Link href="https://github.com/KasperiP" passHref>
                        <a target="_blank"> kassq</a>
                    </Link>
                    . {t.footer.credits_source_code}{' '}
                    <Link
                        href="https://github.com/KasperiP/karhu-anticheat-web"
                        passHref
                    >
                        <a target="_blank">GitHub</a>
                    </Link>
                    .
                    <br />
                    2022 &copy; Karhu Anticheat -{' '}
                    {t.footer.credits_rights_reserved}
                </div>
            </div>
        </div>
    )
}

export default Footer
