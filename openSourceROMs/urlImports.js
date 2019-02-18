// Imports should be hanlded with something like:
// https://github.com/rollup/rollup-plugin-url
// Exports are arrays with the type of ROM

import tobuTobuGirl from './ROMs/tobutobugirl/tobutobugirl.gb';
import libbet from './ROMs/libbet/libbet.gb';
import DinosOfflineAdventure from './ROMs/dinos-offline-adventure/dinos-offline-adventure.gb';
export const GameROMs = {
  TobuTobuGirl,
  Libbet,
  DinosOfflineAdventure
};

import backToColor from './ROMs/back-to-color/back-to-color.gbc';
export const DemoROMs = {
  BackToColor
};

import blarggsCpu from './ROMs/blargg/cpu_instrs.gb';
import blarggsInstrTiming from './ROMs/blargg/instr_timing.gb';
import gb240p from './ROMs/gb240p/gb240p.gb';
export const TestROMs = {
  BlarggsCPU,
  BlarssInstrTiming,
  gb240p
};
