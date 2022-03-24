import { Component, ComponentChild, createRef, h, RefObject } from "preact";
import { ArtGrid } from "./ArtGrid";
import { items, ItemType } from "./items";

const MOUSE_MOTION_TIMEOUT = 4000;
const CHECK_MOUSE_MOTION_INTERVAL = 50;

interface PopupProps {
    artGridRef: ArtGrid;
    visible: boolean;
    index: number;
}

export class Popup extends Component<PopupProps> {
    artGridRef: ArtGrid;
    visible: boolean;
    index: number;
    
    itemRefs: Array<RefObject<HTMLDivElement>>;
    
    lastMouseMotion: number;
    
    constructor(props: PopupProps) {
        super(props);
        
        this.artGridRef = props.artGridRef;
        this.visible = props.visible;
        this.index = props.index;
        
        this.itemRefs = [];
        
        for (var i = 0; i < 4; i++) {
            this.itemRefs.push(createRef());
        }
        
        this.lastMouseMotion = Date.now();
        
        window.addEventListener("mousemove", this.onMouseMotion);
        
        setTimeout(this.checkMouseMotion, CHECK_MOUSE_MOTION_INTERVAL);
    }
    
    onMouseMotion = () => {
        this.lastMouseMotion = Date.now();
    }
    
    checkMouseMotion = () => {
        if (!this.visible) {
            this.lastMouseMotion = Date.now();
        } else {
            if (Date.now() > this.lastMouseMotion + MOUSE_MOTION_TIMEOUT) {
                // if mouse has not been moved for a while
                
                // and we did not already hide
                if (this.itemRefs[0].current && !this.itemRefs[0].current.classList.contains("popup-item-hidden")) {
                    this.itemRefs.map((item) => {
                        if (item.current) {
                            item.current.classList.add("popup-item-hidden");
                        }
                    });
                }
            } else {
                // if mouse has been moved recently
                
                // and we are still hidden
                if (this.itemRefs[0].current && this.itemRefs[0].current.classList.contains("popup-item-hidden")) {
                    this.itemRefs.map((item) => {
                        if (item.current) {
                            item.current.classList.remove("popup-item-hidden");
                        }
                    });
                }
            }
        }
        
        setTimeout(this.checkMouseMotion, CHECK_MOUSE_MOTION_INTERVAL);
    }
    
    onLeftClicked = () => {
        if (this.index > 0) {
            this.artGridRef.showPopup(this.index - 1);
        }
    }
    
    onRightClicked = () => {
        if (this.index < items.length - 1) {
            this.artGridRef.showPopup(this.index + 1);
        }
    }
    
    onXClicked = () => {
        this.artGridRef.hidePopup();
    }
    
    render(props: PopupProps, state: any, context: any): ComponentChild {
        this.artGridRef = props.artGridRef;
        this.visible = props.visible;
        this.index = props.index;
        
        var item = items[props.index];
        
        var iDesc = {
            __html: item.description
        };
        
        return (
        <div class="popup" style={props.visible ? "display: block" : "display: none"}>
            
            { item.type == ItemType.Image ?
            <img class="popup-content" src={item.url} alt={item.title}></img>
            :
            <video key={item.url} class="popup-content" muted={true} autoPlay={true} loop={true}>
                <source src={item.url}></source>
            </video>
            }
            
            <div class="popup-row">
                <div class="popup-column">
                    <div ref={this.itemRefs[0]} class="top-left popup-item">
                        <h2>{item.title}</h2>
                        <p dangerouslySetInnerHTML={iDesc}></p>
                    </div>
                    
                    <div ref={this.itemRefs[1]} class="bottom-left popup-item">
                        <a onClick={this.onLeftClicked}>
                            <img src="res/special/left-button.png" alt="left" width={64} height={64} class={this.index <= 0 ? "disabled" : ""} style="object-fit: contain;"></img>
                        </a>
                    </div>
                </div>
                
                <div class="popup-column">
                    <div ref={this.itemRefs[2]} class="top-right popup-item">
                        <a onClick={this.onXClicked}>
                            <img src="res/special/x-button.png" alt="close" width={64} height={64} style="object-fit: contain;"></img>
                        </a>
                    </div>
                    
                    <div ref={this.itemRefs[3]} class="bottom-right popup-item">
                        <a onClick={this.onRightClicked}>
                            <img src="res/special/right-button.png" alt="right" width={64} height={64} class={this.index >= items.length - 1 ? "disabled" : ""} style="object-fit: contain;"></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
