import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
function Contact() {
  const inputClass =
    'pl-2 py-2 rounded-md bg-background-dark/10 text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent';
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className='flex flex-col pt-10'>
      <h1 className='text-3xl font-bold text-center text-text-dark'>
        Contact Us
      </h1>
      <h2 className='text-text-dark text-l text-center py-5'>
        Fill in the form below to get in touch with our
        surveying team.
      </h2>
      <form
        onSubmit={handleSubmit(() => {
          toast.success('Message sent successfully!');
        })}
        className='flex flex-col justify-center w-full max-w-md mx-auto p-5 md:p-0'
      >
        <h2 className='text-text-dark py-1'> Full Name*</h2>
        <input
          {...register('fullName', { required: true })}
          className={inputClass}
          placeholder='Enter your full name'
        />
        {!errors.fullName && <p className='py-3'> </p>}
        {errors.fullName && (
          <p className='text-red-400'>
            Full name is required.
          </p>
        )}
        <h2 className='text-text-dark pt-2 pb-1'>Email*</h2>
        <input
          {...register('email', { required: true })}
          className={inputClass}
          placeholder='Enter your email address'
        />
        {!errors.email && <p className='py-3'> </p>}
        {errors.email && (
          <p className='text-red-400'>
            Email address is required.
          </p>
        )}
        <h2 className='text-text-dark pt-2 pb-1'>
          Phone number
        </h2>
        <input
          {...register('phone', { pattern: /\d+/ })}
          className={inputClass}
          placeholder='Enter your phone number'
        />
        {!errors.phone && <p className='py-3'> </p>}
        {errors.phone && (
          <p className='text-red-400'>
            Please enter a valid phone number
          </p>
        )}
        <h2 className='text-text-dark pt-2 pb-1'>
          Message*
        </h2>
        <input
          {...register('message', { required: true })}
          className={inputClass}
          placeholder='Enter your message'
        />
        {!errors.message && <p className='py-3'> </p>}
        {errors.message && (
          <p className='text-red-400'>
            Message is required.
          </p>
        )}
        <div className='flex justify-center mt-5 w-[100%] gap-5 px-10 h-[48px]'>
          <input
            className='w-full rounded-lg border-1 border border-white text-text-dark'
            type='Reset'
          />
          <input
            className='w-full rounded-lg border-1 border border-black bg-background-dark text-text-dark'
            type='submit'
          />
        </div>
      </form>
    </div>
  );
}

export default Contact;
