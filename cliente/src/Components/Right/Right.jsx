import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SubscriptionModal from '../SubscriptionModal/SubscriptionModal';

export const Right = () => {

    const [openSubscriptionModal, setOpenSubscriptionModal] = React.useState(false);
    const handleOpenSubscriptionModal = () => setOpenSubscriptionModal(true);
    const handleCloseSubscriptionModal = () => setOpenSubscriptionModal(false);

    const handleChangeTheme = () => {
        console.log("Cambio de tema")
    }

    return (
        <div className='py-5 sticky top'>
            <div className='relative flex items-center'>
                <input type="text" className='py-3 rounded-full text-gray-500 w-full pl-12' />
                <div className='absolute top-0 left-0 pl-3 pt-3'>
                    <SearchIcon className='text-gray-500'/>
                </div>
                <Brightness4Icon className='ml-3 cursor-pointer' onClick={handleChangeTheme} />
            </div>

            <section className='my-5'>
                <h1 className='text-xl font-bold'>Obtiene el Verificado</h1>
                <h1 className='font-bold my-2'>Suscribite para obtener nuevas opciones</h1>
                <Button variant='contained' sx={{padding: "10px", paddingX: "20px", borderRadius: "25px"}} onClick={handleOpenSubscriptionModal}>
                    Obtiene el Verificado
                </Button>
            </section>

            <section className='mt-7 space-y-5'>
                <h1 className='font-bold text-xl py-1'>Que esta pasando?</h1>
                <div>
                    <p className='text-sm'>FIFA Copa America 2023™ · LIVE</p>
                    <p className='font-bold'>Argentina vs Chile</p>
                </div>
                { [1,1,1].map((item) => (
                    <div className='flex justify-between w-full'>
                        <div>
                            <p>Entretenimiento · Tendencia</p>
                            <p className='font-bold'>#Marvel</p>
                            <p>34.3k Tweets</p>
                        </div>
                        <MoreHorizIcon/>
                </div>
                ))}
            </section>
            <section>
                <SubscriptionModal open={openSubscriptionModal} handleClose={handleCloseSubscriptionModal}/>
            </section>
        </div>

    )
}
