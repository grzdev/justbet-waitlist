import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import jbLogo from './assets/images/jb-logo.png'
import mascot from "../src/assets/images/mascot.png"
import { FiArrowRight } from 'react-icons/fi'
import { FaTelegram, FaDiscord, FaXTwitter } from 'react-icons/fa6'
import './App.css'

function App() {
  return (
    <Box bg="black" minH="100vh" w="100%" px={{ base: '1rem', md: '2rem' }} py="1.5rem" overflow="hidden">
      {/* Navbar */}
      <Flex 
        as="nav" 
        className="fade-in"
        align="center"
      >
        <Image 
          src={jbLogo} 
          alt="JB Logo" 
          h={{ base: '1.5rem', md: '2rem' }}
        />
      </Flex>

      <Flex flexDir={{base: "column", md: "row"}} justifyContent="space-between" alignItems={{base: "center", md: "flex-start"}}>

        <Flex mt={{base: "5rem", md: "9rem"}} flexDir="column" gap="1rem" alignItems="center">
          <Heading className="slide-up" fontSize={{base: '2.4rem', md: '3.6rem'}} color="white" fontWeight={700} textAlign="center" w={{base:"100%", md:"43rem"}} lineHeight={{base: '1.2', md: '1'}}>
            Bet Directly from Non-Custodial Smart Wallets
          </Heading>

          {/* Gradient Border Button */}
          <Flex w="fit-content" mt="1rem" className="slide-up-delayed">
            <div className="container">
              <button className="button">
                Join Waitlist
                <FiArrowRight style={{ marginLeft: '0.5em', display: 'inline' }} />
              </button>
            </div>
          </Flex>
        </Flex>

        <Image className="fade-in-delayed" src={mascot} alt="Mascot" boxSize={{base:"20rem", md:"30rem"}} mt={{base: "2rem", md: "0"}} />
      </Flex>
      
      {/* Footer */}
      <Flex 
        as="footer"
        className="fade-in-delayed" 
        position={{base:"relative", md:"absolute" }}
        bottom="0" 
        left="0" 
        right="0" 
        px={{ base: '1rem', md: '2rem' }} 
        py={{ base: "0rem", md: "1rem" }}
        mt={{ base: "5rem", md: "0rem" }}
        justifyContent="space-between"
        alignItems="center"
        flexDir={{ base: 'row', md: 'row' }}
        gap={{ base: '0.6rem', md: '0' }}
      >
        {/* Social Icons */}
        <Flex gap={{ base: "1rem", md: "1.5rem" }} alignItems="center">
          <Link href="https://t.me/WINRProtocol" target="_blank" rel="noopener noreferrer" _hover={{ opacity: 0.7 }}>
            <FaTelegram size={20} color="white" />
          </Link>
          <Link href="https://discord.com/invite/WINRProtocol" target="_blank" rel="noopener noreferrer" _hover={{ opacity: 0.7 }}>
            <FaDiscord size={20} color="white" />
          </Link>
          <Link href="https://x.com/JustBetOnchain" target="_blank" rel="noopener noreferrer" _hover={{ opacity: 0.7 }}>
            <FaXTwitter size={20} color="white" />
          </Link>
        </Flex>

        {/* Copyright */}
        <Text color="gray.500" fontSize={{ base: 'sm', md: 'sm' }}>
          © 2025 JustBet
        </Text>
      </Flex>
    </Box>
  )
}

export default App
