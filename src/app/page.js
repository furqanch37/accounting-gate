import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./hero/page";
import SolutionsTabs from "./solutions/page";
import Trusted from "./trusted/page";
import Why from "./why/page";
import Benefit from "./benefit/page";
import Integrations from "./integrations/page";
import Scale from "./scale/page";
import Productivity from "./productivity/page";
import Awards from "./awards/page";
import Ready from "./ready/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <SolutionsTabs />
      <Trusted />
      <Why />
      <Benefit />
      <Integrations />
      <Scale />
      <Productivity />
      <Awards />
      <Ready />

    </div>
  );
}
