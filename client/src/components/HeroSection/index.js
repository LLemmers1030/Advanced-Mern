import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <>
            <HeroContainer>
                {/* Bg stands for background */}
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                    {/* 2 methods. can host on google drive */}
                    {/* <VideoBg autoPlay loop muted src="https://r4---sn-5uaeznyz.c.drive.google.com/videoplayback?expire=1616381115&ei=e8xXYMzjF8me0_wPyf-PgAo&ip=35.141.84.70&cp=QVRGWERfUFFPRlhPOlVScE5TT0hteWNJVjhIdlFPdURKMFJDb1dXRWRaMDFVZ0ZhUE5YUEtjdkM&id=467ebd60930c4a2b&itag=37&source=webdrive&requiressl=yes&mh=Sl&mm=32&mn=sn-5uaeznyz&ms=su&mv=u&mvi=4&pl=20&sc=yes&ttl=transient&susc=dr&driveid=1qjklgBpSnCsAGAo4oPbbg0Ydez1ikUUK&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=11.424&lmt=1616366519623006&mt=1616366481&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRgIhAL0Qu0zpAP5qUU4xZq-tf4vqtJpqfuU3hVtD5hiE3jg3AiEAvWjRKoTKzmNGm6c74fyhiHEnGN6qV9FM5ZFDQpJOgwk=&lsparams=mh,mm,mn,ms,mv,mvi,pl,sc&lsig=AG3C_xAwRgIhAJp7uvhT6NJwKIFQwhq1JXb7GHZxDH1avAVQcp51vRrOAiEA3fqo31W_noWNoPyKbHYoqB9E6q7z4PmumaglUMz9Sgc=&cpn=ywSv3TCN1h6naPZT&c=WEB_EMBEDDED_PLAYER&cver=1.20210315.1.1" type='video/mp4' /> */}
                </HeroBg>
                <HeroContent>
                    <HeroH1>It's Another Day In Paradise</HeroH1>
                    <HeroP>
                        Sign up for a new account today and view our wonderful trailer homes
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to="signup"
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary='true'
                            dark='true'>
                            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection
