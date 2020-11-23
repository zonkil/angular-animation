import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import * as PIXI from 'pixi.js';
import {TimelineLite} from 'gsap';

@Component({
  selector: 'app-pixi',
  templateUrl: './pixi.component.html',
  styleUrls: ['./pixi.component.scss']
})
export class PixiComponent implements OnInit {

  @ViewChild('container', {read: ElementRef, static: true})
  container: ElementRef;
  pixiApp: PIXI.Application;
  private idlePlayer: PIXI.AnimatedSprite;
  private walkPlayer: PIXI.AnimatedSprite;

  idle = ["assets/hero/1_IDLE_000.png", "assets/hero/1_IDLE_001.png", "assets/hero/1_IDLE_002.png", "assets/hero/1_IDLE_003.png", "assets/hero/1_IDLE_004.png"];
  walk = ["assets/hero/2_WALK_000.png", "assets/hero/2_WALK_001.png", "assets/hero/2_WALK_002.png", "assets/hero/2_WALK_003.png", "assets/hero/2_WALK_004.png"];

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
    let idlePlayer = [];
    for (let idle of this.idle) {
      const i = PIXI.BaseTexture.from(this.pixiApp.loader.resources[idle].url);
      idlePlayer.push(new PIXI.Texture(i));
    }

    let walkPlayer = [];
    for (let walk of this.walk) {
      const i = PIXI.BaseTexture.from(this.pixiApp.loader.resources[walk].url);
      walkPlayer.push(new PIXI.Texture(i));
    }

    this.idlePlayer = new PIXI.AnimatedSprite(idlePlayer);
    this.pixiApp.stage.addChild(this.idlePlayer);
    this.idlePlayer.animationSpeed = 0.3;

    this.walkPlayer = new PIXI.AnimatedSprite(walkPlayer);
    this.pixiApp.stage.addChild(this.walkPlayer);
    this.walkPlayer.animationSpeed = 0.3;
    this.walkPlayer.y = 100;

    this.idlePlayer.play();
    this.walkPlayer.play();

    let timeline = new TimelineLite({repeat: 5});
    timeline.to(this.walkPlayer, {
      x: 200, ease: "none", duration: 3, onComplete: () => {
        this.goLeftTextures()
      }
    })
      .to(this.walkPlayer, {
        x: 66, ease: "none", duration: 3, onComplete: () => {
          this.goRightTextures()
        }
      });

    // TweenLite.to(this.walkPlayer, 7, {x: 500, ease: "none"});
  }

  goLeftTextures() {
    this.walkPlayer.setTransform(this.walkPlayer.x + 66, this.walkPlayer.y, -1, 0, 0, 0, 0, 0, 0);
  }

  goRightTextures() {
    this.walkPlayer.setTransform(this.walkPlayer.x - 66, this.walkPlayer.y, 0, 0, 0, 0, 0, 0, 0);
  }


  private setStage(): void {
    this.ngZone.runOutsideAngular(() => {
      this.pixiApp = new PIXI.Application({width: 800, height: 500});

      this.pixiApp.loader.add(this.idle.concat(this.walk))
        .load(() => {
          this.loaded()
        });
    });
    this.container.nativeElement.appendChild(this.pixiApp.view);
  }


}
