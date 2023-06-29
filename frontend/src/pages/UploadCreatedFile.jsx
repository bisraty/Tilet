import React, {useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {CKEditor} from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

function UploadCreatedFile() {
  const {state} = useLocation()
  const navigate = useNavigate()
  console.log({state})
  const [images, setImages] = useState(state.imageUrl)

  return (
    <div className=' py-4 min-h-screen px-2 bg-[#E2E2E2]'>
      <div className=' w-auto my-6 mx-auto max-w-3xl bg-white rounded-md shadow-md'>
        {/*content*/}
        <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
          {/*body*/}
          <label className='input_label text-[24px] mx-auto my-2 text-black' for='first_field'>
            Publish Your Design
          </label>
          <div className='p-2 flex-auto mx-auto'>
            <img src={images} className='md:h-[40vh] object-contain'></img>
          </div>
          <div className='flex flex-col  items-center'>
            <div className='w-[80%] mb-3'>
              <label className='input_label text-[17px] text-black' for='first_field'>
                Title
              </label>

              <div className='input_container '>
                <input
                  placeholder='Enter Title'
                  title='Enter title'
                  name='input-title'
                  type='text'
                  className='input_field '
                  id='firstname_field'
                />
              </div>
            </div>
            <div className='w-[80%] mb-3'>
              <label className='input_label text-[17px] text-black' for='first_field'>
                Price
              </label>

              <div className='input_container '>
                <input
                  placeholder='Enter Price'
                  title='Enter price'
                  name='input-price'
                  type='text'
                  className='input_field '
                  id='price_field'
                />
              </div>
            </div>
            <div className='w-[80%] mb-3'>
              <label className='input_label text-[17px] text-black' for='first_field'>
                Description
              </label>

              <div className='input_container '>
                <CKEditor
                  editor={ClassicEditor}
                  data='<p>Enter your description here</p>'
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
              onClick={() => navigate('/create')}
            >
              Cancel
            </button>
            <button
              className='bg-black text-white active:bg-gray-900 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
              type='button'
              onClick={() => setShowModal(false)}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UploadCreatedFile
