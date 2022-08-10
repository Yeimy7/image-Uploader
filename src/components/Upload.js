import React, { useRef, useState } from 'react'
import upload from '../assets/image.svg'
import { fileUpload } from '../helpers/fileUpload'

export const Upload = () => {
    const wrapperRef = useRef(null)

    const [imageFile, setImageFile] = useState(null)

    const onDragEnter = () => wrapperRef.current.classList.add('dragover')
    const onDragLeave = () => wrapperRef.current.classList.remove('dragover')
    const onDrop = () => wrapperRef.current.classList.remove('dragover')

    const onFileDrop = e => {
        const newImage = e.target.files[0]
        if (newImage) {
            if ((newImage.type).includes('image/')) {
                setImageFile(newImage)
            } else {
                alert('The file is not an image, select an image please...')
            }
        }
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handlePictureUpload = async () => {

        const fileUrl = await fileUpload(imageFile)
        console.log(fileUrl)
    }
    return (
        <section className='container'>
            <h1 className='title'>Upload your image</h1>
            <h2 className='subtitle'>File should be Jpeg, Png...</h2>
            <section
                ref={wrapperRef}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                className='dragDrop'
            >
                <img src={upload} alt='upload-logo' />
                <span className='footerSentence'>{imageFile ? imageFile.name : 'Drag & Drop your image here'}</span>
                <input id='fileSelector' type='file' value='' onChange={onFileDrop} />
            </section>
            {imageFile
                ? <button className='btn green' onClick={handlePictureUpload}>Upload</button>
                : <>
                    <span className='connective'>Or</span>
                    <button className='btn' onClick={handlePictureClick}>Choose a file</button>
                </>
            }
        </section>
    )
}
