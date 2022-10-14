import styled from "styled-components";
import Flex from "./Flex";
import {useState} from "react";
import Line from "./Line";

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background: black;
  font-size: 24px;
  border: none;
  resize: none;
  /* color: ${({color}) => color || 'white'};*/
  color: ${props => props.color || props.theme.colors.primary};
  &:focus {
    outline: none;
  }

  @media ${props => props.theme.media.tablet} {
    border: 1px solid green;
  }
  
  @media ${props => props.theme.media.phone} {
    border: 1px solid red;
  }
`


const Console = ({color, ...props}) => {
    const [lines, setLines] = useState(['C/users/CONSOLE>'])

    console.log(lines)

    const onKeypress = (e) => {
        if(e.charCode == 13) {
            setLines([...lines, 'C/users/CONSOLE>'])
        }
    }

    // return (<StyledConsole {...props} />)
    return (
        <Flex>
            <Flex direction={'column'} margin={'0 10px'}>
                {
                    lines.map(line =>
                        <Line key={`${line} ${Math.random(10000)}`} color={color}>{line}</Line>
                    )
                }
            </Flex>
            <StyledConsole onKeyPress={onKeypress} color={color} {...props}/>
        </Flex>
    )
}

export default Console;
