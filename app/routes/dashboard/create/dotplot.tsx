import * as React from 'react'
import { DotPlotTemplate } from '~/components/ChartTemplates'
import { useGraphData } from '~/utils/graphDataContext'
import type { GridColumns, GridRowsProp } from '@mui/x-data-grid'
import { GRAPH_TYPES } from '~/utils/types'

// define template for column headers
// https://mui.com/components/data-grid/columns/#column-definitions
const columns: GridColumns = [
  { field: 'xval', headerName: 'X Values', width: 180, editable: true },
  { field: 'yval', headerName: 'Y Values', width: 180, type: 'number', editable: true },
]

// initial values for rows based on column template defined above
const initialRows: GridRowsProp = [
  { id: 1, xval: 'Page A', yval: 2 },
  { id: 2, xval: 'Page B', yval: 5 },
  { id: 3, xval: 'Page C', yval: 3 },
  { id: 4, xval: 'Page D', yval: 8 },
  { id: 5, xval: 'Page E', yval: 7 },
  { id: 6, xval: 'Page F', yval: 2 },
]

function DotPlot() {
  const { graphData, setSelectedGraph, setColumnTemplate, parameters } = useGraphData()
  const { title, xlabel, ylabel, name } = parameters
  const data = graphData.dotplot

  React.useEffect(() => {
    setSelectedGraph(GRAPH_TYPES.dotplot)
    setColumnTemplate(columns)
  }, [setColumnTemplate, setSelectedGraph])

  return (
    <>
      <DotPlotTemplate data={data} title={title} xlabel={xlabel} ylabel={ylabel} name={name} />
    </>
  )
}

export default DotPlot
