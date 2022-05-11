//Объявление функций
const playSound = (keyCode) =>{
    if (keyCode >= 0 && keyCode <= soundList.length-1){
      new Audio(soundList[keyCode]).play();
    }
  }
  
  const changeSquareColor = (keyCode) =>{
    if (keyCode >= 0 && keyCode <= soundList.length-1){
      const square = squareList[keyCode];
      const color = colorList[keyCode];
      square.style.backgroundColor = color;
      square.style.boxShadow = `0 0 2px white, 0 0 10px ${color}`;
  
      setTimeout(() => {
        square.style.backgroundColor = '#1d1d1d';
        square.style.boxShadow = 'none';
      }, 300);
    }
  }
  
  /*const getSounds = (path) =>{
    let files = fs.readdirSync(path);
    files = files.filter(item => item.slice(item.length-3) === "mp3");
    files = files.map(item => item = path + '/' + item);
    return files;
  }*/
  //Конец объявления функций
  
  /*const soundList = getSounds('/sound');
  console.log(soundList);*/
  
  const soundList = ['/sound/bass.mp3','/sound/hat.mp3','/sound/keg.mp3','/sound/longHat.mp3','/sound/shoot.mp3'];
  const colorList = [];
  const board = document.querySelector('#board');
  
  for (let i = 0; i < soundList.length; i++){
    const square = document.createElement('div');
    square.classList.add('square');
  
    colorList[colorList.length] = '#' + Math.floor(Math.random()*16777215).toString(16);
  
    board.append(square);
  }
  
  const squareList = document.querySelectorAll('.square');
  
  document.addEventListener('keydown', () =>{
    playSound(event.keyCode - 97);
    changeSquareColor(event.keyCode - 97);
  })