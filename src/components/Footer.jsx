import { Box,Stack,HStack ,Text} from '@chakra-ui/react'
import React from 'react'
import footerimg from "../assets/footerimg.png";
import {SiDiscord,SiTwitter,SiFacebook,SiYoutube} from "react-icons/si"
const Footer = () => {
  return (
    <Box bgImage={["",footerimg]} bgSize={["50%","100%"]} w={"full"} h={["fitContent","20rem"]} minH={"48"}  py={["16","8"]} px={"16"} bgColor={ "#0f051d"}  bgRepeat={"no-repeat"}>
    <Stack direction={["column"]} h={"full"} alignItems={"center"}>

    <Stack direction={["column","row"]} w={"full"}  alignItems={"center"} justifyContent={"center"} gap={"10"} fontSize={"3rem"} color={"white"} mt={"5.8rem"}> 
            <SiDiscord/>
            <SiFacebook/>
            <SiTwitter/>
            <SiYoutube/>
        </Stack>
    <HStack color={"white"} pt={"1rem"} gap={"5rem"}>
            <Text>Privacy</Text>
            <Text>Terms of use</Text>
        </HStack>
      </Stack>
    </Box>
  )
}

export default Footer