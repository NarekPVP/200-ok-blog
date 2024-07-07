import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Интересные примеры кода и возможности",
    Svg: require("@site/static/img/code.svg").default,
    description: (
      <>
        Увлекательные примеры кода и различные возможности их применения,
        которые помогут вам лучше понять и использовать современные технологии
        программирования.
      </>
    ),
  },
  {
    title: "Новости ИТ",
    Svg: require("@site/static/img/news.svg").default,
    description: (
      <>
        Оперативные и актуальные новости из мира информационных технологий:
        последние разработки, инновации, события, аналитика и тенденции, которые
        формируют будущее ИТ-индустрии.
      </>
    ),
  },
  {
    title: "Курсы",
    Svg: require("@site/static/img/course.svg").default,
    description: (
      <>
        Обзор образовательных программ от основ программирования до продвинутых
        технологий и управления проектами. Найдите подходящие курсы для
        профессионального роста в нашем Telegram-канале{" "}
        <a href="https://t.me/Ok200Dev" target="_blank">
          @200Ok
        </a>
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
