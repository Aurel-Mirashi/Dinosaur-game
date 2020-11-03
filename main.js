window.addEventListener( 'load' , () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
     
    canvas.width = 800;
    canvas.height = 500;

    //How to play
    ctx.font = '12px Arial';
    ctx.fillText('Press a random button to initiate movement then keep moving the dino with arrow up' , 30 , 30);

    //Score system
    ctx.font = '14px Arial';
    ctx.fillText('Score:' , 700 , 30);
    let score = 0;
    ctx.fillText(score , 750 , 30);

    //Dinosaur
    let dx = 40;
    let dy = 460;
    let dsize = 40;
    ctx.fillStyle = '#333';
    ctx.fillRect(dx , dy , dsize , dsize);

    //Cacti
    let x = 760;
    let y = 460;
    let size = 40;
     ctx.fillStyle = 'lime';
     ctx.fillRect(x , y , size , size);

     //Move cacti

     setInterval(() => {moveCacti()} , 100);

     function moveCacti(){
         ctx.clearRect(x , y ,size ,size);
         if( x < 0){
             x = 760;
         }
         else{
             x -= size;
         }
         ctx.fillStyle = 'lime';
         ctx.fillRect( x , y , size , size);

         ctx.fillStyle = '#333';
         ctx.fillRect(dx , dy , dsize , dsize);

          decideLoser();

          incrementScore();        
     }

     // Move Dino
      
     window.addEventListener('keyup' , () => {
         setTimeout(() => {returnDino()} , 220);
         window.addEventListener('keydown' , () => {
             moveDino();
         })
     })
      function moveDino(){
         ctx.clearRect(dx , dy ,dsize ,dsize);
         dy = 410;
         ctx.fillStyle = '#333';
         ctx.fillRect(dx , dy , dsize , dsize);
      }
      function returnDino(){
         ctx.clearRect(dx , dy ,dsize ,dsize);
         dy = 460;
         ctx.fillStyle = '#333';
         ctx.fillRect(dx , dy , dsize , dsize);
      }
    
     // Decide loser
     function decideLoser(){
       if(dy === y && dx === x){
           document.location.reload(true);
           alert('You lose! Press OK to try again!');
       }
     }
     
     //Incerement Score
     function incrementScore(){
         if(dy !== y && dx === x){
            ctx.clearRect(740 , 10 , 40 ,100);
             score+=10;
             ctx.fillText(score , 750 ,30);
         }
     }   
});
