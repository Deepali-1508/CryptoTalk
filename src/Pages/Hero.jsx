import React from 'react'
import house from "../assets/house.webp";
import {motion} from "framer-motion"
import {VStack, Box ,Heading,Image} from '@chakra-ui/react'

const Hero = () => {
  return (
    <Box  w={"100%"} h={['50vh',"100vh"]} bgGradient={'linear-gradient(to top,  #0f051d 30%, #130749 70%)'} pt={"10"}>
  <VStack alignItems={"center"} justifyContent={"center"}>
    
      <Heading color={"white"} fontSize={['2rem','4rem','5rem','6rem',"8rem"]} textAlign={"center"}>TRACK AND TRADE</Heading>
      <Heading   fontSize={["1.3rem","2rem",'3rem','4rem',"5rem"]}  bgGradient='linear(to-l,#2600fc,#ff00ea)' bgClip={"text"} >CRYPTOCURRENCY</Heading>
     <Box h={"85vh"} w={"full"}>
     <motion.div
     style={{
       height:"80vh",
     }}
     animate={{
     translateZ:"20px", translateY:"20px"}}
     
     transition={{
       duration:2, repeat:Infinity,repeatType:"reverse",
     }}
     >
     <Image src={house} className='house' w={"27rem"} 
     objectPosition={"center"} objectFit={"cover"} align={"center"} margin={"auto"} pos={"relative"}
     />
     </motion.div>
       
      <Box className='name'  fontWeight={"bold"} color={"whiteAlpha.700"} textAlign={"center"}
       pos={"absolute"} left={"0"} top={"59%"} right={"0%"} >
      
      </Box>
       
     </Box>
    </VStack>
    </Box>
  )
}

export default Hero