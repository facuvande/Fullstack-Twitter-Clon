import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button  } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useState } from 'react';
import { TweetCard } from '../HomeSection/TweetCard';
import { ProfileModal } from './ProfileModal';

export const Profile = () => {

    const [tabValue, setTabValue] = useState("1")
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);

    const [openProfileModal, setOpenProfileModal] = useState(false);

    const handleOpenProfileModal = () => setOpenProfileModal(true);
    const handleClose = () => setOpenProfileModal(false);


    const handleFollowUser = () => {
        console.log("Seguir usuario")
    }

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
        if(newValue === 4){
            console.log("likes tweets")
        }
        else if(newValue === 1){
            console.log("users tweets")
        }
        else if(newValue === 2){
            console.log("users retweets")
        }
        else if(newValue === 3){
            console.log("users replies")
        }
    }

    return (
        <div>
            <section className={`bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}>
                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack}/>

                <h1 className='py-5 text-xl font-bold opacity-90 ml-5'>Facundo Vandecaveye</h1>
            </section>
            <section>
                <img className='w-[100%] h-[15rem] object-cover' src='https://cdn.pixabay.com/index/2024/04/12/15-48-10-626_1920x550.jpg' alt='Banner de usuario'/>
            </section>
            <section className='pl-6'>
                <div className='flex justify-between items-start mt-5 h-[5rem]'>
                    <Avatar className='transform -translate-y-24' sx={{width: "10rem", height: "10rem", border: "4px solid white" }} alt='Avatar de usuario' src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"/>
                    {
                        true ? <Button onClick={handleOpenProfileModal} variant='contained' sx={{borderRadius: "20px"}}>Editar Perfil</Button> : <Button onClick={handleFollowUser} variant='contained' sx={{borderRadius: "20px"}}>{true ? "Seguir" : "Dejar de seguir"}</Button>
                    }
                </div>
                <div>
                    <div className='flex items-center'>
                        <h1 className='font-bold text-lg'>Facundo Vandecaveye</h1>
                        {
                            true &&                             
                                <img className='ml-2 w-5 h-5' src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png" alt="" />
                        }
                    </div>
                    <h1 className='text-gray-500'>@VandeFacu</h1>
                </div>
                {/* Biografia del usuario */}
                <div className='mt-2 space-y-3'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, blanditiis! Aut, non totam at provident ratione iste sed explicabo quaerat magnam vero facilis, officiis consequatur alias ad nemo incidunt id.</p>
                    <div className='py-1 flex space-x-5'>
                        <div className='flex items-center text-gray-500'>
                            <BusinessCenterIcon/>
                            <p className='ml-2'>Educacion</p>
                        </div>
                        <div className='flex items-center text-gray-500'>
                            <LocationOnIcon/>
                            <p className='ml-2'>Argentina</p>
                        </div>
                        <div className='flex items-center text-gray-500'>
                            <CalendarMonthIcon/>
                            <p className='ml-2'>Febrero, 2024</p>
                        </div>
                    </div>

                    <div className='flex items-center space-x-5'>
                        <div className='flex items-center space-x-1 font-semibold'>
                            <span>100</span>
                            <span className='text-gray-500'>Siguiendo</span>
                        </div>
                        <div className='flex items-center space-x-1 font-semibold'>
                            <span>666</span>
                            <span className='text-gray-500'>Seguidores</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-5'>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={tabValue}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                            <Tab label="Tweets" value="1" />
                            <Tab label="Retweets" value="2" />
                            <Tab label="Multimedia" value="3" />
                            <Tab label="Likes" value="4" />
                        </TabList>
                        </Box>
                        <TabPanel value="1">{
                            [1,1,1,1].map((item) => <TweetCard/>)
                        }</TabPanel>
                        <TabPanel value="2">Retweets</TabPanel>
                        <TabPanel value="3">Multimedia</TabPanel>
                        <TabPanel value="4">Likes</TabPanel>
                    </TabContext>
                </Box>
            </section>

            <section>
                <ProfileModal handleClose={handleClose} open={openProfileModal}/>
            </section>
        </div>
    )
}
