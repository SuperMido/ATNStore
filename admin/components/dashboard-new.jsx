import React from 'react'

import { AreaChart, Area, Tooltip, ResponsiveContainer} from 'recharts'

import { Box, H2, H5, H4, Text, Illustration, IllustrationProps, Button, Icon,  } from 'admin-bro'

const pageHeaderHeight = 284
const pageHeaderPaddingY = 74
const pageHeaderPaddingX = 250

const data = [
    { name: 'Page A', uv: 500, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const DashboardHeader = () => {
    return (
        <Box position="relative" overflow="hidden">
            <Box
                position="absolute"
                top={50}
                left={-10}
                opacity={[0.2, 0.4, 1]}
                animate
            >
                <Illustration variant="Rocket" />
            </Box>
            <Box
                position="absolute"
                top={-120}
                right={30}
                opacity={[0.2, 0.4, 1]}
                animate
            >
                <Illustration variant="Moon" />
                <Box>
                    <div style={{ marginRight: '-29px' }}>
                        <ResponsiveContainer width='100%' minHeight={300}>
                            <AreaChart
                                data={data}
                                margin={{
                                    top: 0, right: 0, left: 0, bottom: 0,
                                }}
                            >
                                <Tooltip />
                                <defs>
                                    <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                                        <stop stopColor="#718AF4" stopOpacity={1}/>
                                        <stop offset={1} stopColor="#718AF4" stopOpacity={0.3}/>
                                    </linearGradient>
                                </defs>
                                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="url('#splitColor')" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </Box>
            </Box>
            <Box
                bg="grey100"
                height={pageHeaderHeight}
                py={pageHeaderPaddingY}
                px={['default', 'lg', pageHeaderPaddingX]}
            >
                <Text textAlign="center" color="white">
                    <H2>Welcome to ATN Admin Panel</H2>
                    {/*<div>*/}
                    {/*    <img src={logo} alt="Logo" />*/}
                    {/*</div>*/}
                </Text>
            </Box>
        </Box>
    )
}

const Dashboard = (props) => {
    return (
        <Box>
            <DashboardHeader />
            {/*<img src="../../public/images/logo.png" alt="ATN Admin Panel">*/}

            <Box variant="grey">
                <Box variant="white" flex flexDirection="row">
                    <Box flexGrow={1}>
                        <H5 textAlign="left"> This application based on AdminBro and created by Tran Quang Huy</H5>
                        <H4 textAlign="left"> University of Greenwich (Da Nang) - Student ID: GCD18457</H4>
                    </Box>
                    <Box flexShrink={0}>
                        <Button
                            as="a"
                            size="sm"
                            variant="primary"
                            href="https://www.facebook.com/huy.mido"
                            target= "__blank"
                        ><Icon icon="LogoFacebook" />
                            Visit me on Facebook
                        </Button>
                    </Box>
                </Box>
            </Box>
            {/*<Text textAlign="center" mt="xxl">*/}
            {/*    <Button*/}
            {/*        as="a"*/}
            {/*        size="sm"*/}
            {/*        variant="primary"*/}
            {/*        href="https://www.facebook.com/huy.mido"*/}
            {/*        target= "__blank"*/}
            {/*    ><Icon icon="LogoFacebook" />*/}
            {/*    Visit me on Facebook*/}
            {/*    </Button>*/}
            {/*</Text>*/}
        </Box>

    )
}

export default Dashboard