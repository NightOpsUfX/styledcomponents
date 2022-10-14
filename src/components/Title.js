import styled from "styled-components";

const StyledTitle = styled.h1`
  //color: #ffffff;
  //color: ${props => props.color};
  color: ${props => props.color || props.theme.colors.primary};
`

const Title = (
    // {children, color}
    props
) => {
    return (
        // <StyledTitle color={color}>
        //     {children}
        // </StyledTitle>
        <StyledTitle {...props} />
    )
}

export default Title;
