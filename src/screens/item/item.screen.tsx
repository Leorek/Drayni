import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useNavigationParam} from 'react-navigation-hooks';
import LinearGradient from 'react-native-linear-gradient';
import Collapsible from 'react-native-collapsible';
import Carousel from 'react-native-snap-carousel';
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
  ItemDescriptionViewMore,
  CarouselContainer,
  CarouselTitle,
  ItemDisplayContainer,
  ItemDisplayImage,
} from './item.style';
import {getEpisodesOfAnime} from '../../apis/kitsu.api';

export const ItemScreen = props => {
  const item = useNavigationParam('item');
  const [episodes, setEpisodes] = useState([]);
  const [isSynopsisCollapsed, setIsSynopsisCollapsed] = useState(true);

  useEffect(() => {
    getEpisodesOfAnime(item.id).then(res => {
      setEpisodes(res);
    });
  }, []);

  return (
    <MainContainer>
      <ScrollView style={{flex: 1}}>
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
          <Collapsible collapsed={isSynopsisCollapsed} collapsedHeight={100}>
            <ItemDescription>{item.synopsis}</ItemDescription>
          </Collapsible>
          <ItemDescriptionViewMore
            name={isSynopsisCollapsed ? 'arrow-down' : 'arrow-up'}
            size={18}
            onPress={() => {
              setIsSynopsisCollapsed(!isSynopsisCollapsed);
            }}></ItemDescriptionViewMore>
        </ItemDescriptionContainer>
        <CarouselContainer>
          <CarouselTitle>Episodes</CarouselTitle>
          <Carousel
            data={episodes}
            renderItem={({item}) => (
              <ItemDisplay title={item.title} poster={item.cover} />
            )}
            loop
            sliderWidth={410}
            itemWidth={135}></Carousel>
        </CarouselContainer>
      </ScrollView>
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
