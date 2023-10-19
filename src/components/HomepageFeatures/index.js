import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Общение',
    dest: require('@site/static/img/talking_main.png').default,
    description: (
      <>
          Добро пожаловать в наше сообщество, где мы активно обмениваемся опытом и знаниями. Присоединяйся к нашей Telegram-группе и стань частью нашей дружной команды. Твой вклад всегда ценен!
      </>
    ),
  },
  {
    title: 'Источник знаний',
    dest: require('@site/static/img/book_main.png').default,
    description: (
      <>
          Помимо общения, мы создаем увлекательный контент для экспатов. Лучшие публикации попадают в нашу базу знаний, чтобы их было проще найти. Вы тоже можете стать автором и поделиться своим опытом с миром.
      </>
    ),
  },
  {
    title: 'Делимся рефералками',
    dest: require('@site/static/img/money_main.png').default,
    description: (
      <>
          У вас есть возможность делиться резюме и вакансиями, и мы приветствуем обмен резюме. Здесь вы можете порекомендовать кого-то своему начальнику и попробовать найти работу уже среди знакомых людей.
      </>
    ),
  },
];

function Feature({dest, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img alt="" className={styles.featureSvg} src={dest} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
