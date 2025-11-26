import { useState } from 'react'
import { Box, Flex, Input, DialogRoot, DialogContent, DialogHeader, DialogBody, DialogCloseTrigger, DialogBackdrop, Portal, CloseButton } from '@chakra-ui/react'

interface WaitlistModalProps {
  open: boolean
  onOpen: () => void
  onClose: () => void
  onSuccess: () => void
}

export const WaitlistModal = ({ open, onOpen, onClose, onSuccess }: WaitlistModalProps) => {
  const [email, setEmail] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission here
    console.log('Email submitted:', email)
    onClose()
    setEmail('')
    onSuccess()
  }

  return (
    <DialogRoot open={open} onOpenChange={(e) => e.open ? onOpen() : onClose()} placement="center" motionPreset="slide-in-bottom">
      <Portal>
        <DialogBackdrop bg="blackAlpha.800" backdropFilter="blur(10px)" zIndex={1400} />
        <Box
          position="fixed"
          left="50%"
          top="50%"
          transform="translate(-50%, -50%)"
          zIndex={1500}
        >
          <DialogContent 
            bg="black" 
            border="2px solid" 
            borderColor="gray.800" 
            borderRadius="1rem" 
            maxW={{ base: 'calc(100vw - 2rem)', md: 'md' }}
            w={{ base: 'calc(100vw - 2rem)', md: '28rem' }}
          >
            <DialogHeader color="white" fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight={700} pt={{ base: "2rem", md: "3rem" }} pb="1rem" textAlign="center" display="flex" justifyContent="center">
              Join the Waitlist
            </DialogHeader>
            <DialogCloseTrigger asChild>
              <CloseButton 
                position="absolute"
                top="1rem"
                right="1rem"
                color="white" 
                bg="transparent"
                _hover={{ bg: 'gray.800' }}
                size="md"
              />
            </DialogCloseTrigger>
            <DialogBody pb="2rem" px="2rem" pt="1.5rem">
              <form onSubmit={handleSubmit}>
                <Box position="relative" mb="2rem">
                  <Box
                    as="label"
                    position="absolute"
                    left="1rem"
                    top={isFocused || email ? '-0.6rem' : '1rem'}
                    bg="black"
                    px="0.5rem"
                    color={isFocused || email ? 'white' : 'gray.500'}
                    fontSize={isFocused || email ? 'sm' : 'md'}
                    transition="all 0.2s ease"
                    pointerEvents="none"
                    zIndex={1}
                  >
                    Email Address
                  </Box>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    required
                    bg="transparent"
                    border="2px solid"
                    borderColor="gray.700"
                    color="white"
                    fontSize="1rem"
                    px="1rem"
                    py="1.5rem"
                    borderRadius="0.5rem"
                    _hover={{ borderColor: 'gray.600' }}
                    _focus={{ borderColor: 'white', outline: 'none' }}
                    _placeholder={{ color: 'gray.500' }}
                  />
                </Box>

                <Flex w="100%" justifyContent="center">
                  <div className="container">
                    <button type="submit" className="button" style={{ width: '100%' }}>
                      Submit
                    </button>
                  </div>
                </Flex>
              </form>
            </DialogBody>
          </DialogContent>
        </Box>
      </Portal>
    </DialogRoot>
  )
}
