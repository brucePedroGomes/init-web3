import { Box, Button, Container, Text, Heading, Stack } from '@chakra-ui/react'

import { useWeb3React } from '@web3-react/core'
import { injected } from './Components/Wallet/wallet'

export const App = () => {
    const { active, account, library, connector, activate, deactivate } = useWeb3React()

    const connect = async () => {
        try {
            await activate(injected)
        } catch (error) {
            console.error('connection error', error)
        }
    }

    const disconnect = () => {
        try {
            deactivate()
        } catch (error) {
            console.error('disconnection error', error)
        }
    }

    return (
        <Container padding={'16px'}>
            <Stack spacing={'16'} display={'flex'} align={'center'}>
                <Heading>Web 3</Heading>
                <Button colorScheme={'whatsapp'} onClick={connect}>
                    Connect to MetaMask
                </Button>
                {active ? (
                    <Text color="gray.300">
                        Connected with <Text fontWeight={'700'}>{account}</Text>
                    </Text>
                ) : (
                    <Text color={'red.400'} fontWeight={'700'}>
                        Not connected
                    </Text>
                )}
                <Button colorScheme={'red'} onClick={disconnect}>
                    Disconnect
                </Button>
            </Stack>
        </Container>
    )
}
