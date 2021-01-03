import Phaser from "phaser";

export type CursorKey = {
  isDown: boolean
}

export type Direction =  'left' | 'right' | 'up' | 'down'

export interface CursorKeys extends Record<Direction, CursorKey> {
  left: CursorKey;
  right: CursorKey;
  up: CursorKey;
  down: CursorKey;
}

export interface IVirtualJoystick extends Phaser.GameObjects.GameObject {
  y: number;
  x: number;
  visible: boolean;
  createCursorKeys: () => CursorKeys
}

export type redeemMapTokenMessage = {
    id: string;
    assembly: string;
}

export type redeemMapTokenResponse = {
    badge_name: string;
    badge_image: string;
    issuing_assembly: string; // Assembly Name
    user: string;
    created: boolean;
};
