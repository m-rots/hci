import { FunctionComponent, useEffect, useState } from 'react';
import styles from './title.module.scss';

const Title: FunctionComponent = ({ children }) => {
  const [classes, setClasses] = useState(styles.title);

  useEffect(
    () => {
      setClasses(classes + ' ' + styles.extruded);
    },
    [],
  );

  return <h1 className={classes}>{children}</h1>
}

export default Title;
