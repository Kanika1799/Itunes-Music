import React from "react";
import { connect } from "react-redux";

import "antd/dist/antd.css";
import { Input, Button } from "antd";
import { AudioOutlined, DownOutlined } from "@ant-design/icons";
import Results from "../Results";
import styled from "styled-components";
import "./index.css";
import { songCreators } from "../../redux/reducers/songReducer";
import { localeCreators } from "../../redux/reducers/localeReducer";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import { useSelector } from "react-redux";

const { Search } = Input;
const Title = styled.h1`
  font-size: 4em;
  font-weight: bolder;
  color: #03256c;
  margin-top: 1em;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

function HomePage({ dispatchSongPhrase, dispatchLocale }) {
  const onSearch = (value) => {
    console.log(dispatchSongPhrase);
    dispatchSongPhrase(value);
    // props.songCreators.requestSimilarSongs(value)
  };

  const changeLocale = (localeName) => {
    console.log("LocaleName", localeName);
    dispatchLocale(localeName);
  };

  return (
    <div>
      <Title>
        <FormattedMessage id="siteTitle" />
      </Title>

      <Search
        style={{ margin: 10, width: 600 }}
        placeholder="Search your music"
        enterButton="Search"
        size="large"
        suffix={suffix}
        onSearch={onSearch}
      />
      <Button
        type="primary"
        onClick={() => {
          changeLocale("hi");
        }}
        className="LanguageButton"
        style={{ height: 38 }}
      >
        Switch To Hindi
      </Button>
      <Button
        type="primary"
        onClick={() => {
          changeLocale("en");
        }}
        className="LanguageButton"
        style={{ height: 38 }}
      >
        Switch To English
      </Button>

      <Results />
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  const { requestSimilarSongs } = songCreators;
  const { switchLocale } = localeCreators;
  return {
    dispatchSongPhrase: (songPhrase) =>
      dispatch(requestSimilarSongs(songPhrase)),
    dispatchLocale: (localeName) => dispatch(switchLocale(localeName)),
  };
}

export default connect(null, mapDispatchToProps)(HomePage);
