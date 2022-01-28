import { useQuery } from 'react-query'

const API_KEY = ''

type ChainsStatus = {
    chain_id: '31'
    is_testnet: true
    logo_url: 'https://www.covalenthq.com/static/images/icons/display-icons/rsk-mainnet-logo.svg'
    name: 'rsk-testnet'
    synced_block_height: 2534150
    synced_blocked_signed_at: '2022-01-28T02:01:15Z'
}

const getData = async (): Promise<{ data: { items: ChainsStatus[] } }> => {
    const response = await fetch(`https://api.covalenthq.com/v1/chains/status/?key=${API_KEY}`)
    return await response.json()
}



export const useChainStatus = () => useQuery('get', getData)