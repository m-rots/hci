import { NextPage } from 'next';
import Title from 'components/title';
import Page from 'components/page';
import Subtitle from 'components/subtitle';

import styles from './rewards.module.scss';
import Reward from 'components/reward';
import { useState } from 'react';

type RewardProp = {
  coins: number
  product: string
  company: string
}

const drinksSnacks: RewardProp[] = [
  {
    coins: 600,
    product: 'DADDY MC CHIK\'N',
    company: 'Vegan Junk Food Bar'
  },
  {
    coins: 500,
    product: '50% discount',
    company: 'Coffee company'
  },
  {
    coins: 250,
    product: 'Free drink',
    company: 'Holy ravioli'
  },
];

const sports: RewardProp[] = [
  {
    coins: 1000,
    product: '1 free month',
    company: 'Fit 4 Free'
  },
  {
    coins: 400,
    product: 'Bag of goodies',
    company: 'Basic Fit'
  },
];

const page: NextPage = () => {
  const [activeReward, setActiveReward] = useState<RewardProp>();
  const [purchaseComplete, setPurchaseComplete] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<number>();
  const [popupClass, setPopupClass] = useState(styles.popup)

  const [coins, setCoins] = useState(1400);

  function close() {
    setPopupClass(styles.popup);

    window.clearTimeout(closeTimeout);
    setCloseTimeout(undefined);
  }

  function buy() {
    setCoins(coins - activeReward.coins)

    setPurchaseComplete(true);
    const timeout = window.setTimeout(() => close(), 4000);
    setCloseTimeout(timeout);
  }

  function select(reward: RewardProp) {
    window.clearTimeout(closeTimeout);
    setCloseTimeout(undefined);

    setPurchaseComplete(false);
    setActiveReward(reward);
    setPopupClass(styles.popup + ' ' + styles.visible);
  }

  return (
    <>
      <div className={popupClass}>
        <div className={styles.top}>
          <div>
            <span className={styles.product}>{activeReward?.product}</span>
            <span className={styles.company}>{activeReward?.company}</span>
          </div>
          <button onClick={() => close()} className={styles.close}>close</button>
        </div>
        <div className={styles.cta}>
          {
            purchaseComplete
            ? (
              <div>
                <span className={styles.bigSpan}>Purchase successful</span>
                <span className={styles.smallSpan}>check your mail for the QR code</span>
              </div>
            )
            : (
              <button onClick={() => buy()}>Buy for {activeReward?.coins} coins</button>
            )
          }
        </div>
      </div>
      <Page title="Rewards">
        <Title>Rewards</Title>
        <Subtitle>{coins} coins</Subtitle>
        <h2 className={styles.category}>{'Drinks & Snacks'}</h2>
        <div className={styles.scrollable}>
          {
            drinksSnacks.map(
              (reward) => <Reward {...reward} key={reward.product} onClick={() => select(reward)} />
            )
          }
          <div className={styles.spacer} />
        </div>
        <h2 className={styles.category}>Sports</h2>
        <div className={styles.scrollable}>
          {
            sports.map(
              (reward) => <Reward {...reward} key={reward.product} onClick={() => select(reward)} />
            )
          }
          <div className={styles.spacer} />
        </div>
      </Page>
    </>
  )
}

export default page;