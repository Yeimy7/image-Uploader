import { useReducer } from "react";
import { fileUpload } from "../helpers/fileUpload";
import { MOSTRAR_ALERTA, OCULTAR_ALERTA, UPLOADING_FILE, UPLOAD_FILE } from "../types";
import { fileContext } from "./fileContext";
import { fileReducer } from "./fileReducer";

const FileState = props => {
    const initialState = {
        file: null,
        loading: false,
        alerta:null
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(fileReducer, initialState)

    //Funciones

    const uploadFile = async (file) => {
        const fileUrl = await fileUpload(file)
        dispatch({
            type: UPLOAD_FILE,
            payload: fileUrl
        })
    }
    const uploadingImage = () => {
        dispatch({
            type: UPLOADING_FILE,
        })
    }

    const mostrarAlerta = (msg, categoria) => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: {
                msg,
                categoria
            }
        })

        //Después de 5 segundos limpiar la alerta
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        }, 5000);
    }
    return (

        <fileContext.Provider
            value={{
                file: state.file,
                loading: state.loading,
                alerta:state.alerta,
                uploadFile,
                uploadingImage,
                mostrarAlerta
            }}
        >
            {props.children}
        </fileContext.Provider>
    )
}
export default FileState