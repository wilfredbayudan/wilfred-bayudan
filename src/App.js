import React, { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import Main from "./pages/Main";
import LoaderOverlay from "./components/LoaderOverlay";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 2600px;
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;
`;

const SampleDiv = styled.div`
  flex: 1 0 auto;
  @media (min-width: 768px) {
    padding-top: 60px;
  }
`;

const App = () => {
  const projectsRef = useRef();
  const skillsRef = useRef();
  const splashRef = useRef();
  const contactRef = useRef();

  return (
    <BrowserRouter>
      <Header
        splashRef={splashRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />
      <LoaderOverlay />
      <Wrapper>
        <Routes>
          <Route
            index
            element={
              <Main
                splashRef={splashRef}
                projectsRef={projectsRef}
                skillsRef={skillsRef}
                contactRef={contactRef}
              />
            }
          />
          <Route path="resume" element={<SampleDiv>Resume</SampleDiv>} />
          <Route path="*" element={<>404</>} />
        </Routes>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;
