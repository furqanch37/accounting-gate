import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./hero/page";
import SolutionsTabs from "./solutions/page";
import Trusted from "./trusted/page";
import Why from "./why/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <SolutionsTabs />
      <Trusted />
      <Why />

    </div>
  );
}
