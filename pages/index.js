import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Digikid</title>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
          media="print"
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
          />
        </noscript>
      </Head>

      <div className="bg-yellow-400">
        <main className={styles.main}>
          <Image
            src="/digikid-at-leon.svg"
            alt="Digikid@St-Leon Logo"
            width={460}
            height={150}
          />
        </main>
        <div className={styles.container}>
          <main className={styles.main}>
            <Image
              src="/digikid-at-leon.svg"
              alt="Digikid@St-Leon Logo"
              width={460}
              height={150}
            />
          </main>

          <footer className={styles.footer}>
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/digikid-white.svg"
                alt="Digikid Logo"
                width={60}
                height={20}
              />
            </span>
          </footer>
        </div>
      </div>
    </>
  );
};
export default HomePage;
