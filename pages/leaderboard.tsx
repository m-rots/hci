import { NextPage } from 'next';
import Title from '../components/title';
import Person from '../components/person';
import Friends from '../components/friends';
import Page from '../components/page';

const friends = [
  {
    name: 'Tha storminator',
    points: 169,
    picture: '/images/storm.jpeg'
  },
  {
    name: 'Rent Hasfelt',
    points: 148,
    picture: '/images/rens.jpeg'
  },
  {
    name: 'Wiskunde D',
    points: 200,
    picture: '/images/alex.jpeg'
  },
  {
    name: 'Jay9',
    points: 180,
    picture: '/images/jeanine.jpeg'
  },
  {
    name: 'Ka-Ho',
    points: 152,
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
      <Page scrollable>
        <Title>Leader<wbr/>board</Title>
        <Person {...friendsWithPosition[2]} />
        <Friends friends={friendsWithPosition} />
      </Page>
    </>
  )
}

export default page;