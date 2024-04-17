import { Grid } from '@mui/material'
import React from 'react'
import { Navigation } from '../Navigation/Navigation'
import { HomeSection } from '../HomeSection/HomeSection'
import { Right } from '../Right/Right'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Profile } from '../Profile/Profile'
import { TweetDetails } from '../TweetDetails/TweetDetails'

export const HomePage = () => {
    return (
        <Grid container xs={12} className='px-5 lg:px-36 justify-between'>
            <Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative'>
                <Navigation/>    
            </Grid>
            <Grid item xs={12} lg={6} className='px-5 lg:px-9 lg:block w-full relative'>
                <Routes>
                    <Route path='/' element={<HomeSection/>}></Route>
                    <Route path='/inicio' element={<HomeSection/>}></Route>
                    <Route path='/perfil/:id' element={<Profile/>}></Route>
                    <Route path='/tweet/:id' element={<TweetDetails/>}></Route>
                </Routes>
            </Grid>
            <Grid item xs={0} lg={3} className='hidden lg:block w-full relative'>
                <Right/>
            </Grid>
        </Grid>
    )
}
