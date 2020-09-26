import React, { FC, ReactNode } from 'react';
import { Inner, Container, Pane, Title, SubTitle, Image } from './styles/jumbotron';

interface ContainerProps {
    children: ReactNode;
}

interface PaneProps {
    children: ReactNode;
}

interface TitleProps {
    children: ReactNode;
}

interface SubTitleProps {
    children: ReactNode;
}

interface ImageProps {
    src: string;
    alt: string;
}

interface Props {
    children: ReactNode;
    directtion?: string;
}

interface TCompound {
    Container: FC<ContainerProps>;
    Pane: FC<PaneProps>;
    Title: FC<TitleProps>;
    SubTitle: FC<SubTitleProps>;
    Image: FC<ImageProps>;
}

const Jumbotron: FC<Props> & TCompound = ({ children, directtion = "row" }) => {
    return (
        <Inner direction={directtion}>{children}</Inner>
    )
}

Jumbotron.Container = ({ children }) => <Container>{children}</Container>

Jumbotron.Pane = ({ children }) => <Pane>{children}</Pane>

Jumbotron.Title = ({ children }) => <Title>{children}</Title>

Jumbotron.SubTitle = ({ children }) => <SubTitle>{children}</SubTitle>

Jumbotron.Image = ({ src, alt }) => <Image src={src} alt={alt} />

export default Jumbotron;