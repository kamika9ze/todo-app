import React from 'react';
import Axios from 'axios';
import classNames from 'classnames';
import removeSvg from '../../assets/img/remove.svg';
import Badge from '../Badge/';
import './List.scss';
import '../Badge/Badge.scss';


const List = ({items, isRemovable, onClick, onRemove, onClickItem, activeItem }) => {
    const removeList = item => {
        if (window.confirm('Вы действительно хотите удалить список?')) {
            Axios.delete('http://192.168.8.100:3001/lists/' + item.id).then(() => {
                onRemove(item.id);
            });
        }
    }
    return (
        <ul onClick={onClick} className="list">
            {items.map((item, index) => (
                    <li key={index} className={classNames(item.className, {active: activeItem && activeItem.id === item.id})}
                    onClick={() => onClickItem(item)}
                    >
                        <i>
                            {item.icon ? (
                                item.icon
                            ) : (
                                <Badge color={item.color.name} />
                            )}
                        </i>
                            <span>{item.name}{item.tasks  && `(${item.tasks.length})`}</span>
                        {isRemovable && (
                            <img
                            onClick={() => removeList(item)}
                            className="list__remove-icon"
                            src={removeSvg}
                            alt="Remove icon"
                            />
                        )}
                    </li>
                ) )
            }
        </ul>
    )
}

export default List;