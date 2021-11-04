import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return <div className='bg-blue-300'>
    <p>Pagina de index</p>
    <Link href="admin/usuarios">
    <button>Ir a admin usuarios</button>
    </Link>
  </div>;
};

export default Home;
