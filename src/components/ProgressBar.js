import React from 'react'

export const ProgressBar = () => {
    return (
        <div className='container container-bar'>
            <h1 className='title'>Uploading...</h1>
            <div className="loader">
                <div className="loaderBar"></div>
            </div>
        </div>
    )
}
