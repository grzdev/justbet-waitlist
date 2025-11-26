import { Box, Flex, Image, useDisclosure } from '@chakra-ui/react'
import mascot from "./assets/images/mascot.png"
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { Footer } from './components/Footer'
import { WaitlistModal } from './components/WaitlistModal'
import { SuccessModal } from './components/SuccessModal'
import './App.css'

function App() {
  const { open, onOpen, onClose } = useDisclosure()
  const { open: successOpen, onOpen: onSuccessOpen, onClose: onSuccessClose } = useDisclosure()

  return (
    <Box bg="black" minH="100vh" w="100%" px={{ base: '1rem', md: '2rem' }} py="1.5rem" overflow="hidden">
      <Navbar />

      <Flex flexDir={{base: "column", md: "row"}} justifyContent="space-between" alignItems={{base: "center", md: "flex-start"}}>
        <HeroSection onOpenWaitlist={onOpen} />
        <Image className="fade-in-delayed" src={mascot} alt="Mascot" boxSize={{base:"20rem", md:"30rem"}} mt={{base: "3.4rem", md: "0"}} />
      </Flex>
      
      <Footer />

      <WaitlistModal 
        open={open} 
        onOpen={onOpen} 
        onClose={onClose} 
        onSuccess={onSuccessOpen}
      />

      <SuccessModal 
        open={successOpen} 
        onOpen={onSuccessOpen} 
        onClose={onSuccessClose}
      />
    </Box>
  )
}

export default App
