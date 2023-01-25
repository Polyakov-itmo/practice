import Glossary from './components/Glossary/Glossary'
import Header from './components/Header/Header'
import MindMap from './components/MindMap/MindMap'
import { ICard } from './Interfaces/ICard'
import { data } from './source/Source'

import { Box } from '@mui/system'
import { Tab } from '@mui/material'
import { TabPanel, TabContext, TabList } from '@mui/lab';
import { useState } from 'react'
import Tabs from '@mui/material/Tabs'

const TabStyle = {
  color: 'white',

}


function App() {
  const data_indexed: ICard[] = data.map((item, index) => { item.id = index + 1; return item })

  const [currentTab, setCurrentTab] = useState('1')

  const TabsHandleChange = (event: any, value: any) => {
    setCurrentTab(value)
  }

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <TabContext value={currentTab}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              color='white'
              onChange={TabsHandleChange}
              sx={{
                '& button': { width: '150px', fontSize: '20px' },
                '& button:hover': { backgroundColor: '#FFFFFF', color: '#000000' },
                '& button:focus': { borderBottom: '2px solid #FFFFFF', color: '#b8b8b8' },
              }}
            >
              <Tab label="Глоссарий" value="1" color='white' sx={TabStyle} />
              <Tab label="Mind-map" value="2" color='white' sx={TabStyle} />
            </Tabs>
          </Box>
          <TabPanel value="1">
            <Glossary source={data_indexed} />
          </TabPanel>
          <TabPanel value="2">
            <MindMap />
          </TabPanel>
        </TabContext>
      </div>
    </div>
  )
}

export default App
