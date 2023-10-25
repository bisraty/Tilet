import React, {useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {CKEditor} from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import * as Yup from 'yup'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import {useAuth} from '../utils/auth-hook'
import {useMutation} from 'react-query'
import axios from 'axios'
import state from '../store'

import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loading from '../utils/Loading'
function UploadCreatedFile() {
  const {state} = useLocation()
  const navigate = useNavigate()
  console.log({state})
  const [images, setImages] = useState(state.imageUrl)
  const [loading, setLoading] = useState(false)
  const [description, setDescription] = useState('<p>Enter your description here</p>')
  const APP_URL = import.meta.env.VITE_API_URL
  const {token} = useAuth()
  const [selectedImage, setSelectedImage] = useState(null)
  console.log({selectedImage})
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

  const headers = {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  }
  function DataURIToBlob(dataURI) {
    const splitDataURI = dataURI.split(',')
    const byteString =
      splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0]

    const ia = new Uint8Array(byteString.length)
    for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i)

    return new Blob([ia], {type: mimeString})
  }
  const uploadMutation = useMutation(
    async (newLogin) =>
      await axios.post(APP_URL + '/products', newLogin, {
        headers,
      }),
    {
      retry: false,
    }
  )

  const initialValues = {
    name: '',
    price: '',
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    price: Yup.string().required('Required'),
  })

  const onSubmit = async ({name, price}) => {
    setLoading(true)
    let formInfo = new FormData()
    formInfo.append('picture', DataURIToBlob(images))
    formInfo.append('name', name)
    formInfo.append('price', price)
    formInfo.append('description', description)

    try {
      uploadMutation.mutate(
        formInfo,

        {
          onSuccess: (responseData) => {
            // eslint-disable-next-line no-console

            setLoading(false)

            notify('Created successfully  🎉', 'success')
            navigate('/home')
          },
          onError: (responseData) => {
            console.log({responseData})
            notify(`${responseData?.response?.data.message}`, 'error')
            setLoading(false)
          },
        }
      )
    } catch (err) {
      console.log({err})
      notify('Network Error', 'error')
    }
  }
  return (
    <div className=' py-4 min-h-screen px-2 bg-[#E2E2E2] '>
      <ToastContainer />
      <div className=' w-auto my-6 mx-auto max-w-5xl '>
        {/*content*/}
        <div className='border-0 rounded-[4vh] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
          {/*body*/}
          <h1 onClick={() => navigate(-1)} className='text-black cursor-pointer px-2 mt-2'>
            {'< back'}
          </h1>
          <label className='input_label text-[24px] mx-auto my-2 text-black' for='first_field'>
            Publish Your Design
          </label>
          <div className='w-full h-1 my-2 bg-[#E2E2E2]' />
          <div className='w-full flex py-10'>
            <div className='p-2 flex-auto mx-auto w-[50%]'>
              <img src={images} className='md:h-[40vh] w-full object-cover'></img>
            </div>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(values) => {
                return (
                  <Form className='w-full '>
                    <div className='flex flex-col  items-center'>
                      <div className='w-[80%] mb-3'>
                        <label className='input_label text-[17px] text-black' for='first_field'>
                          Title
                        </label>

                        <div className='input_container '>
                          <Field
                            placeholder='Enter Title'
                            title='Enter title'
                            name='name'
                            type='text'
                            className='input_field '
                            id='firstname_field'
                          />
                        </div>
                        <ErrorMessage name='name' component='div' className='text-red-500' />
                      </div>

                      <div className='w-[80%] mb-3'>
                        <label className='input_label text-[17px] text-black' for='first_field'>
                          Price
                        </label>

                        <div className='input_container '>
                          <Field
                            placeholder='Enter Price'
                            title='Enter price'
                            name='price'
                            type='text'
                            className='input_field '
                            id='price_field'
                          />
                        </div>
                        <ErrorMessage name='price' component='div' className='text-red-500' />
                      </div>
                      <div className='w-[80%] mb-3'>
                        <label className='input_label text-[17px] text-black' for='first_field'>
                          Description
                        </label>

                        <div className='input_container '>
                          <CKEditor
                            editor={ClassicEditor}
                            data={description}
                            onChange={(event, editor) => {
                              // const data = editor.getData()
                              setDescription(editor.getData)
                              // console.log({event, editor, data})
                            }}
                            onReady={(editor) => {
                              // You can store the "editor" and use when it is needed.
                              console.log('Editor1 is ready to use!', editor)
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    {/*footer*/}
                    <div className='flex items-center justify-end p-6 '>
                      <button
                        className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                        type='button'
                        onClick={() => navigate(-1)}
                      >
                        Cancel
                      </button>
                      <button
                        className='bg-black text-white active:bg-gray-900 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                        type='submit'
                        // onClick={() => setShowModal(false)}
                      >
                        {loading ? 'loading...' : 'Post'}{' '}
                      </button>
                    </div>
                  </Form>
                )
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UploadCreatedFile
