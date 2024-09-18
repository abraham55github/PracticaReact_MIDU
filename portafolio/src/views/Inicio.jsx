import { Box, Container } from "@mui/material"
import Content from "../components/Content"
import Projects from "../components/Projects"
import Experience from "../components/Experience"
import AboutMe from "../components/AboutMe"

export default function Inicio() {
    return (
        <div>
            <Container maxWidth="lg">
                <Content />
            </Container>

            {/* Box with full width and background */}
            <Box sx={{ background:'#f3f4f6', width: '100%' }}>
                <Container maxWidth="lg">
                    <Experience />
                </Container>
            </Box>

            <Container maxWidth="lg">
                <Projects />
                <AboutMe />
            </Container>
        </div>
    )
}
