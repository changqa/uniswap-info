import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Panel from '../Panel'
import { AutoColumn } from '../Column'
import { AutoRow } from '../Row'
import { TYPE } from '../../Theme'
import { usePairData } from '../../contexts/PairData'

const PriceCard = styled(Panel)`
  position: absolute;
  right: -60px;
  width: fit-content;
  top: -40px;
  z-index: 10;
  background-color: ${({ theme }) => theme.bg4};
`

export default function UniPrice() {
  const daiPair = usePairData('0xa478c2975ab1ea89e8196811f51a7b7ade33eb11')
  const usdcPair = usePairData('0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc')
  const tusdPair = usePairData('0xb4d0d9df2738abe81b87b66c80851292492d1404')
  const usdtPair = usePairData('0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852')

  const [daiPerEth, setDaiPerEth] = useState()
  useEffect(() => {
    daiPair && setDaiPerEth(parseFloat(daiPair.token0Price).toFixed(2))
  }, [daiPair])

  const [usdcPerEth, setUSDCPerEth] = useState()
  useEffect(() => {
    usdcPair && setUSDCPerEth(parseFloat(usdcPair.token0Price).toFixed(2))
  }, [usdcPair])

  const [tusdPerEth, setTUSDerEth] = useState()
  useEffect(() => {
    tusdPair && setTUSDerEth(parseFloat(tusdPair.token0Price).toFixed(2))
  }, [tusdPair])

  const [usdtPerEth, setUSDTPerEth] = useState()
  useEffect(() => {
    usdtPair && setUSDTPerEth(parseFloat(usdtPair.token1Price).toFixed(2))
  }, [usdtPair])

  return (
    <PriceCard>
      <AutoColumn gap="10px">
        <AutoRow>
          <TYPE.main>DAI/ETH: {daiPerEth}</TYPE.main>
        </AutoRow>
        <AutoRow>
          <TYPE.main>USDC/ETH: {usdcPerEth}</TYPE.main>
        </AutoRow>
        <AutoRow>
          <TYPE.main>TUSD/ETH: {tusdPerEth}</TYPE.main>
        </AutoRow>
        <AutoRow>
          <TYPE.main>USDT/ETH: {usdtPerEth}</TYPE.main>
        </AutoRow>
      </AutoColumn>
    </PriceCard>
  )
}
