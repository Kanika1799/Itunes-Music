import React, { useState } from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.css';
import { Card,Row, Col } from 'antd';
import Song from "./Song"

import { useSelector } from 'react-redux'
import {allSimilarSongsSelector} from '../../redux/selectors/songSelector'

const { Meta } = Card;

const allSimilarSongs = state => {
  return state.songReducer.similarSongs
}

export default function Results(){
  const similarSongs = useSelector(allSimilarSongsSelector)
  console.log('similarSongs', similarSongs)    
  
  return (
      <div>
      <Row gutter={16}>    
          {similarSongs ? (
            
          similarSongs.map((song, key) => 
          <div>
            <Song key={key} song={song} />
          </div>)
          
          ): null
          }
          </Row>
    </div>
  );
};
