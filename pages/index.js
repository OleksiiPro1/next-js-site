import Link from 'next/link';
import A from '../components/A';
import MainContainer from '../components/MainContainer';

const Index = () => {
  return (
    <div>
      <MainContainer keywords={'main page'}>
        <h1>Main page</h1>
      </MainContainer>
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
      <div className="navbar">
        <A href={'/'} text="Main" />
        <A href={'/users'} text="Users" />
      </div>
    </div>
  );
};

export default Index;
