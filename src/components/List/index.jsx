import React from 'react';
import classNames from 'classnames';
import removeSvg from '../../assets/img/remove.svg';
import Badge from '../Badge/';
import './List.scss';
import '../Badge/Badge.scss';


const List = ({items, isRemovable, onClick, onRemove }) => {
    const removeList = (index) => {
        if (window.confirm('Вы действительно хотите удалить список?')) {
            onRemove(index);
        }
    }
    return (
        <ul onClick={onClick} className="list">
            {items.map((item, index) => (
                    <li key={index} className={classNames(item.className, {'active' : item.active})}>
                        <i>
                            {item.icon ? (
                                item.icon
                            ) : (
                                <Badge color={item.color} />
                            )}
                        </i>
                        <span>{item.name}</span>
                        {isRemovable && (
                            <img
                            onClick={() => removeList(index)}
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