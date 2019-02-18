// Need h for rendering the elements in an object
import { h } from 'preact';

// Import our ROMs
import {GameROMs, DemoROMs} from './urlImports';

// Import our ROM images
import tobuTobuGirlImage from './ROMs/tobutobugirl/tobutobugirl.png';
import backToColorImage from './ROMs/back-to-color/back-to-color.png';
import libbetImage from './ROMs/libbet/libbet.png';

export const openSourceROMs = {
  games: {
    tobutobugirl: {
      title: 'tobu tobu girl',
      url: GameROMs.TobuTobuGirl,
      image: tobuTobuGirlImage,
      link: 'http://tangramgames.dk/tobutobugirl/',
      infoElement: (
        <div>
          <p>
            Tobu Tobu Girl is a fun and challenging arcade platformer developed by Tangram Games featuring an original soundtrack by
            potato-tan. Licensed under MIT/CC-BY.
          </p>
        </div>
      )
    }
    libbet: {
      title: 'Libbet and the Magic Floor',
      url: GameROMs.Libbet,
      image: libettImage,
      link: 'https://github.com/pinobatch/libbet',
      infoElement: (
        <div>
          <p>
            This is a port of Martin Korth's game Magic Floor to the Game Boy compact video game system, introducing Libbet the boulder girl.

            The floor tiles have four shades. Libbet can roll or jump between tiles of the same shade. She can also roll or jump onto the next brighter shade or from white to black, which leaves a track. Tiles with no exits contain a trap door that leads to the entrance. Leave 90 percent of possible tracks and roll to the exit to win.
          </p>
        </div>
      )
    }
  },
  demos: {
    backToColor: {
      title: 'Back to Color',
      url: DemoROMs.BackToColor,
      image: backToColorImage,
      link: 'https://github.com/AntonioND/back-to-color',
      infoElement: (
        <div>
          <p>Back to Color, a GBC demo for the GBDev 2014 compo. Made by AntonioND.</p>
        </div>
      )
    }
  }
};

export const getOpenSourceROMElements = loadROMCallback => {
  
  const openSourceROMSections = [];
  Object.keys(openSourceROMs).forEach(romTypeKey => {

    const openSourceROMElements = [];
    Object.keys(openSourceROMs).forEach(romKey => {
      const openSourceROM = openSourceROMs[romKey];
      openSourceROMElements.push(
        <div class="open-source-rom">
          <button
            class="open-source-rom__button"
            onClick={() => {
              loadROMCallback(openSourceROM);
            }}
          >
            <div class="open-source-rom__left">
              <img src={openSourceROM.image} />
            </div>
            <div class="open-source-rom__right">
              <h3>{openSourceROM.title}</h3>
              <div class="open-source-rom__info">{openSourceROM.infoElement}</div>
            </div>
          </button>
          <a href={openSourceROM.link} target="blank_" class="open-source-rom__link">
            {/*Google Material Link Icon*/}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
            </svg>
          </a>
        </div>
      );
    });

    openSourceROMSections.push((
      <div>
        <h1>{romTypeKey.charAt(0).toUpperCase()}{romTypeKey.slice(1)}</h1>
        {openSourceROMElements}
      </div>
    ));
  });


  return openSourceROMSections;
};
