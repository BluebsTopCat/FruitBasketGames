import { Component, ComponentChild, createRef, h, RefObject } from "preact";
import { ArtGrid, ArtGridItemIndexed } from "./ArtGrid";
import { ArtGridItem, ItemType } from "./items";

const CHECK_LOADED_TIMEOUT = 125;

interface ArtItemProps {
    artGridRef: ArtGrid;
    item: ArtGridItemIndexed;
    width: number;
    height: number;
    resizeCallback: Function;
    marginLeft?: number;
}

export class ArtItem extends Component<ArtItemProps> {
    name: string;
    
    resizeCallback: Function;
    
    contentWidth: number;
    contentHeight: number;
    
    imageRef: RefObject<HTMLImageElement>;
    videoRef: RefObject<HTMLVideoElement>;
    
    constructor(props: ArtItemProps) {
        super(props);
        
        this.name = props.item.title;
        
        this.resizeCallback = props.resizeCallback;
        
        this.contentWidth = 0;
        this.contentHeight = 0;
        
        this.imageRef = createRef();
        this.videoRef = createRef();
    }
    
    // callback is sketchy and doesnt work much of the time
    checkLoaded = () => {
        if (this.imageRef.current) {
            if (this.imageRef.current.naturalWidth) {
                this.onLoad();
            } else {
                setTimeout(this.checkLoaded, CHECK_LOADED_TIMEOUT);
            }
        } else if (this.videoRef.current) {
            if (this.videoRef.current.width) {
                this.onLoad();
            } else {
                setTimeout(this.checkLoaded, CHECK_LOADED_TIMEOUT);
            }
        }
    }
    
    onLoad = () => {
        if (this.imageRef.current) {
            this.contentWidth = this.imageRef.current.naturalWidth;
            this.contentHeight = this.imageRef.current.naturalHeight;
        } else if (this.videoRef.current) {
            this.contentWidth = this.videoRef.current.videoWidth;
            this.contentHeight = this.videoRef.current.videoHeight;
        }
        
        this.resizeCallback();
    }
    
    componentDidMount() {
        if (this.imageRef.current) {
            this.imageRef.current.addEventListener("onload", () => {
                this.onLoad();
            });
            
            if (this.imageRef.current.naturalWidth) {
                this.contentWidth = this.imageRef.current.naturalWidth;
                this.contentHeight = this.imageRef.current.naturalHeight;
            }
        } else if (this.videoRef.current) {
            this.videoRef.current.addEventListener("loadedmetadata", () => {
                this.onLoad();
            });
            
            if (this.videoRef.current.width) {
                this.contentWidth = this.videoRef.current.videoWidth;
                this.contentHeight = this.videoRef.current.videoHeight;
            }
        }
        
        // callback is sketchy and doesnt work much of the time
        setTimeout(this.checkLoaded, CHECK_LOADED_TIMEOUT);
    }
    
    setRenderedSize = (w: number, h: number) => {
        if (this.imageRef.current) {
            this.imageRef.current.width = w;
            this.imageRef.current.height = h;
        } else if (this.videoRef.current) {
            this.videoRef.current.width = w;
            this.videoRef.current.height = h;
        }
    }
    
    render(props: ArtItemProps, state: any, context: any): ComponentChild {
        return (
        <div class="art-item" style={props.marginLeft ? `left: ${props.marginLeft}px` : ""}>
            <div class="art-item-cover" onClick={() => { props.artGridRef.showPopup(props.item.index); }}>
                <p>{props.item.title}</p>
            </div>
            
            { props.item.type == ItemType.Image ?
            <img ref={this.imageRef} src={props.item.url} alt={props.item.title} width={props.width} height={props.height}></img>
            :
            <video ref={this.videoRef} muted={true} autoPlay={true} loop={true} width={props.width} height={props.height}>
                <source src={props.item.url}></source>
            </video>
            }
        </div>
        );
    }
}
