import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../assets/sneaker.png';

const Navbar = ({totalItems}) => {
    return (
        <div>
            <AppBar position='fixed' color='inherit'>
            <Toolbar>
                <Typography variant='h6' color='inherit'>
                    <img src={logo} alt='commerce.js' height='25px' />
                    Commerce.js
                </Typography>
                <div>
                    <IconButton aria-label='Show cart items' color='inherit'>
                        <Badge  badgeContent={totalItems} color='secondary'>
                        <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
