import React, { useState } from "react";
import { render } from "react-dom";
import "antd/dist/antd.css";
import { Card, Row, Col } from "antd";
import Song from "./Song";

import { useSelector } from "react-redux";
import {
  allSimilarSongsSelector,
  getSimilarSongErrorSelector,
} from "../../redux/selectors/songSelector";

const { Meta } = Card;

export default function Results() {
  const similarSongs = useSelector(allSimilarSongsSelector);
  const similarSongsError = useSelector(getSimilarSongErrorSelector);
  console.log("similarSongs", similarSongs);

  return (
    <div>
      <Row gutter={16}>
        {!similarSongsError ? (
          similarSongs.map((song, key) => (
            <div>
              <Song key={key} song={song} />
            </div>
          ))
        ) : (
          <div>
            Cannot Find Song by that Term. Try a Different one. There was some
            error
          </div>
        )}
      </Row>
    </div>
  );
}
