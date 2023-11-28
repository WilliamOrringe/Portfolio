const PracticeAreas = () => {
  return (
    <div className=' flex md:flex-row flex-col gap-[50px] md:px-[15vw] px-5 mb-[120px]'>
      <h1 className='text-5xl font-bold'>
        {' '}
        Practice Areas
      </h1>
      <div className='flex flex-col gap-5'>
        <div className='flex lg:flex-row flex-col gap-3'>
          <div className='gap-2 flex flex-col w-full'>
            <h2 className='text-xl font-semibold'>
              Loss Adjusting and claims management
            </h2>
            <h3>
              We provide bespoke solutions to the
              investigation and settlement of claims
              involving paintings, antiques, collectibles
              precious metals and stones, historic and
              listed buildings landed property estates and
              general high net worth property claims.
              Arbiter high quality claims service is
              paramount in ensuring satisfaction, policy
              renewal and meeting the needs of discerning
              clients in this arena. We offer a discreet
              service handling each case with empathy.
            </h3>
          </div>
          <div className='gap-2 flex flex-col w-full'>
            <div>
              <h2 className='text-xl font-semibold'>
                Consultancy
              </h2>
              <h3>
                We provide consultancy services to Insurers,
                Loss Adjusters, Law Firms and Companies.
              </h3>
            </div>
            <div className='mt-5 gap-2 flex flex-col'>
              <h2 className='text-xl font-semibold'>
                Fraud
              </h2>
              <h3>
                Specialist investigation for insurance where
                Fraud is suspected in Fine Art, specie and
                HNW insurance claims.'
              </h3>
            </div>
            <div className='mt-5 gap-2 flex flex-col'>
              <h2 className='text-xl font-semibold'>
                Marine Cargo
              </h2>
              <h3>
                We specialise in Goods In Transit, often
                allied to our Fine Art and Specie work.
                Including Air, sea, Road and Removers.
              </h3>
            </div>
          </div>
        </div>
        <div className='flex md:flex-row flex-col gap-3'>
          <div className='gap-2 flex flex-col w-full'>
            <h2 className='text-xl font-semibold'>
              Surveys
            </h2>
            <h3>
              Is your building insured adequately to cover
              the cost of reinstatement in the event of a
              loss?' Security Survey's For Houses, Estates,
              Galleries, Auction Houses and Jewellers
            </h3>
          </div>
          <div className='gap-2 flex flex-col w-full'>
            <h2 className='text-xl font-semibold'>
              Private Client
            </h2>
            <h3>
              Claims preparation, negotiation and project
              management for Private Clients, Landed
              property estates and self insured entities.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;
