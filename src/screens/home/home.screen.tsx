import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {
  MainContainer,
  Title,
  CarouselTitle,
  CarouselContainer,
  ItemDisplayContainer,
  ItemDisplayImage,
  BigCarouselContainer,
  BigItemDisplayContainer,
  BigItemDisplayImage,
  BigCarouselTitle,
} from './home.style';
import {getLatestAnimes, getLatestAnimesAlt} from '../../apis/kitsu.api';

export const HomeScreen = () => {
  const [items, setItems] = useState([]);
  const [itemsAlt, setItemsAlt] = useState([]);

  useEffect(() => {
    getLatestAnimes().then(res => {
      setItems(res);
    });
    getLatestAnimesAlt().then(res => {
      setItemsAlt(res);
    });
  }, []);

  return (
    <MainContainer>
      {/* <Title>Home</Title> */}
      <BigCarouselContainer>
        <BigCarouselTitle>Latest</BigCarouselTitle>
        <FlatList
          horizontal
          data={items}
          renderItem={({item}) => (
            <BigItemDisplay title={item.title} cover={item.cover} />
          )}
          keyExtractor={item => item.id}></FlatList>
      </BigCarouselContainer>
      <CarouselContainer>
        <CarouselTitle>Following</CarouselTitle>
        <FlatList
          horizontal
          data={itemsAlt}
          renderItem={({item}) => (
            <ItemDisplay title={item.title} cover={item.cover} />
          )}
          keyExtractor={item => item.id}></FlatList>
      </CarouselContainer>
    </MainContainer>
  );
};

export const ItemDisplay = props => {
  return (
    <ItemDisplayContainer>
      <ItemDisplayImage source={{uri: props.cover}} />
    </ItemDisplayContainer>
  );
};

export const BigItemDisplay = props => {
  return (
    <BigItemDisplayContainer>
      <BigItemDisplayImage source={{uri: props.cover}} />
    </BigItemDisplayContainer>
  );
};
