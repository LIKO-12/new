import styles from "./logo.module.scss";

/**
 * The LIKO-12's logo as visible in the navbar (the icon and the title next to it).
 */
export default function Logo() {
    return (<>
        <img src="/assets/img/logo-icon.svg" className={styles.logo_icon} />
        <img src="/assets/img/logo-title.svg" className={styles.logo_title} />
    </>);
}