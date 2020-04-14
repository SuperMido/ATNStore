import React from 'react'
import { Box, H3 } from 'admin-bro'

const DontTouchThis = (props) => {
  const { record } = props

  return (
    <Box flex>
    <Box variant="white" width={1/2} boxShadow="card" mr="xxl" flexShrink={0}>
      <H3>WHY YOU TOUCH THAT???</H3>
      <p>Your Information is not available now</p>
      <p>like this:</p>
      <p><img src="https://i.redd.it/rd39yuiy9ns21.jpg" alt="stupid cat" width={300} /></p>
    </Box>
    <Box>
      <p>Or (more likely), operate on a returned record:</p>
      <Box overflowX="auto">
        {JSON.stringify(record)}
      </Box>
    </Box>
    </Box>
  )
}

export default DontTouchThis
