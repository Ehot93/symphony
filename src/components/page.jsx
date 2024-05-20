 import { Autocomplete, TextField, Button, Select, MenuItem, Stack, Input,InputAdornment, Box, InputLabel, FormControl } from "@mui/material";
 import { LineChart } from "@mui/x-charts";
 import Divider from '@mui/material/Divider';
 import  Label  from "./Label/Label"
 import Paper from '@mui/material/Paper';
 import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
 import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
 import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
 import { DatePicker } from '@mui/x-date-pickers/DatePicker';
 import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
 import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
 import { useState } from "react";
 import SyncIcon from '@mui/icons-material/Sync';
 import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

 
 const Page = () => {
    const options = [
        { label: 'The Godfather', id: 1 },
        { label: 'Pulp Fiction', id: 2 },
      ];

      const [valueDate, setValueDate] = useState();
      const [worstValue, setWorstValue] = useState();
      const handleSelectChange = (event) => {
        setWorstValue(event.target.value);
      }

    return(
        <div style={{padding: '24px'}}>
        {/* <div style={{padding: '24px', background: 'linear-gradient(0deg, rgba(12,24,32,1) 100%, rgba(3,11,20,1) 50%)'}}> */}
            <Paper elevation={1} display={'flex'} sx={{padding: '16px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div align='left'>
                        <span style={{fontSize: 28}}>RJ000A | 2032-11-17</span>
                        <br />
                        <span style={{fontSize: 14}}>Конвекция: Actual365Fixed  Базис: Actual365Fixed</span>
                    </div>
                    <div>
                       <Button variant="outlined" startIcon={<WifiTetheringIcon />} style={{margin: '0 16px'}}>
                            MarketData
                        </Button>
                        <Button variant="outlined" startIcon={<LeaderboardOutlinedIcon />} style={{margin: '0 16px'}}>
                            Rates
                        </Button>
                        <Button variant="outlined" startIcon={<ShowChartOutlinedIcon />} style={{margin: '0 16px'}}>
                            Static
                        </Button>
                    </div>
                </div>
                <Stack justifyContent={'start'} spacing={4} direction='row'>
                    <Box width='20%'>
                    <Input
                        defaultValue={'-241,8%'}
                        endAdornment={<InputAdornment position="start">Spread</InputAdornment>}
                        aria-describedby="standard-weight-helper-text"
                        inputProps={{
                        // 'aria-label': 'weight',
                        }}
                        style={{height: 'fit-content'}}
                    />
                    </Box>
                    <Box width='20%'>
                    <Input
                        defaultValue={'+90%'}
                        endAdornment={<InputAdornment position="start">Price</InputAdornment>}
                        aria-describedby="standard-weight-helper-text"
                        inputProps={{
                        // 'aria-label': 'weight',
                        }}
                        style={{height: 'fit-content'}}
                    />
                    </Box>
                    <Box width='20%'>
                    <Input
                        defaultValue={'+11.253%'}
                        endAdornment={<InputAdornment position="start">Yield</InputAdornment>}
                        aria-describedby="standard-weight-helper-text"
                        inputProps={{
                        // 'aria-label': 'weight',
                        }}
                        style={{height: 'fit-content'}}
                    />
                    </Box>
                    {/* <TextField value='-241,8' defaultValue='-241,8%' label="Option1" variant="standard" style={{margin: '0 16px'}}/>
                    <TextField value='+90%' label="Option2" variant="standard" style={{margin: '0 16px'}}/>
                    <TextField value='+11.253%' label="Option3" variant="standard" style={{margin: '0 16px'}}/> */}
                    <Box width='40%'>
                    <Stack spacing={4} direction='row'>
                        <Stack direction={'column'} spacing={2}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Wkout Date"
                                    value={valueDate}
                                    onChange={(newValue) => setValueDate(newValue)}
                                    
                                />
                                <DatePicker
                                    label="Settl Date"
                                    value={valueDate}
                                    onChange={(newValue) => setValueDate(newValue)}
                                />
                            </LocalizationProvider>
                        </Stack>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                            <InputLabel id='demo-simple-select-label'>Worst</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={worstValue}
                                    label="worst"
                                    onChange={handleSelectChange}
                                    style={{height: 'fit-content'}}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        
                    </Stack>
                    </Box>
                </Stack>
            </Paper>
            <Stack direction='row' spacing={5} style={{marginTop: '20px'}}>
                <Paper elevation={1} style={{padding: '20px'}}>
                    <h3 align='left'>
                        Calculated values
                    </h3>
                    <Stack direction='row' spacing={4} marginTop='16px'>
                        <Box width={'30%'}>
                            <Input
                                defaultValue={'2.52%'}
                                endAdornment={<InputAdornment position="start">Mac. Dur</InputAdornment>}
                                aria-describedby="standard-weight-helper-text"
                                inputProps={{
                                'aria-label': 'Max,Durrr',
                                }}
                                style={{height: 'fit-content'}}
                                disabled
                            />
                        </Box>
                        <Box width={'30%'}>
                            <Input
                                defaultValue={'2.26'}
                                endAdornment={<InputAdornment position="start">Mod.Dur</InputAdornment>}
                                aria-describedby="standard-weight-helper-text"
                                inputProps={{
                                // 'aria-label': 'weight',
                                }}
                                style={{height: 'fit-content'}}
                                disabled={true}
                            />
                        </Box>
                        <Box width={'30%'}>
                            <Input
                                defaultValue={'92.3331'}
                                endAdornment={<InputAdornment position="start">Rate $</InputAdornment>}
                                aria-describedby="standard-weight-helper-text"
                                inputProps={{
                                // 'aria-label': 'weight',
                                }}
                                style={{height: 'fit-content'}}
                            />
                        </Box>
                        <Box width={'10%'}>
                            <Button><SyncIcon/></Button>
                        </Box>
                    </Stack>
                    <Stack direction='row' spacing={4} marginTop='16px'>
                        <Box width={'30%'}>
                            <FormControl fullWidth>
                            <InputLabel id='demo-simple-select-label'>Sttl.Currency</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={worstValue}
                                    label="Sttl.Currency"
                                    onChange={handleSelectChange}
                                    style={{height: 'fit-content'}}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box width={'30%'}>
                            <Input
                                defaultValue={'RUB : RUB'}
                                startAdornment={<InputAdornment position="start">Cur Rate</InputAdornment>}
                                aria-describedby="standard-weight-helper-text"
                                inputProps={{
                                // 'aria-label': 'weight',
                                }}
                                style={{height: 'fit-content'}}
                                disabled={true}
                            />
                        </Box>
                        <Box width={'30%'}>
                            <Input
                                defaultValue={''}
                                //endAdornment={<InputAdornment position="start">Rate $</InputAdornment>}
                                aria-describedby="standard-weight-helper-text"
                                inputProps={{
                                // 'aria-label': 'weight',
                                }}
                                style={{height: 'fit-content'}}
                            />
                        </Box>
                        <Box width={'10%'}>
                            <Button><SyncIcon/></Button>
                        </Box>
                    </Stack>
                </Paper>
                <Paper elevation={1} style={{padding: '20px'}}>
                    <h3 align='left'>
                        Invoice
                    </h3>
                    <Stack direction='row' spacing={4} marginTop='16px'>
                        <Box width={'30%'}>
                        {/* <TextField id="outlined-basic" label={`Face+<CompareArrowsIcon/>`} variant="outlined" /> */}
                            <Input
                                defaultValue={'10 000 000 M'}
                                endAdornment={<InputAdornment position="start">Face <CompareArrowsIcon/></InputAdornment>}
                                aria-describedby="standard-weight-helper-text"
                                inputProps={{
                                'aria-label': 'Max,Durrr',
                                }}
                                style={{height: 'fit-content'}}
                            />
                        </Box>
                        <Box width={'30%'}>
                            <Input
                                defaultValue={'2.26'}
                                endAdornment={<InputAdornment position="start">Sinc Factor</InputAdornment>}
                                aria-describedby="standard-weight-helper-text"
                                inputProps={{
                                // 'aria-label': 'weight',
                                }}
                                style={{height: 'fit-content'}}
                                disabled
                            />
                        </Box>
                        <Box width={'30%'}>
                            <Input
                                defaultValue={'-22077.0123'}
                                endAdornment={<InputAdornment position="start">DV01</InputAdornment>}
                                aria-describedby="standard-weight-helper-text"
                                inputProps={{
                                // 'aria-label': 'weight',
                                }}
                                style={{height: 'fit-content'}}
                            />
                        </Box>
                        <Box width={'10%'}>
                            <Button><SyncIcon/></Button>
                        </Box>
                    </Stack>
                    <Stack direction='row' spacing={4} marginTop='16px'>
                        <Box width={'30%'}>
                            <FormControl fullWidth>
                            <InputLabel id='demo-simple-select-label'>Sttl.Currency</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={worstValue}
                                    label="Sttl.Currency"
                                    onChange={handleSelectChange}
                                    style={{height: 'fit-content'}}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box width={'30%'}>
                            <Input
                                defaultValue={'RUB : RUB'}
                                startAdornment={<InputAdornment position="start">Cur Rate</InputAdornment>}
                                aria-describedby="standard-weight-helper-text"
                                inputProps={{
                                // 'aria-label': 'weight',
                                }}
                                style={{height: 'fit-content'}}
                                disabled={true}
                            />
                        </Box>
                        <Box width={'30%'}>
                            <Input
                                defaultValue={''}
                                //endAdornment={<InputAdornment position="start">Rate $</InputAdornment>}
                                aria-describedby="standard-weight-helper-text"
                                inputProps={{
                                // 'aria-label': 'weight',
                                }}
                                style={{height: 'fit-content'}}
                            />
                        </Box>
                        <Box width={'10%'}>
                            <Button><SyncIcon/></Button>
                        </Box>
                    </Stack>
                </Paper>
            </Stack>
            {/* <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={options}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
            <div style={{display: 'flex', flexDirection: 'row', padding: '16px 0'}}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="standard-basic" label="Option1" variant="standard" style={{margin: '0 16px'}}/>
                <TextField id="standard-basic" label="Option2" variant="standard" style={{margin: '0 16px'}}/>
                <TextField id="standard-basic" label="Option3" variant="standard" style={{margin: '0 16px'}}/>
            </div>
            <Divider />
            <div style={{display: 'flex', flexDirection: 'row', padding: '16px 0'}}>
                <span style={{ margin: '0 16px'}}><Label title='hello' subtitle={'world'}/></span>
                <span style={{ margin: '0 16px'}}><Label title='bonjour' subtitle={'world'} style={{ padding: '16px'}}/></span>
                <span style={{ margin: '0 16px'}}><Label title='privet' subtitle={'world'} style={{ padding: '16px'}}/></span>
            </div> */}
            <br />
            <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                    {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                ]}
                width={500}
                height={300}
            />
        </div>
    )
}

export default Page;