import React from 'react'
import { navigationMenu } from './NavigationMenu.jsx'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';

export const Navigation = () => {

    const navigate = useNavigate();

    return (
        <div className='h-screen sticky top-0'>
            <div>
                <div className='p-5'>
                    <svg height="30" width="30" viewBox="0 0 24 24" ariaHidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                </div>
                <div className="space-y-6">
                    {
                        navigationMenu.map((item) => (<div className='cursor-pointer flex space-x-3 items-center' onClick={() => item.title === "Perfil" ? navigate(`/perfil/${5}`) : navigate(item.path)}>
                            {item.icon}
                            <p className='text-xl'>{item.title}</p>
                        </div>))
                    }
                </div>
                <div className='py-10'>
                    <Button sx={{width:"100%", borderRadius: "29px", py: "15px", bgcolor: "#1e88e5"}} variant="contained">
                        Tweet
                    </Button>
                </div>
            </div>

        </div>
    )
}
