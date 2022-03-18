import * as React from 'react'
import { BarChartTemplate } from '~/components/ChartTemplates'
import { useGraphData } from '~/utils/graphDataContext'
import { GridColumns, GridRowsProp } from '@mui/x-data-grid'

// define template for column headers
// https://mui.com/components/data-grid/columns/#column-definitions
const columns: GridColumns = [
  { field: 'xval', headerName: 'X Values', width: 180, editable: true },
  { field: 'yval', headerName: 'Y Values', width: 180, type: 'number', editable: true },
]

// initial values for rows based on column template defined above
const initialRows: GridRowsProp = [
  {
    id: 1,
    xval: 'Page A',
    yval: 4000,
  },
  {
    id: 2,
    xval: 'Page B',
    yval: 3000,
  },
  {
    id: 3,
    xval: 'Page C',
    yval: 2000,
  },
  {
    id: 4,
    xval: 'Page D',
    yval: 2780,
  },
  {
    id: 5,
    xval: 'Page E',
    yval: 1890,
  },
  {
    id: 6,
    xval: 'Page F',
    yval: 2390,
  },
  {
    id: 7,
    xval: 'Page G',
    yval: 3490,
  },
]

function BarChart() {
  const { data, setData, setColumnTemplate, parameters } = useGraphData()
  const { title, xlabel, ylabel, name } = parameters

  React.useEffect(() => {
    setColumnTemplate(columns)
    setData(initialRows)
  }, [])

  return (
    <>
      <BarChartTemplate data={data} title={title} xlabel={xlabel} ylabel={ylabel} name={name} />
    </>
  )
}

export default BarChart