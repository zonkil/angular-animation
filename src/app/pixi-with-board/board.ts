import * as PIXI from "pixi.js";

export class Board {
  private _tiles: PIXI.Container;


  constructor(private pixiApp: PIXI.Application, private rows: number, private columns: number) {
    this._tiles = new PIXI.Container();
  }

  public constructBoard() {
    const tileTexture = new PIXI.Texture(PIXI.BaseTexture.from(this.pixiApp.loader.resources["assets/tiles/1.png"].url));

    const dy = 22

    for(let j=0; j< this.columns; j++){
      for(let i=0; i<this.rows; i++){
        const tile = new PIXI.Sprite(tileTexture);
        const x = tileTexture.width * i + (tileTexture.width / 2) * (j % 2)
        const y = (tileTexture.height - dy) * (j)
        tile.setTransform(x , y)

        this._tiles.addChild(tile)
      }
    }

    // const r11 = new PIXI.Sprite(tileTexture)
    // const r12 = new PIXI.Sprite(tileTexture)
    // r12.setTransform(tileTexture.width);
    // const r13 = new PIXI.Sprite(tileTexture)
    // r13.setTransform(tileTexture.width * 2);
    // const r14 = new PIXI.Sprite(tileTexture)
    // r14.setTransform(tileTexture.width * 3);
    //
    // const r21 = new PIXI.Sprite(tileTexture)
    // r21.setTransform(tileTexture.width / 2, tileTexture.height - dy)
    // const r22 = new PIXI.Sprite(tileTexture)
    // r22.setTransform(tileTexture.width + tileTexture.width / 2, tileTexture.height - dy);
    // const r23 = new PIXI.Sprite(tileTexture)
    // r23.setTransform(tileTexture.width * 2 + tileTexture.width / 2, tileTexture.height - dy);
    // const r24 = new PIXI.Sprite(tileTexture)
    // r24.setTransform(tileTexture.width * 3 + tileTexture.width / 2, tileTexture.height - dy);
    //
    // const r31 = new PIXI.Sprite(tileTexture)
    // r31.setTransform(0, (tileTexture.height - dy)*2 )
    // const r32 = new PIXI.Sprite(tileTexture)
    // r32.setTransform(tileTexture.width * 1, (tileTexture.height - dy)*2);
    // const r33 = new PIXI.Sprite(tileTexture)
    // r33.setTransform(tileTexture.width * 2, (tileTexture.height - dy)*2);
    // const r34 = new PIXI.Sprite(tileTexture)
    // r34.setTransform(tileTexture.width * 3, (tileTexture.height - dy)*2);
    //
    // this._tiles.addChild(r11, r12, r13, r14, r21, r22, r23, r24, r31, r32, r33, r34)

    this.pixiApp.stage.addChild(this._tiles);
  }
}
