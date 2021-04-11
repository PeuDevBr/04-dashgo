import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from "../components/SideBar";

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

 const options =  {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500]
  },
    grid: {
      show: false, // tira as linhas indicadores
    },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600] // liinha abaixo do gráfico
    },
    axisTicks: {
      color: theme.colors.gray[600] // liinha abaixo do gráfico
    },
    categories: [
      '2021-04-11t00:00:00.000z',
      '2021-04-12t00:00:00.000z',
      '2021-04-13t00:00:00.000z',
      '2021-04-14t00:00:00.000z',
      '2021-04-15t00:00:00.000z',
      '2021-04-16t00:00:00.000z',
      '2021-04-17t00:00:00.000z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
 };

 const series = [
   {name: 'series1', data: [0, 78, 28, 65, 2, 71, 126]}
 ];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header/>

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar/>
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">Inscritos da semana</Text>
            <Chart options={options} series={series} type="area" height={160}/>
          </Box>
          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">Taxa de Abertura</Text>
            <Chart options={options} series={series} type="area" height={160}/>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}