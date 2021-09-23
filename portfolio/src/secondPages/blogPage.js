import React  from "react";
import friends from "../friends.json";
import FriendCard from "../components/pages/Blog";
import Title from "../components/pages/Title";

function blogPage (){
    return(
        <wrapper>
    
      <Title>Friends List</Title>
      <FriendCard
        name={friends[0].name}
        image={friends[0].image}
        occupation={friends[0].occupation}
        location={friends[0].location}
      />
      <FriendCard
        name={friends[1].name}
        image={friends[1].image}
        occupation={friends[1].occupation}
        location={friends[1].location}
      />
      <FriendCard
        name={friends[2].name}
        image={friends[2].image}
        occupation={friends[2].occupation}
        location={friends[2].location}
      />

        </wrapper>
    )
}

export default blogPage;