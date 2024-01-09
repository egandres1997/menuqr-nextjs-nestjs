// ** MUI imports
import { styled } from '@mui/material/styles'

const ReactApexChartWrapper = styled('div')(({ theme }) => ({
  '& .apexcharts-tooltip-title': {
    color: theme.palette.secondary.main,
    fontWeight: 600
  },
  '& .apexcharts-tooltip-series-group': {
    color: theme.palette.secondary.main
  }
}))

export default ReactApexChartWrapper
