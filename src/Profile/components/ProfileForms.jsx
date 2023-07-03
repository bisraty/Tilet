import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'

export default function ProfileForms() {
  return (
    <div className='p-4 px-10 w-[100%]'>
      <h1 className='font-bold text-[24px]'>My Profile</h1>
      <p className='text-[15px] text-sm'>
        This information will be displayed on your public profile.
      </p>
      <div className='flex flex-col gap-y-4'>
        <div className='flex md:flex-row flex-col mt-4 items-center justify-between gap-4'>
          <label className='input_label text-[17px] text-black' for='first_field'>
            Profile picture:
          </label>

          <div className=' w-[80%] flex  gap-4 '>
            <div className=' rounded-full bg-black h-[13vh] w-[13vh] mt-2  flex items-center justify-center '>
              <img
                src={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQduQaw52XvsA9qaIF5DwgFcM-18n8ilqYBiTkXn5a_yWKrrxWk'
                }
                className=' rounded-full object-contain h-[12vh] w-[12vh] '
              />
            </div>
            <div className='flex flex-col justify-center gap-1 mt-4'>
              <h1 className='text-[12px] text-gray-500'>Max file size: 5 MB</h1>
              <div className='flex-1 flex flex-col'>
                <input
                  id='file-upload'
                  type='file'
                  accept='image/*'
                  // onChange={(e) => setFile(e.target.files[0])}
                />
                <label htmlFor='file-upload' className='filepicker-label'>
                  Upload File
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className='flex md:flex-row flex-col mt-5 items-center justify-between gap-4'>
          <label className='input_label text-[17px] text-black' for='first_field'>
            First Name:
          </label>

          <div className='input_container w-[80%]'>
            <svg
              fill='none'
              viewBox='0 0 24 24'
              height='24'
              width='24'
              xmlns='http://www.w3.org/2000/svg'
              className='icon'
            >
              <AiOutlineUser size={24} />{' '}
            </svg>
            <input
              placeholder='First Name'
              title='Inpit title'
              name='input-name'
              type='text'
              className='input_field'
              id='firstname_field'
            />
          </div>
        </div>

        <div className='flex md:flex-row flex-col mt-4 justify-between  items-center gap-4'>
          <label className='input_label text-[17px] text-black' for='last_field'>
            Last Name:
          </label>

          <div className='input_container w-[80%]'>
            <svg
              fill='none'
              viewBox='0 0 24 24'
              height='24'
              width='24'
              xmlns='http://www.w3.org/2000/svg'
              className='icon'
            >
              <AiOutlineUser size={24} />{' '}
            </svg>

            <input
              placeholder='Last Name'
              title='Inpit title'
              name='input-name'
              type='text'
              className='input_field'
              id='username_field'
            />
          </div>
        </div>

        <div className='flex md:flex-row flex-col mt-4 justify-between  items-center '>
          <label className='input_label text-[17px] text-black' for='last_field'>
            Email:
          </label>

          <div className='input_container w-[80%]'>
            <svg
              fill='none'
              viewBox='0 0 24 24'
              height='24'
              width='24'
              xmlns='http://www.w3.org/2000/svg'
              className='icon'
            >
              <path
                stroke-linejoin='round'
                stroke-linecap='round'
                stroke-width='1.5'
                stroke='#141B34'
                d='M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5'
              ></path>

              <path
                stroke-linejoin='round'
                stroke-width='1.5'
                stroke='#141B34'
                d='M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z'
              ></path>
            </svg>

            <input
              placeholder='Email'
              title='Inpit title'
              name='input-name'
              type='text'
              className='input_field'
              id='username_field'
            />
          </div>
        </div>
        <button
          type='button'
          className='py-1.5  mt-10 self-end my-2 px-5 mr-2  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
        >
          Save Profile
        </button>
      </div>
    </div>
  )
}
