const Vision = () => {
  return (
    <div className='flex md:flex-row flex-col gap-[100px] md:px-[15vw] px-5 mb-[120px]'>
      <h1 className='text-5xl font-bold text-center'>
        {' '}
        Our Vision
      </h1>
      <div className='justify-center items-center flex flex-col'>
        <h2 className='items-center justify-center'>
          Our traditional values shape how we deal with
          Clients, policyholders and suppliers. We believe
          in honesty, trust and transparency in our dealings
          with clients, customers and colleagues. We impart
          our positive attitude to work and business
          relationships.
        </h2>
        <ul className=''>
          <li>
            {' '}
            Our clients’ requirements are paramount. We
            passionately look after their interests and
            those of our wider community.
          </li>
          <li>
            We are passionate in our commitment to service
            delivery for our clients and their customers.
          </li>
          <li>
            {' '}
            We help protect our clients’ reputation, keep
            their customers and save them money.{' '}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Vision;
