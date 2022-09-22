class Controls{
    constructor(){
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;
    
        this.addKeyboardListeners();
    }
    addKeyboardListeners() {
        document.onkeydown = (event) => {
          switch (event.key) {
            case "ArrowLeft":
              this.left = true;
              break;
            case "ArrowRight":
              this.right = true;
              break;
            case "ArrowUp":
              this.forward = true;
              break;
            case "ArrowDown":
              this.reverse = true;
              break;
              case "w":
                this.forward = true;
                
                break;
            case "d":
                this.right = true;
                
                break;
            case "s":
                this.reverse = true;
                break;
            case "a":
                this.left = true;
                break;

            case "ц":
                this.forward = true;
                break;
            case "в":
                this.right = true;
                break;
            case "ы":
                this.reverse = true;
                break;
            case "ф":
                this.left = true;
                break;
           }
        };

    
        document.onkeyup = (event) => {
          switch (event.key) {
            case "ArrowLeft":
              this.left = false;
              
              break;
            case "ArrowRight":
              this.right = false;
              break;
            case "ArrowUp":
              this.forward = false;
              break;
            case "ArrowDown":
              this.reverse = false;
              break;
              case "w":
                this.forward = false;console.log(event.key)
                break;
            case "d":
                this.right = false;
                break;
            case "s":
                this.reverse = false;
                break;
            case "a":
                this.left = false;
                break;
                
            case "ц":
                this.forward = false;
                break;
            case "в":
                this.right = false;
                break;
            case "ы":
                this.reverse = false;
                break;
            case "ф":
                this.left = false;
                break;
           }
    };

      }
    }