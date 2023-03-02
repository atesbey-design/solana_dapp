import { Default } from 'components/layouts/Default';
import { Template } from 'components/templates/Template';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Default pageName="Home">
      <Template />
    </Default>
  );
};

export default HomePage;
