import { NextPage } from 'next';
import Title from 'components/title';
import Person from 'components/person';
import Friends from 'components/friends';
import Page from 'components/page';


function me(name: string) {
  return friendsWithPosition.find(
    person => person.name === name,
  )
}

const friends = [
  {
    name: 'Tha storminator',
    points: 200,
    picture: '/images/storm.jpeg'
  },
  {
    name: 'Rent Hasfelt',
    points: 150,
    picture: '/images/rens.jpeg'
  },
  {
    name: 'Wiskunde D',
    points: 180,
    picture: '/images/alex.jpeg'
  },
  {
    name: 'Jay9',
    points: 170,
    picture: '/images/jeanine.jpeg'
  },
  {
    name: 'Ka-Ho',
    points: 145,
    picture: '/images/ka-ho.jpeg'
  },
];

const sortedFriends = friends.sort((a, b) => b.points - a.points);
const friendsWithPosition = sortedFriends.map((friend, index) => ({
  ...friend,
  position: index + 1,
}));

const page: NextPage = () => {

  return (
    <>
      <Page title="Leaderboard">
        <Title>Leader<wbr/>board</Title>
        <Person {...me('Tha storminator')} />
        <Friends friends={friendsWithPosition} />
      </Page>
    </>
  )
}

export default page;