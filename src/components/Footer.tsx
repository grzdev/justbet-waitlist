import { Flex, Link, Text } from '@chakra-ui/react'
import { FaTelegram, FaDiscord, FaXTwitter } from 'react-icons/fa6'

export const Footer = () => {
  return (
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
  )
}
