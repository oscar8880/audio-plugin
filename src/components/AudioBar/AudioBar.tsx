import React from "react";

import { AudioBarStyles } from "./AudioBar.Styles";
import { AudioPlayerError } from "@twilio/flex-ui";
import { AudioPlayerManager } from "@twilio/flex-ui";
import { Howl } from "howler";

const CustomTaskList = () => {
  const playAudioManagerSound = () => {
    AudioPlayerManager.play(
      {
        url: "https://cicct-flex-plugin-core-9515-production.twil.io/auto-answer-chime.mp3",
        repeatable: false,
      },
      (error: AudioPlayerError) => {
        console.log(error);
      }
    );
  };

  const playHowlerSound = () => {
    var sound = new Howl({
      src: "https://cicct-flex-plugin-core-9515-production.twil.io/auto-answer-chime.mp3",
      autoplay: false,
      loop: false,
      html5: true,
    });
    sound.play();
  };

  return (
    <AudioBarStyles>
      <button onClick={playAudioManagerSound}>Play AudioManager Sound</button>
      <button onClick={playHowlerSound}>Play Howler Sound</button>
    </AudioBarStyles>
  );
};

export default CustomTaskList;
