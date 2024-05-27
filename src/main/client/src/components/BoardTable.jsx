import React from 'react';
import './YuriStyle.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faThumbsUp, faEye} from '@fortawesome/free-regular-svg-icons'


const BoardTable = ({ data }) => {

    const navigate = useNavigate();

    const handleTitleClick = (id) => {
        navigate(`/viewpost/${id}`);
    };

    return (
        <table>
            <tbody>
            {data.map((item) => (
                item.textTitle ? ( //item.textTitle이 존재하는 경우
                    <tr key={item.id}>
                        <td className="textHeaderStyle"><div className="textHeaderStyleBox">{item.textHeader}</div></td>
                        <td className="textTitleStyle">
                            <span
                                className="clickTextTitle"
                                onClick={() => handleTitleClick(item.id)}
                                style={{ cursor: 'pointer'}}
                            >
                                {item.textTitle}
                            </span>
                        </td>
                        <td className="textElementStyle">{item.userName}</td>
                        <td className="textElementStyle">{item.timeToWrite}</td>
                        <td className="textElementStyle"><FontAwesomeIcon icon={faEye} style={{ marginRight: '5px' }} />{item.textViewNumber}</td>
                        <td className="textElementStyle"><FontAwesomeIcon icon={faThumbsUp} style={{ marginRight: '5px' }}/>{item.textLikesNumber}</td>
                    </tr>
                ) : ( //item.textTitle이 존재하지 않는 경우
                    <tr key={item.id} className="empty-row">
                        <td colSpan="6">&nbsp;</td> {/*실제 데이터 대신 열 병합 + 빈 줄로 표시 = 레이아웃 유지*/}
                    </tr>
                )
            ))}
            </tbody>
        </table>
    );
};
export default BoardTable;