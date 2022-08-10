import React, { useContext } from 'react'
import { fileContext } from '../context/fileContext'
import { ProgressBar } from './ProgressBar'
import { Upload } from './Upload'
import { UploadSuccess } from './UploadSuccess'

export const Container = () => {
    //Obtener el state de country
    const filesContext = useContext(fileContext)
    const { file, loading, alerta } = filesContext

    return (
        <div className='App'>
            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
            <section className='container'>
                {
                    !file && !loading
                        ? <Upload />
                        : file && !loading
                            ? <UploadSuccess />
                            : <ProgressBar />
                }
            </section>
        </div>
    )
}
