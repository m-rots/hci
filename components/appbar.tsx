import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import styles from './appbar.module.scss';

const links: ButtonProps[] = [
  {
    name: 'Workout',
    href: '/',
  },
  {
    name: 'Friends',
    href: '/leaderboard',
  },
  {
    name: 'Progress',
    href: '/progress',
  },
  {
    name: 'Rewards',
    href: '/rewards'
  }
]

type ButtonProps = {
  href: string
  name: string
}

const Button: FunctionComponent<ButtonProps> = ({ href, name }) => {
  const router = useRouter();
  let classes = styles.button;
  if (router.pathname === href) {
    classes += ' ' + styles.selected;
  }

  return (
    <Link href={href}>
      <button className={classes}>{name}</button>
    </Link>
  )
}

const Appbar: FunctionComponent= () => (
  <div className={styles.wrapper}>
    {
      links.map((page) => <Button key={page.href} {...page} />)
    }
  </div>
);

export default Appbar