import React  from "react";
import projects from "../projects.json";
import Wrapper from "../components/pages/Wrapper";
import FriendCard from "../components/pages/Blog";
import Title from "../components/pages/Title";

function blogPage (){
    return(
        <Wrapper>
    
      <Title>My Projects</Title>
      <FriendCard
        name={projects[0].name}
        image={projects[0].image}
        theme={projects[0].theme}
        tools={projects[0].tools}
      />
      <FriendCard
        name={projects[1].name}
        image={projects[1].image}
        theme={projects[1].theme}
        tools={projects[1].tools}
      />
      <FriendCard
        name={projects[2].name}
        image={projects[2].image}
        theme={projects[2].theme}
        tools={projects[2].tools}
      />

        </Wrapper>
    )
}

export default blogPage;