// Imports should be hanlded with something like:
// https://github.com/rollup/rollup-plugin-url
// Exports are arrays with the type of ROM

import TobuTobuGirl from './ROMs/tobutobugirl/tobutobugirl.gb';
import Libbet from './ROMs/libbet/libbet.gb';
import DinosOfflineAdventure from './ROMs/dinos-offline-adventure/dinos-offline-adventure.gb';
export const GameROMs = {
  TobuTobuGirl,
  Libbet,
  DinosOfflineAdventure
};

import BackToColor from './ROMs/back-to-color/back-to-color.gbc';
export const DemoROMs = {
  BackToColor
};

import waveform from './ROMs/waveform/waveform';
export const ToolROMs = {
  waveform
}

import BlarggsCpu from './ROMs/blargg/cpu_instrs.gb';
import BlarggsInstrTiming from './ROMs/blargg/instr_timing.gb';
import gb240p from './ROMs/gb240p/gb240p.gb';
export const TestROMs = {
  BlarggsCPU,
  BlarssInstrTiming,
  gb240p
};
