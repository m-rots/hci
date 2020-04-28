import { NextPage } from 'next';
import Title from '../components/title';
import Person from '../components/person';
import Friends, { Friend } from '../components/friends';
import Page from '../components/page';

const friends: Friend[] = [
  {
    name: 'Wiskunde D',
    description: '1st place - 200 points',
    picture: '/images/alex.jpeg'
  },
  {
    name: 'Jay9',
    description: '2nd place - 180 points',
    picture: '/images/jeanine.jpeg'
  },
  {
    name: 'Tha storminator',
    description: '3rd place - 169 points',
    picture: '/images/storm.jpeg'
  },
  {
    name: 'Ka-Ho',
    description: '4th place - 152 points',
    picture: '/images/ka-ho.jpeg'
  },
  {
    name: 'Rent Hasfelt',
    description: '5th place - 148 points',
    picture: '/images/rens.jpeg'
  },
]

const page: NextPage = () => {

  return (
    <Page>
      <Title>Leader<wbr/>board</Title>
      <Person {...friends[2]} />
      <Friends friends={friends} />
      <style jsx global>{`
        body {
          background-color: #99E1D9;
        }
      `}</style>
    </Page>
  )
}

export default page;