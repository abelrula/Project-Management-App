import React, { Fragment } from 'react'
import   "./previewImages.css"
import { closeModal } from '../../../redux/slices/modalSlice'
import { useDispatch } from 'react-redux'
import { MdDelete } from 'react-icons/md'
const PreviewImages = ({previewUrl}) => {
 
    const dispatch = useDispatch()
    
  
    return (
        <div className="modal">
            <main className="preview ">
              <header>send an image</header>
              <section className="preview_images element-with-scroll">
                {
                  previewUrl.map( ( image, i ) => (
                    <div key={i}>
                      <img src={ image } alt="Preview.jpg" className="" key={ i } />
                      <MdDelete className='deleteIcon' />
                    </div>
                  ) )
              }
              </section>
              <section className="preview_caption">
                    <label >
                      caption
                      <input type="text"  placeholder="comment" />
                    </label>
                    <div className="buttons">
                        <button  onClick={()=> dispatch(closeModal()) }>cancel</button>
                        <button>send</button>
                      </div>
               </section>
            </main>
        </div>
  )
}

export default PreviewImages