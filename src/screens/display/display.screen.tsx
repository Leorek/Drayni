import React, {useState, useEffect, useRef} from 'react';
import {Dimensions, StatusBar, PixelRatio, View} from 'react-native';
import {useNavigationParam} from 'react-navigation-hooks';
import Video from 'react-native-video';
import {MainContainer} from './display.style';

const episodeUri =
  'https://srv09.erai-ddl3.info/1999/Fall/One%20Piece/901%20~%201000/%5BErai-raws%5D%20One%20Piece%20-%20905%20%5B720p%5D%5BMultiple%20Subtitle%5D.mkv';

export const DisplayScreen = props => {
  const player = useRef(null);
  const {height, width} = Dimensions.get('window');
  const statusBarSize = 25;

  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        height: width,
        width: height,
        transform: [
          {rotate: '90deg'},
          {
            translateY:
              (PixelRatio.getPixelSizeForLayoutSize(height) -
                PixelRatio.getPixelSizeForLayoutSize(width)) /
                PixelRatio.get() -
              statusBarSize,
          },
        ],
      }}>
      <Video
        ref={player}
        source={{uri: episodeUri}} // Can be a URL or a local file.
        playInBackground={false}
        resizeMode={'cover'}
        style={{height: width + statusBarSize, alignSelf: 'stretch'}}
      />
    </View>
  );
};
