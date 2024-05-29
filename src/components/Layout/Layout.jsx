import { Box, Button, Stack, Divider, Avatar  } from "@mui/material"
// import { NotificationsNoneIcon, SearchIcon, LightModeIcon, PublishedWithChangesIcon } from '@mui/icons-material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import avatar3 from '../../static/avatar3.jpg';
import './style.css';

const Layout = ({child}) => {
    return (
        <Box className='layout'>
            <Stack direction={'row'}>
                <Stack className="sidebar" direction={'column'}>
                    <Stack className="sidebar__home" direction={'column'}>
                        <Button><AcUnitIcon/></Button>
                        <Button><MeetingRoomIcon/></Button>
                    </Stack>
                    <Stack className="sidebar__mainButtons" direction={'column'}>
                        <Button><CropSquareOutlinedIcon color="warning"/></Button>
                        <Button><CropSquareOutlinedIcon color="info"/></Button>
                        <Button><CropSquareOutlinedIcon color="warning"/></Button>
                        <Button><CropSquareOutlinedIcon color="success"/></Button>
                        <Button><CropSquareOutlinedIcon color="#8E55EA"/></Button>
                        <Button><CropSquareOutlinedIcon color="warning"/></Button>
                        <Button><CropSquareOutlinedIcon color="#3E90F0"/></Button>
                    </Stack>
                    <Divider style={{margin: '16px 0', color: '#6C727540'}}/>
                    <Stack className="sidebar__secondButton" direction={'column'}>
                        <Button><SquareRoundedIcon color="action"/></Button>
                        <Button><SquareRoundedIcon color="disabled"/></Button>
                        <Button><SquareRoundedIcon color="primary"/></Button>
                        <Button><SquareRoundedIcon color="secondary"/></Button>
                        <Button><SquareRoundedIcon color="success"/></Button>
                        <Button><AddBoxRoundedIcon/></Button>

                    </Stack>
                    <Stack className="sidebar__user" direction={'column'} spacing={4}>
                        <Avatar alt="Ilya" src={avatar3}>User</Avatar>
                        <Button><LightModeIcon/></Button>
                    </Stack>
                    
                </Stack>
                <Stack direction={'column'} style={{marginLeft: '140px', width: '100%'}}>
                    <Stack className="layout__header" direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <h1 style={{color: '#B2C6CD'}}>Калькулятор</h1>
                        <Button style={{borderRadius: '20px'}} startIcon={<PublishedWithChangesIcon />} variant="outlined" color="success">Данные обновлены</Button>
                        <div>
                            <Button><SearchIcon/></Button>
                            <Button><NotificationsNoneIcon/></Button>
                            <Button><MoreVertIcon/></Button>
                        </div>
                    </Stack>
                    <Box padding={5}>
                        {child}
                    </Box>
                </Stack>
            </Stack>   
        </Box>
    )
}

export default Layout;