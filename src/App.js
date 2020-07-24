import React, { useEffect } from "react";
import "./App.css";
import useWebAnimations from "@wellyshen/use-web-animations";

export const App = () => {
  var playbackrateFG = 1;
  var playbackrateBG = 0;

  const sceneryFrames = [
    { transform: "translateX(100%)" },
    { transform: "translateX(-100%)" },
  ];
  const sceneryTimingBackground = {
    duration: 36000,
    iterations: Infinity,
    playbackRate: playbackrateBG,
  };

  const sceneryTimingForeground = {
    duration: 12000,
    iterations: Infinity,
    playbackRate: playbackrateBG,
  };

  const backgroundoneMovement = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingBackground,
  });

  const backgroundtwoMovement = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingBackground,
  });

  const foregroundoneMovement = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingForeground,
  });

  const foregroundtwoMovement = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingForeground,
  });

  const Queen = [
    { transform: "translateY(0)" },
    { transform: "translateY(-100%)" },
  ];

  const QueenTiming = {
    easing: "steps(7, end)",
    direction: "reverse",
    duration: 600,
    playbackRate: playbackrateFG,
    iterations: Infinity,
  };
  const redQueen_alice = useWebAnimations({
    keyframes: Queen,
    timing: QueenTiming,
  });

  const adjustBackgroundPlayback = () => {
    if (playbackrateFG < 0.8) {
      playbackrateBG = (playbackrateFG / 2) * -1;
    } else if (playbackrateFG > 1.2) {
      playbackrateBG = playbackrateFG / 2;
    } else {
      playbackrateBG = 0;
    }
    foregroundoneMovement.getAnimation().playbackRate = playbackrateBG;
    foregroundtwoMovement.getAnimation().playbackRate = playbackrateBG;
    backgroundoneMovement.getAnimation().playbackRate = playbackrateBG;
    backgroundtwoMovement.getAnimation().playbackRate = playbackrateBG;
  };

  useEffect(() => {
    const fganimation = foregroundoneMovement.getAnimation();
    fganimation.currentTime = fganimation.effect.getTiming().duration / 2;

    const bganimation = backgroundoneMovement.getAnimation();
    bganimation.currentTime = bganimation.effect.getTiming().duration / 2;

    setInterval(() => {
      if (playbackrateFG > 0.4) {
        playbackrateFG *= 0.9;
        redQueen_alice.getAnimation().playbackRate = playbackrateFG;
      }
      adjustBackgroundPlayback();
    }, 3000);

    document.addEventListener("click", () => {
      playbackrateFG *= 1.1;
      redQueen_alice.getAnimation().playbackRate = playbackrateFG;
      adjustBackgroundPlayback();
    });
  });
  return (
    <div>
      <div className="wrapper">
        <div className="sky"></div>
        <div className="earth">
          <div id="red-queen_and_alice">
            <img
              id="red-queen_and_alice_sprite"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
              srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"
              alt="Alice and the Red Queen running to stay in place."
              ref={redQueen_alice.ref}
            />
          </div>
        </div>

        <div
          className="scenery"
          id="foreground1"
          ref={foregroundoneMovement.ref}
        >
          <img
            id="palm3"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x"
            alt=" "
          />
        </div>
        <div
          className="scenery"
          id="foreground2"
          ref={foregroundtwoMovement.ref}
        >
          <img
            id="bush"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x"
            alt=" "
          />
          <img
            id="w_rook_upright"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x"
            alt=" "
          />
        </div>
        <div
          className="scenery"
          id="background1"
          ref={backgroundoneMovement.ref}
        >
          <img
            id="r_pawn_upright"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x"
            alt=" "
          />
          <img
            id="w_rook"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x"
            alt=" "
          />
          <img
            id="palm1"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x"
            alt=" "
          />
        </div>
        <div
          className="scenery"
          id="background2"
          ref={backgroundtwoMovement.ref}
        >
          <img
            id="r_pawn"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x"
            alt=" "
          />

          <img
            id="r_knight"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x"
            alt=" "
          />
          <img
            id="palm2"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x"
            alt=" "
          />
        </div>
      </div>
    </div>
  );
};

export default App;
