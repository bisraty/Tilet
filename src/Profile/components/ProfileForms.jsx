import React, {useState} from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import * as Yup from 'yup'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import {useMutation} from 'react-query'
import {BiPhone} from 'react-icons/bi'
import axios from 'axios'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useAuth} from '../../utils/auth-hook'

export default function ProfileForms() {
  const {token, user} = useAuth()
  const [imgfile, uploadimg] = useState([])
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const APP_URL = import.meta.env.VITE_API_URL

  var notify = (message, type) =>
    type === 'error'
      ? toast.error(message, {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: true,

          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
      : toast.success(message, {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: true,

          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
  // console.log('Image FIles', imgfile)
  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      setImage(e.target.files[0])
      uploadimg((imgfile) => [...imgfile, URL.createObjectURL(e.target.files[0])])
    }
  }
  // console.log({user})
  const initialValues = {
    fullName: user?.fullName,
    userName: user?.userName,
    email: user?.email,
    phone: user?.phone,
  }

  // const validationSchema = Yup.object().shape({
  //   firstName: Yup.string().required('Required'),
  //   lastName: Yup.string().required('Required'),
  //   phone: Yup.string().required('Required'),
  //   email: Yup.string().email('Invalid email format').required('Required'),
  // })
  const headers = {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  }
  const EditProfileMutation = useMutation(
    async (newLogin) =>
      await axios.patch(APP_URL + '/users/' + user?.id, newLogin, {
        headers,
      }),
    {
      retry: false,
    }
  )
  const onSubmit = async ({fullName, userName, email, phone}) => {
    // console.log({name: firstName})
    setLoading(true)
    let formInfo = new FormData()
    formInfo.append('picture', image)
    formInfo.append('name', fullName)
    formInfo.append('username', userName)
    formInfo.append('email', email)
    formInfo.append('phone', phone)

    try {
      EditProfileMutation.mutate(
        formInfo,
        // {
        //   name: firstName,
        //   username: lastName,
        //   email: email,
        //   phoneNumber: phone,
        //   picture: Image
        // },
        {
          onSuccess: (responseData) => {
            // eslint-disable-next-line no-console
            console.log({responseData: responseData.data})
            setLoading(false)
            notify('Welcome to Tilet 🎉', 'success')

            navigate('/home')
            // }
          },
          onError: (response) => {
            // console.log({response: response?.response?.data.message})
            notify(`${response?.response?.data.message}`, 'error')
            setLoading(false)
          },
        }
      )
    } catch (err) {
      // console.log({err})
      notify('Network Error', 'error')
    }
  }
  return (
    <div className=' w-[100%]'>
      <ToastContainer />
      <div className='p-3'>
        <h1 className='font-bold text-[24px]'>My Profile</h1>
        <p className='text-[15px] text-sm'>
          This information will be displayed on your public profile.
        </p>
        <div className='flex md:flex-row flex-col mt-4 items-center justify-between gap-4'>
          <label className='input_label text-[17px] text-black' for='first_field'>
            Profile picture:
          </label>

          <div className=' w-[80%] flex  gap-4 '>
            <div className=' rounded-full bg-black h-[13vh] w-[13vh] mt-2  flex items-center justify-center '>
              {imgfile.length > 0 ? (
                imgfile.map((elem, index) => {
                  return (
                    <>
                      <span key={index}>
                        <img
                          src={elem}
                          alt='med1'
                          className='rounded-full object-contain h-[12vh] w-[12vh]'
                        />
                      </span>
                    </>
                  )
                })
              ) : (
                <img
                  src={
                    !user?.image
                      ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQduQaw52XvsA9qaIF5DwgFcM-18n8ilqYBiTkXn5a_yWKrrxWk'
                      : user?.image
                  }
                  className=' rounded-full object-contain h-[12vh] w-[12vh] '
                />
              )}
            </div>
            <div className='flex flex-col justify-center gap-1 mt-4'>
              <h1 className='text-[12px] text-gray-500'>Max file size: 5 MB</h1>
              <div className='flex-1 flex flex-col'>
                <input
                  id='file-upload'
                  type='file'
                  accept='image/*'
                  onChange={imgFilehandler}
                  // onChange={(e) => setFile(e.target.files[0])}
                />
                <label htmlFor='file-upload' className='filepicker-label'>
                  Upload File
                </label>
              </div>
            </div>
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          // validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(values) => {
            console.log({values})
            return (
              <Form className='w-full'>
                <div className='flex flex-col gap-y-4'>
                  <div className='flex md:flex-row flex-col mt-5 items-center justify-between gap-4'>
                    <label className='input_label text-[17px] text-black' htmlFor='first_field'>
                      Full Name:
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
                      <Field
                        placeholder='Full Name'
                        title='Input Full Name'
                        name='fullName'
                        type='text'
                        className='input_field'
                        id='firstname_field'
                      />
                    </div>
                  </div>

                  <div className='flex md:flex-row flex-col mt-4 justify-between  items-center gap-4'>
                    <label className='input_label text-[17px] text-black' htmlFor='last_field'>
                      User Name:
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

                      <Field
                        placeholder='User Name'
                        title='Input user name'
                        name='userName'
                        type='text'
                        className='input_field'
                        id='username_field'
                      />
                    </div>
                  </div>

                  <div className='flex md:flex-row flex-col mt-4 justify-between  items-center '>
                    <label className='input_label text-[17px] text-black' htmlFor='last_field'>
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
                          strokeLinejoin='round'
                          strokeLinecap='round'
                          strokeWidth='1.5'
                          stroke='#141B34'
                          d='M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5'
                        ></path>

                        <path
                          strokeLinejoin='round'
                          strokeWidth='1.5'
                          stroke='#141B34'
                          d='M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z'
                        ></path>
                      </svg>

                      <Field
                        placeholder='Email'
                        title='Input email'
                        name='email'
                        type='text'
                        className='input_field'
                        id='username_field'
                      />
                    </div>
                  </div>
                  {/* <ErrorMessage name='email' component='div' className='text-red-500' /> */}

                  <div className='flex md:flex-row flex-col mt-4 justify-between  items-center '>
                    <label className='input_label text-[17px] text-black' htmlFor='last_field'>
                      Phone Number:
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
                        <BiPhone size={24} />{' '}
                      </svg>
                      <Field
                        placeholder='Phone Number'
                        title='Input Phone Number'
                        name='phone'
                        type='text'
                        className='input_field'
                        id='phone'
                      />
                    </div>
                  </div>

                  <button
                    type='submit'
                    // onClick={onSubmit}
                    className='py-1.5  mt-10 self-end my-2 px-5 mr-2  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                  >
                    {loading ? 'loading ...' : 'Save Profile'}
                  </button>
                </div>
              </Form>
            )
          }}
        </Formik>
      </div>
    </div>
  )
}
