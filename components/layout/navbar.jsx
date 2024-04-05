import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ThemeMode from '../utils/theme.util'
import settings from '../../content/_settings.json';
import content from '../../content/navbar.json';
import css from '../../styles/structure/navbar.module.scss';

export default function Navbar() {
    const router = useRouter();
    const [menuState, menuToggle] = useState();

    useEffect(() => {
        menuToggle(false);
    }, []);

    const toggleMenu = () => {
        let bool = !menuState;
        menuToggle(bool);
    };

    return (
        <nav id="Navbar" className={css.container}>
            <ul className={css.menu}>
                <li className={css.menuHeader}>
                    <Link className={css.logo} href="/#">
                        {settings.name}
                    </Link>
                    <button onClick={toggleMenu} className={css.mobileToggle} data-open={menuState}>
                        <div>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </li>
                <li data-open={menuState} className={css.menuContent}>
                    <ul>
                        {content.map(({ url, title }, index) => (
                            <li key={index}>
                                {url.startsWith('/') ? (
                                    <Link href={url}>
                                        <a>{title}</a>
                                    </Link>
                                ) : (
                                    <a href={url}>{title}</a>
                                )}
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
            <span onClick={toggleMenu} className={css.menuBlackout} data-open={menuState}></span>
        </nav>
    );
}
