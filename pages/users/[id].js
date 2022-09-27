import { useRouter } from 'next/router';
import styles from '../../styles/user.module.scss';

export default function User({ user }) {
  const { query } = useRouter();
  return (
    <div className={styles.user}>
      <h1>User with id {query.id}</h1>
      {/* <div>User name - {user.name}</div> */}
    </div>
  );
}
