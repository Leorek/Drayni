import React, {useState, useEffect} from 'react';
import {ScrollView, FlatList, View} from 'react-native';
import {useNavigationParam} from 'react-navigation-hooks';
import LinearGradient from 'react-native-linear-gradient';
import Collapsible from 'react-native-collapsible';
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
  ItemDisplayDescription,
  ItemDisplayTitle,
  ItemDisplayInfoContainer,
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
            name={isSynopsisCollapsed ? 'plus-circle' : 'minus-circle'}
            size={24}
            onPress={() => {
              setIsSynopsisCollapsed(!isSynopsisCollapsed);
            }}></ItemDescriptionViewMore>
        </ItemDescriptionContainer>
        <CarouselContainer>
          <CarouselTitle>Episodes</CarouselTitle>
          <FlatList
            data={episodes}
            ItemSeparatorComponent={() => {
              return <View style={{height: 20}}></View>;
            }}
            renderItem={({item}) => (
              <ItemDisplay
                title={item.title}
                number={item.number}
                poster={item.cover}
                description={item.synopsis}
              />
            )}></FlatList>
        </CarouselContainer>
      </ScrollView>
    </MainContainer>
  );
};

export const ItemDisplay = props => {
  const [isDescriptionCollapsed, setIsDescriptionCollapsed] = useState(true);
  return (
    <ItemDisplayContainer>
      <ItemDisplayImage source={{uri: props.poster}} />
      <ItemDisplayInfoContainer>
        <ItemDisplayTitle>Episode {props.number}</ItemDisplayTitle>
        <Collapsible collapsed={isDescriptionCollapsed} collapsedHeight={85}>
          <ItemDisplayDescription ellipsizeMode={'tail'}>
            {props.description}
          </ItemDisplayDescription>
        </Collapsible>
      </ItemDisplayInfoContainer>
    </ItemDisplayContainer>
  );
};
