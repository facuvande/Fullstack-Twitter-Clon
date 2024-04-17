import React from 'react'
import { Avatar, Box, Button, IconButton, Modal, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useFormik } from 'formik';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    outline: 'none',
    borderRadius: 4

};

export const ProfileModal = ({open, handleClose}) => {
    // const [open, setOpen] = useState(false);
    const [uploading, setUploading] = useState(false);


    const handleSubmit = (values ) => {
        console.log("handle submit", values)
    }

    const formik = useFormik({
        initialValues: {
            fullName: "",
            website: "",
            location: "",
            bio: "",
            backgroundImage: "",
            image: ""
        },
        onSubmit: handleSubmit
    })

    const handleImageChange = (event) => {
        setUploading(true);
        const { name } = event.target;
        const file = event.target.files[0];
        formik.setFieldValue(name, file);
        setUploading(false);
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center space-x-3'>
                                <IconButton onClick={handleClose} aria-label='delete'>
                                    <CloseIcon/>
                                </IconButton>
                                <p className=''>Editar Perfil</p>
                            </div>
                            <Button type='submit'>Guardar</Button>
                        </div>
                        <div className='hideScrollBar overflow-y-scoll overflow-x-hidden h-[80vh]'>
                            <>
                                <div className='w-full'>
                                    <div className='relative'>
                                        <img className='w-full h-[12rem] object-cover object-center' src="https://cdn.pixabay.com/index/2024/04/12/15-48-10-626_1920x550.jpg" alt="" />
                                        <input type='file' className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' onChange={handleImageChange} name='backgroundImage'/>
                                    </div>

                                </div>
                                <div className='w-full transform -translate-y-20 ml-4 h-[6rem]'>
                                    <div className='relative'>
                                        <Avatar sx={{width: "10rem", height: "10rem", border: "4px solid white"}} src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"/>
                                        <input className='absolute top-0 left-0 w-[10rem] h-full opacity-0 cursor-pointer' onChange={handleImageChange} name="image" type='file'/>
                                    </div>
                                </div>
                            </>
                            <div className='space-y-3'>
                                <TextField fullWidth id="fullName" name="fullName" label="Nombre Completo" value={formik.values.fullName} onChange={formik.handleChange} error={formik.touched.fullName && Boolean(formik.errors.fullName)} helperText={formik.touched.fullName && formik.errors.fullName} />
                                <TextField fullWidth multiline rows={4} id="bio" name="bio" label="Biografia" value={formik.values.bio} onChange={formik.handleChange} error={formik.touched.bio && Boolean(formik.errors.bio)} helperText={formik.touched.bio && formik.errors.bio} />
                                <TextField fullWidth multiline rows={4} id="website" name="website" label="Sitio Web" value={formik.values.website} onChange={formik.handleChange} error={formik.touched.website && Boolean(formik.errors.website)} helperText={formik.touched.website && formik.errors.website} />
                                <TextField fullWidth multiline rows={4} id="location" name="location" label="Ubicacion" value={formik.values.location} onChange={formik.handleChange} error={formik.touched.location && Boolean(formik.errors.location)} helperText={formik.touched.location && formik.errors.location} />
                                <div className='my-3'>
                                    <p className='text-lg'>Fecha de cumpleaños . Editar</p>
                                    <p className='text-2xl'>Marzo 30, 2004</p>
                                </div>
                                <p className='py-3 text-lg' >Editar Perfil Profesional</p>
                            </div>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
