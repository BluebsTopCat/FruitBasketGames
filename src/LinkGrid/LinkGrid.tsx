import { Component, ComponentChild, h } from "preact";

export interface LinkGridItem {
    imageURL: string,
    imageAlt: string,
    link: string
}

interface LinkGridProps {
    items: Array<LinkGridItem>
}

export class LinkGrid extends Component<LinkGridProps> {
    render(props: LinkGridProps, state: any, context: any): ComponentChild {
        return (
        <div class="link-grid">
            { props.items.map((item) => (
                <div class="link-grid-item">
                    
                    <div class="link-grid-img-container">
                        <img class="link-grid-img" src={item.imageURL} alt={item.imageAlt}></img>
                        <a class="link-grid-item-cover" href={item.link}></a>
                    </div>
                    
                </div>
            )) }
        </div>
        );
    }
}
