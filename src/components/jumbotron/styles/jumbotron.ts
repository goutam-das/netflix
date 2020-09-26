import styled from 'styled-components/macro';

interface InnerProps {
    direction: string;
}

export const Inner = styled.div<InnerProps>`
    display: flex;
    align-items: center;
    flex-direction: ${({ direction }) => direction};
    justify-content: space-betwween;
    max-width: 1100px;
    margin: auto;
    width: 100%;
`;

export const Container = styled.div`

`;

export const Pane = styled.div`

`;

export const Title = styled.div`

`;

export const SubTitle = styled.div`

`;

export const Image = styled.img`

`;