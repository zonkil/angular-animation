import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import * as PIXI from "pixi.js";
import {TimelineLite} from "gsap";
import {Sprite} from "pixi.js";
import {TweenLite} from 'gsap';
import {Board} from "./board";

@Component({
  selector: 'app-pixi-with-board',
  templateUrl: './pixi-with-board.component.html',
  styleUrls: ['./pixi-with-board.component.scss']
})
export class PixiWithBoardComponent implements OnInit {

  @ViewChild('container', {read: ElementRef, static: true})
  container: ElementRef;
  pixiApp: PIXI.Application;

  private walkPlayer: PIXI.AnimatedSprite;
  private board:Board;

  idle = ["assets/hero/1_IDLE_000.png", "assets/hero/1_IDLE_001.png", "assets/hero/1_IDLE_002.png", "assets/hero/1_IDLE_003.png", "assets/hero/1_IDLE_004.png"];
  walk = ["assets/hero/2_WALK_000.png", "assets/hero/2_WALK_001.png", "assets/hero/2_WALK_002.png", "assets/hero/2_WALK_003.png", "assets/hero/2_WALK_004.png"];
  tiles = ["assets/tiles/1.png"];

  constructor(private ngZone: NgZone) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.setStage();
    // this.drawStage();
  }

  ngOnDestroy(): void {
    this.pixiApp.destroy();
  }

  loaded() {
    // let idlePlayer = [];
    // for (let idle of this.idle) {
    //   const i = PIXI.BaseTexture.from(this.pixiApp.loader.resources[idle].url);
    //   idlePlayer.push(new PIXI.Texture(i));
    // }

    let walkPlayer = [];
    for (let walk of this.walk) {
      const i = PIXI.BaseTexture.from(this.pixiApp.loader.resources[walk].url);
      walkPlayer.push(new PIXI.Texture(i));
    }
    this.board = new Board(this.pixiApp, 5, 7)
    this.board.constructBoard();

    this.walkPlayer = new PIXI.AnimatedSprite(walkPlayer);
    this.pixiApp.stage.addChild(this.walkPlayer);
    this.walkPlayer.animationSpeed = 0.3;
    this.walkPlayer.setTransform(8,8,0.5, 0.5)

    this.walkPlayer.play();
  }

  // goLeftTextures() {
  //   this.walkPlayer.setTransform(this.walkPlayer.x + 66, this.walkPlayer.y, -1, 0, 0, 0, 0, 0, 0);
  // }
  //
  // goRightTextures() {
  //   this.walkPlayer.setTransform(this.walkPlayer.x - 66, this.walkPlayer.y, 0, 0, 0, 0, 0, 0, 0);
  // }


  private setStage(): void {
    this.ngZone.runOutsideAngular(() => {
      this.pixiApp = new PIXI.Application({width: 800, height: 500});

      this.pixiApp.loader.add(this.idle)
        .add(this.walk)
        .add(this.tiles)
        .load(() => {
          this.loaded()
        });
    });
    this.container.nativeElement.appendChild(this.pixiApp.view);
  }

  moveRight() {
    TweenLite.to(this.walkPlayer, 0.7, {x: this.walkPlayer.x+48, ease: "none"});
  }

  moveDown() {
    TweenLite.to(this.walkPlayer, 0.7, {x: this.walkPlayer.x+(48/2), y: this.walkPlayer.y+(63-22), ease: "none"});
  }

  moveLeft() {
    TweenLite.to(this.walkPlayer, 0.7, {x: this.walkPlayer.x-48, ease: "none"});
  }

  moveUp() {
    TweenLite.to(this.walkPlayer, 0.7, {x: this.walkPlayer.x-(48/2), y: this.walkPlayer.y-(63-22), ease: "none"});
  }
}
