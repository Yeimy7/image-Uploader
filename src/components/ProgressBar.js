import React from 'react'

export const ProgressBar = () => {
    return (
        <div className='container container-bar'>
            <h1 className='title'>Uploading...</h1>
            <div class="loader">
                <div class="loaderBar"></div>
            </div>
        </div>
    )
}
