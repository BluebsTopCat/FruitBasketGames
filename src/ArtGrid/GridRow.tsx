import { Component, ComponentChild, createRef, h, RefObject } from "preact";
import { ArtGrid, ArtGridItemIndexed } from "./ArtGrid";
import { ArtItem } from "./ArtItem";
import { ArtGridItem, ItemType } from "./items";

const ITEM_PADDING = 8;

interface ArtGridRowProps {
    artGridRef: ArtGrid;
    item1: ArtGridItemIndexed;
    item2: ArtGridItemIndexed;
}

interface ArtGridRowState {
    windowInnerWidth: number;
}

export class ArtGridRow extends Component<ArtGridRowProps> {
    state: ArtGridRowState;
    
    thisRootRef: RefObject<HTMLDivElement>;
    
    item1ref: RefObject<ArtItem>;
    item2ref: RefObject<ArtItem>;
    
    constructor() {
        super();
        
        this.thisRootRef = createRef();
        
        this.item1ref = createRef();
        this.item2ref = createRef();
        
        this.state = {
            windowInnerWidth: window.innerWidth
        };
        
        window.addEventListener("resize", this.resize);
    }
    
    resize = () => {
        if (this.item1ref.current && this.item2ref.current) {
            var i1 = this.item1ref.current;
            var i2 = this.item2ref.current;
            
            
            /*
            total width = (rendered height * el1 width/height ratio) + (rendered height * el2 width/height ratio) + ... + padding
            therefore,
            rendered height = (total width - padding) / (el1 width/height ratio + el2 width/height ratio + ...)
            */
            
            var totalWidth = 1;
            
            if (this.thisRootRef.current) {
                totalWidth = this.thisRootRef.current.clientWidth;
            }
            
            if (window.innerWidth > 1184) {
                // desktop version
                
                var denom = (i1.contentWidth / i1.contentHeight) + (i2.contentWidth / i2.contentHeight);
                
                var h = 1;
                
                if (denom > 0) {
                    h = (totalWidth - ITEM_PADDING) / denom;
                }
                
                var w = i1.contentWidth * (h / i1.contentHeight);
                
                i1.setRenderedSize(w, h);
                i2.setRenderedSize(totalWidth - w - ITEM_PADDING, h);
                
            } else {
                // mobile version
                
                var eh1 = i1.contentHeight * (totalWidth / i1.contentWidth);
                
                i1.setRenderedSize(totalWidth, eh1);
                
                var eh2 = i2.contentHeight * (totalWidth / i2.contentWidth);
                
                i2.setRenderedSize(totalWidth, eh2);
            }
        }
        
        if (this.state.windowInnerWidth > 1184 && window.innerWidth <= 1184) {
            this.setState({
                windowInnerWidth: window.innerWidth
            });
        } else if (this.state.windowInnerWidth <= 1184 && window.innerWidth > 1184) {
            this.setState({
                windowInnerWidth: window.innerWidth
            });
        }
    }
    
    render(props: ArtGridRowProps, state: any, context: any): ComponentChild {
        return (
        <div ref={this.thisRootRef} class="art-grid-row">
            <ArtItem artGridRef={props.artGridRef} ref={this.item1ref} item={props.item1} width={0} height={0} resizeCallback={this.resize} />
            <ArtItem artGridRef={props.artGridRef} ref={this.item2ref} item={props.item2} width={0} height={0} resizeCallback={this.resize} marginLeft={window.innerWidth > 1184 ? ITEM_PADDING: 0} />
        </div>
        );
    }
}
