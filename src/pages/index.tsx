import { useEffect, useState } from 'react';
import ChildComponent from '../components/childcomponent';
import { DrawerDemo } from '@/components/demodrawer';
import SignupForm from '@/components/signupform';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const ParentComponent = () => {
  const [data, setData] = useState('Hello from Parent');
  const router = useRouter();

  useEffect(() => {
    // Check if the token exists in cookies
    const token = Cookies.get('token');

    if (token) {
      // Redirect to /home if token exists
      router.push('/home');
    }
  }, [router]);
  return (
    <div>
      {/* <h1>Pat</h1>
      <ChildComponent data={data} />
      <DrawerDemo/> */}

<SignupForm/>
    </div>
  );
};

export default ParentComponent;
