import { Flex, Heading } from '@chakra-ui/react'
import { FiArrowRight } from 'react-icons/fi'

interface HeroSectionProps {
  onOpenWaitlist: () => void
}

export const HeroSection = ({ onOpenWaitlist }: HeroSectionProps) => {
  return (
    <Flex mt={{base: "5rem", md: "9rem"}} flexDir="column" gap={{base:"0.4rem", md:"1rem"}} alignItems="center">
      <Heading className="slide-up" fontSize={{base: '2.4rem', md: '3.6rem'}} color="white" fontWeight={700} textAlign="center" w={{base:"100%", md:"43rem"}} lineHeight={{base: '1.2', md: '1'}}>
        Bet Directly from Non-Custodial Smart Wallets
      </Heading>

      {/* Gradient Border Button */}
      <Flex w="fit-content" mt="1rem" className="slide-up-delayed">
        <div className="container">
          <button className="button" onClick={onOpenWaitlist}>
            Join Waitlist
            <FiArrowRight style={{ marginLeft: '0.5em', display: 'inline' }} />
          </button>
        </div>
      </Flex>
    </Flex>
  )
}
