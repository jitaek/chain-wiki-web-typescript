import React from 'react'
import Link from '../Link/Link';
import styled from '../../util/styled-components';
import LazyLoad from 'react-lazyload';
import { keyframes } from 'styled-components';

const fadein = keyframes`
    from {
        opacity: 0.01;
    }
    to {
        opacity: 0.99;
    }
`;
const PlaceholderContainer = styled.div`

    /* opacity: 0.01; */
    padding-top: 150%;
    position: relative;
`;

const CardContainer = styled.div`

    padding-top: 150%;
    position: relative;

    
    /* opacity: 0.99; */
    transition: opacity 0.4s ease-out;
    -ms-transition: opacity 0.4s ease-out;
    -moz-transition: opacity 0.4s ease-out;
    -webkit-transition: opacity 0.4s ease-out;

    border: 1px hidden;
    border-radius: 3px;
    box-shadow: 1px 1px #888888;
    overflow:hidden;  

`;

const Image = styled.img`

    -webkit-transition: -webkit-transform 0.2s;
    -moz-transition: -moz-transform 0.2s;
    transition: transform 0.2s;

    width: 100%;
    height: 300px;
    display: block;
    position: absolute;
    top: 0; bottom: 0; left: 0; right: 0;

    @supports(object-fit: cover) {
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }

`;

const StyledLink = styled(Link)`
    &:hover ${Image} {
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        
        -webkit-transition: -webkit-transform 0.2s;
        -moz-transition: -moz-transform 0.2s;
        transition: transform 0.2s;
        
    }
`;

const Container: React.SFC<State> = ({loaded, children}) => ( loaded ?
    <CardContainer>
        {children}
    </CardContainer>
    :
    <PlaceholderContainer>
        {children}
    </PlaceholderContainer>
);

interface Props {
    arcana: any;
}
interface State {
    loaded: boolean
}

class ArcanaCard extends React.Component<Props> {

    state = {
        loaded: false
    };

    render() {
        const { arcana } = this.props;

        const { uid, imageURL } = arcana;

        return (
            <StyledLink to={`/arcana?arcana=${uid}`}>
                <LazyLoad height={325} debounce={100} once={true}>
                    <Container loaded={this.state.loaded}>
                        <Image
                            src={imageURL}
                            onLoad={() => this.setState({loaded: true})}
                        />
                    </Container>
                </LazyLoad>
            </StyledLink>
        );
    }
}
// const ArcanaCard = (props: Props) => {

//     const { arcana } = props;

//     const { uid, nameKR, nicknameKR, nameJP, nicknameJP,
//             imageURL, iconURL, rarity, weapon, affiliation, numberOfViews } = arcana;

//     return (
//         <Link to={`/arcana?arcana=${uid}`}>
//             <CardContainer>
//                 <LazyLoad height={325} debounce={100} once={true}>
//                     <Card src={imageURL}/>
//                 </LazyLoad>
//             </CardContainer>
//         </Link>
//     );
// }


export default ArcanaCard;