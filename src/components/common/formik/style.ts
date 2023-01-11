import styled from 'styled-components';
import { Field } from 'formik';
import {
 ContainerStyledProps,
 transformValueToPx,
 getBackgroundByDisabled,
 getTextColorByParams,
 getBorderStyleByParams,
 getLabelColorByParams,
 positionPropsByLabelPosition
} from './view';

export const StyledContainer = styled.div<ContainerStyledProps>`
    margin-bottom: ${(props: ContainerStyledProps) => (props?.mb ? transformValueToPx(props.mb) : '0')};
`;

export const StyledContent = styled.div<ContainerStyledProps>`
    --border: ${(props: ContainerStyledProps) => getBorderStyleByParams(props.error, props.focused, props.disabled, props.filled)};
    --border-radius: 8px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4px 0px !important;
    background: ${getBackgroundByDisabled} !important;
    border-radius: var(--border-radius);
    border: var(--border) !important;
`;

export const StyledInput = styled(Field)`
    font-size: 16px;
    font-weight: 500;
    height: 47px;
    width: 100%;
    margin: 0px !important;
    transition: none !important;
    background: ${getBackgroundByDisabled} !important;
    border: none !important;
    padding: 15px 0px !important;
    border-radius: var(--border-radius);
    font-family: 'Inter','Montserrat', sans-serif !important; 
    color: ${(props: ContainerStyledProps) => getTextColorByParams(props.error, props.focused, props.disabled, props.filled)};

    :focus {
        box-shadow: 0 0 0 0 !important;
        border: 0 none !important;
        outline: 0 !important;
    }

    ::placeholder{
        color: #d4d4d4;
    } 
`;

export const StyledIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 4px;
`;

export const StyledError = styled.div`
    color: #ee5253;
    font-size: 12px;
    font-weight: 700;
    padding: 4px;
    animation: showError 0.2s ease-in forwards;

    @keyframes showError {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

export const StyledWrapper = styled.div``;

export const StyledLabelContent = styled.div`
    display: flex;
    flex-direction: ${(props: ContainerStyledProps) => positionPropsByLabelPosition[props?.labelPosition || 'TOP'] || 'column'};
    justify-content: flex-end;
`;

export const StyledLabel = styled.label<ContainerStyledProps>`
    font-family: 'Inter','Montserrat', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;
    color: ${(props: ContainerStyledProps) => getLabelColorByParams(props.error, props.focused, props.disabled, props.filled)};
    display: flex;
    align-items: center;
`;
