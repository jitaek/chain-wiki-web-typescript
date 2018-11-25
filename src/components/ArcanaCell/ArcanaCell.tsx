import React from 'react'
import logo from '../../logo.png'
import Link from '../Link/Link';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';
import FlexContainer from '../FlexContainer';
import { lightGrayColor, lightGrayTextColor } from '../../util/theme';

interface Props {
    arcana: any;
}

const ArcanaCard = styled.div`
    height: 90px;
    display: flex;
    align-items: center;  
    &:hover {
        background-color: ${lightGrayColor};
    }
`;

const ArcanaIcon = styled.img`
    margin: 10px;
    height: 66px;
    width: 66px;
    float: left;
`;

const NameKRLabel = styled.div`
    font-size: 1rem;
    font-weight: bold;
    margin: 0px 5px 0px 0px;
    white-space: nowrap;
    overflow: hidden;
`;

const NicknameKRLabel = styled.div`
    font-size: 0.8rem;
    margin: 0px 10px 0px 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;
`;

const NameJPLabel = styled.div`
    font-size: 0.8rem;
    margin: 0px 10px 0px 0px;
    color: silver;
`;

const DetailLabel = styled.div`
    font-size: 0.7rem;
    padding-right: 10px;
    color: ${lightGrayTextColor};
`;

const ArcanaCell = (props: Props) => {

    const { arcana } = props;

    const { arcanaID, nameKR, nicknameKR, nameJP, nicknameJP,
            imageURL, iconURL, rarity, weapon, affiliation, numberOfViews } = arcana;

    return (
        <Link to={`/arcana?arcana=${arcanaID}`}>
        <ArcanaCard>
            <LazyLoad height={66} debounce={300} once={true}>
                <ArcanaIcon
                    src={iconURL || logo}
                    alt={nameKR}
                    // onLoad={() => this.setState({ loaded: true })}
                />
            </LazyLoad>

            <div>
                <FlexContainer>
                    <NameKRLabel>{nameKR}</NameKRLabel>
                    <NicknameKRLabel>{nicknameKR}</NicknameKRLabel>
                    </FlexContainer>
                <FlexContainer>
                    <NameJPLabel>{nameJP}</NameJPLabel>
                    <NameJPLabel>{nicknameJP}</NameJPLabel>
                </FlexContainer>
                <FlexContainer>
                    <DetailLabel>#{rarity}성</DetailLabel>
                    <DetailLabel>#{arcana.class}</DetailLabel>
                    <DetailLabel>#{weapon}</DetailLabel>
                    <DetailLabel>#{affiliation}</DetailLabel>
                    <DetailLabel>조회 {numberOfViews}</DetailLabel>
                </FlexContainer>
            </div>
        </ArcanaCard>
    </Link>
    );
}


export default ArcanaCell;