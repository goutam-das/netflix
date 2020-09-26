import React, { FC, ReactNode } from 'react';
import { Container, Row, Column, Link, Title, Text, Break } from './styles/footer';

interface RowProps {
    children: ReactNode;
}

interface ColumnProps {
    children: ReactNode;
}

interface LinkProps {
    children: ReactNode;
    href: string;
}

interface TitleProps {
    children: ReactNode;
}

interface TextProps {
    children: ReactNode;
}

interface Props {
    children: ReactNode;
    directtion?: string;
}

interface TCompound {
    Row: FC<RowProps>;
    Column: FC<ColumnProps>;
    Link: FC<LinkProps>;
    Title: FC<TitleProps>;
    Text: FC<TextProps>;
    Break: FC;
}

const Footer: FC<Props> & TCompound = ({ children }) => {
    return (
        <Container>{children}</Container>
    )
}

Footer.Row = ({ children }) => <Row>{children}</Row>

Footer.Column = ({ children }) => <Column>{children}</Column>

Footer.Link = ({ children, href }) => <Link href={href}>{children}</Link>

Footer.Title = ({ children }) => <Title>{children}</Title>

Footer.Text = ({ children }) => <Text>{children}</Text>

Footer.Break = () => <Break />

export default Footer;