import '../styles/liquidBackground.css';

class Circle {
    element: HTMLElement;
    size: number;
    position: number[];
    x: number;
    y: number;
    velocity_x: number;
    velocity_y: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.size = element.getBoundingClientRect().width;
        this.position = generateRandomPosition(this.size);
        this.x = this.position[0];
        this.y = this.position[1];
        this.velocity_x = randomSpeed() * randomDirection();
        this.velocity_y = randomSpeed() * randomDirection();
    }

    updatePosition() {
        this.x += this.velocity_x;
        this.y += this.velocity_y;

        if (this.x >= window.innerWidth - this.size) {
            this.velocity_x *= -1;
            this.x = window.innerWidth - this.size;
        }

        if (this.x <= 0) {
            this.velocity_x *= -1;
            this.x = 0;
        }

        if (this.y >= window.innerHeight - this.size) {
            this.velocity_y *= -1;
            this.y = window.innerHeight - this.size;
        }

        if (this.y <= 0) {
            this.velocity_y *= -1;
            this.y = 0;
        }
    }

    moveCircle() {
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}

const generateRandomPosition = (size: number) => {
    let randX = Math.random() * window.innerWidth - size;
    let randY = Math.random() * window.innerHeight - size;
    return [randX, randY];
}

const randomSpeed = () => {
    return (Math.random() + 3);
}

const randomDirection = () => {
    return (Math.random() > 0.5 ? 1 : -1);
}

const initCircles = () => {
    const circles: NodeListOf<HTMLElement> = document.querySelectorAll('.circle');
    console.log(circles);
    const circlesArray: Circle[] = Array.from(circles).map(circle => {
        return new Circle(circle);
    });

    const update = () => {
        circlesArray.forEach(circle => {
            circle.updatePosition();
            circle.moveCircle();
        })
        requestAnimationFrame(update);
    }
    
    requestAnimationFrame(update)
}

initCircles();

const LiquidBackground: React.FC = () => {
    return (
        <>
            <div className="backgroundContainer">
                <div className="blurEffect">
                    <div className="circle purple"></div>
                    <div className="circle pink"></div>
                    <div className="circle blue"></div>
                    <div className="circle blue"></div>
                    <div className="circle pink"></div>
                    <div className="circle purple"></div>
                    <div className="circle white"></div>
                </div>
            </div>
        </>
    )
}

export default LiquidBackground;