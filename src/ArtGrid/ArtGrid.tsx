import { Component, ComponentChild, h } from "preact";
import { ArtGridRow } from "./GridRow";
import { ArtGridItem, items, ItemType } from "./items";
import { Popup } from "./Popup";

export interface ArtGridItemIndexed {
    index: number;
    type: ItemType;
    title: string;
    description: string;
    link?: string;
    url: string;
}

interface ArtGridState {
    popupVisible: boolean;
    popupIndex: number;
}

export class ArtGrid extends Component {
    state: ArtGridState;
    
    constructor() {
        super();
        
        this.state = {
            popupVisible: false,
            popupIndex: 0
        };
    }
    
    showPopup = (itemIndex: number) => {
        this.setState({
            popupVisible: true,
            popupIndex: itemIndex
        });
    }
    
    hidePopup = () => {
        this.setState({
            popupVisible: false
        });
    }
    
    render(props: any, state: any, context: any): ComponentChild {
        var pairs: Array<Array<ArtGridItemIndexed>> = [];
        
        for (var i = 0; i < items.length; i += 2) {
            let one = items[i] as any;
            one.index = i;
            
            let two = items[i + 1] as any;
            two.index = i + 1;
            
            pairs.push([one, two]);
        }
        
        if (this.state.popupVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
        
        return (
        <span>
            <Popup artGridRef={this} visible={this.state.popupVisible} index={this.state.popupIndex} />
            
            <div class="art-grid">
                { pairs.map((pair) => (
                    <ArtGridRow artGridRef={this} item1={pair[0]} item2={pair[1]} />
                )) }
            </div>
        </span>
        );
    }
}
