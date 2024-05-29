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
 import { ThemeProvider } from '@mui/material/styles';
 import { paperTheme, fontColors } from '../share/Themes'

 
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
        <div style={{padding: '24px', background: fontColors.background}}>
        {/* <div style={{padding: '24px', background: 'linear-gradient(0deg, rgba(12,24,32,1) 100%, rgba(3,11,20,1) 50%)'}}> */}
        <ThemeProvider theme={paperTheme}>
            <Paper elevation={1} display={'flex'} sx={{padding: '16px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div align='left'>
                        <span style={{fontSize: 28}}>
                            <span style={{color: fontColors.white1}}>RJ000A</span>
                            <span style={{color: fontColors.gray}}>| 2032-11-17</span>
                         </span>
                        <br />
                        <Stack direction={'row'} mt={2} spacing={2} >
                            <FormControl style={{borderRadius: '40px'}} fullWidth>
                                <InputLabel id='demo-simple-select-label1'>Конвекция</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label1"
                                        value={worstValue}
                                        label="worst"
                                        onChange={handleSelectChange}
                                        style={{height: 'fit-content'}}
                                    >
                                        <MenuItem value={10}> Actual365Fixed</MenuItem>
                                        <MenuItem value={20}> Actual365Fixed</MenuItem>
                                        <MenuItem value={30}> Actual365Fixed</MenuItem>
                                    </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel id='demo-simple-select-label2'>Базис</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label2"
                                        value={worstValue}
                                        label="worst"
                                        onChange={handleSelectChange}
                                        style={{height: 'fit-content'}}
                                    >
                                        <MenuItem value={10}> Actual365Fixed</MenuItem>
                                        <MenuItem value={20}> Actual365Fixed</MenuItem>
                                        <MenuItem value={30}> Actual365Fixed</MenuItem>
                                    </Select>
                            </FormControl>
                        </Stack>
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
                            aria-describedby="standard-weight-helper-text"
                            inputProps={{
                            }}
                            style={{height: 'fit-content'}}
                        />
                        <h5 align='left'>Spread</h5>
                    </Box>
                    <Box width='20%'>
                    <Input
                        defaultValue={'+90%'}
                        aria-describedby="standard-weight-helper-text"
                        inputProps={{
                        }}
                        style={{height: 'fit-content'}}
                    />
                    <h5 align='left'>Price</h5>
                    </Box>
                    <Box width='20%'>
                    <Input
                        defaultValue={'+11.253%'}
                        aria-describedby="standard-weight-helper-text"
                        inputProps={{
                        }}
                        style={{height: 'fit-content'}}
                    />
                    <h5 align='left'>Yield</h5>
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
                            <InputLabel id='demo-simple-select-label3'>Data type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label3"
                                    value={worstValue}
                                    label="worst"
                                    onChange={handleSelectChange}
                                    style={{height: 'fit-content'}}
                                >
                                    <MenuItem value={10}>Worst</MenuItem>
                                    <MenuItem value={20}>Best</MenuItem>
                                    <MenuItem value={30}>Normal</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Stack>
                    </Box>
                </Stack>
            </Paper>
            <Stack direction='row' spacing={5} style={{marginTop: '20px'}}>
                <Paper elevation={1} style={{padding: '20px', width: '50%'}}>
                    <h3 align='left'>
                        Calculated values
                    </h3>
                    <Stack direction='row' spacing={4} marginTop='16px'>
                        <Box width={'30%'}>
                            <TextField disabled id="outlined-basic2" label={'Mac. Dur'} variant="outlined" defaultValue='2.62'/>
                        </Box>
                        <Box width={'30%'}>
                            <TextField disabled id="outlined-basic2" label={'Mod. Dur'} variant="outlined" defaultValue='2.26'/>
                        </Box>
                        <Box width={'30%'}>
                            <TextField id="outlined-basic2" label={'Rate $'} variant="outlined" defaultValue='92.12365'/>
                        </Box>
                        <Box width={'10%'}>
                            <Button><SyncIcon/></Button>
                        </Box>
                    </Stack>
                    <Stack direction='row' spacing={4} marginTop='16px'>
                        <Box width={'30%'}>
                            <FormControl fullWidth>
                            <InputLabel id='demo-simple-select-label4'>Sttl.Currency</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label4"
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
                            <TextField disabled id="outlined-basic2" label={'Cur Rate'} variant="outlined" defaultValue='RUB : EUB'/>
                        </Box>
                        <Box width={'30%'}>
                            <TextField id="outlined-basic2" label={''} variant="outlined" defaultValue='1'/>
                        </Box>
                        <Box width={'10%'}>
                            <Button><SyncIcon/></Button>
                        </Box>
                    </Stack>
                </Paper>
                <Paper elevation={1} style={{padding: '20px', width: '50%'}}>
                    <h3 align='left'>
                        Invoice
                    </h3>
                    <Stack direction={'column'} spacing={4}>
                        <Stack direction='row' spacing={4}>
                            <Box width={'33.33%'}>
                                <TextField id="outlined-basic1" label={'Face*'} variant="outlined" defaultValue='10 000 000 M'/>
                            </Box>
                            <Box width={'33.33%'}>
                                <TextField disabled id="outlined-basic2" label={'Sinc Factor'} variant="outlined" defaultValue='1'/>
                            </Box>
                            <Box width={'33.33%'}>
                                <TextField disabled id="outlined-basic3" label={'DV01'} variant="outlined" defaultValue='-22077.123 $'/>
                            </Box>
                        </Stack>
                        <Stack direction='row' spacing={4}>
                            <Box width={'33.33%'}>
                                <TextField id="outlined-basic" label={'Principal'} variant="outlined" defaultValue='9 000 000 000'/>
                            </Box>
                            <Box width={'33.33%'}>
                                <TextField id="outlined-basic" label={'Accrued'} variant="outlined" defaultValue='123 000 000'/>
                            </Box>
                            <Box width={'33.33%'}>
                                <TextField id="outlined-basic" label={'AccruedDays'} variant="outlined" defaultValue='72'/>
                            </Box>
                        </Stack>
                        <Stack direction={'row'} spacing={6} justifyContent="flex-end">
                            <h5>Total Sum</h5>
                            <TextField id="outlined-basic" variant="outlined" defaultValue='9 132 000 000'/>
                        </Stack>
                    </Stack>
                </Paper>
            </Stack>
            <Stack direction={'row'} justifyContent="space-between" alignItems="flex-end">
                <Box>
                    <h5 align='left'>Calc To</h5>
                    <Stack direction={'row'} spacing={4}>
                        <FormControl fullWidth>
                            <InputLabel id='demo-simple-select-label5'>Interpolation</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label5"
                                    value={worstValue}
                                    label="Interpolation"
                                    onChange={handleSelectChange}
                                    style={{height: 'fit-content'}}
                                >
                                    <MenuItem value={3}>Interpolation</MenuItem>
                                    <MenuItem value={2}>Outerpolation</MenuItem>
                                    <MenuItem value={1}>Somepolation</MenuItem>
                                </Select>
                        </FormControl>
                        <TextField id="outlined-basic" variant="outlined" defaultValue='13.518'/>
                        <Box>
                            <Button><SyncIcon/></Button>
                        </Box>
                    </Stack>
                </Box>
                <Box>
                    <FormControl fullWidth>
                        <InputLabel id='demo-simple-select-label6'>Кривая ОФЗ</InputLabel>
                            <Select
                                labelId="demo-simple-select-label6"
                                value={worstValue}
                                label="Кривая ОФЗ"
                                onChange={handleSelectChange}
                                style={{height: 'fit-content', width: '160px'}}
                            >
                                <MenuItem value={4}>Кривая ОФЗ</MenuItem>
                                <MenuItem value={5}>Кривая ФЗ</MenuItem>
                                <MenuItem value={6}>Ровная и четкая</MenuItem>
                            </Select>
                    </FormControl>
                    </Box>
            </Stack>
            </ThemeProvider>
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
                // width={1000}
                height={500}
                
            />
        </div>
    )
}

export default Page;