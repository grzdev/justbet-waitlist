import { Box, Flex, Text, DialogRoot, DialogContent, DialogBody, DialogCloseTrigger, DialogBackdrop, Portal, CloseButton } from '@chakra-ui/react'
import { FiCheckCircle } from 'react-icons/fi'

interface SuccessModalProps {
  open: boolean
  onOpen: () => void
  onClose: () => void
}

export const SuccessModal = ({ open, onOpen, onClose }: SuccessModalProps) => {
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
            <DialogBody pb="3rem" px="2rem" pt="3rem">
              <Flex flexDir="column" alignItems="center" gap="1.5rem">
                <FiCheckCircle size={64} color="#00ff00" />
                <Text color="white" fontSize="1.5rem" lineHeight="1.2" fontWeight={600} textAlign="center">
                  Thank you for joining the waitlist!
                </Text>
              </Flex>
            </DialogBody>
          </DialogContent>
        </Box>
      </Portal>
    </DialogRoot>
  )
}
