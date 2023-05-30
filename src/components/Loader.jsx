import React from 'react'
import { VStack ,Box,Spinner } from '@chakra-ui/react'

const Loader = () => {
  return (
    <VStack>
       <Box>
        <Spinner/>
       </Box>   
    </VStack>
  )
}

export default Loader


