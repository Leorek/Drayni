import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {
  MainContainer,
  Title,
  CarouselContainer,
  ItemDisplayContainer,
  ItemDisplayImage,
} from './home.style';
import {getLatestAnimes} from '../../apis/kitsu.api';

export const HomeScreen = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getLatestAnimes().then(res => {
      setItems(res);
    });
  }, []);

  return (
    <MainContainer>
      <Title>Drayni</Title>
      <CarouselContainer>
        <FlatList
          horizontal
          data={items}
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
