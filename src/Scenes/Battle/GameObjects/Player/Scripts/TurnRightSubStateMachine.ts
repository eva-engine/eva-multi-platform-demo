import { DIRECTION_ENUM, PLAYER_STATE } from '../../../../../Enum/index';
import { GameObject } from '@eva/eva.js';
import DirectionStateMachine from '../../../../../Base/DirectionStateMachine';
import TurnRightState from './TurnRight/TurnRightState';
import PlayerManager from './PlayerManager';
import { SpriteAnimation } from '@eva/plugin-renderer-sprite-animation';

export default class TurnRightSubStateMachine extends DirectionStateMachine {
  constructor(go: GameObject) {
    super(go);

    this.init();
  }

  init() {
    this.manager = this.go.getComponent(PlayerManager);
    this.states.set(DIRECTION_ENUM.TOP, new TurnRightState(this.go, 'player_turn_right_top', 1));
    this.states.set(DIRECTION_ENUM.BOTTOM, new TurnRightState(this.go, 'player_turn_right_bottom', 1));
    this.states.set(DIRECTION_ENUM.LEFT, new TurnRightState(this.go, 'player_turn_right_left', 1));
    this.states.set(DIRECTION_ENUM.RIGHT, new TurnRightState(this.go, 'player_turn_right_right', 1));
  }
}