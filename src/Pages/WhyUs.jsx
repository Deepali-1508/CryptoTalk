import React from 'react'
import {Box,Container,HStack,Stack,Image,VStack,Heading,Text,boxSize} from '@chakra-ui/react'
import hand from "../assets/hand.png";
import {FaWallet,FaPencilRuler,FaSatelliteDish,FaChessKnight,FaBoxes} from "react-icons/fa";
import {AiFillThunderbolt} from "react-icons/ai"

const WhyUS = () => {
  return (
    <Box p={"10"} bgColor={"#0f051d"}>
        <Heading pt={"2rem"} textAlign={"center"} color={"white"} fontSize={["3rem","4rem","5rem"]}>WHY CHOOSE US</Heading>
        <Stack direction={["column","column","column","row"]} justifyContent={"center"} alignItems={"center"} gap={[10]} m={10}> 
           <VStack>
             <WhyUSCard image={<FaWallet/>} heading="CONNECT YOUR WALLET" text="Use Trust Wallet, Metamask or to connect to the app. "/>
             <WhyUSCard image={<FaPencilRuler/>} heading="SELECT YOUR QUANTITY" text="Upload your crypto and set a title, description and price. "/>
             <WhyUSCard image={<AiFillThunderbolt/>} heading="CONFIRM TRANSACTION" text="Earn by selling your crypto on our marketplace. "/>
           </VStack>
           <Image src={[hand]} w={["20vh","20vh","20vh","30vh","50vh"]} h={"50%"} />
           <VStack>
           <WhyUSCard image=<FaSatelliteDish/> heading="RECEIVE YOUR OWN NFTS" text="Invest all your crypto at one place on one platform."/>
           <WhyUSCard image={<FaChessKnight/>} heading="TAKE A MARKET TO SELL" text="Discover, collect the right crypto collections to buy or sell. "/>
           <WhyUSCard image={<FaBoxes/>} heading="DRIVE YOUR COLLECTION" text="iWe make it easy to Discover, Invest and manage. "/>
           </VStack>
        </Stack>
        
        
    </Box>
  )
}


const WhyUSCard = ({ image, heading, text }) => (
    <Container p={2} >
  <HStack h={"15rem"}  p={"2rem"} bg={"rgba(255, 255, 255, 0.05)"} gap={5} alignItems={"flex-start"} borderRadius={"1rem"}>
    <Box as="span" fontSize={"2rem"} w={"5rem"} h={"3.5rem"} p={4} color={"white"} bgGradient='linear(25deg, #2600fc, #ff00ea)' borderRadius={"1rem"} alignItems='center' display={"flex"} justifyContent={"center"}>
      {image}
    </Box>
    <VStack color={"white"}  alignItems={"flex-start"}>
      <Heading fontSize={[15,25,35]}>{heading}</Heading>
      <Text>{text}</Text>
    </VStack>
  </HStack>
  </Container>
);
export default WhyUS



// $color-white: #f3f2f4;
// $color-blue-purp: linear-gradient(25deg, #2600fc, #ff00ea);#0f051d 30%, #130749
// $bg-black: #0f051d;
// $green: rgb(14, 203, 129);