import React from 'react';
import surveyor from '../assets/surveyor.jpg';
import { useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';
const Welcome = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async () => {
    // Simulate an asynchronous action, like an API call
    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );
    toast.success('Subscribed Succesfully!');
  };
  return (
    <div className=' mb-[120px] px-[250px] pt-10 flex gap-[60px]'>
      <div className='flex flex-col'>
        <h1 className='text-[40px] font-bold'>
          Welcome to Arbiter Adjusters!
        </h1>
        <h2 className='mt-[24px] ml-2 text-[16px] font-normal'>
          We offer professional surveying services.
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('email', { required: true })}
            placeholder='Enter your email'
            className='pl-2 py-2 mt-[24px] ml-2 w-[336px] rounded-md bg-background-dark/10 text-black border text-[14px]
         border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
          />
          {!errors.email && (
            <p className='py-[10.5px]'> </p>
          )}
          {errors.email && (
            <p className='text-red-300 pl-2 text-[14px]'>
              Please enter your email
            </p>
          )}
          <button
            className={`w-[160px] p-[12px] mt-[14px] h-[48px] ml-2 rounded-lg border-1 border border-accent-dark bg-accent-dark text-white relative ${
              isSubmitting
                ? 'opacity-50 cursor-not-allowed'
                : ''
            }`}
            type='submit'
            disabled={isSubmitting}
          >
            {isSubmitting && (
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <ClipLoader
                  color={'#fff'}
                  loading={isSubmitting}
                />
              </div>
            )}
            {!isSubmitting ? 'Subscribe' : null}
          </button>
        </form>
      </div>
      <img src={surveyor}></img>
    </div>
  );
};

export default Welcome;
