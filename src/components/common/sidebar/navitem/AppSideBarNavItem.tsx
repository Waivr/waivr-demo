import { ReactElement } from 'react';
import {
    Container, Text, Icon
} from './style';

type Props = {
    text: string;
    testId: string;
    icon?: ReactElement;
}
const AppSideBarNavItem: React.FC<Props> = ({ icon, text, testId }: Props) => (

    <Container data-testid={testId}>
        { icon && <Icon> { icon } </Icon> }
        <Text haveIcon={icon} title={text}> {text} </Text>
    </Container>
);

export default AppSideBarNavItem;
