import React from 'react';
import './YuriStyle.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faThumbsUp, faEye} from '@fortawesome/free-regular-svg-icons'

const BoardTable = ({ data }) => {
    return (
        <table>
            <tbody>
            {data.map((item) => (
                <tr key={item.id}>
                    <td className="textHeaderStyle"><div className="textHeaderStyleBox">{item.textHeader}</div></td>
                    <td className="textTitleStyle">{item.textTitle}</td>
                    <td className="textElementStyle">{item.userName}</td>
                    <td className="textElementStyle">{item.timeToWrite}</td>
                    <td className="textElementStyle"><FontAwesomeIcon icon={faEye} style={{ marginRight: '5px' }} />{item.textViewNumber}</td>
                    <td className="textElementStyle"><FontAwesomeIcon icon={faThumbsUp} style={{ marginRight: '5px' }}/>{item.textLikesNumber}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default BoardTable;