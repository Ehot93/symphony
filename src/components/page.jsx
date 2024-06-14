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
 import { useCallback, useEffect, useState } from "react";
 import SyncIcon from '@mui/icons-material/Sync';
 import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
 import SearchIcon from '@mui/icons-material/Search';
 import { ThemeProvider } from '@mui/material/styles';
 import Modal from '@mui/material/Modal';
 import CloseIcon from '@mui/icons-material/Close';
 import AddIcon from '@mui/icons-material/Add';
 import { useStore } from './store.js';
 import { paperTheme, fontColors } from '../share/Themes'

 export const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

 //"@babel/plugin-proposal-private-property-in-object"
 const Page = () => {
    const { loadFrequencies, frequency,
        loadDayCounter, dayCounter,
        loadDateToType, dateTo,
        loadCurrency, currency,
        loadInstrumentSearch, instrumentSearch,
        loadInstrument, instrument
    } = useStore();
        
    const loadData = () => {
        loadFrequencies();
        loadDayCounter();
        loadDateToType();
        loadCurrency();
        //loadInstrumentSearch('ru000');
    };

      const [valueDayCounter, setValueDayCounter] = useState();
      const [valueFrequency, setValueFrequency] = useState();
      const [valueDateTo, setValueDateTo] = useState();
      const [valueCurrency, setValueCurrency] = useState();
      const [valueInstrumentSearch, setValueInstrumentSearch] = useState();
      const [valueInstrumentOptions, setValueInstrumentOptions] = useState();
      const [openModal, setOpenModal] = useState(false);

      const [temp, setTemp] = useState();
      const handleTemp = (event) => {
        setTemp(event.target.value);
      }

      let options = [];
    //   [
        // {label: 'RU000A100MY9', id: 0},
        // {label: 'RU000A102DQ0', id: 1},
        // {label: 'RU000A0JXQ44', id: 2},
        // {label: 'RU000A105RZ4', id: 3},
        // {label: 'RU000A105NT6', id: 4},
    // ];

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

      const handleDayCounter = (event) => {
        setValueDayCounter(event.target.value);
      }

      const handleFrequency = (event) => {
        setValueFrequency(event.target.value);
      }

      const handleDateTo = (event) => {
        setValueDateTo(event.target.value);
      }

      const handleCurrency = (event) => {
        setValueCurrency(event.target.value);
      }

      const handleSearch = (event) => {
        setValueInstrumentSearch(event.target.value);
      }

      const requestSearch = (value) => {
        loadInstrumentSearch(value);
        // setTimeout(() => {
        //     options = [...options, {label: 'new', id: options?.length}];
        //     }, 1000);
        //     console.log( options)
      }

      const handleInstrumentOptions = (event) => {
        setValueInstrumentOptions(event.target.value);
        loadInstrument(event.target.value.isin);
      }
      

    useEffect( () => {
        loadData();
    }, []);

    useEffect(() => {
        setValueDayCounter(dayCounter[0]);
        setValueFrequency(frequency[0]);
        setValueDateTo(dateTo[0]);
        setValueCurrency(currency[0]);
    },[dayCounter, frequency, dateTo, currency]);

    useEffect(() => {
        setTimeout(() => (options = instrumentSearch?.map((item, index) => ({ label: item.isin, id: index}))), 1);
        // loadedOptions = instrumentSearch?.map((item, index) => ({ label: item.isin, id: index}));
    }, [instrumentSearch]);

    return (valueDayCounter && valueFrequency && valueDateTo && valueCurrency) && (
        <div style={{padding: '24px', background: fontColors.background}}>
        {/* <div style={{padding: '24px', background: 'linear-gradient(0deg, rgba(12,24,32,1) 100%, rgba(3,11,20,1) 50%)'}}> */}
        <ThemeProvider theme={paperTheme}>
        <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styleModal}>
                    <Stack direction={'column'} spacing={4}>
                        <Stack direction={'row'} justifyContent='space-between'>
                            <span style={{color: fontColors.white1}}>Static</span>
                            <Button onClick={handleCloseModal}><CloseIcon/></Button>
                        </Stack>
                        <Stack justifyContent={'center'} direction='row'>
                            <Button variant="contained">Static</Button>
                            <Button variant="contained">CashFlow</Button>
                        </Stack>
                        <Box>
                            <TextField label={'ISIN'} style={{marginRight: 16}} variant="outlined" placeholder="RUDODA123H23"/>
                            <TextField label={'Name'} variant="outlined" placeholder="26 321"/>
                        </Box>
                        <Box>
                            <TextField label={'Maturity Date'} style={{marginRight: 16}} variant="outlined" placeholder="11.17.2032"/>
                            <TextField label={'Offerte Date'} variant="outlined" placeholder="DD.MM.YYYY"/>
                        </Box>
                        <Box>
                            <TextField label={'Coupon'} style={{marginRight: 16}} variant="outlined" placeholder="9.5"/>
                            <TextField label={'CouponFreq'} variant="outlined" placeholder="2"/>
                        </Box>
                        <Box>
                            <TextField label={'Nominal'} style={{marginRight: 16}} variant="outlined" placeholder="1000"/>
                            <TextField label={'Remaining Capital'} variant="outlined" placeholder="1000"/>
                        </Box>
                        <Box>
                            <TextField label={'YieldDate'} style={{marginRight: 16}} variant="outlined" placeholder="17.11.2032"/>
                            <TextField label={'Currency'} variant="outlined" placeholder="RUB"/>
                        </Box>
                        <Box align={'left'}>
                            <Button style={{marginRight: 16}}>Show More</Button>
                            <Button><AddIcon/></Button>
                            <span style={{color: fontColors.white1}}>Last update: 28.08.2024</span>
                        </Box>
                        <Box>
                            <h3 style={{color: fontColors.white1}}>Coupons</h3>
                            <span style={{color: fontColors.white1}}>Last update: 28.08.2024 / 18:32:12</span>
                        </Box>
                    </Stack>
                </Box>

            </Modal>
            <Paper elevation={1} display={'flex'} sx={{padding: '16px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div align='left'>
                        
                            {/*
                            <Autocomplete
                                //disablePortal
                                key={`search-result-${options?.length}`}
                                options={options}
                                value={valueInstrumentSearch}
                                onInputChange={(event) => {console.log(event.target.value)}}
                                onChange={handleSearch}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField 
                                    {...params} 
                                    label="Enter text for search1"
                                    //onChange={(event) => (event.target.value.length >= 3) && requestSearch(event.target.value)}
                                    // InputProps={{
                                    //     endAdornment: (<Button onClick={() => requestSearch()}><SearchIcon/></Button>)
                                    // }}
                                    />}
                            /> */}
                            <Stack direction={'column'}>
                                <Box>
                                    <TextField
                                        id="outlined-required"
                                        placeholder="Enter text"
                                        value={valueInstrumentSearch}
                                        onChange={handleSearch}
                                    />
                                    <Button onClick={() => requestSearch(valueInstrumentSearch)}><SearchIcon/></Button>
                                    <Select
                                        labelId="demo-simple-select-label123"
                                        value={valueInstrumentOptions?.isin}
                                        label="instrument options"
                                        onChange={handleInstrumentOptions}
                                        style={{height: 'fit-content', marginLeft: 16, width: '200px'}}
                                    >
                                        {instrumentSearch?.map((i, index) => <MenuItem value={i} key={index}>{i.isin}</MenuItem>)}
                                    </Select>
                                </Box>
                                <span style={{fontSize: 28, marginTop: 16}}>
                                    {valueInstrumentOptions ? 
                                        <span style={{color: fontColors.white1}}>{valueInstrumentOptions?.displayedString}</span>
                                    : <span style={{color: fontColors.gray}}>Not selected</span>
                                    }
                                    {/* <span style={{color: fontColors.white1}}>RJ000A</span>
                                    <span style={{color: fontColors.gray}}>| 2032-11-17</span> */}
                                </span>
                            </Stack>
                        
                            {/* <Button onClick={() => requestSearch()}>Search</Button> */}
                        
                        <br />
                        <Stack direction={'row'} mt={2} spacing={2} >
                            <FormControl style={{borderRadius: '40px'}} fullWidth>
                                <InputLabel id='demo-simple-select-label1'>DayCounter</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label1"
                                        value={valueDayCounter}
                                        defaultValue={""}
                                        label="dayCounter"
                                        onChange={handleDayCounter}
                                        style={{height: 'fit-content'}}
                                    >
                                        {dayCounter?.map(i => <MenuItem value={i} key={i}>{i}</MenuItem>)}
                                    </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel id='demo-simple-select-label2'>Frequency</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label2"
                                        value={valueFrequency}
                                        label="worst"
                                        onChange={handleFrequency}
                                        style={{height: 'fit-content'}}
                                    >
                                        {frequency?.map(i => <MenuItem value={i} key={i}>{i}</MenuItem>)}
                                    
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
                        <Button onClick={handleOpenModal} variant="outlined" startIcon={<ShowChartOutlinedIcon />} style={{margin: '0 16px'}}>
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
                                    label="DateTo"
                                    value={temp}
                                    onChange={(newValue) => setTemp(newValue)}
                                    
                                />
                                <DatePicker
                                    label="Settl Date"
                                    value={temp}
                                    onChange={(newValue) => setTemp(newValue)}
                                />
                            </LocalizationProvider>
                        </Stack>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                            <InputLabel id='demo-simple-select-label3'>Date type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label3"
                                    value={valueDateTo}
                                    label="dateType"
                                    onChange={handleDateTo}
                                    style={{height: 'fit-content'}}
                                >
                                    {dateTo?.map(i => <MenuItem value={i} key={i}>{i}</MenuItem>)}
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
                                    value={valueCurrency}
                                    label="Sttl.Currency"
                                    onChange={handleCurrency}
                                    style={{height: 'fit-content'}}
                                >
                                    {currency?.map(i => <MenuItem value={i} key={i}>{i}</MenuItem>)}
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
                <Box>
                    <Button>Calculate</Button>
                </Box>
            </Stack>
            <Stack direction={'row'} justifyContent="space-between" alignItems="flex-end">
                <Box>
                    <h5 align='left'>Calc To</h5>
                    <Stack direction={'row'} spacing={4}>
                        <FormControl fullWidth>
                            <InputLabel id='demo-simple-select-label5'>Interpolation</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label5"
                                    value={currency}
                                    label="Interpolation"
                                    onChange={handleCurrency}
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
                                value={currency}
                                label="Кривая ОФЗ"
                                onChange={handleCurrency}
                                style={{height: 'fit-content', width: '160px'}}
                            >
                                <MenuItem value={4} key={4}>Кривая ОФЗ</MenuItem>
                                <MenuItem value={5} key={5}>Кривая ФЗ</MenuItem>
                                <MenuItem value={6} key={6}>Ровная и четкая</MenuItem>
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