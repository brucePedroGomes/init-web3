import { Container, Spinner, Stack } from '@chakra-ui/react'

import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'

import { useChainStatus } from './hooks/getChainStatus'

export const App = () => {
    const { data, isLoading } = useChainStatus()

    return (
        <Container padding={'16px'}>
            <Stack spacing={'16'} display={'flex'} align={'center'}>
                {isLoading && <Spinner />}
                <Table size="lg">
                    <Thead>
                        <Tr>
                            <Th>name</Th>
                            <Th>chain_id</Th>
                            <Th>synced_block_height</Th>
                            <Th>synced_blocked_signed_at</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data?.data.items.map((item) => (
                            <Tr key={item.chain_id}>
                                <Td>{item.name}</Td>
                                <Td>{item.chain_id}</Td>
                                <Td>{item.synced_block_height}</Td>
                                <Td>{item.synced_blocked_signed_at}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Stack>
        </Container>
    )
}
