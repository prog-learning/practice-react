import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>
        Practice React by <a href='https://nextjs.org/'>Next.js</a>
      </h1>
      <p></p>
      <div className='box'>
        <p>Hello.</p>
        <Link href='/todo-list'>
          <a>TO DO LIST</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
