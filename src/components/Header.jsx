// import React,{useState, useEffect} from 'react'
// import {HStack,Button} from "@chakra-ui/react"
// import {Link} from "react-router-dom";

// const Header = () => {
//   const scrolledStyle = {
//      padding: "1rem 0",
//      backgroundColor:"#130921",
//      position:"sticky",
//      boxShadow:" 0 0px 5px rgba(0,0,0,0.3)",
//      color:" #fff", 
//   };
  
//   const [style ,setStyle] = useState('');
//     useEffect(() => {
//        window.addEventListener('scroll',handleScroll);
    
//       return () => {
//         window.removeEventListener('scroll',handleScroll);
//       };
//     }, [])
    
//     const handleScroll = () =>{
//         if(window.scrollY >100){
//             setStyle('scrolledStyle');
//         }
//         else{
//             setStyle('');
//         }
//     };

//   return (
//     <nav style={style} >
//     <HStack  p={"4"}   justifyContent={"flex-end"} gap={"8"} bgColor={'#130749'}>
//       <Button variant={"unstyled"}  color={"white"} gap={"3"}>
//         <Link to="/">Home</Link>
//       </Button>

//       <Button variant={"unstyled"} color={"white"}gap={"3"}  >
//         <Link to="/coins">Coins</Link>
//       </Button>

//       <Button variant={"unstyled"} color={"white"} pr={"3"} >
//         <Link to="/exchange">Exchanges</Link>
//       </Button>

//     </HStack>
//     </nav>
//   )
// }

// export default Header

// import React, { useState, useEffect } from 'react';
// import {Heading, HStack, Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, useDisclosure } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const scrolledStyle = {
//     padding: '2rem 1.3rem',
//     backgroundColor: '#130921v',
//     position: 'fixed',
//     top:"0",
//     width:"100%",
//     boxShadow: '0 0px 5px rgba(0,0,0,0.3)',
//     color: '#fff',
    
//   };

//   const [style, setStyle] = useState(null);


//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   });

//   const handleScroll = () => {
//     if (window.scrollY > 100) {
//       console.log("scrolled added")
//       setStyle(scrolledStyle);
//     } else {
//       setStyle(null);
//     }
//   };

//   return (
    
//      <HStack style={style} p="10" justifyContent="space-between"
//       bgColor="#130749"  zIndex="100"
//       >

//     <Heading backgroundImage={"linear(to-b,  white  , #130749  )"}
//        backgroundClip={"text"}
//        css={{ "&:hover":{
//       backgroundImage: "linear-gradient(#2600fc,#ff00ea)",
//       color: "transparent",
//       backgroundClip:" text",
//       cursor: "pointer",
//     },}}
//        ><Link to={"/"}> CryptoTalk</Link>
//       </Heading>

//       <HStack   gap="8" >
//       <Button variant="unstyled" color="white" gap="3" 
//       css={{ "&:hover":{
//       backgroundImage: "linear-gradient(25deg,#2600fc,#ff00ea)",
//       color: "transparent",
//       backgroundClip:" text",
//       cursor: "pointer",
//     },}}
//       >
//           <Link to="/">Home</Link>
//         </Button>

//         <Button variant="unstyled" color="white" gap="3"
//         css={{ "&:hover":{
//       backgroundImage: "linear-gradient(25deg,#2600fc,#ff00ea)",
//       color: "transparent",
//       backgroundClip:" text",
//       cursor: "pointer",
//     },}}>
//           <Link to="/coins">Coins</Link>
//         </Button>

//         <Button variant="unstyled" color="white" pr="3"
//         css={{ "&:hover":{
//       backgroundImage: "linear-gradient(25deg,#2600fc,#ff00ea)",
//       color: "transparent",
//       backgroundClip:" text",
//       cursor: "pointer",
//     },}}
//         >
//           <Link to="/exchange">Exchanges</Link>
//         </Button>
//         </HStack>
//       </HStack>
    
//   );
// };

// const MyDrawer = ()=>{
//   const {isOpen,onOpen,onClose} = useDisclosure();
//     return(
//       <>
//       <Button onClick={onOpen}>Hit me</Button>
//       <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
//        <DrawerOverlay/>
//        <DrawerContent>
//       <DrawerCloseButton/>
//       <DrawerHeader>cr</DrawerHeader>
//       <DrawerBody>
//          lsoeodskf
//       </DrawerBody>
//    </DrawerContent>
//   </Drawer>
//   </>
//     )
// }
// export default Header;


import React, { useState, useEffect } from 'react';
import { Heading, HStack, Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, useDisclosure, useMediaQuery, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from "react-icons/gi";

const Header = () => {
  const scrolledStyle = {
    padding: '2rem 1.3rem',
    backgroundColor: '#130921v',
    position: 'fixed',
    top: '0',
    width: '100%',
    boxShadow: '0 0px 5px rgba(0,0,0,0.3)',
    color: '#fff',
  };

  const [style, setStyle] = useState(null);
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleScroll = () => {
    if (window.scrollY > 100) {
      console.log('scrolled added');
      setStyle(scrolledStyle);
    } else {
      setStyle(null);
    }
  };

  return (
    <HStack
      style={style}
      p="10"
      justifyContent="space-between"
      bgColor="#130749"
      zIndex="100"
    >
      <Heading
        backgroundImage={'linear(to-b,  white  , #130749  )'}
        backgroundClip={'text'} fontSize={["1.3rem","3rem"]}
        css={{
          '&:hover': {
            transform: "scale(1.1)",
            cursor: 'pointer',
          },
        }}
      >
        <Link to={'/'}>CryptoTalk</Link>
      </Heading>

      {isLargerThan800 ? (
        <HStack gap="8">
          <Button
            variant="unstyled"
            color="white"
            gap="3"
            css={{
              '&:hover': {
                backgroundImage: 'linear-gradient(25deg,#2600fc,#ff00ea)',
                color: 'transparent',
                backgroundClip: ' text',
                cursor: 'pointer',
              },
            }}
          >
            <Link to="/">Home</Link>
          </Button>

          <Button
            variant="unstyled"
            color="white"
            gap="3"
            css={{
              '&:hover': {
                backgroundImage: 'linear-gradient(25deg,#2600fc,#ff00ea)',
                color: 'transparent',
                backgroundClip: ' text',
                cursor: 'pointer',
              },
            }}
          >
            <Link to="/coins">Coins</Link>
          </Button>

          <Button
            variant="unstyled"
            color="white"
            pr="3"
            css={{
              '&:hover': {
                backgroundImage: 'linear-gradient(25deg,#2600fc,#ff00ea)',
                color: 'transparent',
                backgroundClip: ' text',
                cursor: 'pointer',
              },
            }}
          >
            <Link to="/exchange">Exchanges</Link>
          </Button>
        </HStack>
      ) : (
        <MyDrawer />
      )}
    </HStack>
  );
};

const MyDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} bgGradient={"linear-gradient(25deg, #2600fc, #ff00ea)"}>
      <GiHamburgerMenu/>
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen} size={'full'} >
        <DrawerOverlay bgGradient={"linear-gradient(25deg, #2600fc, #ff00ea)"}/>
        <DrawerContent>
          <DrawerCloseButton color={"white"}/>
          <DrawerHeader fontSize={"2.9rem"} color={"white"}  bgColor={"#0f051d"} fontWeight={"bold"} textAlign={"center"} pt={20}
          
          >CryptoTalk</DrawerHeader>
          <DrawerBody bgColor={"#0f051d"} color={"white"}>
          <VStack fontSize={"2rem"}>
          <Link to="/" onClick={onClose}>Home</Link>
          <Link to="/coin" onClick={onClose}>Coin</Link>
          <Link to="/exchange" onClick={onClose}>Exchanges</Link>
          </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;


