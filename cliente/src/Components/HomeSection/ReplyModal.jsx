import { Avatar, Box, Button, Modal, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import ImageIcon from '@mui/icons-material/Image'
import FmdGoodIcon from '@mui/icons-material/FmdGood'
import TagFacesIcon from '@mui/icons-material/TagFaces'
import { useFormik } from 'formik';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    outline: "none",
    borderRadius: 4
};

export const ReplyModal = ({ handleClose, open }) => {
    const navigate = useNavigate();

    const [uploadingImage, setUploadingImage] = useState(false);
    const [ selectImage, setSelectImage ] = useState("");

    const handleSubmit = (values) => {
        console.log("handle submit", values)
    }

    const formik = useFormik({
        initialValues: {
            content: "",
            image: "",
            twitId: 4,
        },
        onSubmit: handleSubmit
    })

    const handleSelectImage = (event) => {
        setUploadingImage(true);
        const imgUrl = event.target.files[0];
        formik.setFieldValue('image', imgUrl);
        setSelectImage(imgUrl);
        setUploadingImage(false);
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
                    <div className='flex space-x-5'>
                        <Avatar onClick={() => navigate(`/profile/${6}`)} className='cursor-pointer' alt='usuario' src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png' />
                        <div className='w-full'>
                            <div className='flex justify-between items-center'>
                                <div className="flex cursor-pointer items-center space-x-2">
                                    <span className='font-semibold'>Facundo Vandecaveye</span>
                                    <span className='text-gray-600'>@VandeFacu . 2m</span>
                                    <img className='ml-2 w-5 h-5' src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png" alt="" />
                                </div>


                            </div>

                            <div className='mt-2'>
                                <div onClick={() => navigate(`/tweet/${3}`)} className='cursor-pointer'>
                                    <p className='mb-2 p-0'>twitter clon - full stack proyecto con react y springboot</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <section className={`py-10`}>
                        <div className='flex space-x-5'>
                            <Avatar alt="usuario" src="https://www.w3schools.com/howto/img_avatar.png"/>
                            <div className='w-full'>
                                <form onSubmit={formik.handleSubmit}>
                                    <div >
                                        <input type="text" name='content' placeholder='What is happening?' className={`border-none outline-none text-xl bg-transparent`} {...formik.getFieldProps("content")}/>
                                        {
                                            formik.errors.content && formik.touched.content && (
                                                <span className='text-red-500'>{formik.errors.content}</span>
                                            )
                                        }
                                    </div>
                                    <div className='flex justify-between items-center mt-5'>
                                        <div className='flex space-x-5 items-center'>
                                            <label className='flex items-center space-x-2 rounded-md cursor-pointer'>
                                                <ImageIcon className='text-[#1d9bf0]'/>
                                                <input type='file' name='imageFile' className='hidden' onChange={handleSelectImage}/>
                                            </label>
                                            <FmdGoodIcon className='text-[#1d9bf0]'/>
                                            <TagFacesIcon className='text-[#1d9bf0]'/>
                                        </div>
                                        <div>
                                            <Button sx={{width:"100%", borderRadius: "20px", paddingY: "8px", paddingX: "20px", bgcolor: "#1e88e5"}} variant="contained" type='submit'>
                                                Tweet
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </Box>
            </Modal>
        </div>
    );
}
