import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import NewPostForm from './NewPostForm';
import Button from './CustomButton';


export default function NewPostPopup() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;



  return (
    <div className="new-post-button">
        <Button handleClick={handleClick} content={'Create New Post'} id={id} width={'180px'}/>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              sx={{visibility:anchorEl?'visible':"hidden"}}
        >
            <Typography component={'span'} variant={'body2'}>
                <NewPostForm handleClose={handleClose}/>
            </Typography>
      </Popover>
    </div>
  );
}
