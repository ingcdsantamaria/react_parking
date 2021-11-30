import React from 'react'
import {Grid, Box, IconButton, MenuItem, Menu} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MoreInfo from './MoreInfoParking';
import ConfirmButton  from '../common/CancelButton'; 
import CancelButton  from '../common/CancelButton'; 

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';

function ItemOptions() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const TextCreatePkngButtonConf='Confirmar'
  const TextCreatePkngButtonCan='Cancelar'
  return (
    <>
      <IconButton aria-label="Example" size='large' onClick={handleClick}>
          <FontAwesomeIcon icon={faEllipsisV} color='#14FFEC' />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}>
        <MenuItem  variant='initialOption'>
          <MoreInfo>
            <CancelButton text={TextCreatePkngButtonCan} />
            <ConfirmButton text={TextCreatePkngButtonConf} />
          </MoreInfo>
        </MenuItem>
        <MenuItem onClick={handleClose} variant='intermedialOptions'>
          Vaciar parqueadero
        </MenuItem>
        <MenuItem onClick={handleClose} variant='finalOption'>
          Llenar parqueadero
        </MenuItem>
      </Menu>
    </>
  )
}

export default ItemOptions
