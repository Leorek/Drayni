import React, {useState, useEffect} from 'react';
import {useNavigation} from 'react-navigation-hooks';
import Carousel from 'react-native-snap-carousel';
import {
  MainContainer,
  CarouselTitle,
  CarouselContainer,
  ItemDisplayContainer,
  ItemDisplayImage,
  BackgroundImage,
  BackgroundOverlay,
  FeaturedItemContainer,
  FeaturedItemTitle,
  FeaturedItemButton,
} from './home.style';
import {getLatestAnimes, getLatestAnimesAlt} from '../../apis/kitsu.api';

export const HomeScreen = () => {
  const {navigate} = useNavigation();
  const [items, setItems] = useState([]);
  const [defaultItem, setDefaultItem] = useState({});

  useEffect(() => {
    getLatestAnimesAlt().then(res => {
      setItems(res);
      if (res && res[0]) {
        setDefaultItem(res[0]);
      }
    });
  }, []);

  return (
    <MainContainer>
      <BackgroundImage source={{uri: defaultItem.poster}} />
      <BackgroundOverlay />
      <FeaturedItemContainer>
        <FeaturedItemTitle>{defaultItem.title}</FeaturedItemTitle>
        <FeaturedItemButton
          onPress={() => {
            navigate('Display', {item: defaultItem});
          }}>
          Go!
        </FeaturedItemButton>
      </FeaturedItemContainer>
      <CarouselContainer>
        <CarouselTitle>Following</CarouselTitle>
        <Carousel
          data={items}
          renderItem={({item}) => (
            <ItemDisplay title={item.title} poster={item.poster} />
          )}
          loop
          sliderWidth={410}
          itemWidth={120}
          onSnapToItem={idx => {
            setDefaultItem(items[idx]);
          }}></Carousel>
      </CarouselContainer>
    </MainContainer>
  );
};

export const ItemDisplay = props => {
  return (
    <ItemDisplayContainer>
      <ItemDisplayImage source={{uri: props.poster}} />
    </ItemDisplayContainer>
  );
};
