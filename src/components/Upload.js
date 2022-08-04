import React from 'react'
import upload from '../assets/image.svg'
import { Button } from './Button'

export const Upload = () => {
    return (
        <section className='container'>
            <h1 className='title'>Upload your image</h1>
            <h2 className='subtitle'>File should be Jpeg, Png...</h2>
            <section className='dragDrop'>
                <img src={upload} alt='upload-logo' />
                <span className='footerSentence'>Drag & Drop your image here</span>
            </section>
            <span className='connective'>Or</span>
            <Button caption={'Choose a file'} />
        </section>
    )
}
