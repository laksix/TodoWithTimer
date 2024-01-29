import React,{Component} from "react";
import FooterItem from '../Footer-list-item/Footer-list-item-selected'
import './footer-list.css'

const elements = [{
    name: 'All',
    id: 0,
    selected: true,
    onClick: ()=> {}
},
{
    name: 'Completed',
    id: 1,
    selected:false,
    onClick: ()=> {}

},
{
    name:'Active',
    id: 2,
    selected:false,
    onClick: ()=> {}
}
]
export default class FooterList extends Component  {
    render() {
      return (<ul className="filters">
     {elements.map(e => {
        return <FooterItem name={e.name} key={e.id} status={e.selected} click = {e.onClick}/>
     })}
    </ul>)
}
}

