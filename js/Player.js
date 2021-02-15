class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank=null;
    this.distanceX=0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  getPlayersAtEnd(){
   database.ref('carsAtEnd').on("value",(data)=>{
     this.rank = data.val();
   })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  static updateCarsAtEnd(rank){
    database.ref('/').update({
      carsAtEnd: rank
    })
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      distanceX:this.distanceX
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  spawnObstacles(){
    if(frameCount%70===0){
      var obstacle1 = createSprite(0,-displayHeight*4,20,20)
      obstacle1.x=Math.round(random(175, 1200))
      obstacle1.velocityY = 10;
      obstacle1.lifetime = 1200;
      obstacleGroup.add(obstacle1)
    }
  }
}
