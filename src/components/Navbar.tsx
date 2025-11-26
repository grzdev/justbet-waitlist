import { Flex, Image } from '@chakra-ui/react'
import jbLogo from '../assets/images/jb-logo.png'

export const Navbar = () => {
  return (
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
  )
}
