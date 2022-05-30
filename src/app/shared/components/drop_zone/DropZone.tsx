import './dropZone.css';
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUploadCloud } from 'react-icons/fi';

interface Props {
    onChange: (file: string | null | ArrayBuffer) => {}
}

export const DropZone = ({onChange }: Props) => {
    const [selectedFileURL, setSelectFileURL] = useState('')
    
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        const file = acceptedFiles[0];

        const fileUrl = URL.createObjectURL(file);
        setSelectFileURL(fileUrl)
        
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
            
            onChange(fileReader.result)
        }     
    }, [])
    
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop,  accept:'image/*' })
    
    return (
        <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="row card-upload color">
            
            { (selectedFileURL) ? <img src={selectedFileURL} alt="Image Document of identification" /> : 
                <>
                <FiUploadCloud className='upload-icon' />
                <p className='fts-1 center'>Arraste e solte seu arquivo aqui <br /> ou se preferir...</p>
               <div className="col-8 file">
                   <label htmlFor='file'>Escolha um arquivo para fazer upload</label>
               </div>
                </>
            }
        </div>
    </div>
    )
}