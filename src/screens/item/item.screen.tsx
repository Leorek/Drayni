import React, {useState, useEffect} from 'react';
import {useNavigationParam} from 'react-navigation-hooks';
import LinearGradient from 'react-native-linear-gradient';
import {
  MainContainer,
  TopImage,
  GeneralInfoContainer,
  GeneralInfoContainerTitleContainer,
  ItemTitle,
  ItemCover,
  ItemDescriptionContainer,
  ItemDescriptionTitle,
  ItemDescription,
} from './item.style';

export const ItemScreen = props => {
  const item = useNavigationParam('item');

  return (
    <MainContainer>
      <TopImage source={{uri: item.cover}} />
      <LinearGradient
        colors={['transparent', '#2a2845']}
        locations={[0.3, 1]}
        style={{
          position: 'absolute',
          height: 280,
          flex: 1,
          left: 0,
          right: 0,
        }}></LinearGradient>

      <GeneralInfoContainer>
        <ItemCover source={{uri: item.poster}}></ItemCover>
        <GeneralInfoContainerTitleContainer>
          <ItemTitle>{item.title}</ItemTitle>
        </GeneralInfoContainerTitleContainer>
      </GeneralInfoContainer>
      <ItemDescriptionContainer>
        <ItemDescriptionTitle>Synopsis</ItemDescriptionTitle>
        <ItemDescription>{item.synopsis}</ItemDescription>
      </ItemDescriptionContainer>
    </MainContainer>
  );
};
