import Link from 'next/link';
import MainContainer from '../components/MainContainer';

const users = [
  { id: 1, name: 'Petya' },
  { id: 2, name: 'Vasya' },
];
const Users = () => {
  return (
    <div>
      <MainContainer keywords={'users next js'}>
        <h1>Users list</h1>
        <ul>
          {users.map((user) => (
            <li key={users.id}>
              <Link href={`/users/${user.id}`}>
                <a>{user.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <Link href={'/'}>
            <a>Home</a>
          </Link>
        </div>
        <div>
          <Link href={'/users'}>
            <a>Users</a>
          </Link>
        </div>
      </MainContainer>
    </div>
  );
};

export default Users;
