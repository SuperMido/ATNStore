import React, { useEffect, useState } from 'react'
import { Box, H3, ApiClient, Placeholder, useNotice, Button} from 'admin-bro'
import Icon from "@material-ui/core/Icon";

const api = new ApiClient()

const NOTICE_MESSAGE = {
  message: 'Hope you have a good day ^_^',
  type: 'success',
}

const SomeStats = () => {
  const [text, setText] = useState('')
  const addNotice = useNotice()

  useEffect(() => {
    api.getPage({ pageName: 'customPage' }).then(res => {
      setText(res.data.text)
    })
  })

  return (
    <Box variant="grey">
      <Box variant="white">
        <H3>ATN Admin Panel</H3>
        <Box>
          <p>This application based on AdminBro and created by Tran Quang Huy</p>
          <p>University of Greenwich (Da Nang) - Student ID: GCD18457</p>
          <p>
            <form action={"https://www.facebook.com/huy.mido"} target="_blank">
              <Button onClick={() => addNotice(NOTICE_MESSAGE)}>Visit me on Facebook</Button>
            </form>
          </p>
        </Box>
      </Box>
    </Box>
  )
}

export default SomeStats
