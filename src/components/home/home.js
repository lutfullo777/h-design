import React from 'react'
import Carousel from './carousel/carousel'
import Story from './story/story'
import Projects from './projects/projects'
import About from './about/about'
import Team from './team/team'
import Gallery from './gallery/gallery'

const Home = () => {
    return (
        <div style={{width:'100%',minHeight:'100vh',marginTop:'100px', backgroundColor:'black', color:'white',}}>
            <Carousel/>
            <About/>
            <Story/>
            <Projects/>
            <Gallery/>
            <Team/>
        </div>
    )
}

export default Home
