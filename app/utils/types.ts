export enum GRAPH_TYPES {
  linechart = 'linechart',
  barchart = 'barchart',
  piechart = 'piechart',
  scatterplot = 'scatterplot',
  dotplot = 'dotplot',
  pictograph = 'pictograph',
  histogram = 'histogram',
  heatmap = 'heatmap',
}

export interface Profile {
  firstName?: string
  lastName?: string
  email?: string
}
