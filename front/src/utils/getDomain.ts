import { headers } from 'next/headers';

const getDomain = () => {
  const headersList = headers();
  const domain = headersList.get('x-forwarded-host')!;
  return domain;
};

export default getDomain;
