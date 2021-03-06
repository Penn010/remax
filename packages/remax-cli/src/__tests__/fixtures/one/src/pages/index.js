import * as React from 'react';
import { View, Text } from 'remax-one';
import { FunctionalPageNavigator as UnKnownComponent } from 'remax/wechat';
import C from '@/components/C';
import chooseImage from '@/api/chooseImage';
import chooseImageMini from '@/api/chooseImageMini';
import chooseImageAlipay from '@/api/chooseImageAlipay';
import styles from './index.module.css';

export default () => {
  const props = {};
  const TextElement = React.cloneElement(<Text />);

  async function handleClick() {
    chooseImage();
    chooseImageMini();
    chooseImageAlipay();
    await Promise.resolve(1);
  }

  function handleTouchStart() {}
  const obj = {};
  const value = 0 ?? 1;

  return (
    <View className={styles['page-index']}>
      <C className="b" />
      <View onClick={handleClick} onTouchStart={handleTouchStart} id="view" data-foo="bar" {...props}>
        foo
        {obj?.a?.b}
        {value}
      </View>
      <UnKnownComponent />
      <UnBindingComponent />
      {TextElement}
    </View>
  );
};
