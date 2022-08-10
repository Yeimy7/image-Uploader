import { MOSTRAR_ALERTA, OCULTAR_ALERTA, UPLOADING_FILE, UPLOAD_FILE } from "../types";

export const fileReducer = (state = {}, action) => {
    switch (action.type) {
        case UPLOAD_FILE:
            return {
                ...state,
                file: action.payload,
                loading: false
            }
        case UPLOADING_FILE:
            return {
                ...state,
                loading: true
            }
        case MOSTRAR_ALERTA:
            return {
                ...state,
                alerta: action.payload
            }
        case OCULTAR_ALERTA:
            return {
                ...state,
                alerta: null
            }


        default:
            return state;
    }
}